import { FC, useState } from 'react';
import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'framer-motion';

type RevealProps = {
  onConfirmed?: () => void;
};

const CARDS = [
  "Hi Allie. So if you haven't figured this out by now, I may have rigged the algorithm…",
  "You are the most beautiful girl in the whole world, and not a second goes by where I am not thinking about you.",
  "You are the best girlfriend in the whole world and I love being able to call you MINE.",
  "And while I know we won't be able to be together on February 14th…",
  "Will you be my Valentine?"
];

const Reveal: FC<RevealProps> = ({ onConfirmed }) => {
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleYesClick = () => {
    const duration = 2500;
    const end = Date.now() + duration;

    const runConfetti = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fb7185', '#f97316', '#38bdf8', '#fbbf24', '#a78bfa']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fb7185', '#f97316', '#38bdf8', '#fbbf24', '#a78bfa']
      });
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#fb7185', '#f97316', '#38bdf8', '#fbbf24', '#a78bfa']
      });
      if (Date.now() < end) {
        requestAnimationFrame(runConfetti);
      } else {
        setShowInvitation(true);
      }
    };

    runConfetti();
  };

  const handleConfirm = () => {
    setHasConfirmed(true);
    setBurstKey(key => key + 1);
    if (onConfirmed) {
      onConfirmed();
    }
  };

  const handleClickMe = () => {
    setShowCards(true);
  };

  const handleNext = () => {
    if (cardIndex < CARDS.length - 1) {
      setCardIndex(i => i + 1);
    }
  };

  const handleBack = () => {
    if (cardIndex > 0) {
      setCardIndex(i => i - 1);
    }
  };

  const buttonsShared =
    'inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/80 via-slate-900/90 to-rose-950/70 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-rose-400/10 blur-3xl" />
      </div>
      <div className="relative space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">
            {showInvitation ? 'Save the date' : showCards ? 'A note from your match' : hasConfirmed ? 'Your match' : 'Recommended next step'}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.6rem]">
            {showInvitation ? 'Your invitation' : showCards ? 'A message for you' : hasConfirmed ? 'Here is your match!' : 'Ready for your results?'}
          </h2>
        </div>
        {!hasConfirmed && (
          <div className="flex gap-3">
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={handleConfirm}
              className={[
                buttonsShared,
                'bg-rose-500 text-slate-950 shadow-lg shadow-rose-500/40 hover:bg-rose-400'
              ].join(' ')}
            >
              Show me
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={handleConfirm}
              className={[
                buttonsShared,
                'border border-rose-200/40 bg-slate-950/40 text-rose-50 hover:border-rose-200/80 hover:bg-slate-900/70'
              ].join(' ')}
            >
              View results
            </motion.button>
          </div>
        )}
        <AnimatePresence mode="wait">
          {hasConfirmed && !showCards && (
            <>
              <motion.div
                key="match"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative mt-4 rounded-2xl border border-rose-200/40 bg-slate-950/60 p-4 sm:p-5"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-rose-200/80">
                  Your match has been found!
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/hudson.jpeg"
                    alt=""
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-rose-200/40"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-50">Hudson Rha</p>
                    <p className="text-sm text-slate-300">
                      Junior at Case Western. Currently studying abroad in Madrid. Misses his girlfriend very much.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <AnimatePresence>
                  <motion.div
                    key={burstKey}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1.4 }}
                    className="absolute inset-0"
                  >
                    {Array.from({ length: 18 }).map((_, index) => (
                      <motion.span
                        key={index}
                        className="absolute top-0 h-2 w-1.5 rounded-full"
                        style={{
                          left: `${(index / 18) * 100}%`,
                          backgroundColor:
                            index % 3 === 0
                              ? '#fb7185'
                              : index % 3 === 1
                              ? '#f97316'
                              : '#38bdf8'
                        }}
                        initial={{ y: -24, opacity: 0 }}
                        animate={{ y: 160, opacity: [0, 1, 0] }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.04,
                          ease: 'easeOut'
                        }}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            <button
              type="button"
              onClick={handleClickMe}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-rose-500 px-6 py-3 text-base font-medium text-slate-950 shadow-sm transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Click me
            </button>
          </>
          )}
          {hasConfirmed && showInvitation && (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative mt-4 overflow-hidden rounded-2xl border border-rose-200/40 bg-gradient-to-br from-slate-950/90 via-rose-950/30 to-slate-950/90 p-6 sm:p-8"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-rose-500/30 blur-3xl" />
              </div>
              <div className="relative">
                <div className="mb-6 space-y-4 text-left text-base leading-relaxed text-slate-100 sm:text-lg">
                  <p>Dear Miss. Allison Girzadas,</p>
                  <p>
                    Ever since the moment I met you, I knew there was something special about you. I was drawn to you. You are a very special girl and I am so glad that I get to call you my girlfriend.
                  </p>
                  <p>
                    I cannot wait to see you in March and I already know we are going to have so much fun. We are going to drink so much wine and eat so many tapas, dance in the yellow lit streets, and say the forbidden phrase a million times.
                  </p>
                  <p>
                    I know that we won&apos;t get to spend actual Valentine&apos;s Day together, but I did want to invite you to…
                  </p>
                </div>
                <div className="rounded-xl border border-rose-200/40 bg-slate-950/60 p-5 text-center">
                  
                  <h3 className="mb-1 text-2xl font-light tracking-wide text-slate-50 sm:text-3xl">
                    Valentine's Day Dinner
                  </h3>
                  <p className="mb-4 text-slate-300">
                    Madrid, Spain · March 10th
                  </p>
                  <div className="space-y-2 rounded-lg border border-rose-200/30 bg-slate-950/50 p-4 text-left text-sm">
                    <p className="text-slate-200">
                      <span className="font-medium text-rose-200">Attire:</span> A very nice dress
                    </p>
                    <p className="leading-relaxed text-slate-300">
                      Expect plenty of wine and wonderful food. Can&apos;t wait to celebrate with you!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {hasConfirmed && showCards && !showInvitation && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative mt-4 rounded-2xl border border-rose-200/40 bg-slate-950/60 p-5 sm:p-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-rose-200/80">
                {cardIndex + 1} of {CARDS.length}
              </p>
              {(cardIndex === 0 || cardIndex === 1 || cardIndex === 2 || cardIndex === 4) && (
                <div className="mb-4 flex justify-center">
                  {cardIndex === 4 ? (
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/hudson.jpeg"
                        alt=""
                        className="h-24 w-24 rounded-full object-cover ring-2 ring-rose-200/40"
                      />
                      <span className="text-2xl font-light text-rose-200">+</span>
                      <img
                        src="/images/allie.jpeg"
                        alt=""
                        className="h-24 w-24 rounded-full object-cover ring-2 ring-rose-200/40"
                      />
                    </div>
                  ) : (
                    <img
                      src={
                        cardIndex === 0
                          ? '/images/hudson.jpeg'
                          : cardIndex === 1
                          ? '/images/allie2.jpeg'
                          : '/images/allieandhuds.JPG'
                      }
                      alt=""
                      className="h-32 w-32 rounded-full object-cover ring-2 ring-rose-200/40"
                    />
                  )}
                </div>
              )}
              <p className="mb-4 min-h-[4rem] text-base leading-relaxed text-slate-50 sm:text-lg">
                {CARDS[cardIndex]}
              </p>
              <div className="flex gap-3">
                {cardIndex < CARDS.length - 1 ? (
                  <>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={handleBack}
                      disabled={cardIndex === 0}
                      className={[
                        'rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                        cardIndex === 0
                          ? 'cursor-not-allowed border border-slate-700 bg-slate-900/60 text-slate-500'
                          : 'border border-rose-200/40 bg-slate-950/40 text-rose-50 hover:border-rose-200/80 hover:bg-slate-900/70'
                      ].join(' ')}
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={handleNext}
                      className="ml-auto rounded-xl bg-rose-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-rose-500/40 transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      Next
                    </motion.button>
                  </>
                ) : (
                  <div className="flex w-full flex-col items-center gap-3">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={handleYesClick}
                      className="w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-rose-500/40 transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      Yes
                    </motion.button>
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-500"
                    >
                      No
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Reveal;
