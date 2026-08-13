import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { certifications } from '@/data/about';

export function Certifications() {
  return (
    <section className="py-24">
      <div className="container-app">
        <SectionHeader eyebrow="Assurance" title="Certifications & Standards" />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <div className="group relative flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center transition-colors hover:border-cyan-500/40">
                <cert.icon className="h-9 w-9 text-cyan-400" strokeWidth={1.5} />
                <h3 className="mt-4 text-sm font-semibold text-slate-50">{cert.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>

                <div className="pointer-events-none absolute inset-x-3 bottom-full mb-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-slate-300 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                  {cert.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
