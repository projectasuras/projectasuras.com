// Mock API client. Swap the implementations below for real fetch calls
// against your backend once endpoints are available.

const MOCK_LATENCY = 700;

function delay<T>(value: T, ms = MOCK_LATENCY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export interface ContactPayload {
  serviceType: string;
  organization: string;
  orgSize: string;
  industry: string;
  message: string;
  urgency: string;
  name: string;
  email: string;
  phone: string;
}

export interface NewsletterPayload {
  email: string;
}

export interface WaitlistPayload {
  email: string;
}

export async function submitContactForm(payload: ContactPayload) {
  // POST /api/contact
  return delay({ ok: true, id: crypto.randomUUID(), ...payload });
}

export async function submitNewsletter(payload: NewsletterPayload) {
  // POST /api/newsletter
  return delay({ ok: true, ...payload });
}

export async function submitWaitlist(payload: WaitlistPayload) {
  // POST /api/waitlist
  return delay({ ok: true, ...payload });
}
