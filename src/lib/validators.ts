import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});
export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const waitlistSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});
export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const contactStep1Schema = z.object({
  serviceType: z.enum(['pentest', 'training', 'development', 'other'], {
    message: 'Select a service type',
  }),
});

export const contactStep2Schema = z.object({
  organization: z.string().min(2, 'Organization name is required'),
  orgSize: z.string().min(1, 'Select an organization size'),
  industry: z.string().min(1, 'Select an industry'),
});

export const contactStep3Schema = z.object({
  message: z.string().min(20, 'Please provide at least 20 characters'),
  urgency: z.enum(['low', 'medium', 'high', 'critical'], {
    message: 'Select an urgency level',
  }),
});

export const contactStep4Schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
});

export const contactFormSchema = contactStep1Schema
  .and(contactStep2Schema)
  .and(contactStep3Schema)
  .and(contactStep4Schema);

export type ContactFormInput = z.infer<typeof contactFormSchema>;
