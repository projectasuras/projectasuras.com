import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2 } from 'lucide-react';
import { submitNewsletter } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/FadeIn';

export function CTABanner() {
  const [email, setEmail] = useState('');
  const mutation = useMutation({
    mutationFn: submitNewsletter,
    onSuccess: () => setEmail(''),
  });

  return (
    <section className="relative overflow-hidden py-24">
      {/* Intentionally fixed (not theme-reactive) — this band stays a vivid dark accent in both light and dark mode. */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9c1701] via-[#5f0d01] to-[#020617]" />
      <div className="pointer-events-none absolute inset-0 opacity-30">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.4}s`,
              animationDuration: `${2 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="container-app relative text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Talk to our team about a tailored assessment, or subscribe for threat research
            straight to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) mutation.mutate({ email });
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm focus:border-white/50"
            />
            <Button
              type="submit"
              size="md"
              className="shrink-0 bg-zinc-950 text-white hover:bg-zinc-800"
              disabled={mutation.isPending}
              isLoading={mutation.isPending}
            >
              {mutation.isSuccess ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Subscribed
                </>
              ) : (
                'Get Started'
              )}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
