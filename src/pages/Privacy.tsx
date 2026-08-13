import { Helmet } from 'react-helmet-async';
import { PageHero } from '@/components/shared/PageHero';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Project Asuras</title>
        <meta
          name="description"
          content="Privacy Policy for Project Asuras, outlining our commitment to data protection under Indian laws including the IT Act 2000."
        />
      </Helmet>

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle your data in accordance with Indian cyber laws."
        breadcrumb="Privacy Policy"
      />

      <section className="container-app py-16 md:py-24 text-slate-300">
        <div className="prose prose-invert max-w-3xl mx-auto prose-cyan">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Project Asuras ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal information. As a cybersecurity company based in India, we adhere to the highest standards of data protection, including compliance with the Information Technology Act, 2000 (IT Act), and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">2. Information We Collect</h2>
          <p className="mb-6">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and company details when you contact us or use our services.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, operating system, and activity logs when you interact with our website or platforms, necessary for security monitoring and audit purposes.</li>
            <li><strong>Security Assessment Data:</strong> Information gathered during vulnerability assessments or penetration testing, which is handled strictly under non-disclosure agreements (NDAs).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">3. Use of Information</h2>
          <p className="mb-6">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, maintain, and improve our cybersecurity services.</li>
            <li>Communicate with you regarding service updates, security advisories, and administrative notices.</li>
            <li>Comply with legal obligations under Indian law, including reporting cyber incidents to CERT-In (Computer Emergency Response Team - India) as mandated by the Ministry of Electronics and Information Technology (MeitY).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">4. Data Security & Retention</h2>
          <p className="mb-6">
            We implement reasonable security practices and procedures (RSPP) as required by the SPDI Rules to protect your information against unauthorized access, modification, or disclosure. We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by Indian law.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">5. Sharing of Information</h2>
          <p className="mb-6">
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Trusted third-party service providers bound by confidentiality agreements.</li>
            <li>Law enforcement agencies or regulatory bodies (e.g., CERT-In) when legally required to do so under section 69, 69A, or 69B of the IT Act.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">6. Your Rights</h2>
          <p className="mb-6">
            You have the right to access, correct, or request the deletion of your personal information held by us, subject to legal and regulatory constraints. To exercise these rights, please contact our Grievance Officer.
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 mb-4">7. Contact & Grievance Officer</h2>
          <p className="mb-6">
            In accordance with the IT Act, 2000 and the SPDI Rules, the name and contact details of the Grievance Officer are provided below:<br />
            <strong>Email:</strong> legal@projectasuras.com<br />
            <strong>Address:</strong> Bengaluru, Karnataka, India
          </p>

          <p className="text-sm text-slate-500 mt-12">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </>
  );
}
