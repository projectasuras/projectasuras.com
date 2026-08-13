import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export function StatCounter({ value, suffix = '', label, decimals = 0 }: StatCounterProps) {
  const { ref, value: display } = useCountUp({ end: value, decimals });

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text sm:text-5xl">
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}
