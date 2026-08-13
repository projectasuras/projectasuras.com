import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, GraduationCap, Building2 } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const universityCourses = [
  { title: 'Offensive Security Fundamentals', duration: '14 weeks', level: 'Beginner', format: 'Semester Course' },
  { title: 'Applied Cryptography Lab', duration: '10 weeks', level: 'Intermediate', format: 'Semester Course' },
  { title: 'Capstone: Live-Fire Red Team', duration: '6 weeks', level: 'Advanced', format: 'Lab Intensive' },
];

const corporateCourses = [
  { title: 'Executive Threat Briefing', duration: 'Half-day', level: 'All Levels', format: 'Workshop' },
  { title: 'Phishing Simulation Program', duration: 'Ongoing', level: 'All Levels', format: 'Managed Service' },
  { title: 'Incident Response Tabletop', duration: 'Full-day', level: 'Intermediate', format: 'Tabletop Exercise' },
];

export function TrainingSection() {
  const [tab, setTab] = useState<'university' | 'corporate'>('university');
  const courses = tab === 'university' ? universityCourses : corporateCourses;

  return (
    <section id="training-courses" className="scroll-mt-24 border-t border-slate-800/80 py-24">
      <div className="container-app">
        <SectionHeader
          eyebrow="Education"
          title="Training & Courses"
          subtitle="Hands-on offensive and defensive security education, built for institutions and enterprise teams."
        />

        <div className="mx-auto mt-12 flex w-fit rounded-full border border-slate-800 bg-slate-900/60 p-1">
          <button
            type="button"
            onClick={() => setTab('university')}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
              tab === 'university' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-slate-200',
            )}
          >
            <GraduationCap className="h-4 w-4" />
            For Universities
          </button>
          <button
            type="button"
            onClick={() => setTab('corporate')}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
              tab === 'corporate' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-slate-200',
            )}
          >
            <Building2 className="h-4 w-4" />
            For Corporates
          </button>
        </div>

        <div className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400">
          {tab === 'university' ? (
            <p>
              Curriculum partnerships, isolated lab environments, and certification pathways
              designed with academic partners.
            </p>
          ) : (
            <p>
              Executive workshops, tabletop exercises, and ongoing phishing simulation programs
              tailored to your organization's risk profile.
            </p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                <h3 className="text-lg font-semibold text-slate-50">{course.title}</h3>
                <dl className="mt-4 space-y-2 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <dt>Duration</dt>
                    <dd className="text-slate-300">{course.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Level</dt>
                    <dd className="text-slate-300">{course.level}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Format</dt>
                    <dd className="text-slate-300">{course.format}</dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>
            Download Course Catalog
          </Button>
          <Link to="/contact" className="text-sm text-cyan-400 hover:underline">
            Or talk to our training team →
          </Link>
        </div>
      </div>
    </section>
  );
}
