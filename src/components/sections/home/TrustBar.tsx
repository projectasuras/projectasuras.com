import { trustedClients } from '@/data/about';

export function TrustBar() {
  const items = [...trustedClients, ...trustedClients];

  return (
    <section id="trust-bar" className="border-y border-slate-800/80 bg-slate-900/30 py-10">
      <div className="container-app mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted by security-conscious teams
        </p>
      </div>
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {items.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="flex items-center whitespace-nowrap text-xl font-bold text-slate-600 grayscale transition-all duration-300 hover:text-cyan-400 hover:grayscale-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
