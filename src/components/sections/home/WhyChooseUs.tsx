import { Fingerprint, Zap, Users2, LineChart } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Fingerprint,
    title: 'Real Adversary Simulation',
    description:
      'We test the way real attackers operate — not just running scanners and calling it a day. Every engagement is led by practitioners with active offensive experience.',
  },
  {
    icon: Zap,
    title: 'Actionable, Prioritized Reporting',
    description:
      'Findings are mapped to business risk and ranked by exploitability, so your team knows exactly what to fix first — and why it matters.',
  },
  {
    icon: Users2,
    title: 'Partners, Not Vendors',
    description:
      'From retest windows to on-call support during remediation, we stay engaged after the report ships. Security is a relationship, not a transaction.',
  },
  {
    icon: LineChart,
    title: 'Built-In Knowledge Transfer',
    description:
      'Every engagement includes a debrief that upskills your internal team, so your defensive posture improves even after we walk away.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-app">
        <SectionHeader
          eyebrow="Why Asuras"
          title="Security Partners Who Think Like Attackers"
          subtitle="We built Asuras because most security vendors deliver a checklist, not a real understanding of risk."
        />

        <div className="mt-16 space-y-16">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.05}>
              <div
                className={cn(
                  'flex flex-col items-center gap-8 lg:flex-row lg:gap-16',
                  i % 2 === 1 && 'lg:flex-row-reverse',
                )}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                  <feature.icon className="h-8 w-8" strokeWidth={1.75} />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-slate-50">{feature.title}</h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
