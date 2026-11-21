# Mukesh Nepali Pariyar — Portfolio

A premium, modern personal portfolio website showcasing frontend development and UI/UX design work with sophisticated CSS animations and interactions.

## 🎨 Design Philosophy

- **Black & White Visual Identity**: Sophisticated minimalism without colorful gradients
- **Swiss Editorial Design**: Clean typography and generous whitespace
- **Brutalist Minimalism**: Bold, functional, and distinctive
- **Motion & Interaction**: 40+ subtle animations powered by Framer Motion and custom CSS
- **Premium Feel**: Attention to detail in every interaction

## ✨ Key Features

### Large Project Showcase ⭐ NEW
- **Visually Impressive Layouts**: 4 alternating layout styles
- **Large Screenshots**: 70-80% image coverage for impact
- **Premium Editorial Design**: Professional portfolio presentation
- **Black & White Cards**: Mixed backgrounds for visual rhythm
- **Smooth Interactions**: Zoom on hover, animated arrows

### Visual Effects & Animations
- 40+ custom CSS animations and effects
- Smooth page transitions and scroll effects
- Interactive hover states on all elements
- Magnetic button effects
- Gradient text animations
- Shine sweep effects
- Rotating geometric elements
- Staggered content reveals
- Professional micro-interactions

### User Experience
- Sticky navigation with backdrop blur
- Smooth scroll to sections
- Mobile-responsive menu with animations
- Custom scrollbar styling
- Loading skeleton states
- Reduced motion support for accessibility

## 🚀 Tech Stack

- **React.js** — Component-based UI framework
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animation library
- **Lucide React** — Icon library
- **Express.js** — Backend server for API
- **Nodemailer** — Email service integration
- **Custom CSS** — Advanced animations and effects

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (serves built files + API)
npm start

# Preview production build
npm run preview
```

## 🌐 Deployment to Render

This portfolio includes a working contact form API and is ready to deploy on Render.

### Quick Deploy Commands

For Render dashboard configuration:

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm start
```

### Environment Variables Required

Add these in your Render dashboard:

```bash
NODE_ENV=production

# Email Configuration (Choose SMTP or Brevo API)
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
BREVO_SENDER_NAME=Your Name

# Optional
CONTACT_NOTIFY_EMAIL=your-email@example.com
```

### Detailed Deployment Guides

- 📖 **RENDER_DEPLOYMENT.md** — Complete Render deployment guide
- ⚡ **RENDER_COMMANDS.md** — Quick reference for commands
- 🔧 **render.yaml** — Render configuration file

See these files for step-by-step deployment instructions.

## 🎯 What Makes This Portfolio Special

### 1. **Premium CSS System**
- Comprehensive animation library
- Advanced hover effects
- Smooth transitions with easing functions
- GPU-accelerated transforms
- Performance-optimized

### 2. **Black & White Excellence**
Visual distinction achieved through:
- Typography hierarchy and contrast
- Layout precision and spacing
- Sophisticated motion design
- Abstract geometric elements
- Professional interactions

