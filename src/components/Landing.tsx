import { FC } from 'react';
import { motion } from 'framer-motion';

type LandingProps = {
  onStart: () => void;
};

const Landing: FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-slate-900/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-rose-400/15 blur-3xl" />
      </div>
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">
            Personality quiz
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.6rem]">
            What's your personality type?
          </h1>
          <p className="text-sm text-slate-300">
            A few quick questions to uncover your vibe.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/40 px-4 py-3">
          <div className="flex -space-x-2">
            {[11, 32, 44, 68].map(i => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i}`}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-slate-900 object-cover"
              />
            ))}
          </div>
          <div className="h-8 w-px bg-slate-600" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-50">4.9</span>
            </div>
            <p className="text-xs text-slate-400">
              Trusted by <span className="font-semibold text-slate-200">300,000+</span> users
            </p>
          </div>
        </div>
        <motion.button
          type="button"
          onClick={onStart}
          whileTap={{ scale: 0.97 }}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-rose-500 px-4 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-rose-500/30 transition hover:bg-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-100/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Start
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
