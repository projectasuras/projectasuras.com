import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { TrainingSection } from '@/components/sections/services/TrainingSection';

export default function Training() {
  return (
    <>
      <Helmet>
        <title>Training | Project Asuras</title>
        <meta
          name="description"
          content="Security training courses by Project Asuras."
        />
        <meta property="og:title" content="Training | Project Asuras" />
        <meta
          property="og:description"
          content="Security training courses by Project Asuras."
        />
      </Helmet>

      <PageHero
        eyebrow="Training"
        title="Security Training & Courses"
        subtitle="Upskill your team with hands-on, realistic security training led by active practitioners."
        breadcrumb="Training"
      />
      <TrainingSection />
    </>
  );
}
