# Project Structure

## Overview

Use this file as a quick map of the project structure. The app runs via the local Vite development server assigned by your environment, so you can open the site in the browser using the active project URL shown in the terminal.

```
portfolio/
├── public/                   # Static assets
│   ├── cv.pdf               # Downloadable CV (REPLACE THIS!)
│   ├── favicon.svg          # Site icon
│   └── icons.svg            # SVG icons
│
├── src/
│   ├── assets/              # Images and media
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/          # React components
│   │   ├── Navigation.jsx   # Sticky navigation bar
│   │   ├── Hero.jsx         # Hero section with animation
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Projects.jsx     # Project portfolio
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Contact.jsx      # Contact information
│   │   └── Footer.jsx       # Footer with links
│   │
│   ├── App.jsx              # Main app component
│   ├── App.css              # Custom CSS styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind
│
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── README.md                # Project overview
├── DEPLOYMENT.md            # Deployment guide
├── CUSTOMIZATION.md         # Customization guide
└── PROJECT_STRUCTURE.md     # This file
```

## Component Details

### Navigation.jsx
**Purpose:** Sticky navigation with smooth scroll
**Features:**
- Responsive mobile menu
- Smooth scroll to sections
- Scroll-based styling
- CTA button

**Key Props:** None (standalone)

**State:**
- `isScrolled` — Tracks scroll position
- `isMobileMenuOpen` — Mobile menu toggle

---

### Hero.jsx
**Purpose:** Landing section with bold typography
**Features:**
- Animated text reveal
- Abstract geometric composition
- Rotating elements
- CTA buttons
- Info strip

**Animations:**
- Staggered text appearance
- Rotating circles
- Circular typography

---

### About.jsx
**Purpose:** Personal introduction
**Features:**
- Two-column layout
- Info cards
- CV download button
- Scroll-triggered animations

**Content:**
- Biography
- Location
- Education
- Languages
- Focus areas

---

### Skills.jsx
**Purpose:** Technical capabilities showcase
**Features:**
- Four-category grid
- Hover effects
- Organized skill lists
- Visual hierarchy with numbers

**Categories:**
- Frontend Development
- UI/UX Design
- Backend & Database
- Tools

---

### Projects.jsx
**Purpose:** Portfolio showcase
**Features:**
- Project cards with hover effects
- Technology tags
- Live demo and GitHub links
- Abstract mockups (ready for real screenshots)

**Data Structure:**
```javascript
{
  number: '01',
  title: 'PROJECT NAME',
  description: 'Description...',
  technologies: ['Tech1', 'Tech2'],
  liveUrl: 'https://...',
  githubUrl: 'https://github.com/...',
}
```

---

### Experience.jsx
**Purpose:** Work history timeline
**Features:**
- Vertical timeline
- Position cards
- Education sidebar
- Sticky education card on desktop

**Components:**
- Work positions with responsibilities
- Education with GPA

---

### Contact.jsx
**Purpose:** Contact information and CTA
**Features:**
- Contact details with icons
- Email CTA button
- Social links
- Dark theme section

**Includes:**
- Email
- Phone
- Location
- GitHub link

---

### Footer.jsx
**Purpose:** Site footer
**Features:**
- Minimal design
- Social icons
- Back to top button
- Copyright info

---

## Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Purpose:** Vite build tool configuration

---

### tailwind.config.js
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { /* Custom color palette */ },
      fontFamily: { /* Custom fonts */ },
    },
  },
}
```

**Purpose:** Tailwind CSS customization

---

### postcss.config.js
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**Purpose:** PostCSS configuration for Tailwind

---

### package.json
**Key Dependencies:**
- `react` v19.2.7 — UI library
- `react-dom` v19.2.7 — React DOM renderer
- `framer-motion` — Animation library
- `lucide-react` — Icon library
- `tailwindcss` — CSS framework
- `vite` — Build tool

**Scripts:**
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## Styling Architecture

### Color System
```
Black & White Theme:
- Primary Background: #FFFFFF
- Primary Text: #000000
- Dark Background: #000000
- Dark Text: #FFFFFF
- Secondary Background: #F4F4F4
- Border: #D9D9D9
- Muted Text: #777777
```

### Typography
```
Fonts:
- Sans: Inter (body text)
- Display: Space Grotesk (headings)

