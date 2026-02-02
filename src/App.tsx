import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing'
import QuizCard from './components/QuizCard'
import ResultsLoading from './components/ResultsLoading'
import Results from './components/Results'
import Reveal from './components/Reveal'
import type { Question, QuizOption } from './questions'
import { questions } from './questions'

type Step = 'landing' | 'quiz' | 'loading' | 'results' | 'reveal'

type AnswersMap = Record<string, QuizOption | null>

const deriveTopTraits = (answers: AnswersMap): string[] => {
  const counts = new Map<string, number>()
  Object.values(answers).forEach(option => {
    if (!option) {
      return
    }
    const tag = option.traitTag
    const current = counts.get(tag) ?? 0
    counts.set(tag, current + 1)
  })
  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1])
  const topTags = sorted.slice(0, 3).map(([tag]) => tag)
  if (topTags.length === 0) {
    return ['Adventurous', 'Warm', 'Magnetic']
  }
  if (topTags.length === 1) {
    return [topTags[0], 'Warm', 'Magnetic']
  }
  if (topTags.length === 2) {
    return [...topTags, 'Magnetic']
  }
  return topTags
}

const App = () => {
  const [step, setStep] = useState<Step>('landing')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswersMap>({})
  const [topTraits, setTopTraits] = useState<string[]>([])

  const currentQuestion: Question | undefined = useMemo(
    () => questions[currentIndex],
    [currentIndex]
  )

  useEffect(() => {
    if (step === 'loading') {
      const timeout = setTimeout(() => {
        const traits = deriveTopTraits(answers)
        setTopTraits(traits)
        setStep('results')
      }, 8000)
      return () => clearTimeout(timeout)
    }
    return
  }, [step, answers])

  const handleStart = () => {
    setStep('quiz')
    setCurrentIndex(0)
  }

  const handleSelect = (option: QuizOption) => {
    if (!currentQuestion) {
      return
    }
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }))
    const isLast = currentIndex === questions.length - 1
    if (isLast) {
      setStep('loading')
    } else {
      setCurrentIndex(index => index + 1)
    }
  }

  const handleBack = () => {
    if (step === 'quiz' && currentIndex === 0) {
      setStep('landing')
      return
    }
    if (step === 'quiz' && currentIndex > 0) {
      setCurrentIndex(index => Math.max(index - 1, 0))
    }
  }

  const handleSkip = () => {
    const isLast = currentIndex === questions.length - 1
    if (isLast) {
      setStep('loading')
    } else {
      setCurrentIndex(index => index + 1)
    }
  }

  const handleReveal = () => {
    setStep('reveal')
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 }
  }

  const outerBackgroundClass =
    step === 'reveal'
      ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-rose-950/50'
      : 'bg-slate-950'

  const selectedForCurrent =
    currentQuestion && answers[currentQuestion.id] ? answers[currentQuestion.id] ?? undefined : undefined

  return (
    <div className={`min-h-screen w-full ${outerBackgroundClass} text-slate-50 transition-colors duration-700`}>
      <div className="mx-auto flex min-h-screen max-w-md items-center justify-center px-4 py-10 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {step === 'landing' && <Landing onStart={handleStart} />}
            {step === 'quiz' && currentQuestion && (
              <QuizCard
                question={currentQuestion}
                index={currentIndex}
                total={questions.length}
                selectedOption={selectedForCurrent}
                onSelect={handleSelect}
                onBack={handleBack}
                onSkip={handleSkip}
              />
            )}
            {step === 'loading' && <ResultsLoading />}
            {step === 'results' && (
              <Results
                traits={topTraits}
                onReveal={handleReveal}
              />
            )}
            {step === 'reveal' && <Reveal />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App

