import type { BlogPost } from '@/types';

const asurasTeam = {
  name: 'Asuras Research Team',
  avatar: 'https://i.pravatar.cc/160?img=13',
  role: 'Offensive Security Research',
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'anatomy-of-a-cloud-privilege-escalation',
    title: 'Anatomy of a Cloud Privilege Escalation Chain',
    excerpt:
      'How a single over-permissioned Lambda role can cascade into full account compromise — and how to catch it before an attacker does.',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    category: 'Cloud Security',
    tags: ['AWS', 'IAM', 'Privilege Escalation'],
    author: asurasTeam,
    publishedAt: '2026-07-18',
    readTime: 8,
    featured: true,
    content: `## The Setup

Most privilege escalation chains in the cloud do not start with a zero-day. They start with an IAM policy someone attached "temporarily" two years ago and forgot about.

In this walkthrough, we trace a real (anonymized) engagement where a single Lambda execution role gave us a path to full administrative access across an AWS account.

## Step 1: Enumeration

After landing an initial low-privilege credential from a leaked CI configuration, the first move is always enumeration:

\`\`\`bash
aws sts get-caller-identity
aws iam list-attached-role-policies --role-name ci-deploy-role
\`\`\`

The attached policy included \`iam:PassRole\` on a wildcard resource — a pattern we see constantly.

## Step 2: The Chain

With \`iam:PassRole\` and \`lambda:CreateFunction\`, we could create a new Lambda function, pass it a more privileged execution role, and have it run arbitrary code under that identity.

## Step 3: Impact

The privileged role had \`AdministratorAccess\` attached — intended for a break-glass scenario, never scoped down after the initial account setup.

## Remediation

- Never grant \`iam:PassRole\` on a wildcard resource
- Scope break-glass roles with permission boundaries and short-lived credentials
- Run continuous IAM drift detection, not point-in-time audits

This is exactly the class of finding our [Cloud Security Assessment](/services#penetration-testing) is built to catch before it reaches your account.`,
  },
  {
    slug: 'phishing-simulations-that-actually-change-behavior',
    title: 'Phishing Simulations That Actually Change Behavior',
    excerpt:
      'Most phishing programs measure click rates and stop there. Here is how to design simulations that build lasting habits.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    category: 'Security Training',
    tags: ['Phishing', 'Awareness', 'Training'],
    author: asurasTeam,
    publishedAt: '2026-06-30',
    readTime: 6,
    featured: true,
    content: `## Click Rate Is a Vanity Metric

If your phishing program's only output is a click-rate percentage, you are measuring the wrong thing. Click rate tells you almost nothing about whether an employee would actually report a real attack.

## What We Measure Instead

1. **Report rate** — did the employee flag the email to security?
2. **Time to report** — how quickly did they escalate?
3. **Repeat-click rate** — did training after a first click change behavior?

## Designing Better Simulations

Generic "you've won a prize" templates train employees to spot bad phishing, not good phishing. We build scenario-specific simulations mirroring pretexts your actual threat model faces — vendor invoice fraud, executive impersonation, MFA fatigue prompts.

## The Follow-Up Matters More Than the Test

A simulation without immediate, contextual feedback is close to useless. The moment someone clicks, they should land on a two-minute explainer specific to the pretext they fell for — not a generic "you failed" page.

Curious what a tailored phishing program looks like for your org? Our [Corporate Training track](/training) builds these end to end.`,
  },
  {
    slug: 'mobile-app-pentest-checklist-2026',
    title: 'The Mobile App Pentest Checklist We Actually Use in 2026',
    excerpt:
      'A practical, field-tested checklist covering iOS and Android testing beyond what OWASP MASVS covers on paper.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    category: 'Mobile Security',
    tags: ['iOS', 'Android', 'MASVS'],
    author: asurasTeam,
    publishedAt: '2026-06-12',
    readTime: 10,
    content: `## Beyond the Standard

OWASP MASVS is a solid baseline, but real mobile engagements surface issues the checklist alone will not catch. Here is what we add.

## Static Analysis

- Hardcoded secrets in bundled JS/React Native assets
- Insecure keychain / keystore access modes
- Certificate pinning bypass surface via reflection

## Dynamic Analysis

- Runtime tampering with Frida hooks against business logic
- Deep link and universal link hijacking paths
- Insecure inter-process communication on Android

## Backend Interaction

Most "mobile" vulnerabilities are actually API vulnerabilities reachable only through the mobile client. We always pair mobile testing with targeted API assessment against the same backend.

## Reporting That Developers Can Use

Findings are useless if engineers cannot reproduce them. Every finding in our reports ships with a Frida script or curl reproduction where applicable.`,
  },
  {
    slug: 'building-a-detection-engineering-practice',
    title: 'Building a Detection Engineering Practice From Scratch',
    excerpt:
      'A pragmatic roadmap for security teams moving from vendor-default alerts to a real detection engineering function.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    category: 'Detection Engineering',
    tags: ['SIEM', 'Detection', 'Automation'],
    author: asurasTeam,
    publishedAt: '2026-05-22',
    readTime: 7,
    content: `## Start With Threat Modeling, Not Tooling

Teams often buy a SIEM first and figure out what to detect later. Flip that order. Start with your actual threat model — what would a realistic attacker do to your environment — and build detections against that.

## The Detection Lifecycle

1. Hypothesis: "An attacker with a stolen laptop credential would attempt X"
2. Data: do we log the fields needed to detect X?
3. Rule: write the detection, keep it version controlled
4. Test: simulate the behavior, confirm the alert fires
5. Tune: measure false positive rate over two weeks
6. Maintain: revisit quarterly as the environment changes

## Version Control Your Detections

Treat detection rules like code. Pull requests, peer review, and changelogs turn tribal knowledge into an auditable asset.

## Where Automation Pays Off

Automating enrichment (asset ownership, user risk score, geolocation) before an alert reaches an analyst is consistently the highest-leverage investment we make for clients.`,
  },
  {
    slug: 'red-team-vs-pentest-choosing-the-right-engagement',
    title: 'Red Team vs. Penetration Test: Choosing the Right Engagement',
    excerpt:
      'They are not interchangeable. Here is how to decide which engagement type actually answers the question you are asking.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    category: 'Penetration Testing',
    tags: ['Red Team', 'Pentest', 'Strategy'],
    author: asurasTeam,
    publishedAt: '2026-05-02',
    readTime: 5,
    content: `## Different Questions, Different Engagements

A penetration test answers: "What vulnerabilities exist in this system?" A red team engagement answers: "Can a realistic adversary achieve a specific objective, and would we detect them if they tried?"

## When to Choose a Pentest

- You need broad coverage of a specific application or system
- You are validating fixes after a previous assessment
- You have a compliance requirement with a defined scope

## When to Choose a Red Team

- You want to test detection and response, not just prevention
- Your security program is mature enough that a standard pentest returns few findings
- Leadership needs a realistic narrative of business impact, not a vulnerability list

## A Third Option: Purple Teaming

Increasingly, we run collaborative purple team exercises where the red team and blue team work together in real time — maximizing the learning per hour of engagement rather than optimizing for stealth.`,
  },
  {
    slug: 'securing-ci-cd-pipelines-supply-chain',
    title: 'Securing CI/CD Pipelines Against Supply Chain Attacks',
    excerpt:
      'CI/CD systems hold the keys to your entire infrastructure. Here is how attackers target them, and how to close the gaps.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    category: 'DevSecOps',
    tags: ['CI/CD', 'Supply Chain', 'DevSecOps'],
    author: asurasTeam,
    publishedAt: '2026-04-14',
    readTime: 9,
    content: `## Why CI/CD Is a Top Target

A compromised CI/CD pipeline gives an attacker legitimate-looking access to production deployments, secrets, and artifact repositories — often with less monitoring than production itself receives.

## Common Attack Paths

- Poisoned pull requests that execute during CI on privileged runners
- Long-lived, overly broad secrets stored in pipeline configuration
- Unpinned third-party actions or plugins pulling arbitrary updates

## Hardening Checklist

1. Pin all third-party actions and dependencies to a commit hash
2. Use short-lived, scoped credentials via OIDC federation instead of static secrets
3. Require review for workflow file changes with the same rigor as production code
4. Isolate runners for public repositories from those with access to sensitive secrets

## How We Test This

Our Software Development and Penetration Testing teams jointly assess CI/CD security as part of our supply chain engagements — attacking the pipeline the same way we would attack production.`,
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(blogPosts.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, count);
}
