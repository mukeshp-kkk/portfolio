# Fix Brevo API Permission Error

## Error Message
```
Brevo API error (403): {"message":"api key is not authorized for resource \"transactional.email\"","code":"permission_denied"}
```

## Cause
Your Brevo API key doesn't have permission to send transactional emails.

---

## Solution 1: Generate New API Key with Correct Permissions

### Step 1: Log into Brevo
Go to https://app.brevo.com/

### Step 2: Navigate to API Keys
1. Click on your profile (top right)
2. Go to **SMTP & API**
3. Click on **API Keys** tab

### Step 3: Create New API Key
1. Click **Generate a new API key**
2. Give it a name: `Portfolio Contact Form`
3. **IMPORTANT**: Enable these permissions:
   - ✅ **Transactional emails** (REQUIRED)
   - ✅ **Email campaigns** (optional)
4. Click **Generate**

### Step 4: Copy the New Key
Copy the full API key that starts with `xkeysib-...`

### Step 5: Update Render Environment
1. Go to https://dashboard.render.com/
2. Click your **portfolio** service
3. Go to **Environment** tab
4. Find `BREVO_API_KEY`
5. Click **Edit**
6. Paste the new API key
7. Click **Save Changes**

Render will automatically redeploy!

---

## Solution 2: Use SMTP Instead (Alternative)

If you prefer to use SMTP instead of the API, you can use your existing SMTP credentials.

### Update Render Environment Variables

Keep these:
```
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=b2c0b4001@smtp-brevo.com
EMAIL_PASS=bskE60GNbL8tEF9
EMAIL_FROM=muke8122@gmail.com
```

Remove or leave empty:
```
BREVO_API_KEY=(leave blank or remove)
```

### Important Note:
SMTP might not work on Render free tier due to port blocking. API is recommended.

---

## Solution 3: Use Gmail SMTP (Easiest Alternative)

Gmail SMTP works well and is easy to set up.

### Step 1: Enable Gmail App Password
1. Go to https://myaccount.google.com/security
2. Turn on **2-Step Verification** (if not enabled)
3. Go to **App passwords**: https://myaccount.google.com/apppasswords
4. Select app: **Mail**
5. Select device: **Other** (name it "Portfolio")
6. Click **Generate**
7. Copy the 16-character password

### Step 2: Update Render Environment
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=muke8122@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_FROM=muke8122@gmail.com
BREVO_API_KEY=(remove or leave blank)
```

### Step 3: Update Code to Not Require API Key

Edit `lib/contact-email.js` to remove API key requirement when SMTP is configured.

---

## Recommended Solution

**Use Solution 1 (New Brevo API Key with correct permissions)**

Why?
- ✅ Most reliable on cloud platforms
- ✅ No port restrictions
- ✅ Free tier: 300 emails/day
- ✅ Already set up in code

---

## Testing After Fix

1. Wait for Render to redeploy (1-2 minutes)
2. Visit https://portfolio-8h41.onrender.com
3. Fill out contact form
4. Submit
5. Check for success message
6. Check email for notifications

---

## Quick Fix Command for Render Dashboard

1. Go to: https://dashboard.render.com/
2. Service: **portfolio**
3. Tab: **Environment**
4. Variable: **BREVO_API_KEY**
5. Action: **Generate new key from Brevo with transactional email permission**
6. Update: **Paste new key**
7. Save: **Render redeploys automatically**

---

## Need More Help?

- Brevo Support: https://help.brevo.com/
- Check Render logs for errors
- Test locally first: `npm start`

---

**After updating the API key with correct permissions, your contact form will work!** ✅
