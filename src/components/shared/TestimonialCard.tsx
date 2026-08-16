import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

export function TestimonialCard({ quote, company, logo }: Testimonial) {
  return (
    <figure className="glass flex h-full flex-col rounded-2xl p-7">
      <Quote className="h-8 w-8 text-cyan-500/40" />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-200">
        "{quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-auto min-w-[80px] items-center justify-center rounded-lg bg-slate-900/50 px-3 py-2 ring-1 ring-white/10">
          <img
            src={logo}
            alt={`${company} logo`}
            loading="lazy"
            className="max-h-full max-w-[120px] object-contain opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-100">{company}</p>
        </div>
      </figcaption>
    </figure>
  );
}
