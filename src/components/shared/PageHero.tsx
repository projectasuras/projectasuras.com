import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[45vh] items-center overflow-hidden border-b border-slate-800/80 bg-slate-950 pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
      <div className="container-app relative py-16 text-center">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center justify-center gap-1.5 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-300">{breadcrumb}</span>
        </motion.nav>
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-400"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
