# Pre-Launch Checklist

Use this checklist before deploying your portfolio to production.

## 📁 Files & Assets

### Essential Files
- [ ] Replace `/public/cv.pdf` with your actual CV/resume
- [ ] Update `/public/favicon.svg` if desired (optional)
- [ ] **NEW: Add project screenshots to `/src/assets/projects/`**
- [ ] Remove unused placeholder images

### Project Screenshots ⭐ NEW
The portfolio now features **large project preview cards**!

- [ ] Arch Futsal screenshot (1200x800px recommended)
- [ ] Time Tailor screenshot (1200x800px recommended)
- [ ] EV Charging Platform screenshot (1200x800px recommended)
- [ ] Skills Scout screenshot (1200x800px recommended)

**📸 See `HOW_TO_ADD_SCREENSHOTS.md` for detailed instructions**

> **Note:** The current showcases use elegant placeholders. Replace them with real screenshots to maximize impact!

---

## ✏️ Content Updates

### Personal Information
- [ ] Verify name spelling everywhere
- [ ] Check email: `muke8122@gmail.com`
- [ ] Check phone: `9702764543`
- [ ] Verify GitHub URL: `https://github.com/Drogon2000-mp`
- [ ] Update LinkedIn URL if you have one

### About Section
- [ ] Review biography text
- [ ] Verify degree name: "Bachelor of Computer Applications"
- [ ] Check college name: "Nepal Kasthamandap College"
- [ ] Verify GPA: 3.07
- [ ] Check languages: Nepali and English

### Experience
- [ ] Frontend Developer Intern dates: May 24, 2026 – August 26, 2026
- [ ] UI/UX Designer Intern dates: January 2025 – April 2025
- [ ] Verify company names
- [ ] Review responsibilities lists

### Projects
- [ ] Verify all project links work
- [ ] Check GitHub repository URLs
- [ ] Test live demo URLs
- [ ] Ensure project descriptions are accurate
- [ ] Verify technology stacks listed

---

## 🔗 Links Verification

### External Links
- [ ] Test Arch Futsal live demo: https://arch-futsal-frontend.onrender.com/
- [ ] Test Time Tailor GitHub: https://github.com/Drogon2000-mp/time-tailor
- [ ] Test EV Charging GitHub: https://github.com/Drogon2000-mp/Ev-charging-Finale
- [ ] Test Skills Scout GitHub: https://github.com/iAmVip1/mern-project
- [ ] Test your GitHub profile link
- [ ] Verify email mailto links work

### Internal Navigation
- [ ] Home link scrolls to hero
- [ ] About link scrolls to about section
- [ ] Skills link scrolls to skills section
- [ ] Projects link scrolls to projects section
- [ ] Experience link scrolls to experience section
- [ ] Contact link scrolls to contact section

---

## 📱 Testing

### Desktop Testing
- [ ] Test on Chrome
- [ ] Test on Safari
- [ ] Test on Firefox
- [ ] Test on Edge (if available)
- [ ] Verify all animations work smoothly
- [ ] Check hover states on buttons/links

### Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test mobile menu toggle
- [ ] Verify no horizontal scroll
- [ ] Check text readability
- [ ] Test touch interactions

### Responsive Testing
- [ ] 375px (small mobile)
- [ ] 768px (tablet)
- [ ] 1024px (small desktop)
- [ ] 1920px (large desktop)

### Browser Developer Tools
```
1. Open Chrome DevTools (F12)
2. Click Device Toggle (Ctrl+Shift+M / Cmd+Shift+M)
3. Test different devices
```

---

## 🎨 Visual Checks

### Typography
- [ ] All text is readable
- [ ] Font sizes are appropriate
- [ ] Line heights look good
- [ ] No text overflow issues

### Spacing
- [ ] Sections have proper spacing
- [ ] Content isn't cramped
- [ ] White space is balanced
- [ ] Mobile spacing looks good

### Colors
- [ ] Black and white theme consistent
- [ ] Borders visible but subtle
- [ ] Text contrast is sufficient
- [ ] Dark sections have white text

