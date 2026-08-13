import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'meridian-financial-red-team',
    clientName: 'Meridian Financial Group',
    clientLogo: 'MFG',
    industry: 'Finance',
    title: 'Uncovering a Critical Authentication Bypass Before It Reached Production',
    excerpt:
      'A full red team engagement against Meridian\'s trading platform surfaced a chained vulnerability that would have allowed account takeover at scale.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    challenge:
      'Meridian Financial Group needed assurance that their newly rebuilt trading platform could withstand a determined external attacker before its public launch. Two prior vendor assessments had returned clean reports, but the security team suspected untested edge cases in the authentication flow.',
    approach: [
      'Conducted reconnaissance across all external assets and third-party integrations',
      'Mapped the full authentication and session-management flow end to end',
      'Chained a token-refresh race condition with a permissive CORS policy',
      'Validated real-world exploitability with a controlled account-takeover proof of concept',
      'Delivered a prioritized remediation roadmap with re-test included',
    ],
    results: [
      'Critical authentication bypass patched before public launch',
      'Zero customer-facing incidents post-remediation',
      'Security team adopted our secure SDLC checklist company-wide',
    ],
    stats: [
      { label: 'Critical Findings', value: '1' },
      { label: 'High Findings', value: '4' },
      { label: 'Days to Remediate', value: '9' },
    ],
    quote: {
      text: 'Project Asuras found a chained authentication bypass our internal team and two prior vendors missed entirely.',
      author: 'Marcus Chen',
      role: 'CISO, Meridian Financial Group',
    },
  },
  {
    slug: 'northbridge-health-cloud-assessment',
    clientName: 'Northbridge Health Systems',
    clientLogo: 'NHS',
    industry: 'Healthcare',
    title: 'Hardening a Multi-Cloud Patient Data Platform Against Lateral Movement',
    excerpt:
      'A cloud security assessment across AWS and Azure environments revealed over-permissioned IAM roles that could expose PHI.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    challenge:
      'Northbridge operates a hybrid AWS/Azure environment handling protected health information. Rapid team growth had left IAM policies sprawling and undocumented, and leadership needed a clear picture of blast radius if any single credential was compromised.',
    approach: [
      'Audited IAM roles, policies, and trust relationships across both clouds',
      'Simulated lateral movement from a low-privilege compromised service account',
      'Identified cross-account trust misconfigurations enabling privilege escalation',
      'Built an automated IAM drift-detection tool for the internal security team',
      'Ran a tabletop exercise with engineering leadership on the findings',
    ],
    results: [
      'Reduced standing privileged roles by 68%',
      'Closed cross-account escalation path within one sprint',
      'Deployed continuous IAM drift monitoring',
    ],
    stats: [
      { label: 'Over-permissioned Roles', value: '37' },
      { label: 'Privilege Reduction', value: '68%' },
      { label: 'Engagement Length', value: '3 wks' },
    ],
    quote: {
      text: 'The red team engagement completely changed how our board thinks about security investment.',
      author: 'Dr. Amara Okafor',
      role: 'VP of Information Security, Northbridge Health Systems',
    },
  },
  {
    slug: 'cascade-state-university-lab-platform',
    clientName: 'Cascade State University',
    clientLogo: 'CSU',
    industry: 'Education',
    title: 'Building a Live-Fire Lab Platform for 400+ Cybersecurity Students',
    excerpt:
      'Designed and deployed an isolated, on-demand lab environment supporting Cascade\'s full offensive security curriculum.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    challenge:
      'Cascade State University wanted to move its cybersecurity program from lecture-based instruction to hands-on offense and defense, but lacked infrastructure that could safely isolate hundreds of students running live exploits simultaneously.',
    approach: [
      'Designed a containerized, per-student isolated lab architecture',
      'Built 20+ vulnerable-by-design scenarios mapped to course modules',
      'Integrated automated scoring and progress tracking for instructors',
      'Trained faculty on curriculum delivery and lab administration',
      'Delivered ongoing content updates each semester',
    ],
    results: [
      'Deployed to 400+ students across three course levels',
      'Course completion rates increased 22%',
      'Program now used as a template for two partner universities',
    ],
    stats: [
      { label: 'Active Students', value: '400+' },
      { label: 'Lab Scenarios', value: '20+' },
      { label: 'Completion Increase', value: '22%' },
    ],
    quote: {
      text: 'Our students went from reading about exploits to writing them.',
      author: 'Prof. Elena Vasquez',
      role: 'Director, Cybersecurity Program, Cascade State University',
    },
  },
  {
    slug: 'vireo-cloud-detection-pipeline',
    clientName: 'Vireo Cloud',
    clientLogo: 'VC',
    industry: 'Technology',
    title: 'Shipping a Custom Detection Pipeline in Six Weeks',
    excerpt:
      'Built a SIEM-integrated detection and automation pipeline that cut alert triage time by more than half.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    challenge:
      'Vireo Cloud\'s small security team was drowning in low-fidelity alerts from a legacy SIEM setup, with no automated enrichment or triage. A previous vendor quoted an eight-month timeline for a rebuild.',
    approach: [
      'Audited existing detection rules and alert volume by source',
      'Designed a streaming enrichment pipeline in Go for high-throughput log processing',
      'Built automated triage playbooks integrated with the SIEM and ticketing system',
      'Tuned detection rules to cut false positives by over 70%',
      'Handed off with full documentation and a 90-day support window',
    ],
    results: [
      'Alert triage time reduced by 54%',
      'False positive rate cut by 71%',
      'Delivered in six weeks versus an eight-month vendor quote',
    ],
    stats: [
      { label: 'Triage Time Reduced', value: '54%' },
      { label: 'False Positives Cut', value: '71%' },
      { label: 'Delivery Time', value: '6 wks' },
    ],
    quote: {
      text: 'They shipped us a custom detection pipeline in six weeks that our previous vendor quoted eight months for.',
      author: 'Jonas Lindqvist',
      role: 'Head of Platform Engineering, Vireo Cloud',
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
