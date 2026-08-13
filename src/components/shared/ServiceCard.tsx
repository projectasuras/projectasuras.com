import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features?: string[];
  comingSoon?: boolean;
  index?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  features = [],
  comingSoon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link
        to={link}
        className={cn(
          'relative flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300',
          'hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-500/40 hover:shadow-[0_0_40px_-10px_rgba(182,26,1,0.35)]',
          comingSoon && 'border-dashed border-slate-700 animate-pulse-border',
        )}
      >
        {comingSoon && (
          <span className="absolute right-5 top-5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400 ring-1 ring-rose-500/30">
            Coming Soon
          </span>
        )}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>

        {features.length > 0 && (
          <ul className="mt-5 space-y-2">
            {features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
          {comingSoon ? 'Join the waitlist' : 'Learn more'}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
