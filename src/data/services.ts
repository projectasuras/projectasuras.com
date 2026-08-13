import { ShieldCheck, GraduationCap, Code2, Sparkles } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'penetration-testing',
    icon: ShieldCheck,
    title: 'Penetration Testing',
    shortDescription:
      'Offensive security assessments that expose vulnerabilities before attackers do.',
    description:
      'Our operators simulate real-world adversaries across your web, network, mobile, and cloud surfaces, delivering actionable findings mapped to business risk — not just a scanner printout.',
    features: [
      'Web Application Testing',
      'Network Infrastructure Testing',
      'Mobile Application Testing',
      'Cloud Security Assessment',
      'Red Team Operations',
    ],
  },
  {
    slug: 'training-courses',
    icon: GraduationCap,
    title: 'Training & Courses',
    shortDescription:
      'Hands-on offensive and defensive security education for teams and institutions.',
    description:
      'From university curriculum partnerships to corporate tabletop exercises, we build practitioners who can defend real infrastructure — not just pass a multiple-choice exam.',
    features: [
      'University Curriculum Partnerships',
      'Corporate Security Workshops',
      'Phishing Simulation Programs',
      'Live-Fire Lab Environments',
      'Certification Pathways',
    ],
  },
  {
    slug: 'software-development',
    icon: Code2,
    title: 'Software Development',
    shortDescription:
      'Custom security tooling, SIEM integrations, and automation built for your stack.',
    description:
      'We design and ship internal security tools — detection engineering, automation pipelines, and integrations — engineered by the same people who break into systems for a living.',
    features: [
      'Custom Security Tooling',
      'SIEM & SOAR Integrations',
      'Detection Engineering',
      'Security Automation Pipelines',
      'API & Infrastructure Hardening',
    ],
  },
  {
    slug: 'products',
    icon: Sparkles,
    title: 'Products',
    shortDescription: 'A new class of security tooling from Project Asuras. Coming soon.',
    description:
      'We are building products informed by thousands of hours on offensive engagements. Join the waitlist to be first in line.',
    features: [],
    comingSoon: true,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
