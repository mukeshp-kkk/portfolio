import { sendContactEmails } from '../lib/contact-email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, subject, message } = body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: 'Please complete your name, email, and message.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    await sendContactEmails({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || 'New portfolio inquiry',
      message: message.trim(),
    });

    return res.status(200).json({ ok: true, message: 'Thanks! Your message has been sent.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Your message could not be sent right now. Please try again.' });
  }
}
