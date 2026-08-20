import { SEO } from '@/components/shared/SEO';
import { PageHero } from '@/components/shared/PageHero';
import { PentestSection } from '@/components/sections/services/PentestSection';
import { SoftwareDevSection } from '@/components/sections/services/SoftwareDevSection';
import { ProductsSection } from '@/components/sections/services/ProductsSection';

export default function Services() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Offensive Cybersecurity and Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Project Asuras',
      url: 'https://projectasuras.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cybersecurity Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Penetration Testing & Red Teaming',
            description:
              'Comprehensive black-box, white-box, and grey-box security assessments against web, mobile, cloud, and corporate networks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Security Software & Tooling',
            description:
              'High-performance custom security tooling, telemetry agents, and automated vulnerability scanning pipelines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Security Products & Intelligence',
            description:
              'Proprietary reconnaissance, attack surface monitoring, and AI-assisted defensive platforms.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Offensive Security & Software Development Services | Project Asuras"
        description="Explore Project Asuras cybersecurity services: advanced penetration testing, red teaming, DevSecOps pipelines, and custom security software engineering."
        canonical="/services"
        keywords={[
          'penetration testing services',
          'red teaming',
          'cloud security audit',
          'API security testing',
          'DevSecOps services',
          'custom cybersecurity software',
          'vulnerability scanning',
        ]}
        schema={servicesSchema}
      />

      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Four practices, one mission: help you find your weaknesses before someone else does."
        breadcrumb="Services"
      />
      <PentestSection />

      <SoftwareDevSection />
      <ProductsSection />
    </>
  );
}
