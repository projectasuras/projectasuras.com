import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const HEADLINE = 'Fortify Your Digital Fortress';

const terminalLines = [
  '$ asuras scan --target=perimeter',
  '> initializing recon modules...',
  '> 3 attack surfaces identified',
  '> vulnerability class: auth bypass [CRITICAL]',
  '> generating remediation report...',
  '$ status: secured ✓',
];

function TypewriterHeadline() {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
      {HEADLINE.split(' ').map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * i, duration: 0.5, ease: 'easeOut' }}
          className={i >= 2 ? 'text-gradient inline-block' : 'inline-block'}
        >
          {word}
          {i < HEADLINE.split(' ').length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </h1>
  );
}

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const timeout = setTimeout(() => setVisibleLines((v) => v + 1), 500);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute -inset-4 rounded-3xl bg-cyan-500/10 blur-2xl" />
      <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-cyan-500/10">
        <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-3 flex items-center gap-1.5 text-xs text-slate-500">
            <Terminal className="h-3.5 w-3.5" />
            asuras@secops:~
          </span>
        </div>
        <div className="min-h-[220px] p-5 font-mono text-[13px] leading-relaxed text-emerald-400">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={line.includes('CRITICAL') ? 'text-rose-400' : ''}>
              {line}
            </div>
          ))}
          {visibleLines < terminalLines.length && (
            <span className="inline-block h-4 w-2 animate-blink bg-emerald-400 align-middle" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-[0.15] animate-grid-shift" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />

      <div className="container-app relative grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-cyan-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Trusted by 50+ enterprises and universities
          </motion.span>

          <div className="mt-6">
            <TypewriterHeadline />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0"
          >
            Project Asuras combines offensive security expertise, hands-on training, and custom
            tooling to help organizations find their weaknesses before adversaries do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button size="lg" variant="primary" asChild>
              <Link to="/contact">Get Security Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        <TerminalPanel />
      </div>

      <motion.button
        type="button"
        onClick={() => document.getElementById('trust-bar')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-cyan-400"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.button>
    </section>
  );
}
