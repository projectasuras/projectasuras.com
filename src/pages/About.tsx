import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { MissionSection } from '@/components/sections/about/MissionSection';
// import { TeamSection } from '@/components/sections/about/TeamSection';
// import { Timeline } from '@/components/sections/about/Timeline';
// import { Certifications } from '@/components/sections/about/Certifications';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Project Asuras</title>
        <meta
          name="description"
          content="Meet the team behind Project Asuras and learn about our mission to close the gap between assumed and actual security."
        />
      </Helmet>

      <PageHero
        eyebrow="About Us"
        title="Security, Built by Operators"
        subtitle="We're a team of offensive security practitioners, engineers, and educators on a mission to make real risk visible."
        breadcrumb="About"
      />
      <MissionSection />
      {/* <TeamSection />
      <Timeline />
      <Certifications /> */}
    </>
  );
}
