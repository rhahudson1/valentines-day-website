import { FC } from 'react';
import { motion } from 'framer-motion';

const ResultsLoading: FC = () => {
  return (
    <div className="w-full rounded-3xl bg-slate-900/80 p-6 text-center shadow-xl backdrop-blur-sm sm:p-8">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">One moment</p>
      <p className="mb-6 text-lg font-medium text-slate-50 sm:text-xl">Calculating match…</p>
      <div className="flex items-center justify-center gap-1.5">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-slate-100"
            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              repeatType: 'loop',
              delay: i * 0.12
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsLoading;
