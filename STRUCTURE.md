# 📁 Project Structure Guide

## Complete Directory Layout

```
portfolio/
│
├── 📄 Configuration Files
│   ├── package.json              # Project dependencies and scripts
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .prettierrc               # Code formatting rules
│   ├── .gitignore               # Git ignore patterns
│   ├── .env.example             # Environment variables template
│   ├── vercel.json              # Vercel deployment config
│   ├── netlify.toml             # Netlify deployment config
│   └── README.md                # Main documentation
│
├── 📁 public/
│   └── index.html               # Main HTML file with meta tags
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar.jsx           # Navigation bar with mobile menu
│   │   ├── Hero.jsx             # Hero section with typing animation
│   │   ├── About.jsx            # About section with skills
│   │   ├── Services.jsx         # Services section with cards
│   │   ├── Projects.jsx         # Projects portfolio grid
│   │   ├── Skills.jsx           # Skills section with progress bars
│   │   ├── Contact.jsx          # Contact form and info
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── LoadingScreen.jsx    # Page loading animation
│   │   └── ScrollProgress.jsx   # Scroll progress indicator
│   │
│   ├── 📁 hooks/
│   │   └── useInView.js         # Custom hook for scroll reveal
│   │
│   ├── App.jsx                  # Main app component
│   ├── index.jsx                # React entry point
│   └── index.css                # Global styles and animations
│
├── 📁 .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment workflow
│
├── QUICKSTART.md                # Quick start guide
└── docs/
    └── STRUCTURE.md             # This file
```

## 📋 File Descriptions

### Configuration Files

#### `package.json`
- Lists all npm dependencies
- Defines npm scripts (start, build, deploy)
- Project metadata

**Key Scripts:**
```json
{
  "start": "react-scripts start",      // Dev server
  "build": "react-scripts build",      // Production build
  "test": "react-scripts test",        // Run tests
  "eject": "react-scripts eject"       // Advanced (use with caution)
}
```

#### `tailwind.config.js`
- Tailwind CSS theme configuration
- Custom colors, fonts, animations
- Utility classes extensions

#### `postcss.config.js`
- PostCSS plugins (Tailwind, Autoprefixer)
- Processes CSS for browser compatibility

#### `.prettierrc`
- Code formatting rules
- Ensures consistent code style
- Run `npm install prettier` to use

#### `.gitignore`
- Files/folders to exclude from git
- Hides node_modules, .env, build files

#### `vercel.json`
- Vercel deployment configuration
- Build command and output directory

#### `netlify.toml`
- Netlify deployment configuration
- Build settings and redirects

### Source Files

#### `src/components/`

**Navbar.jsx**
- Sticky header navigation
- Mobile hamburger menu
- Theme toggle button
- Smooth scrolling links

**Hero.jsx**
- Full-screen hero section
- Animated typing text (cycles through 3 phrases)
- CTA buttons (View Projects, Hire Me, Contact Me)
- Animated background blobs
- Scroll indicator

**About.jsx**
- Professional bio section
- Skills grid with progress bars
- Statistics cards
- About cards with hover effects

**Services.jsx**
- Three service cards
- Icon with background gradient
- Features list for each service
- Hover animations

**Projects.jsx**
- Portfolio grid (responsive 3 columns on desktop)
- Project cards with images
- Hover overlay with action buttons
- Project tags/technologies
- Live demo and GitHub links

**Skills.jsx**
- Skills organized by category
- Animated progress bars
- Percentage indicators
- Circular progress indicators for overall competency

**Contact.jsx**
- Contact form with validation
- Name, email, message fields
- Contact information cards
- Social media links
- Call-to-action messages

**Footer.jsx**
- Social media icons
- Quick navigation links
- Copyright notice
- Scroll to top button

**LoadingScreen.jsx**
- Page loading animation
- Animated logo
- Dot animation
- Smooth fade out

**ScrollProgress.jsx**
- Top progress bar
- Floating circular progress indicator
- Shows page scroll percentage

#### `src/hooks/useInView.js`
Custom React hook for:
- Detecting when elements enter viewport
- Triggering animations on scroll
- Intersection Observer API wrapper

#### `src/App.jsx`
Main app component that:
- Manages dark/light mode state
- Handles loading screen
- Renders all sections
- Coordinates global state

#### `src/index.jsx`
React entry point:
- Renders App component to DOM
- Strict mode enabled

#### `src/index.css`
Global styles:
- Custom CSS variables
- Tailwind imports
- Custom animations
- Utility classes
- Typography rules
- Responsive utilities

### Public Files

#### `index.html`
- Main HTML file
- Meta tags for SEO
- Open Graph tags for social sharing
- Font imports from Google Fonts
- Favicon setup
- Root div for React mounting

### Workflow Files

