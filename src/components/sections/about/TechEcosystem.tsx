import { Code2, Terminal, Cpu, Boxes } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';

export function TechEcosystem() {
  const stackItems = [
    {
      category: 'Core Engineering Languages',
      icon: Code2,
      description: 'High-concurrency, low-latency systems and custom exploitation automation.',
      items: ['High Performance Computing', 'Distributed Architecture', 'Lower Overheads', 'Scalable Automation'],
    },
    {
      category: 'Offensive Tooling & Labs',
      icon: Terminal,
      description: 'Adversary emulation, protocol analysis, and penetration testing tooling.',
      items: ['Burp Suite Professional', 'Vulnerability Assessment Framework', 'Custom CTF Engine', 'Wireshark & Nmap'],
    },
    {
      category: 'AI & Attack Surface Discovery',
      icon: Cpu,
      description: 'Machine learning assisted scanning, pattern detection, and asset discovery.',
      items: ['AI-Driven ASM Models', 'Secret Leak Detectors', 'Cloud Misconfig Scanners', 'Heuristic Parsers'],
    },
    {
      category: 'Containers & DevSecOps',
      icon: Boxes,
      description: 'Auditing, runtime isolation, and secure CI/CD deployment verification.',
      items: ['Docker Sandbox Labs', 'Container Runtime Isolation', 'CI/CD Pipeline Audits', 'Vulnerability Hardening'],
    },
  ];

  return (
    <section className="relative border-b border-slate-800/80 py-24 lg:py-28 bg-slate-950/70">
      <div className="container-app">
        <SectionHeader
          eyebrow="Engineering & Tooling"
          title="Technical Stack & Offensive Ecosystem"
          subtitle="We don't just run third-party scanners. We engineer custom automation, exploit validation scripts, and AI-driven intelligence engines from first principles."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stackItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.category} delay={idx * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-200 hover:border-cyan-500/30 hover:bg-slate-900/60">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-slate-100">
                      {item.category}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <ul className="space-y-1.5">
                      {item.items.map((tech) => (
                        <li key={tech} className="flex items-center gap-2 font-mono text-xs text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
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
