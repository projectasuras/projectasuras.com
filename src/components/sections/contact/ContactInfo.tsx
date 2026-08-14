import { Mail, ArrowRight } from 'lucide-react';
import { LinkedinIcon, XIcon, GithubIcon, DockerIcon, InstagramIcon, YoutubeIcon, DiscordIcon } from '@/components/shared/SocialIcons';

const items = [
  { icon: Mail, label: 'Email', value: 'contact@projectasuras.com', href: 'mailto:contact@projectasuras.com' },
  // { icon: Phone, label: 'Phone', value: '+1 (415) 555-0182', href: 'tel:+14155550182' },
  // { icon: MapPin, label: 'Office', value: '548 Market St, San Francisco, CA 94104', href: undefined },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 inline-flex items-center justify-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
        Available for new projects
      </div>
      <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Let's talk security</h2>
      <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
        Whether you need a quote, want to explore a training partnership, or just have a
        question — reach out directly to our team.
      </p>

      <div className="mt-10 w-full max-w-md space-y-4">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-800/60 bg-slate-800/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          >
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-800/80 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                <item.icon className="h-6 w-6" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors group-hover:text-cyan-400/80">
                  {item.label}
                </p>
                <p className="mt-0.5 text-base font-medium text-slate-200 transition-colors group-hover:text-cyan-50">
                  {item.value}
                </p>
              </div>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800/50 transition-all duration-300 group-hover:bg-cyan-500/20">
              <ArrowRight className="h-5 w-5 text-slate-500 transition-transform duration-300 group-hover:-rotate-45 group-hover:text-cyan-400" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 w-full border-t border-slate-800/50 pt-8">
        <p className="mb-6 text-sm font-medium text-slate-500">Connect with us</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="https://www.linkedin.com/company/projectasuras"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on LinkedIn"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:shadow-[0_4px_20px_rgba(10,102,194,0.15)]"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/projectasuras"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on X"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/50 hover:text-slate-100 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/projectasuras"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on GitHub"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700/50 hover:text-slate-100 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://discord.com/invite/pS7t73XTDK"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on Discord"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5865F2]/10 hover:text-[#5865F2] hover:shadow-[0_4px_20px_rgba(88,101,242,0.15)]"
          >
            <DiscordIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/@projectasuras"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on YouTube"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000]/10 hover:text-[#FF0000] hover:shadow-[0_4px_20px_rgba(255,0,0,0.15)]"
          >
            <YoutubeIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/projectasuras/"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on Instagram"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:shadow-[0_4px_20px_rgba(225,48,108,0.15)]"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="https://hub.docker.com/u/projectasuras"
            target="_blank"
            rel="noreferrer"
            aria-label="Project Asuras on Docker Hub"
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/30 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2496ED]/10 hover:text-[#2496ED] hover:shadow-[0_4px_20px_rgba(36,150,237,0.15)]"
          >
            <DockerIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
