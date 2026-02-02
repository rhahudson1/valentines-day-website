import { FC } from 'react';
import { motion } from 'framer-motion';

type ResultsProps = {
  traits: string[];
  onReveal: () => void;
  photos?: string[];
};

const Results: FC<ResultsProps> = ({ traits, onReveal, photos }) => {
  const displayTraits = traits.length ? traits : ['Adventurous', 'Warm', 'Magnetic'];

  return (
    <div className="w-full rounded-3xl bg-slate-900/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Match found</p>
          <p className="text-sm text-slate-400">Based on your answers</p>
        </div>
        <div className="rounded-2xl bg-slate-100 px-3 py-1.5 text-right">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Compatibility</p>
          <p className="text-lg font-semibold leading-tight text-slate-900">100%</p>
        </div>
      </div>
      <div className="mb-6 space-y-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          We analyzed your answers and compared them with 8 billion entries and found a 100% match in our database.
        </p>
        <p className="text-sm text-slate-300">You come across as:</p>
        <div className="flex flex-wrap gap-2">
          {displayTraits.slice(0, 3).map(trait => (
            <span
              key={trait}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
      {photos && photos.length > 0 && (
        <div className="mb-6 flex items-center gap-2">
          <div className="flex -space-x-2">
            {photos.slice(0, 4).map((src, index) => (
              <img
                key={src + index}
                src={src}
                alt=""
                className="h-8 w-8 rounded-full border border-slate-900 object-cover"
              />
            ))}
          </div>
          <p className="text-xs text-slate-400">Optional snapshots can live here.</p>
        </div>
      )}
      <motion.button
        type="button"
        onClick={onReveal}
        whileTap={{ scale: 0.97 }}
        className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        View recommendation
      </motion.button>
    </div>
  );
};

export default Results;
