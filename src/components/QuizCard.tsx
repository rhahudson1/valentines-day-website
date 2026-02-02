import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Question, QuizOption } from '../questions';

type QuizCardProps = {
  question: Question;
  index: number;
  total: number;
  selectedOption?: QuizOption;
  onSelect: (option: QuizOption) => void;
  onBack: () => void;
  onSkip: () => void;
};

const QuizCard: FC<QuizCardProps> = ({
  question,
  index,
  total,
  selectedOption,
  onSelect,
  onBack,
  onSkip
}) => {
  const [localSelected, setLocalSelected] = useState<string | null>(selectedOption?.value ?? null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setLocalSelected(selectedOption ? selectedOption.value : null);
    setLocked(false);
  }, [selectedOption, question.id]);

  const progress = ((index + 1) / total) * 100;

  const handleOptionClick = (option: QuizOption) => {
    if (locked) {
      return;
    }
    setLocalSelected(option.value);
    setLocked(true);
    setTimeout(() => {
      onSelect(option);
    }, 250);
  };

  return (
    <div className="w-full rounded-3xl bg-slate-900/80 p-5 shadow-xl backdrop-blur-sm sm:p-7">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-400 sm:mb-6">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full px-2 py-1 text-[11px] font-medium tracking-wide text-slate-300 transition hover:bg-slate-800 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/40"
        >
          Back
        </button>
        <span className="text-[11px] font-medium tracking-wide text-slate-400">
          Question {index + 1} of {total}
        </span>
        <button
          type="button"
          onClick={onSkip}
          className="rounded-full px-2 py-1 text-[11px] font-medium tracking-wide text-slate-400 transition hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/40"
        >
          Skip
        </button>
      </div>
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80 sm:mb-6">
        <motion.div
          className="h-full rounded-full bg-slate-50"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
      <div className="mb-5 space-y-2 sm:mb-7">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Personality quiz</p>
        <h2 className="text-lg font-medium leading-snug text-slate-50 sm:text-xl">
          {question.question}
        </h2>
      </div>
      <div className="space-y-3">
        {question.options.map((option: QuizOption) => {
          const isSelected = localSelected === option.value;
          return (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option)}
              whileTap={{ scale: 0.97 }}
              className={[
                'group relative flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
                isSelected
                  ? 'border-slate-100 bg-slate-100/10 text-slate-50 shadow-sm'
                  : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-200/60 hover:bg-slate-900'
              ].join(' ')}
            >
              <span className="pr-6">{option.label}</span>
              <span
                className={[
                  'flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold transition',
                  isSelected
                    ? 'border-slate-100 bg-slate-50 text-slate-900'
                    : 'border-slate-700 bg-slate-900 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-200'
                ].join(' ')}
              >
                {isSelected ? '✓' : ''}
              </span>
              {isSelected && (
                <motion.div
                  layoutId="option-ring"
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-slate-100/70"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
