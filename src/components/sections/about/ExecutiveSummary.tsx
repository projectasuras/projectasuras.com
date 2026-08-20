import { ShieldAlert, Cpu, Terminal, Sparkles, Binary, CheckCircle2, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { Link } from 'react-router-dom';

export function ExecutiveSummary() {
  return (
    <section className="relative border-b border-slate-800/80 py-24 lg:py-28 overflow-hidden">
      {/* Background Decorative Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-app relative">
        {/* Section Tag */}
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              EXECUTIVE SUMMARY
            </span>
            <span className="font-mono text-xs text-slate-500">// DEFENDING MODERN INFRASTRUCTURE</span>
          </div>
        </FadeIn>

        {/* Main Pitch & Bridge Concept */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Bridging Software Deployment, Architecture &amp;{' '}
                <span className="text-gradient">Strict Security Practices</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                <strong className="text-slate-100 font-semibold">Project Asuras</strong> is an India-based cybersecurity and technology intelligence firm focused on building cutting-edge cybersecurity and AI-driven security products, delivering offensive security research, and empowering the next generation of engineers through hands-on technical training.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                In an increasingly complex threat landscape, traditional security measures are often insufficient. Project Asuras bridges the critical gap between software deployment, architectural design, and strict security best practices. By combining real-world threat research, vulnerability research (including active bug bounty contributions), and tailored educational initiatives, Project Asuras equips academic institutions and corporate enterprises with robust defensive strategies.
              </p>
            </FadeIn>

            {/* Core Value Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FadeIn delay={0.2}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">Offensive Mindset</h3>
                    <p className="mt-1 text-xs text-slate-400">Real-world adversary simulation and deep threat research.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">AI-Augmented Tooling</h3>
                    <p className="mt-1 text-xs text-slate-400">Automated attack surface analysis &amp; reconnaissance engines.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Visual Card: Cyber Architecture & Intelligence Box */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">asuras_threat_matrix.sh</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                    ACTIVE INTEL
                  </span>
                </div>

                {/* Architecture Flow */}
                <div className="mt-6 space-y-4 font-mono text-xs">
                  <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-slate-300 font-semibold flex items-center gap-2">
                        <Binary className="h-4 w-4 text-cyan-400" />
                        01. Software &amp; Cloud Layer
                      </span>
                      <span className="text-emerald-400">MONITORED</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 font-sans">
                      CI/CD pipelines, containerized infrastructure, APIs, and exposed surfaces.
                    </p>
                  </div>

                  <div className="relative flex justify-center">
                    <div className="h-4 w-px bg-gradient-to-b from-cyan-500 to-emerald-500" />
                  </div>

                  <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-3.5 shadow-lg shadow-cyan-950/50">
                    <div className="flex items-center justify-between text-cyan-300">
                      <span className="font-semibold flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-cyan-400" />
                        02. Project Asuras Bridge
                      </span>
                      <span className="text-cyan-400 animate-pulse">DEFENSE IN DEPTH</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-300 font-sans">
                      Vulnerability research, AI reconnaissance, custom exploits validation &amp; active bug bounty telemetry.
                    </p>
                  </div>

                  <div className="relative flex justify-center">
                    <div className="h-4 w-px bg-gradient-to-b from-emerald-500 to-cyan-500" />
                  </div>

                  <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-slate-300 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        03. Hardened Defense &amp; Enablement
                      </span>
                      <span className="text-emerald-400">RESILIENT</span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 font-sans">
                      Robust defensive strategies, trained engineering teams, and validated security posture.
                    </p>
                  </div>
                </div>

                {/* Bottom Quick Links */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    Location: <span className="text-slate-200 font-medium">India (Global Operations)</span>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Explore Capabilities <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