Scales:
- Small: text-xs, text-sm
- Body: text-base, text-lg
- Headings: text-2xl to text-8xl
```

### Spacing
```
Sections: py-32 (128px vertical padding)
Containers: max-w-7xl mx-auto
Content: px-6 lg:px-8
```

### Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## Animation System

### Framer Motion Patterns

**Fade In + Slide Up:**
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Staggered Animations:**
```javascript
transition={{ duration: 0.6, delay: index * 0.1 }}
```

**Continuous Rotation:**
```javascript
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
```

**Viewport Trigger:**
```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
```

---

## Data Flow

### Component Hierarchy
```
App
├── Navigation (stateful)
├── Hero
├── About
├── Skills
├── Projects
├── Experience
├── Contact
└── Footer
```

### State Management
- **Local State:** Each component manages its own state
- **No Global State:** Not needed for this portfolio
- **Navigation State:** Scroll position, mobile menu toggle

### Props
- Components are mostly **self-contained**
- No props passed between sections
- Data defined **within components**

---

## Build Process

### Development
```bash
npm run dev
```
1. Vite starts the local development server
2. Fast Hot Module Replacement (HMR)
3. Open the app in your browser using the active Vite URL shown in the terminal

### Production
```bash
npm run build
```
1. Vite bundles for production
2. Tailwind purges unused CSS
3. Code splitting optimization
4. Minification
5. Output to `dist/` folder

### Preview
```bash
npm run preview
```
Test production build locally

---

## File Size Budget

**Target Sizes:**
- HTML: < 5KB
- CSS: < 25KB (gzipped)
- JS: < 150KB (gzipped)

**Current Build:**
- HTML: ~1.76 KB
- CSS: ~22.15 KB (~4.74 KB gzipped)
- JS: ~394.30 KB (~125.09 KB gzipped)

---

## Browser Support

**Supported Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Features Used:**
- CSS Grid & Flexbox
- ES6+ JavaScript
- CSS Custom Properties
- Intersection Observer API

---

## Accessibility Features

- ✅ Semantic HTML
- ✅ ARIA labels on buttons
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt text ready (add for images)
- ✅ Sufficient color contrast
- ✅ Responsive text sizes
- ✅ Skip to content (via navigation)

---

## Performance Optimizations

1. **Code Splitting:** Automatic via Vite
2. **Lazy Loading:** Animations trigger on scroll
3. **Image Optimization:** Ready for WebP
4. **CSS Purging:** Unused Tailwind removed
5. **Minification:** Production build optimized
6. **Tree Shaking:** Unused code removed
7. **Gzip Compression:** Server-level (hosting)

---

## Security Considerations

1. **External Links:** `rel="noopener noreferrer"` added
2. **No API Keys:** Static site only
3. **No User Input:** No forms or databases
4. **Safe Dependencies:** Regular updates recommended

---

## Maintenance Tasks

### Regular
- [ ] Update dependencies monthly
- [ ] Check for security vulnerabilities
- [ ] Test on new browser versions
- [ ] Verify all links work

### Content Updates
- [ ] Add new projects as completed
- [ ] Update experience section
- [ ] Refresh skills as learned
- [ ] Update CV file

### Performance
- [ ] Run Lighthouse audits quarterly
- [ ] Optimize new images
- [ ] Monitor bundle size

---

## Quick Reference

### Start Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Test Production Build
```bash
npm run preview
```

### Update Dependencies
```bash
npm update
```

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

---

## Common Tasks

### Add a New Project
1. Open `src/components/Projects.jsx`
2. Add to `projects` array
3. Add screenshot to `src/assets/`
4. Update project object with image import

### Change Contact Info
1. Open `src/components/Contact.jsx`
2. Update `contactInfo` array
3. Update email links

### Add New Skill
1. Open `src/components/Skills.jsx`
2. Add to appropriate `skillCategories` array

### Update Navigation
1. Open `src/components/Navigation.jsx`
2. Update `navLinks` array
3. Ensure section IDs match

---

## Troubleshooting

**Dev server won't start:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
- Check for console errors
- Verify all imports exist
- Run `npm run lint`

**Styles not working:**
- Check Tailwind config
- Verify index.css import
- Clear browser cache

**Images not showing:**
- Check import paths
- Verify files exist
- Use correct path format

---

## Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
