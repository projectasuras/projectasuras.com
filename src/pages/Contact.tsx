import { SEO } from '@/components/shared/SEO';
import { PageHero } from '@/components/shared/PageHero';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Project Asuras',
    description:
      'Get in touch with Project Asuras for offensive security assessments, penetration testing, corporate training, and custom security software.',
    url: 'https://projectasuras.com/contact',
  };

  return (
    <>
      <SEO
        title="Contact Security Specialists | Project Asuras"
        description="Get in touch with Project Asuras for expert penetration testing, hands-on training programs, or custom security software engineering. Schedule an engagement today."
        canonical="/contact"
        keywords={[
          'contact Project Asuras',
          'hire penetration testers',
          'request security quote',
          'cybersecurity consultation India',
          'contact security team',
        ]}
        schema={contactSchema}
      />

      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Tell us about your organization and what you need — we'll route you to the right specialist."
        breadcrumb="Contact"
      />

      <section className="relative overflow-hidden py-24">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
        </div>

        <div className="container-app flex justify-center">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