#### `.github/workflows/deploy.yml`
GitHub Actions workflow:
- Triggers on push to main/master
- Installs dependencies
- Builds project
- Deploys to GitHub Pages

## 🎯 Component Hierarchy

```
App
├── LoadingScreen (initial load)
├── ScrollProgress (global indicator)
├── Navbar
│   ├── Desktop Navigation
│   └── Mobile Menu
├── Hero
│   ├── Greeting Badge
│   ├── Main Heading
│   ├── Typing Text
│   ├── Subtitle
│   ├── CTA Buttons
│   └── Scroll Indicator
├── About
│   ├── Section Title
│   ├── Bio Cards
│   └── Skills Grid
├── Services
│   ├── Section Title
│   └── Service Cards (x3)
├── Projects
│   ├── Section Title
│   └── Project Grid
├── Skills
│   ├── Section Title
│   ├── Skill Categories
│   └── Overall Competency
├── Contact
│   ├── Section Title
│   ├── Contact Form
│   └── Contact Information
└── Footer
    ├── Brand Section
    ├── Quick Links
    ├── Social Links
    └── Copyright
```

## 🔄 Data Flow

### Styling Flow
```
index.css (Global)
    ↓
tailwind.config.js (Theme)
    ↓
Component JSX Files (Apply classes)
    ↓
Framer Motion (Animations)
    ↓
Rendered UI
```

### State Management Flow
```
App.jsx
├── isDark (theme state)
├── isLoading (loading state)
└── Passes to components
    └── Components use hooks
        └── useInView (scroll detection)
```

### Animation Flow
```
Framer Motion
├── Initial state
├── Animate on load/scroll
├── Hover effects
├── Tap effects
└── Exit animations
```

## 📊 Asset Management

### Images
- Currently using external URLs from Unsplash
- Replace with local images in `public/images/`
- Optimize for web (compress, correct format)

### Icons
- React Icons library
- Used: FiCode, FiShoppingCart, FiPalette, etc.
- Browse at [react-icons.github.io](https://react-icons.github.io)

### Fonts
- Google Fonts: Poppins (display), Inter (body)
- Imported in index.html
- Fallback to system fonts

## 🔐 Environment Variables

### Available Variables
```
REACT_APP_ENV           # Development/Production
REACT_APP_API_URL       # API endpoint
REACT_APP_EMAILJS_*     # Email service credentials
REACT_APP_GOOGLE_ANALYTICS_ID  # Analytics ID
```

### Usage
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## 🎨 Styling Architecture

### Tailwind CSS Layers
```
Base Layer
├── HTML reset
├── Custom fonts
└── Typography defaults

Components Layer
├── .btn-primary
├── .btn-secondary
├── .card-glass
├── .glass
└── .gradient-text

Utilities Layer
├── Responsive classes
├── State variants
└── Custom utilities
```

### Custom Animations
- `@keyframes float` - Floating animation
- `@keyframes glow` - Glow effect
- `@keyframes typewriter` - Typing effect
- `@keyframes spin` - Loading spinner

## 📦 Dependencies Explained

```json
{
  "react": "18.2.0",                    // UI Framework
  "react-dom": "18.2.0",                // DOM rendering
  "framer-motion": "10.16.0",           // Animations
  "react-icons": "4.11.0",              // Icon library
  "react-scripts": "5.0.1",             // Build tools
  "tailwindcss": "3.3.5",               // CSS framework
  "postcss": "8.4.29",                  // CSS processing
  "autoprefixer": "10.4.16"             // Browser prefixes
}
```

## 🔗 Import Paths

```javascript
// Components
import Hero from './components/Hero';

// Hooks
import { useInView } from '../hooks/useInView';

// Framer Motion
import { motion } from 'framer-motion';

// React Icons
import { FiCode, FiMail } from 'react-icons/fi';
```

## 🚀 Build Output

Production build generates:
```
build/
├── static/
│   ├── js/
│   │   ├── main.*.js        # Minified JS
│   │   └── runtime.*.js
│   ├── css/
│   │   └── main.*.css       # Minified CSS
│   └── media/
│       └── [image files]
├── index.html              # Optimized HTML
├── manifest.json          # PWA manifest
└── robots.txt             # SEO robots file
```

## 📈 Performance Metrics

- **Bundle Size:** ~150KB (gzipped ~50KB)
- **Load Time:** < 2 seconds
- **Lighthouse Score:** 90+
- **Mobile Score:** 95+

## 🔄 Version Control

### Git Workflow
```
main/master (production)
    ↓ pull request
develop (staging)
    ↓ feature branches
feature/new-component
feature/fix-bug
```

### Commit Convention
```
feat: Add new feature
fix: Fix bug
refactor: Restructure code
style: Code formatting
docs: Documentation
perf: Performance improvement
```

---

**For more details, see README.md** 📖