### Images
- [ ] All images load properly
- [ ] No broken image icons
- [ ] Images are appropriate size
- [ ] Images don't slow down page

---

## ⚡ Performance

### Build Test
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] Check bundle size (should be < 500KB total)
- [ ] No console warnings

### Preview Test
```bash
npm run preview
```
- [ ] Site works in production mode
- [ ] All features work
- [ ] Animations are smooth

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run audit for Desktop and Mobile
4. Target scores:
   - [ ] Performance: > 90
   - [ ] Accessibility: > 90
   - [ ] Best Practices: > 90
   - [ ] SEO: > 90

---

## 🔒 Security

- [ ] All external links have `rel="noopener noreferrer"`
- [ ] No sensitive information in code
- [ ] No API keys or secrets
- [ ] Dependencies are up to date

---

## 📊 SEO

### Meta Tags (index.html)
- [ ] Page title is descriptive
- [ ] Meta description is compelling
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

### Content
- [ ] Headings are semantic (h1, h2, h3)
- [ ] Alt text on images (add when you add real screenshots)
- [ ] Descriptive link text
- [ ] Page structure is logical

---

## 🚀 Deployment Prep

### Code Quality
- [ ] Run linter: `npm run lint`
- [ ] Fix any lint errors/warnings
- [ ] Remove console.log statements
- [ ] Remove commented-out code

### Git
- [ ] All changes committed
- [ ] Pushed to GitHub
- [ ] Repository is public (if deploying)
- [ ] README.md is informative

### Environment
- [ ] Node version documented (18+)
- [ ] Dependencies locked (package-lock.json)
- [ ] Build commands documented

---

## 📄 Documentation

- [ ] README.md reviewed
- [ ] DEPLOYMENT.md understood
- [ ] CUSTOMIZATION.md reviewed
- [ ] PROJECT_STRUCTURE.md familiar

---

## 🎯 Final Steps

1. **Local Testing**
   ```bash
   npm run build
   npm run preview
   ```
   - [ ] Everything works

2. **Choose Deployment Platform**
   - [ ] Vercel (recommended)
   - [ ] Netlify
   - [ ] GitHub Pages
   - [ ] Other: ___________

3. **Deploy**
   - [ ] Follow deployment guide
   - [ ] Site is live
   - [ ] Custom domain (optional)

4. **Post-Deployment**
   - [ ] Test live site
   - [ ] Share with friends for feedback
   - [ ] Add to resume/CV
   - [ ] Share on social media

---

## 📝 Optional Enhancements

### Now (Quick Wins)
- [ ] Add real project screenshots
- [ ] Add LinkedIn profile link
- [ ] Create custom favicon
- [ ] Add blog link (if you have one)

### Soon (Nice to Have)
- [ ] Add Google Analytics
- [ ] Add project case studies
- [ ] Create project demo videos
- [ ] Add testimonials (if you have them)

### Future (Advanced)
- [ ] Add blog section
- [ ] Add contact form with backend
- [ ] Add dark mode toggle
- [ ] Add more micro-interactions

---

## 🐛 Common Issues

### Issue: Styles not loading
**Fix:** Check that `index.css` is imported in `main.jsx`

### Issue: Images not showing
**Fix:** Verify image paths and imports

### Issue: Navigation not scrolling
**Fix:** Check section IDs match navigation hrefs

### Issue: Build fails
**Fix:** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Mobile menu not closing
**Fix:** Already handled in Navigation component

---

## ✅ Ready to Launch?

If you've checked all items above:

1. **Deploy your site** (see DEPLOYMENT.md)
2. **Test the live URL**
3. **Share with the world!**

---

## 📞 Need Help?

**Resources:**
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite Guide: https://vitejs.dev

**Deployment Help:**
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

---

## 🎉 Congratulations!

Your portfolio is ready to showcase your work to the world.

**Remember:**
- Keep it updated with new projects
- Refresh content regularly
- Monitor for broken links
- Update dependencies monthly

**Good luck with your career!** 🚀
