import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/types';

export function CaseStudyGrid({ items }: { items: CaseStudy[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {items.map((cs) => (
          <motion.div
            key={cs.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
          >
            <Link to={`/case-studies/${cs.slug}`} className="group block h-full">
              <div className="relative h-56 overflow-hidden rounded-xl border border-slate-800">
                <img
                  src={cs.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur-sm">
                  {cs.industry}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {cs.clientName}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-slate-50 transition-colors group-hover:text-cyan-400">
                  {cs.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-400">{cs.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
