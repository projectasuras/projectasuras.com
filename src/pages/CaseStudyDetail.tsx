import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '@/components/shared/SEO';
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/Button';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) return <Navigate to="/case-studies" replace />;

  const related = caseStudies.filter((c) => c.slug !== caseStudy.slug).slice(0, 3);

  const detailSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.excerpt,
    image: caseStudy.image.startsWith('http')
      ? caseStudy.image
      : `https://projectasuras.com${caseStudy.image}`,
    author: {
      '@type': 'Organization',
      name: 'Project Asuras',
      url: 'https://projectasuras.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Project Asuras',
      logo: 'https://projectasuras.com/images/dark-logo.png',
    },
  };

  return (
    <>
      <SEO
        title={`${caseStudy.title} | Case Study`}
        description={caseStudy.excerpt}
        canonical={`/case-studies/${caseStudy.slug}`}
        ogType="article"
        ogImage={caseStudy.image}
        ogImageAlt={caseStudy.title}
        keywords={[
          caseStudy.industry,
          caseStudy.clientName,
          'cybersecurity case study',
          'penetration testing outcome',
          'security review',
        ]}
        schema={detailSchema}
      />

      <section className="relative overflow-hidden border-b border-slate-800/80 pt-[72px]">
        <div className="absolute inset-0">
          <img src={caseStudy.image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/85 to-slate-950" />
        </div>
        <div className="container-app relative py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 text-xs font-semibold text-cyan-400">
            {caseStudy.industry} · {caseStudy.clientName}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            {caseStudy.title}
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-app grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            <FadeIn>
              <h2 className="text-xl font-semibold text-slate-50">The Challenge</h2>
              <p className="mt-4 leading-relaxed text-slate-400">{caseStudy.challenge}</p>
            </FadeIn>

            <FadeIn>
              <h2 className="text-xl font-semibold text-slate-50">Our Approach</h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.approach.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="text-xl font-semibold text-slate-50">The Results</h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <blockquote className="glass rounded-2xl p-8">
                <Quote className="h-8 w-8 text-cyan-500/40" />
                <p className="mt-4 text-xl font-medium leading-relaxed text-slate-100">
                  "{caseStudy.quote.text}"
                </p>
                <footer className="mt-5 text-sm text-slate-400">
                  <span className="font-semibold text-slate-200">{caseStudy.quote.author}</span>
                  {' — '}
                  {caseStudy.quote.role}
                </footer>
              </blockquote>
            </FadeIn>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {caseStudy.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="font-mono text-3xl font-bold text-cyan-400">{stat.value}</div>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
            <Button variant="primary" className="w-full" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-800/80 py-20">
          <div className="container-app">
            <h2 className="text-2xl font-bold text-slate-50">Related Case Studies</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((cs) => (
                <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="group block">
                  <div className="overflow-hidden rounded-xl border border-slate-800">
                    <img
                      src={cs.image}
                      alt=""
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-100 transition-colors group-hover:text-cyan-400">
                    {cs.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
