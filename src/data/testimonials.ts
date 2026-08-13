import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Project Asuras found a chained authentication bypass our internal team and two prior vendors missed entirely. Their report was the clearest we have ever received.',
    author: 'Marcus Chen',
    role: 'CISO',
    company: 'Meridian Financial Group',
    image: 'https://i.pravatar.cc/160?img=12',
  },
  {
    id: 't2',
    quote:
      'The red team engagement completely changed how our board thinks about security investment. Within a quarter we closed gaps that had existed for years.',
    author: 'Dr. Amara Okafor',
    role: 'VP of Information Security',
    company: 'Northbridge Health Systems',
    image: 'https://i.pravatar.cc/160?img=32',
  },
  {
    id: 't3',
    quote:
      'Our students went from reading about exploits to writing them. The lab environment Asuras built for our curriculum is the best hands-on platform we have used.',
    author: 'Prof. Elena Vasquez',
    role: 'Director, Cybersecurity Program',
    company: 'Cascade State University',
    image: 'https://i.pravatar.cc/160?img=45',
  },
  {
    id: 't4',
    quote:
      'They shipped us a custom detection pipeline in six weeks that our previous vendor quoted eight months for. Technically excellent and easy to work with.',
    author: 'Jonas Lindqvist',
    role: 'Head of Platform Engineering',
    company: 'Vireo Cloud',
    image: 'https://i.pravatar.cc/160?img=51',
  },
];
