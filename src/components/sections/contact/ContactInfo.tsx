import { Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon, XIcon, GithubIcon } from '@/components/shared/SocialIcons';

const items = [
  { icon: Mail, label: 'Email', value: 'contact@projectasuras.com', href: 'mailto:contact@projectasuras.com' },
  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0182', href: 'tel:+14155550182' },
  { icon: MapPin, label: 'Office', value: '548 Market St, San Francisco, CA 94104', href: undefined },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-50">Let's talk security</h2>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
        Whether you need a quote, want to explore a training partnership, or just have a
        question — reach out directly or use the form.
      </p>

      <ul className="mt-8 space-y-6">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
              <item.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              {item.href ? (
                <a href={item.href} className="text-sm text-slate-200 hover:text-cyan-400">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-slate-200">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex gap-3">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Project Asuras on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Project Asuras on X"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400"
        >
          <XIcon className="h-4 w-4" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Project Asuras on GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
