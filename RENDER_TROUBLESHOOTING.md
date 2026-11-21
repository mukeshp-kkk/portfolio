# Render Deployment Troubleshooting

## Contact Form SMTP Connection Timeout

### Problem
```
Error: Connection timeout
code: 'ETIMEDOUT'
command: 'CONN'
```

### Cause
Render's free tier blocks outbound SMTP connections on ports 25, 465, and 587 for security reasons. This prevents direct SMTP email sending.

### Solution
Use **Brevo API** instead of SMTP. The code automatically detects Render and uses the API when available.

---

## ✅ Fixed Configuration

### Updated Priority
1. **Brevo API** (when `BREVO_API_KEY` is set on Render)
2. **SMTP** (fallback for local development only)

### Environment Variables for Render

**Required for Brevo API:**
```bash
BREVO_API_KEY=your-api-key-here
BREVO_SENDER_EMAIL=your-email@example.com
BREVO_SENDER_NAME=Your Name
CONTACT_NOTIFY_EMAIL=your-email@example.com
```

**Optional (for local dev only):**
```bash
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=your-smtp-user
EMAIL_PASS=your-smtp-password
EMAIL_FROM=your-email@example.com
```

---

## How to Get Brevo API Key

1. Go to [Brevo](https://www.brevo.com/) (formerly Sendinblue)
2. Sign up or log in
3. Go to **Settings** → **SMTP & API**
4. Click **Generate a new API key**
5. Copy the key and add it to Render environment variables

**Note:** You already have this in your `.env` file!

---

## Update Render Environment Variables

1. Go to your Render dashboard: https://dashboard.render.com/
2. Click on your **portfolio** service
3. Go to **Environment** tab
4. Add/Update these variables:

```
BREVO_API_KEY=xkeysib-your-key-here
BREVO_SENDER_EMAIL=your-email@example.com
BREVO_SENDER_NAME=Mukesh Nepali Pariyar
CONTACT_NOTIFY_EMAIL=your-email@example.com
```

5. Click **Save Changes**
6. Render will automatically redeploy

---

## Testing After Fix

1. Wait for Render to redeploy (1-2 minutes)
2. Visit your portfolio: https://portfolio-8h41.onrender.com
3. Fill out the contact form
4. Submit the form
5. Check your email for notifications

---

## What Was Changed

### `lib/contact-email.js`
- Prioritizes Brevo API on cloud platforms
- Detects `RENDER` environment variable
- Falls back to SMTP only for local development
- Added connection timeout settings

### `api/contact.js`
- Added better error logging
- Improved error messages
- Logs successful sends

### `render.yaml`
- Added `RENDER=true` environment variable
- Ensures API is used instead of SMTP

---

## Common Issues

### "Email service is not configured"
**Cause:** Missing environment variables  
**Fix:** Add `BREVO_API_KEY`, `BREVO_SENDER_EMAIL` in Render

### "Brevo API error (401)"
**Cause:** Invalid API key  
**Fix:** Generate a new API key from Brevo dashboard

### "Brevo API error (400)"
**Cause:** Invalid email format or missing required fields  
**Fix:** Check that sender email is verified in Brevo

### Still getting SMTP timeout
**Cause:** Old deployment still running  
**Fix:** Manual redeploy from Render dashboard

---

## Alternative: Serverless Email Services

If you prefer not to use Brevo, here are alternatives:

### SendGrid
- Free tier: 100 emails/day
- API-based (works on Render)
- Easy integration

### Resend
- Free tier: 100 emails/month
- Modern API
- Great for developers

### AWS SES
- $0.10 per 1,000 emails
- Requires AWS account
- Very reliable

---

## Local Development

SMTP works fine locally:

```bash
# Use SMTP locally
npm run build
npm start

# Contact form will use SMTP on localhost
```

---

## Verify Configuration

Check if environment variables are set on Render:

1. Go to Render dashboard
2. Open your service
3. Click **Environment** tab
4. Verify these exist:
   - `BREVO_API_KEY`
   - `BREVO_SENDER_EMAIL`
   - `BREVO_SENDER_NAME`
   - `CONTACT_NOTIFY_EMAIL`

---

## Need Help?

- Check Render logs for specific errors
- Verify Brevo API key is valid
- Test locally first with `npm start`
- Ensure sender email is verified in Brevo

---

**After updating environment variables, Render will automatically redeploy and the contact form will work!** ✅
