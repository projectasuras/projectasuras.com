import { Building2, ShieldCheck, Bug, Check, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function EngagementModels() {
  const models = [
    {
      id: 'mou-partnerships',
      title: 'Institutional MoU Partnerships',
      subtitle: 'For Universities & Technical Colleges',
      icon: Building2,
      accentBorder: 'border-cyan-500/40',
      badge: 'Academic & Higher Ed',
      description:
        'Structured institutional collaborations providing year-round cybersecurity training, curriculum enablement, and accredited skill verification.',
      highlights: [
        'Year-round hands-on cybersecurity bootcamps & workshops',
        'Faculty Development Programs (FDPs) on offensive tooling',
        'Standardized student skill verification & CTF leagues',
        'Dockerized attack-defense sandbox environments',
      ],
      target: 'B.Tech / MCA Colleges, State Universities & Tech Institutes',
      ctaText: 'Partner via MoU',
      ctaLink: '/contact',
    },
    {
      id: 'corporate-audits',
      title: 'Corporate Security Auditing',
      subtitle: 'For Startups, Scaleups & IT Enterprises',
      icon: ShieldCheck,
      accentBorder: 'border-emerald-500/40',
      badge: 'Enterprise Security',
      description:
        'Rigorous security assessments uncovering high-impact architectural flaws, misconfigurations, and logic vulnerabilities before adversaries do.',
      highlights: [
        'Comprehensive Penetration Testing (Web, Mobile, Cloud, API)',
        'Automated & Manual Attack Surface Vulnerability Assessments',
        'Static & Dynamic Secure Code Review',
        'Container & CI/CD DevSecOps Hardening Audits',
      ],
      target: 'Tech Startups, FinTech, SaaS & Mid-to-Large IT Enterprises',
      ctaText: 'Request Security Audit',
      ctaLink: '/contact',
    },
    {
      id: 'bug-bounty-research',
      title: 'Bug Bounty & Research Collaborations',
      subtitle: 'For Security Teams & Ecosystem Partners',
      icon: Bug,
      accentBorder: 'border-rose-500/40',
      badge: 'Offensive Research',
      description:
        'Synergistic threat intelligence, managed vulnerability disclosure programs (VDP), and custom zero-day threat vector investigations.',
      highlights: [
        'Managed Vulnerability Disclosure Programs (VDP)',
        'Tailored Threat Intelligence & Attack Vector Reports',
        'Reverse engineering of proprietary binaries & firmware',
        'Exploit validation and custom detection rule generation',
      ],
      target: 'Product Engineering Teams, Security Labs & Research Groups',
      ctaText: 'Collaborate with Us',
      ctaLink: '/contact',
    },
  ];

  return (
    <section className="relative border-b border-slate-800/80 py-24 lg:py-28">
      <div className="container-app">
        <SectionHeader
          eyebrow="Collaboration Frameworks"
          title="Engagement & Partnership Models"
          subtitle="Versatile partnership structures tailored for universities, fast-scaling software companies, and enterprise security departments."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {models.map((model, idx) => {
            const Icon = model.icon;
            return (
              <FadeIn key={model.id} delay={idx * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-7 lg:p-8 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/60">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {model.badge}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-50">
                      {model.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-500 mt-1">{model.subtitle}</p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {model.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-6 pt-6 border-t border-slate-800/80">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Key Deliverables &amp; Scope:
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {model.highlights.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Target & Action */}
                  <div className="mt-8 pt-6 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400 mb-5">
                      <span className="font-medium text-slate-300">Target: </span>
                      {model.target}
                    </div>

                    <Button
                      variant="secondary"
                      size="md"
                      className="w-full justify-center group"
                      asChild
                    >
                      <Link to={model.ctaLink}>
                        {model.ctaText}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
