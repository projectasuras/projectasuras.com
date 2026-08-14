import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { PentestSection } from '@/components/sections/services/PentestSection';

import { SoftwareDevSection } from '@/components/sections/services/SoftwareDevSection';
import { ProductsSection } from '@/components/sections/services/ProductsSection';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Project Asuras</title>
        <meta
          name="description"
          content="Penetration testing, security training, custom software development, and upcoming security products from Project Asuras."
        />
        <meta property="og:title" content="Services | Project Asuras" />
        <meta
          property="og:description"
          content="Penetration testing, security training, custom software development, and upcoming security products."
        />
      </Helmet>

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
