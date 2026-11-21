# Render Deployment Commands - Quick Reference

## 🎯 Essential Commands for Render

### Build Command (for Render Dashboard)
```bash
npm install && npm run build
```

**What it does:**
- Installs all npm dependencies
- Builds the React app with Vite
- Creates production-ready files in `dist/` folder

---

### Start Command (for Render Dashboard)
```bash
npm start
```

**What it does:**
- Starts the Express server (`node server.js`)
- Serves the built React app from `dist/`
- Handles API endpoints (e.g., `/api/contact`)
- Listens on the port provided by Render

---

## 📋 Render Configuration Summary

Copy these exact values into your Render dashboard:

| Setting | Value |
|---------|-------|
| **Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | Auto (latest stable) |

---

## 🔑 Required Environment Variables

Add these in Render's Environment section:

```bash
NODE_ENV=production

# Choose SMTP or Brevo API (not both)

# Option 1: SMTP
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-smtp-user
EMAIL_PASS=your-smtp-password
EMAIL_FROM=your-email@example.com

# Option 2: Brevo API
BREVO_API_KEY=your-api-key
BREVO_SENDER_EMAIL=your-email@example.com
BREVO_SENDER_NAME=Mukesh Nepali Pariyar

# Optional
CONTACT_NOTIFY_EMAIL=your-email@example.com
```

---

## 🧪 Local Testing Commands

Test your production build locally before deploying:

```bash
# 1. Install dependencies
npm install

# 2. Build the app
npm run build

# 3. Start the server
npm start

# Visit: http://localhost:3000
```

---

## 🚀 Deployment Workflow

```bash
# 1. Make changes to your code
# 2. Test locally
npm run build
npm start

# 3. Commit and push
git add .
git commit -m "Your commit message"
git push origin main

# 4. Render auto-deploys! ✨
```

---

## 📝 Package.json Scripts

Your current scripts:

```json
{
  "scripts": {
    "dev": "vite",                    // Local development
    "build": "vite build",            // Build for production
    "start": "node server.js",        // Run production server
    "lint": "eslint .",               // Lint code
    "preview": "vite preview",        // Preview build locally
    "server:dev": "node server.js"    // Test server locally
  }
}
```

---

## ⚡ Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm start`
- [ ] Environment variables added in Render
- [ ] Email credentials configured
- [ ] `.env` file NOT committed to Git

---

## 🎨 Architecture

```
User Request
    ↓
Render (Port 10000 or auto)
    ↓
Express Server (server.js)
    ├── Static files → /dist (React app)
    └── API routes → /api/contact
            ↓
        Email Service (Brevo/SMTP)
```

---

## 💡 Pro Tips

1. **First Deploy**: Takes 2-5 minutes
2. **Subsequent Deploys**: Usually faster (1-3 minutes)
3. **Free Tier**: Spins down after 15 min inactivity
4. **Cold Start**: First request may take 30-60 seconds
5. **Logs**: Monitor in Render dashboard for issues

---

## 🆘 Common Issues

### Build Fails
```bash
# Check build locally first
npm run build

# If successful locally, check:
# - All dependencies in package.json
# - Build command in Render is correct
```

### Server Won't Start
```bash
# Test locally
npm start

# Check:
# - server.js exists in root
# - Express is in dependencies
# - Start command is "npm start"
```

### API Returns 500 Error
```bash
# Check Render logs
# Verify environment variables
# Test email credentials
```

---

## 📚 Resources

- **Render Docs**: https://render.com/docs/web-services
- **Render Status**: https://status.render.com/
- **Support**: https://render.com/support

---

**Ready to deploy? Copy the commands above into Render!** 🚀
