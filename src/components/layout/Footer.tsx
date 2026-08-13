import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, XIcon, GithubIcon, DiscordIcon, YoutubeIcon, MediumIcon, InstagramIcon, DockerIcon } from '@/components/shared/SocialIcons';
import { useMutation } from '@tanstack/react-query';
import { submitNewsletter } from '@/lib/api';

const serviceLinks = [
  { label: 'Penetration Testing', to: '/services#penetration-testing' },
  { label: 'Training & Courses', to: '/services#training-courses' },
  { label: 'Software Development', to: '/services#software-development' },
  { label: 'Products', to: '/services#products' },
];

const resourceLinks = [
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: 'https://blog.projectasuras.com' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const mutation = useMutation({
    mutationFn: submitNewsletter,
    onSuccess: () => setEmail(''),
  });

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40"
        aria-hidden="true"
      />
      <div className="container-app relative py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center" aria-label="Project Asuras home">
              <img src="/images/dark-logo.png" alt="Project Asuras" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Offensive security, training, and custom tooling for teams who refuse to be the
              easy target.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/company/projectasuras"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/projectasuras"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on X"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/projectasuras"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com/invite/pS7t73XTDK"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on Discord"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <DiscordIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@projectasuras"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/projectasuras/"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://hub.docker.com/u/projectasuras"
                target="_blank"
                rel="noreferrer"
                aria-label="Project Asuras on Docker Hub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 transition-colors hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <DockerIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100">Resources</h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100">Stay Informed</h3>
            <p className="mt-4 text-sm text-slate-400">
              Threat research and product updates, no spam. Unsubscribe anytime.
            </p>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) mutation.mutate({ email });
              }}
            >
              <label htmlFor="footer-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full min-w-0 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-cyan-500"
              />
              <button
                type="submit"
                disabled={mutation.isPending}
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-white transition-colors hover:brightness-90 disabled:opacity-60"
                aria-label="Subscribe"
              >
                {mutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : mutation.isSuccess ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  '→'
                )}
              </button>
            </form>
            {mutation.isSuccess && (
              <p className="mt-2 text-xs text-emerald-400">You're subscribed. Welcome aboard.</p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Project Asuras. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
