import { SEO } from '@/components/shared/SEO';
import { HeroSection } from '@/components/sections/home/HeroSection';
// import { TrustBar } from '@/components/sections/home/TrustBar';
import { ServicesGrid } from '@/components/sections/home/ServicesGrid';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
// import { BlogPreview } from '@/components/sections/home/BlogPreview';
import { CTABanner } from '@/components/sections/home/CTABanner';

export default function Home() {
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://projectasuras.com/#organization',
      name: 'Project Asuras',
      url: 'https://projectasuras.com',
      logo: 'https://projectasuras.com/images/dark-logo.png',
      description:
        'Project Asuras delivers offensive security research, penetration testing, security training, and custom cybersecurity software for enterprises and institutions.',
      sameAs: [
        'https://x.com/projectasuras',
        'https://linkedin.com/company/projectasuras',
        'https://github.com/projectasuras',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://projectasuras.com/contact',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://projectasuras.com/#website',
      url: 'https://projectasuras.com',
      name: 'Project Asuras',
      publisher: {
        '@id': 'https://projectasuras.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://projectasuras.com/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  return (
    <>
      <SEO
        title="Project Asuras | Offensive Security & Cyber Defense"
        description="Project Asuras delivers elite penetration testing, vulnerability assessments, security training, and custom security software for enterprises, universities, and government."
        canonical="/"
        keywords={[
          'cybersecurity company',
          'penetration testing',
          'offensive security',
          'red teaming',
          'vulnerability assessment',
          'cyber defense',
          'security engineering',
          'AI cybersecurity',
        ]}
        schema={homeSchema}
      />

      <HeroSection />
      {/* <TrustBar /> */}
      <ServicesGrid />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      {/* <BlogPreview /> */}
      <CTABanner />
    </>
  );
}
