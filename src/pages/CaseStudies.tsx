import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { FilterBar } from '@/components/sections/case-studies/FilterBar';
import type { CaseStudyFilter } from '@/components/sections/case-studies/FilterBar';
import { CaseStudyGrid } from '@/components/sections/case-studies/CaseStudyGrid';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudies() {
  const [filter, setFilter] = useState<CaseStudyFilter>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === filter)),
    [filter],
  );

  return (
    <>
      <Helmet>
        <title>Case Studies | Project Asuras</title>
        <meta
          name="description"
          content="Real engagements, real results — case studies from Project Asuras across finance, healthcare, education, and technology."
        />
      </Helmet>

      <PageHero
        eyebrow="Proof of Work"
        title="Case Studies"
        subtitle="A look at how we've helped organizations find and close real security gaps."
        breadcrumb="Case Studies"
      />

      <section className="py-20">
        <div className="container-app">
          <FilterBar active={filter} onChange={setFilter} />
          <div className="mt-12">
            <CaseStudyGrid items={filtered} />
          </div>
          {filtered.length === 0 && (
            <p className="mt-12 text-center text-slate-500">No case studies in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
