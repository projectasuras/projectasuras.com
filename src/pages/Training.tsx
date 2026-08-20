import { SEO } from '@/components/shared/SEO';
import { PageHero } from '@/components/shared/PageHero';
import { TrainingSection } from '@/components/sections/services/TrainingSection';

export default function Training() {
  const trainingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Offensive Security & Hands-on Cyber Defense Training',
    description:
      'Practitioner-led cybersecurity bootcamps and workshops covering offensive security, secure coding, red teaming, and defensive incident response.',
    provider: {
      '@type': 'Organization',
      name: 'Project Asuras',
      url: 'https://projectasuras.com',
    },
  };

  return (
    <>
      <SEO
        title="Security Training & Executive Enablement | Project Asuras"
        description="Upskill your engineering and security teams with hands-on, realistic offensive security training, secure code workshops, and red team simulations led by active practitioners."
        canonical="/training"
        keywords={[
          'cybersecurity training',
          'security courses',
          'hands-on ethical hacking',
          'secure coding workshop',
          'red team training',
          'corporate security enablement',
        ]}
        schema={trainingSchema}
      />

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
