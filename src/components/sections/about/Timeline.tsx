import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { timeline } from '@/data/about';
import { cn } from '@/lib/utils';

export function Timeline() {
  return (
    <section className="border-b border-slate-800/80 py-24">
      <div className="container-app">
        <SectionHeader eyebrow="Our Story" title="Company Milestones" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-800 md:block" />
          <div className="absolute left-4 top-0 h-full w-px bg-slate-800 md:hidden" />

          <div className="space-y-10">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={cn(
                  'relative flex flex-col gap-2 pl-10 md:w-1/2 md:pl-0',
                  i % 2 === 0
                    ? 'md:pr-10 md:text-right'
                    : 'md:ml-auto md:pl-10 md:text-left',
                )}
              >
                <span
                  className={cn(
                    'absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-500 ring-4 ring-slate-950 md:top-1.5',
                    i % 2 === 0 ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2',
                  )}
                />
                <span className="font-mono text-sm font-bold text-cyan-400">{event.year}</span>
                <h3 className="text-lg font-semibold text-slate-50">{event.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
