import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { ExecutiveSummary } from '@/components/sections/about/ExecutiveSummary';
import { CorePillars } from '@/components/sections/about/CorePillars';
import { TechEcosystem } from '@/components/sections/about/TechEcosystem';
import { EngagementModels } from '@/components/sections/about/EngagementModels';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Project Asuras - Cyber Security, AI &amp; Software Intelligence</title>
        <meta
          name="description"
          content="Project Asuras is an India-based cybersecurity and technology intelligence firm focused on AI-driven security products, offensive security research, and empowering engineers through robust defensive strategies."
        />
        <meta
          property="og:title"
          content="About Project Asuras | Defending Modern Infrastructure & Next-Gen Cyber Intelligence"
        />
        <meta
          property="og:description"
          content="Bridging the gap between software deployment, architectural design, and strict security best practices through AI product engineering and offensive research."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Project Asuras',
            url: 'https://projectasuras.com',
            description:
              'India-based cybersecurity and technology intelligence firm focused on building cutting-edge cybersecurity and AI-driven security products, delivering offensive security research, and technical enablement.',
            knowsAbout: [
              'Cyber Security',
              'AI Product Engineering',
              'Attack Surface Management',
              'Offensive Security Research',
              'DevSecOps',
              'Vulnerability Assessment',
            ],
          })}
        </script>
      </Helmet>

      <PageHero
        eyebrow="ABOUT PROJECT ASURAS"
        title="Defending Modern Infrastructure & Next-Gen Cyber Intelligence"
        subtitle="An India-based cybersecurity and technology intelligence firm engineering AI-driven security tooling, offensive vulnerability research, and mission-critical defense strategies."
        breadcrumb="About"
      />

      <ExecutiveSummary />
      <CorePillars />
      <TechEcosystem />
      <EngagementModels />
      <AboutCTA />
    </>
  );
}
