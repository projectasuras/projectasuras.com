import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { waitlistSchema } from '@/lib/validators';
import type { WaitlistInput } from '@/lib/validators';
import { submitWaitlist } from '@/lib/api';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/shared/FadeIn';

export function ProductsSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistInput>({ resolver: zodResolver(waitlistSchema) });

  const mutation = useMutation({
    mutationFn: submitWaitlist,
    onSuccess: () => reset(),
  });

  return (
    <section
      id="products"
      className="relative scroll-mt-24 overflow-hidden border-t border-slate-800/80 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(182,26,1,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container-app relative text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Launching Q4 2026
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Something Big Is Coming
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            We're distilling thousands of hours of offensive engagement data into a new class of
            security tooling. Details are under wraps — but early access is not.
          </p>

          {mutation.isSuccess ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              You're on the list. We'll be in touch.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit((data) => mutation.mutate(data))}
              className="mx-auto mt-8 flex max-w-md flex-col items-start gap-3 sm:flex-row"
            >
              <div className="w-full flex-1">
                <Input
                  label="Email address"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={mutation.isPending}
                className="w-full shrink-0 sm:w-auto"
              >
                Join Waitlist
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
