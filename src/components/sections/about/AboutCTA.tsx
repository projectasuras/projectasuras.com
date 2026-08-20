import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/Button';

export function AboutCTA() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container-app relative">
        <FadeIn>
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              ELEVATE YOUR DEFENSE POSTURE
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Ready to Strengthen Your Infrastructure with{' '}
              <span className="text-gradient">Next-Gen Intelligence?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              Whether you represent an academic institution looking for an MoU partnership, a high-growth startup needing security audits, or an enterprise seeking offensive intelligence — let's connect.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Initiate Engagement
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Institutional MoUs
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Offensive Auditing Engagements
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
                Vulnerability Research Collaborations
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
