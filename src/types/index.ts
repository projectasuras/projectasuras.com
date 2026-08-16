import type { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  comingSoon?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  company: string;
  logo: string;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  clientLogo: string;
  industry: 'Finance' | 'Healthcare' | 'Education' | 'Technology';
  title: string;
  excerpt: string;
  image: string;
  challenge: string;
  approach: string[];
  results: string[];
  stats: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
}

export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
}
