import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const filters = ['All', 'Finance', 'Healthcare', 'Education', 'Technology'] as const;
export type CaseStudyFilter = (typeof filters)[number];

interface FilterBarProps {
  active: CaseStudyFilter;
  onChange: (filter: CaseStudyFilter) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter case studies by industry">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          aria-pressed={active === filter}
          className={cn(
            'relative rounded-full border px-5 py-2 text-sm font-medium transition-colors',
            active === filter
              ? 'border-transparent text-white'
              : 'border-slate-800 text-slate-400 hover:text-slate-100',
          )}
        >
          {active === filter && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-cyan-500"
              transition={{ type: 'spring', duration: 0.5 }}
            />
          )}
          <span className="relative">{filter}</span>
        </button>
      ))}
    </div>
  );
}
