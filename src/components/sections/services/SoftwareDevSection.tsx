import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/Button';

const stack = ['Python', 'Go', 'Rust', 'TypeScript', 'Kubernetes', 'Terraform'];

const process = [
  { title: 'Discovery', desc: 'Understand your environment, constraints, and integration points.' },
  { title: 'Design', desc: 'Architect a solution that fits your existing security stack, not a generic template.' },
  { title: 'Develop', desc: 'Build in short, reviewable increments with security baked into the pipeline.' },
  { title: 'Deploy', desc: 'Ship with observability and rollback plans from day one.' },
  { title: 'Support', desc: 'Ongoing maintenance and iteration as your environment evolves.' },
];

export function SoftwareDevSection() {
  return (
    <section id="software-development" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="container-app">
        <SectionHeader
          eyebrow="Custom Engineering"
          title="Software Development"
          subtitle="Custom security tooling, SIEM integrations, and automation — built by the people who break into systems for a living."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 font-mono text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-5">
          {process.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div className="relative h-full rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-center">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 font-mono text-xs font-bold text-cyan-400">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-100">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.desc}</p>
                {i < process.length - 1 && (
                  <span className="absolute right-[-18px] top-9 hidden text-slate-700 sm:block">
                    →
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button variant="primary" asChild>
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
