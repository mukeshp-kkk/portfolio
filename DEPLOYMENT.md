# Deployment Guide

## Quick Start

Your portfolio is production-ready! Here are the deployment options:

## Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Vercel will automatically detect the Vite configuration.

## Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

## Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace with your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

## Before Deployment Checklist

- [ ] Replace `/public/cv.pdf` with your actual CV
- [ ] Add real project screenshots to `/src/assets/`
- [ ] Update project images in `Projects.jsx` component
- [ ] Test on mobile devices (use Chrome DevTools)
- [ ] Verify all links work
- [ ] Check GitHub URLs are correct
- [ ] Update email and phone in `Contact.jsx` if needed
- [ ] Test the live site on different browsers

## Environment Variables

No environment variables required! This is a static site.

## Custom Domain

After deployment, you can add a custom domain:

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

**Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records as instructed

## Performance Tips

The site is already optimized with:
- ✅ Lazy loading animations
- ✅ Optimized images (use WebP format for photos)
- ✅ Minimal dependencies
- ✅ Code splitting
- ✅ CSS purging (via Tailwind)

## Monitoring

After deployment, use:
- Google Analytics (add to `index.html`)
- Vercel Analytics (built-in)
- Google Search Console

## Troubleshooting

**Build fails:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Styles not loading:**
- Ensure `index.css` is imported in `main.jsx`
- Check browser console for errors

**Images not showing:**
- Images in `src/` should be imported
- Images in `public/` should use absolute paths `/filename.ext`

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the build logs
3. Ensure Node.js version is 18 or higher