### 3. **No Template Look**
- Unique design language
- Custom components
- Thoughtful animations
- Attention to detail
- Memorable experience

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/         # React components
│   ├── index.css          # Main CSS with 40+ effects
│   ├── App.css            # Additional animations
│   └── App.jsx            # Main application
├── api/
│   └── contact.js         # Contact form API endpoint
├── lib/
│   └── contact-email.js   # Email service utilities
├── public/                # Static assets
├── server.js              # Express server (production)
├── render.yaml            # Render deployment config
├── CSS_FEATURES.md        # Complete CSS documentation
├── VISUAL_EFFECTS.md      # Visual effects showcase
├── CUSTOMIZATION.md       # Customization guide
├── DEPLOYMENT.md          # General deployment instructions
├── RENDER_DEPLOYMENT.md   # Render-specific deployment guide
├── RENDER_COMMANDS.md     # Quick command reference
└── CHECKLIST.md           # Pre-launch checklist
```

## 🎨 CSS Features

### Animations
- Fade in/out effects
- Slide animations
- Scale transformations
- Rotation effects
- Pulse & bounce
- Gradient text
- Glitch effects
- Reveal curtains

### Hover Effects
- Magnetic buttons
- Slide-in backgrounds
- Growing underlines
- Border animations
- Shadow transitions
- Shine sweeps
- Card elevation

### Design Patterns
- Brutalist shadows
- Custom scrollbar
- Noise textures
- Dot patterns
- Grid overlays
- Glass morphism

## 🛠️ Configuration

### Update CV File

Replace the placeholder CV file:
```
public/cv.pdf
```

### Update Content

All content is located in the component files:
- `src/components/Hero.jsx` — Hero section
- `src/components/About.jsx` — About section
- `src/components/Skills.jsx` — Skills section
- `src/components/Projects.jsx` — Projects showcase
- `src/components/Experience.jsx` — Work experience
- `src/components/Contact.jsx` — Contact information

### Add Project Screenshots

To add actual project screenshots:
1. Add images to `src/assets/` or `public/`
2. Update the Projects component to import and use the images

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## ⚡ Performance

**Build Metrics:**
- HTML: ~1.76 KB
- CSS: ~39 KB (~8.1 KB gzipped)
- JS: ~400 KB (~126 KB gzipped)

**Optimizations:**
- GPU-accelerated animations
- Lazy loading with Intersection Observer
- Code splitting via Vite
- CSS purging (unused styles removed)
- Semantic HTML for SEO
- Accessible ARIA labels

## 🎯 Key Features

### Navigation
- Sticky header with smooth scroll
- Logo scale effect on hover
- Link underline animations
- Button slide effects
- Mobile menu with rotation
- Backdrop blur when scrolled

### Hero Section
- Staggered text reveals
- Interactive word hover
- Animated availability badge
- Pulsing geometric circles
- Rotating monogram
- Floating decorative elements
- Gradient text effect

### Projects
- Card hover with scale
- Shine sweep effect
- Animated technology tags
- Browser mockup animations
- Interactive buttons
- Decorative backgrounds
- **NEW: Large screenshot showcases with alternating layouts**
- **NEW: Black & white card variations for visual contrast**

### Throughout
- Smooth scroll-triggered animations
- Professional micro-interactions
- Consistent visual language
- Premium feel throughout

## 📄 Documentation

Comprehensive guides included:
- **README.md** — Project overview (this file)
- **PROJECT_SHOWCASE_GUIDE.md** — ⭐ NEW: Complete guide to the large project preview section
- **HOW_TO_ADD_SCREENSHOTS.md** — ⭐ NEW: Step-by-step screenshot guide
- **CSS_FEATURES.md** — Complete CSS documentation
- **VISUAL_EFFECTS.md** — Visual effects showcase
- **DEPLOYMENT.md** — Deployment instructions
- **CUSTOMIZATION.md** — How to customize
- **PROJECT_STRUCTURE.md** — Technical docs
- **CHECKLIST.md** — Pre-launch checklist

## 🚀 Deployment

### Render (Recommended for Full-Stack)

**Build Command:** `npm install && npm run build`  
**Start Command:** `npm start`

Includes working contact form API with email notifications.

See **RENDER_DEPLOYMENT.md** for complete guide.

### Static Hosting (Vercel, Netlify)

For static deployment without contact form API:

- **Vercel** — Auto-detected configuration
- **Netlify** — Build: `npm run build`, Publish: `dist`
- **GitHub Pages** — See DEPLOYMENT.md

Note: Contact form requires API backend (use Render or add serverless functions).

See `DEPLOYMENT.md` for detailed instructions.

## 🎨 Customization

Want to customize? Check out:
- `CUSTOMIZATION.md` for content updates
- `CSS_FEATURES.md` for styling options
- `tailwind.config.js` for color scheme

## 🌟 Highlights

What makes this portfolio stand out:

✅ **40+ Custom Animations** - Professional micro-interactions
✅ **Black & White Sophistication** - No colors needed for impact
✅ **Premium Feel** - Attention to every detail
✅ **Smooth Interactions** - Buttery smooth transitions
✅ **Performance Optimized** - Fast and efficient
✅ **Fully Accessible** - WCAG compliant
✅ **Mobile Perfect** - Responsive on all devices
✅ **Production Ready** - Deploy immediately

## 📄 License

Personal portfolio website for Mukesh Nepali Pariyar.

## 👨‍💻 Developer

**Mukesh Nepali Pariyar**
- Frontend Developer | UI/UX Designer
- Location: Kathmandu, Nepal
- Email: muke8122@gmail.com
- GitHub: [Drogon2000-mp](https://github.com/Drogon2000-mp)

---

Built with attention to detail, smooth animations, and a focus on creating a memorable user experience through sophisticated black-and-white design.
# portfolio
