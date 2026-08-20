import {
  Cpu,
  ShieldAlert,
  GraduationCap,
  Radar,
  Search,
  Boxes,
  Code2,
  FileCode2,
  Binary,
  FileText,
  Server,
  LockKeyhole
} from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';

export function CorePillars() {
  const pillars = [
    {
      id: 'ai-engineering',
      badge: 'PILLAR 01',
      title: 'Cyber Security & AI Product Engineering',
      icon: Cpu,
      accentColor: 'cyan',
      description:
        'Project Asuras designs, develops, and deploys intelligent security tools focused on threat surface monitoring, vulnerability discovery, and automated attack surface analysis.',
      capabilities: [
        {
          name: 'Attack Surface Management (ASM)',
          desc: 'Utilizing AI-driven analytics to identify, inventory, and monitor external-facing assets, proactively identifying vulnerabilities to minimize potential exposure.',
          icon: Radar,
        },
        {
          name: 'Automated Reconnaissance & Asset Discovery',
          desc: 'Leveraging AI-augmented scanning to detect exposed secrets, misconfigured cloud assets, and API leaks before malicious actors can exploit them.',
          icon: Search,
        },
        {
          name: 'Container & DevSecOps Security',
          desc: 'Tools and methodologies for runtime isolation, Docker container security, and end-to-end CI/CD pipeline auditing.',
          icon: Boxes,
        },
        {
          name: 'Custom Security Automation',
          desc: 'Custom rule engine generation and exploit validation scripts engineered using high-performance architectural and system design.',
          icon: Code2,
        },
      ],
    },
    {
      id: 'security-research',
      badge: 'PILLAR 02',
      title: 'Security Research, Bug Bounty & Intelligence',
      icon: ShieldAlert,
      accentColor: 'emerald',
      description:
        'Deep technical research remains at the core of Project Asuras\' security offerings, tracking evolving adversarial vectors and contributing to global vulnerability disclosures.',
      capabilities: [
        {
          name: 'Vulnerability Discovery & Reporting',
          desc: 'Responsible disclosure and deep-dive technical reporting on web, network, and API vulnerabilities across enterprise architectures.',
          icon: FileCode2,
        },
        {
          name: 'Reverse Engineering & Malware Analysis',
          desc: 'Decompilation and behavioral analysis of proprietary applications, binary structures, compiled payloads, and IoT firmwares.',
          icon: Binary,
        },
        {
          name: 'Public Threat Vector Breakdowns & Case Studies',
          desc: 'Publishing actionable threat vector breakdowns and root-cause post-mortems to elevate cybersecurity maturity across the engineering community.',
          icon: FileText,
        },
      ],
    },
    {
      id: 'institutional-enablement',
      badge: 'PILLAR 03',
      title: 'Institutional & Technical Enablement',
      icon: GraduationCap,
      accentColor: 'rose',
      description:
        'Project Asuras delivers intensive, practical cybersecurity bootcamps and workshops tailored for universities, technical colleges (B.Tech / MCA), faculty, IT and Security professionals.',
      capabilities: [
        {
          name: 'Practical Attack & Defense Labs',
          desc: 'Real-world adversary simulations powered by Dockerized sandbox environments, Burp Suite, custom Vulnerability Assessment, and custom CTF frameworks.',
          icon: Server,
        },
        {
          name: 'Secure Architecture & Code Review',
          desc: 'Hands-on guidance on threat modeling, defensive coding, hot-patching vulnerabilities, and mission-critical API hardening.',
          icon: LockKeyhole,
        },
      ],
    },
  ];

  return (
    <section className="relative border-b border-slate-800/80 py-24 lg:py-28 bg-slate-950/60">
      <div className="container-app">
        <SectionHeader
          eyebrow="Core Competencies"
          title="Business Pillars & Capabilities"
          subtitle="Engineered to protect modern digital ecosystems through a fusion of offensive research, AI-powered automation, and technical education."
        />

        <div className="mt-16 space-y-16">
          {pillars.map((pillar, pillarIdx) => {
            const PillarIcon = pillar.icon;
            const isCyan = pillar.accentColor === 'cyan';
            const isEmerald = pillar.accentColor === 'emerald';

            return (
              <FadeIn key={pillar.id} delay={pillarIdx * 0.1}>
                <div className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-slate-700">
                  {/* Top Bar / Pillar Header */}
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between pb-8 border-b border-slate-800/80">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md border ${isCyan
                            ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                            : isEmerald
                              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                              : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                            }`}
                        >
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-base text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${isCyan
                        ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                        : isEmerald
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                          : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
                        }`}
                    >
                      <PillarIcon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Pillar Capabilities Grid */}
                  <div
                    className={`mt-8 grid grid-cols-1 gap-6 ${pillar.capabilities.length === 4
                      ? 'sm:grid-cols-2 lg:grid-cols-4'
                      : pillar.capabilities.length === 3
                        ? 'sm:grid-cols-2 lg:grid-cols-3'
                        : 'sm:grid-cols-2'
                      }`}
                  >
                    {pillar.capabilities.map((cap, capIdx) => {
                      const CapIcon = cap.icon;
                      return (
                        <div
                          key={capIdx}
                          className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/50"
                        >
                          <div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                              <CapIcon className="h-5 w-5 text-cyan-400" />
                            </div>
                            <h4 className="mt-4 text-base font-semibold text-slate-100">
                              {cap.name}
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed text-slate-400 font-sans">
                              {cap.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
