import { StatCounter } from '@/components/shared/StatCounter';
import { stats } from '@/data/stats';

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container-app relative grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            decimals={stat.value % 1 !== 0 ? 1 : 0}
          />
        ))}
      </div>
    </section>
  );
}
