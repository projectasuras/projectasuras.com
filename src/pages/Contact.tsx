import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';

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
