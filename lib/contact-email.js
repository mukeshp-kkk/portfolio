import process from 'node:process';
import nodemailer from 'nodemailer';

export const escapeHtml = (value = '') =>
  String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;',
  })[character]);

export async function sendContactEmails(payload, env = process.env) {
  const apiKey = env.BREVO_API_KEY;
  const senderEmail = env.BREVO_SENDER_EMAIL || env.EMAIL_FROM;
  const senderName = env.BREVO_SENDER_NAME || 'Mukesh Nepali Pariyar';
  const notifyEmail = env.CONTACT_NOTIFY_EMAIL || senderEmail;

  // Check if we have any email service configured
  const hasSmtpConfig = env.EMAIL_HOST && env.EMAIL_USER && env.EMAIL_PASS;
  if ((!apiKey && !hasSmtpConfig) || !senderEmail || !notifyEmail) {
    throw new Error('Email service is not configured');
  }

  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const subject = escapeHtml(payload.subject || 'New portfolio inquiry');
  const message = escapeHtml(payload.message).replace(/\n/g, '<br />');

  // Prioritize Brevo API for cloud platforms, but try SMTP as fallback
  const tryBrevoAPI = apiKey && env.RENDER;
  
  const smtpTransport = hasSmtpConfig
    ? nodemailer.createTransport({
        host: env.EMAIL_HOST,
        port: Number(env.EMAIL_PORT || 587),
        secure: env.EMAIL_SECURE === 'true',
        auth: { user: env.EMAIL_USER, pass: env.EMAIL_PASS },
        connectionTimeout: 15000,
        greetingTimeout: 15000,
        socketTimeout: 15000,
      })
    : null;

  const send = async (body) => {
    let apiError = null;

    // Try Brevo API first if available on Render
    if (tryBrevoAPI) {
      try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          const detail = await response.text();
          apiError = `Brevo API error (${response.status}): ${detail}`;
          console.error(apiError);
          
          // If API fails and we have SMTP, try SMTP
          if (!smtpTransport) {
            throw new Error(apiError);
          }
        } else {
          return; // Success!
        }
      } catch (error) {
        apiError = error.message;
        console.error('Brevo API failed:', apiError);
        
        // If API fails and we have SMTP, try SMTP
        if (!smtpTransport) {
          throw error;
        }
      }
    }

    // Try SMTP (either as primary method or as fallback)
    if (smtpTransport) {
      try {
        console.log('Attempting to send via SMTP...');
        await smtpTransport.sendMail({
          from: { name: body.sender.name, address: body.sender.email },
          to: body.to.map((recipient) => ({ name: recipient.name, address: recipient.email })),
          replyTo: body.replyTo ? { name: body.replyTo.name, address: body.replyTo.email } : undefined,
          subject: body.subject,
          html: body.htmlContent,
        });
        console.log('Email sent successfully via SMTP');
        return; // Success!
      } catch (smtpError) {
        console.error('SMTP failed:', smtpError.message);
        
        // If both API and SMTP failed, throw the API error (more informative)
        if (apiError) {
          throw new Error(`Email could not be sent. ${apiError}`);
        }
        throw smtpError;
      }
    }

    // If we only tried API and it failed
    if (apiError) {
      throw new Error(apiError);
    }

    throw new Error('No email service available');
  };

  await send({
    sender: { name: senderName, email: senderEmail },
    to: [{ email: notifyEmail, name: 'Mukesh' }],
    replyTo: { email: payload.email, name: payload.name },
    subject: `New inquiry from ${payload.name}: ${payload.subject || 'Portfolio message'}`,
    htmlContent: `
      <div style="margin:0;background:#f4f4f4;padding:40px 16px;font-family:Arial,sans-serif;color:#111">
        <div style="max-width:620px;margin:auto;background:#fff;border:1px solid #111">
          <div style="background:#111;color:#fff;padding:24px 28px">
            <div style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;opacity:.7">05 / Contact</div>
            <h1 style="margin:12px 0 0;font-size:28px">New portfolio inquiry</h1>
          </div>
          <div style="padding:28px">
            <p><strong>Name</strong><br>${name}</p>
            <p><strong>Email</strong><br><a style="color:#111" href="mailto:${email}">${email}</a></p>
            <p><strong>Subject</strong><br>${subject}</p>
            <div style="border-left:3px solid #111;padding:12px 16px;margin-top:20px;background:#f7f7f7"><strong>Message</strong><br><br>${message}</div>
          </div>
        </div>
      </div>`,
  });

  await send({
    sender: { name: senderName, email: senderEmail },
    to: [{ email: payload.email, name: payload.name }],
    subject: `Thank you for contacting ${senderName}`,
    htmlContent: `
      <div style="margin:0;background:#f4f4f4;padding:40px 16px;font-family:Arial,sans-serif;color:#111">
        <div style="max-width:620px;margin:auto;background:#fff;border:1px solid #111">
          <div style="background:#111;color:#fff;padding:28px">
            <div style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;opacity:.7">MUKESH NEPALI PARIYAR</div>
            <h1 style="margin:14px 0 0;font-size:32px;line-height:1.05">Thank you for reaching out.</h1>
          </div>
          <div style="padding:28px;font-size:16px;line-height:1.7">
            <p>Hi ${name},</p>
            <p>Your message has landed safely. Thank you for taking the time to contact me—I appreciate the conversation and will get back to you as soon as possible.</p>
            <p style="border-left:3px solid #111;padding-left:14px;color:#555">“${subject}”</p>
            <p>Best,<br><strong>${escapeHtml(senderName)}</strong><br>Frontend Developer &amp; UI/UX Designer</p>
          </div>
          <div style="border-top:1px solid #ddd;padding:18px 28px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#777">Clarity · Precision · Purpose</div>
        </div>
      </div>`,
  });
}
