import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Project Asuras</title>
        <meta
          name="description"
          content="Terms of Service for Project Asuras. Read the terms governing our cybersecurity services and engagements in India."
        />
      </Helmet>

      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The rules and guidelines for using our services."
        breadcrumb="Terms of Service"
      />

      <section className="container-app py-16 md:py-24 text-slate-300">
        <div className="prose prose-invert max-w-3xl mx-auto prose-cyan">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using the services provided by Project Asuras, you agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement in accordance with the Indian Contract Act, 1872 and the Information Technology Act, 2000.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">2. Cybersecurity Services</h2>
          <p className="mb-6">
            Project Asuras provides cybersecurity consulting, penetration testing, vulnerability assessments, and related services ("Services"). Our Services are conducted exclusively on systems, networks, and applications for which you have provided explicit, written authorization. 
          </p>
          <p className="mb-6">
            <strong>Rules of Engagement:</strong> All technical assessments are bound by specific Rules of Engagement (RoE) agreed upon prior to testing. Unauthorized testing or usage of our tools against third-party assets without explicit consent is strictly prohibited and constitutes an offense under Section 43 and 66 of the IT Act, 2000.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">3. Client Responsibilities</h2>
          <p className="mb-6">
            You represent and warrant that you own or have the necessary legal authority to authorize Project Asuras to perform security assessments on the specified targets. You agree to indemnify Project Asuras against any claims, liabilities, or damages arising from a breach of this representation.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">4. Confidentiality & Non-Disclosure</h2>
          <p className="mb-6">
            Both parties agree to maintain the strict confidentiality of all sensitive information exchanged during the engagement. Security findings, vulnerabilities, and proprietary methodologies shall be treated as Confidential Information and will not be disclosed to third parties unless required by law (such as mandatory reporting to CERT-In).
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            While we conduct our assessments with the utmost care and professional standards, the nature of security testing involves inherent risks. Project Asuras shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruption, arising out of the performance of our Services.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">6. Compliance with Laws</h2>
          <p className="mb-6">
            You agree to use our Services in full compliance with all applicable local, state, national, and international laws, including but not limited to the Information Technology Act, 2000, and guidelines issued by the Reserve Bank of India (RBI) or SEBI where applicable to your sector.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">7. Governing Law and Jurisdiction</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
          </p>

          <p className="text-sm text-slate-500 mt-12">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </>
  );
}
