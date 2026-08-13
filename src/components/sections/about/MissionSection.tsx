import { FadeIn } from '@/components/shared/FadeIn';

export function MissionSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/85 to-slate-950" />
      <div className="container-app relative text-center">
        <FadeIn>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Our Mission
          </span>
          <p className="mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-snug text-slate-50 sm:text-4xl">
            We believe every organization deserves to know its real risk — not a vendor's
            estimate of it. We exist to close the gap between what security teams assume is
            protected and what an attacker could actually reach.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
