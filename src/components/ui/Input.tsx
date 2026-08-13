import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full">
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            placeholder=" "
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={cn(
              'peer w-full rounded-lg border bg-slate-900/60 px-4 pb-2 pt-5 text-sm text-slate-100 outline-none transition-colors placeholder-transparent',
              'border-slate-700 focus:border-cyan-500',
              error && 'border-rose-500 focus:border-rose-500',
              className,
            )}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={cn(
              'pointer-events-none absolute left-4 top-4 origin-left text-sm text-slate-400 transition-all',
              'peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400',
              'peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400',
              'top-2 text-xs',
            )}
          >
            {label}
          </label>
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-rose-400">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
