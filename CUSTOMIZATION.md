# Customization Guide

## Table of Contents
- [Updating Content](#updating-content)
- [Adding Project Screenshots](#adding-project-screenshots)
- [Modifying Colors](#modifying-colors)
- [Adding New Sections](#adding-new-sections)
- [Customizing Animations](#customizing-animations)

## Updating Content

### Personal Information

**Location:** `src/components/Hero.jsx`

```javascript
// Update the description
<p className="text-lg text-muted max-w-xl mb-8 leading-relaxed">
  I'm Mukesh — a Frontend Developer and UI/UX Designer...
</p>
```

### About Section

**Location:** `src/components/About.jsx`

Update the description paragraphs and information cards.

### Skills

**Location:** `src/components/Skills.jsx`

```javascript
const skillCategories = [
  {
    number: '01',
    title: 'FRONTEND DEVELOPMENT',
    skills: ['HTML', 'CSS', 'JavaScript', ...], // Update skills here
  },
  // Add more categories
];
```

### Projects

**Location:** `src/components/Projects.jsx`

```javascript
const projects = [
  {
    number: '01',
    title: 'PROJECT NAME',
    description: 'Project description...',
    technologies: ['React.js', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://github.com/...',
  },
  // Add more projects
];
```

### Experience

**Location:** `src/components/Experience.jsx`

Update the experiences array with your work history.

### Contact Information

**Location:** `src/components/Contact.jsx`

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com', // Update here
    link: 'mailto:your@email.com',
  },
  // Update phone and location
];
```

## Adding Project Screenshots

### Step 1: Add Images

Place your images in `src/assets/`:
```
src/assets/
  ├── project1.png
  ├── project2.png
  └── project3.png
```

### Step 2: Import in Projects.jsx

```javascript
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
```

### Step 3: Update Projects Array

```javascript
const projects = [
  {
    number: '01',
    title: 'PROJECT NAME',
    image: project1, // Add this
    // ... rest of project data
  },
];
```

### Step 4: Display Image

Replace the abstract mockup section with:

```javascript
<div className="flex items-center justify-center bg-secondary-bg border border-border min-h-[300px] lg:min-h-[400px] relative overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

## Modifying Colors

**Location:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        bg: '#FFFFFF',    // Main background
        text: '#000000',  // Main text
      },
      dark: {
        bg: '#000000',    // Dark sections
        text: '#FFFFFF',  // Dark section text
      },
      secondary: {
        bg: '#F4F4F4',    // Secondary background
      },
      border: '#D9D9D9', // Border color
      muted: '#777777',  // Muted text
    },
  },
}
```

### To Add Accent Colors

If you want to add accent colors:

```javascript
colors: {
  accent: {
    primary: '#FF0000',   // Your accent color
    secondary: '#00FF00',
  },
}
```

Then use in components:
```javascript
className="bg-accent-primary text-white"
```

## Adding New Sections

### Step 1: Create Component

Create `src/components/NewSection.jsx`:

```javascript
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const NewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="new-section" ref={ref} className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest text-muted mb-12"
        >
          06 / NEW SECTION
        </motion.div>

        {/* Your content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

### Step 2: Import in App.jsx

```javascript
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <NewSection />  {/* Add here */}
      <Contact />
      <Footer />
    </div>
  );
}
```

### Step 3: Add to Navigation

Update `src/components/Navigation.jsx`:

```javascript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'New Section', href: '#new-section' }, // Add here
  { name: 'Contact', href: '#contact' },
];
```

## Customizing Animations

### Animation Speed

In any component, adjust the `duration`:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}  // Slower: 0.8, Faster: 0.3
>
```

### Animation Delay

```javascript
transition={{ duration: 0.6, delay: 0.2 }}  // Starts after 0.2s
```

### Disable Animations

Remove Framer Motion components and replace with regular divs:

```javascript
// Before
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>

// After
<div>
  Content
</div>
```

### Hero Rotation Speed

**Location:** `src/components/Hero.jsx`

```javascript
<motion.div
  animate={{ rotate: 360 }}
  transition={{ 
    duration: 20,  // Adjust this (higher = slower)
    repeat: Infinity, 
    ease: "linear" 
  }}
>
```

## Typography

### Font Families

**Location:** `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  display: ['Space Grotesk', 'Inter', 'sans-serif'],
}
```

To change fonts:
1. Update Google Fonts import in `src/index.css`
2. Update `tailwind.config.js` with new font names

### Font Sizes

Use Tailwind classes:
- `text-xs` — 12px
- `text-sm` — 14px
- `text-base` — 16px
- `text-lg` — 18px
- `text-xl` — 20px
- `text-2xl` — 24px
- `text-6xl` — 60px
- `text-8xl` — 96px

## Responsive Design

### Mobile-First Approach

Tailwind uses mobile-first breakpoints:

```javascript
<div className="text-4xl lg:text-6xl">
  {/* 4xl on mobile, 6xl on desktop */}
</div>
```

Breakpoints:
- `sm:` — 640px+
- `md:` — 768px+
- `lg:` — 1024px+
- `xl:` — 1280px+
- `2xl:` — 1536px+

## Adding Social Links

**Location:** `src/components/Contact.jsx` and `src/components/Footer.jsx`

```javascript
import { GitBranch, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: GitBranch, label: 'GitHub', url: 'https://github.com/...' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/...' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/...' },
];
```

## Performance Optimization

### Image Optimization

1. Use WebP format for photos
2. Compress images before adding
3. Use appropriate sizes (don't use 4K images)

### Lazy Loading

Already implemented via Framer Motion's `useInView`.

### Code Splitting

Vite automatically handles this!

## Testing Checklist

- [ ] Test all navigation links
- [ ] Verify smooth scrolling works
- [ ] Check mobile responsiveness (375px, 768px, 1024px)
- [ ] Test on Safari, Chrome, Firefox
- [ ] Verify all external links open in new tabs
- [ ] Check CV download works
- [ ] Test contact form/email links
- [ ] Verify animations perform smoothly
- [ ] Check for horizontal scroll issues
- [ ] Test keyboard navigation

## Need Help?

If something doesn't work:
1. Check browser console for errors
2. Verify all imports are correct
3. Clear cache and rebuild: `npm run build`
4. Check Tailwind classes are correct
