import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { TrustBar } from '@/components/sections/home/TrustBar';
import { ServicesGrid } from '@/components/sections/home/ServicesGrid';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { WhyChooseUs } from '@/components/sections/home/WhyChooseUs';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { BlogPreview } from '@/components/sections/home/BlogPreview';
import { CTABanner } from '@/components/sections/home/CTABanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Project Asuras | Offensive Security &amp; Cyber Defense</title>
        <meta
          name="description"
          content="Project Asuras delivers penetration testing, security training, and custom security software for enterprises, universities, and government."
        />
        <meta property="og:title" content="Project Asuras | Offensive Security & Cyber Defense" />
        <meta
          property="og:description"
          content="Fortify your digital fortress with penetration testing, training, and custom security tooling."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Project Asuras',
            url: 'https://projectasuras.com',
            description:
              'Offensive security, training, and custom software development for enterprises, universities, and government.',
          })}
        </script>
      </Helmet>

      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <StatsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
