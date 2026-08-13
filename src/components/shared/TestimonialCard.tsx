import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

export function TestimonialCard({ quote, author, role, company, image }: Testimonial) {
  return (
    <figure className="glass flex h-full flex-col rounded-2xl p-7">
      <Quote className="h-8 w-8 text-cyan-500/40" />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-200">
        "{quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-500/30"
        />
        <div>
          <p className="text-sm font-semibold text-slate-100">{author}</p>
          <p className="text-xs text-slate-400">
            {role}, {company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
