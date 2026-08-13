import { ShieldCheck, Lock, FileCheck2, Globe2 } from 'lucide-react';
import type { Certification, TimelineEvent } from '@/types';

export const timeline: TimelineEvent[] = [
  {
    year: '2019',
    title: 'Founded in a co-working space',
    description:
      'Project Asuras started as a three-person red team consultancy focused on financial services clients.',
  },
  {
    year: '2020',
    title: 'First university partnership',
    description:
      'Launched a live-fire lab platform with Cascade State University, our first academic partnership.',
  },
  {
    year: '2021',
    title: 'Software development practice launched',
    description:
      'Began building custom detection and automation tooling for clients outgrowing off-the-shelf SIEM platforms.',
  },
  {
    year: '2023',
    title: 'ISO 27001 certified',
    description:
      'Formalized our internal security management system and achieved ISO 27001 certification.',
  },
  {
    year: '2024',
    title: '50+ enterprise clients',
    description:
      'Crossed 50 enterprise clients across finance, healthcare, education, and technology sectors.',
  },
  {
    year: '2026',
    title: 'Products division opens waitlist',
    description:
      'Announced our first standalone security product, built from years of offensive engagement data.',
  },
];

export const certifications: Certification[] = [
  {
    name: 'ISO 27001',
    issuer: 'International Organization for Standardization',
    description: 'Certified information security management system covering all client engagements.',
    icon: ShieldCheck,
  },
  {
    name: 'PCI-DSS',
    issuer: 'PCI Security Standards Council',
    description: 'Assessment methodology aligned with Payment Card Industry Data Security Standards.',
    icon: Lock,
  },
  {
    name: 'SOC 2 Type II',
    issuer: 'AICPA',
    description: 'Independently audited controls for security, availability, and confidentiality.',
    icon: FileCheck2,
  },
  {
    name: 'GDPR Aligned',
    issuer: 'European Union',
    description: 'Data handling practices aligned with GDPR requirements for EU client engagements.',
    icon: Globe2,
  },
];

export const trustedClients = [
  'Meridian Financial',
  'Northbridge Health',
  'Cascade State University',
  'Vireo Cloud',
  'Halcyon Bank',
  'Ferrow Logistics',
  'Brightline Insurance',
  'Kestrel University',
];
