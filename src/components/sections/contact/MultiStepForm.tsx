import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, GraduationCap, Code2, HelpCircle, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { contactFormSchema } from '@/lib/validators';
import type { ContactFormInput } from '@/lib/validators';
import { submitContactForm } from '@/lib/api';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const steps = ['Service', 'Organization', 'Details', 'Contact'];

const serviceOptions = [
  { value: 'pentest', label: 'Penetration Testing', icon: ShieldCheck },
  { value: 'training', label: 'Training', icon: GraduationCap },
  { value: 'development', label: 'Development', icon: Code2 },
  { value: 'other', label: 'Other', icon: HelpCircle },
] as const;

const orgSizeOptions = [
  { value: '1-50', label: '1–50 employees' },
  { value: '51-250', label: '51–250 employees' },
  { value: '251-1000', label: '251–1,000 employees' },
  { value: '1000+', label: '1,000+ employees' },
];

const industryOptions = [
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'technology', label: 'Technology' },
  { value: 'other', label: 'Other' },
];

const urgencyOptions = [
  { value: 'low', label: 'Low — exploring options' },
  { value: 'medium', label: 'Medium — planning within a quarter' },
  { value: 'high', label: 'High — need to move within weeks' },
  { value: 'critical', label: 'Critical — active concern' },
];

const stepFields: Record<number, (keyof ContactFormInput)[]> = {
  0: ['serviceType'],
  1: ['organization', 'orgSize', 'industry'],
  2: ['message', 'urgency'],
  3: ['name', 'email', 'phone'],
};

export function MultiStepForm() {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
  });

  const mutation = useMutation({ mutationFn: submitContactForm });

  const serviceType = watch('serviceType');

  const goNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data: ContactFormInput) => {
    mutation.mutate(data);
  };

  if (mutation.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-12 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-emerald-400" />
        <h3 className="mt-5 text-2xl font-semibold text-slate-50">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-400">
          Thanks for reaching out. A member of our team will respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                  i < step
                    ? 'bg-cyan-500 text-white'
                    : i === step
                      ? 'bg-cyan-500/20 text-cyan-400 ring-2 ring-cyan-500'
                      : 'bg-slate-800 text-slate-500',
                )}
              >
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </div>
              <span className="mt-2 hidden text-xs text-slate-500 sm:block">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
            animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-50">
                  What can we help you with?
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setValue('serviceType', opt.value, { shouldValidate: true })}
                      className={cn(
                        'flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-colors',
                        serviceType === opt.value
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-slate-800 hover:border-slate-700',
                      )}
                    >
                      <opt.icon
                        className={cn(
                          'h-6 w-6',
                          serviceType === opt.value ? 'text-cyan-400' : 'text-slate-500',
                        )}
                      />
                      <span className="text-sm font-medium text-slate-200">{opt.label}</span>
                    </button>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="mt-3 text-xs text-rose-400">{errors.serviceType.message}</p>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-slate-50">Tell us about your organization</h3>
                <Input label="Organization name" {...register('organization')} error={errors.organization?.message} />
                <Select
                  label="Organization size"
                  options={orgSizeOptions}
                  {...register('orgSize')}
                  error={errors.orgSize?.message}
                />
                <Select
                  label="Industry"
                  options={industryOptions}
                  {...register('industry')}
                  error={errors.industry?.message}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-slate-50">What do you need help with?</h3>
                <Textarea
                  label="Tell us more about your project or concern"
                  {...register('message')}
                  error={errors.message?.message}
                />
                <Select
                  label="Urgency"
                  options={urgencyOptions}
                  {...register('urgency')}
                  error={errors.urgency?.message}
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-slate-50">How can we reach you?</h3>
                <Input label="Full name" {...register('name')} error={errors.name?.message} />
                <Input label="Email address" type="email" {...register('email')} error={errors.email?.message} />
                <Input label="Phone number" type="tel" {...register('phone')} error={errors.phone?.message} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            disabled={step === 0}
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Back
          </Button>

          {step < steps.length - 1 ? (
            <Button type="button" variant="primary" onClick={goNext} rightIcon={<ArrowRight className="h-4 w-4" />}>
              Continue
            </Button>
          ) : (
            <Button type="submit" variant="primary" isLoading={mutation.isPending}>
              Send Message
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
