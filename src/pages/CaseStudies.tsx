import { useMemo, useState } from 'react';
import { SEO } from '@/components/shared/SEO';
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

  const caseStudiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies & Security Engagement Outcomes',
    description:
      'Real-world case studies detailing how Project Asuras identified vulnerabilities, hardened infrastructure, and secured client systems.',
    url: 'https://projectasuras.com/case-studies',
  };

  return (
    <>
      <SEO
        title="Client Case Studies & Security Impact | Project Asuras"
        description="Real engagements, real results — explore technical case studies detailing how Project Asuras uncovered critical vulnerabilities across finance, healthcare, and enterprise tech."
        canonical="/case-studies"
        keywords={[
          'cybersecurity case studies',
          'penetration test case study',
          'security engagement results',
          'vulnerability remediation examples',
          'red team case studies',
        ]}
        schema={caseStudiesSchema}
      />

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
