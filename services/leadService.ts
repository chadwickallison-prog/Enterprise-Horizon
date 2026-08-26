export type LeadType = 'demo' | 'signup';

export interface LeadPayload {
  type: LeadType;
  name: string;
  email: string;
  company?: string;
  message?: string;
}

export const sendLeadNotification = async (payload: LeadPayload): Promise<void> => {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = 'We could not send your information. Please try again.';
    try {
      const body = await response.json();
      if (body?.error) message = body.error;
    } catch {
      // Keep the generic message if the server does not return JSON.
    }
    throw new Error(message);
  }
};
