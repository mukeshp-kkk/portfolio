# Portfolio Deployment Guide for Render

This guide will help you deploy your portfolio website with API support on Render.

## 📋 Prerequisites

- GitHub account with your portfolio repository
- Render account (sign up at https://render.com)
- Email service credentials (Brevo API key or SMTP credentials)

## 🚀 Quick Deployment Steps

### 1. Push Your Code to GitHub

```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### 2. Create New Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** button
3. Select **"Web Service"**
4. Connect your GitHub repository (`Drogon2000-mp/portfolio`)
5. Configure the service with these settings:

#### Service Configuration

| Field | Value |
|-------|-------|
| **Name** | `portfolio` (or your preferred name) |
| **Environment** | `Node` |
| **Region** | Choose closest to your location |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | `Free` (or paid plan for custom domain) |

### 3. Set Environment Variables

In the Render dashboard, add these environment variables:

#### Required Variables

```
NODE_ENV=production
```

#### Email Configuration (Choose Option 1 OR Option 2)

**Option 1: SMTP Configuration (Brevo SMTP)**
```
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password
EMAIL_FROM=your-email@example.com
```

**Option 2: Brevo API**
```
BREVO_API_KEY=your-api-key-here
BREVO_SENDER_EMAIL=your-email@example.com
BREVO_SENDER_NAME=Mukesh Nepali Pariyar
```

#### Optional Variables
```
CONTACT_NOTIFY_EMAIL=your-email@example.com
```

### 4. Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Install dependencies
   - Build your React app
   - Start the Express server
3. Wait for deployment to complete (usually 2-5 minutes)

### 5. Get Your Live URL

Once deployed, you'll receive a URL like:
```
https://portfolio-xxxx.onrender.com
```

## 📝 Build & Start Commands Explained

### Build Command
```bash
npm install && npm run build
```
- **`npm install`**: Installs all dependencies
- **`npm run build`**: Builds the React app using Vite (creates `dist` folder)

### Start Command
```bash
npm start
```
- Runs `node server.js` which:
  - Serves the built React app from `dist` folder
  - Handles `/api/contact` endpoint for the contact form
  - Runs on port assigned by Render (or 3000 locally)

## 🔧 Local Testing Before Deployment

Test the production build locally:

```bash
# 1. Build the app
npm run build

# 2. Start the server
npm start
```

Visit `http://localhost:3000` to test your app.

## 🌐 Custom Domain Setup (Optional)

If you have a custom domain:

1. Go to your web service on Render
2. Click **"Settings"**
3. Scroll to **"Custom Domain"**
4. Add your domain and follow DNS configuration instructions

## 🔐 Environment Variables Security

⚠️ **Important**: Never commit `.env` file to GitHub!

- Your `.gitignore` already excludes `.env`
- Only add environment variables through Render dashboard
- Keep your API keys and passwords secure

## 📊 Monitoring Your Deployment

### View Logs
1. Go to your web service on Render
2. Click **"Logs"** tab
3. Monitor real-time logs for errors or issues

### Check Status
- **"Live"**: Service is running ✅
- **"Building"**: Deployment in progress 🔨
- **"Failed"**: Check logs for errors ❌

## 🐛 Troubleshooting

### Build Failed
- Check if all dependencies are in `package.json`
- Ensure `build` command is correct
- Review build logs for specific errors

### Server Won't Start
- Verify `start` command is `npm start`
- Check if `server.js` exists
- Ensure Express is installed

### API Not Working
- Verify environment variables are set correctly
- Check API logs in Render dashboard
- Test email credentials are valid

### Contact Form Errors
- Ensure email service credentials are correct
- Check if SMTP server allows connections
- Verify sender email is authorized

## 🔄 Updating Your Portfolio

To update your live site:

```bash
# 1. Make your changes
# 2. Commit changes
git add .
git commit -m "Update portfolio"

# 3. Push to GitHub
git push origin main
```

Render will automatically detect the push and redeploy! 🚀

## 📦 What Gets Deployed

```
portfolio/
├── dist/              # Built React app (created during build)
├── api/               # API endpoints
├── lib/               # Email utilities
├── server.js          # Express server
├── package.json       # Dependencies and scripts
└── node_modules/      # Installed packages
```

## 💡 Tips

1. **Free Tier Limitations**:
   - Services spin down after inactivity
   - First request after inactivity may be slow (cold start)
   - Consider upgrading for production use

2. **Performance**:
   - Enable compression for faster loading
   - Use CDN for static assets (optional)
   - Monitor build times

3. **Maintenance**:
   - Regularly update dependencies
   - Monitor error logs
   - Test contact form regularly

## 🆘 Need Help?

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com/)
- Check deployment logs for specific errors

---

Built with ❤️ by Mukesh Nepali Pariyar
