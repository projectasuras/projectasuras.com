import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500',
          align === 'center' && 'mx-auto',
        )}
      />
      {subtitle && <p className="mt-5 text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  );
}
