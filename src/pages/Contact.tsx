import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { MapEmbed } from '@/components/sections/contact/MapEmbed';
import { MultiStepForm } from '@/components/sections/contact/MultiStepForm';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Project Asuras</title>
        <meta
          name="description"
          content="Get in touch with Project Asuras for penetration testing, training, or custom security software."
        />
      </Helmet>

      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Tell us about your organization and what you need — we'll route you to the right specialist."
        breadcrumb="Contact"
      />

      <section className="py-20">
        <div className="container-app grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">
          <div>
            <ContactInfo />
            <MapEmbed />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
            <MultiStepForm />
          </div>
        </div>
      </section>
    </>
  );
}
