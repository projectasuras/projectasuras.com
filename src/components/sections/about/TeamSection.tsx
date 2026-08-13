import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { LinkedinIcon, XIcon, GithubIcon } from '@/components/shared/SocialIcons';
import { team } from '@/data/team';

export function TeamSection() {
  return (
    <section className="border-b border-slate-800/80 py-24">
      <div className="container-app">
        <SectionHeader
          eyebrow="Our People"
          title="Meet the Team"
          subtitle="Operators, engineers, and educators who have spent their careers on the offensive side of security."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-slate-200">{member.bio}</p>
                  <div className="mt-4 flex gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="text-slate-300 hover:text-cyan-400"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        aria-label={`${member.name} on Twitter`}
                        className="text-slate-300 hover:text-cyan-400"
                      >
                        <XIcon className="h-4 w-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        aria-label={`${member.name} on GitHub`}
                        className="text-slate-300 hover:text-cyan-400"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-50">{member.name}</h3>
                  <p className="text-sm text-cyan-400">{member.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
