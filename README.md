# Bloodroot Tattoo Studio Website

A modern, responsive website showcasing the talented artists and exceptional work at Bloodroot Tattoo Studio in Morgantown, WV.

## 🎯 About

Professional tattoo studio featuring three exceptional artists:

- **Alex Greene** (@greenewitchtattoo) - Neo-Traditional, Color Realism, Botanical
- **Kelechi Ejimofor** (@kelech) - Illustrative, Black & Grey, Fine Line  
- **Jameson Quinn** (@inkbyjameson) - American Traditional, Blackwork, Japanese Inspired

**Studio Location:** 1315 Airport Blvd. Building 2, Morgantown, WV 26505

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## 🏗️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6.3.1 (fast, modern bundling)
- **Package Manager**: Bun (faster than npm/yarn)
- **Styling**: TailwindCSS 4.1.5 + Radix UI
- **Animations**: GSAP 3.13.0
- **Routing**: React Router DOM 7.5.3

## 📁 Project Structure

```text
src/
├── components/           # Reusable UI components
│   ├── artists/         # Artist-specific components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components
│   └── ui/             # Generic UI components
├── context/            # React context providers
├── data/               # Static data (artist info, portfolios)
├── hooks/              # Custom React hooks
├── pages/              # Route components
└── lib/                # Utility functions

public/
├── greenewitchtattoo-alex/  # Alex's portfolio media
├── jameson-photos/          # Jameson's portfolio media
└── profile-photos/          # Artist profile images
```

## ✨ Features

- 🎨 **Artist Portfolios**: Individual galleries with photos and videos
- 📱 **Responsive Design**: Optimized for all devices
- ⚡ **Fast Performance**: Vite HMR + modern React patterns
- 🔍 **SEO Optimized**: Meta tags, structured data, accessibility
- 🎬 **Media Support**: Image galleries with video integration
- 🎯 **Smooth Animations**: GSAP-powered transitions

## 📚 Documentation

- **[Project Overview](docs/PROJECT_OVERVIEW.md)** - Architecture & features overview
- **[Technical Setup](docs/TECHNICAL_SETUP.md)** - Configuration & development guide
- **[TODO List](docs/TODO.md)** - Current tasks & project management

## 🔧 Development

### Scripts

```bash
bun dev          # Development server (localhost:3000)
bun build        # Production build
bun preview      # Preview production build
bun lint         # Run ESLint
```

### Key Development Features

- **Hot Module Replacement (HMR)**: Instant updates
- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Path Aliases**: Clean imports with `@/` prefix

## 🚀 Deployment

### Recommended Platforms

- **Vercel**: Zero-config deployment with analytics
- **Netlify**: Form handling and edge functions
- **GitHub Pages**: Free hosting option

### Build Output

Optimized static files ready for any hosting platform:

- Code splitting for optimal loading
- Asset optimization for images/videos
- SEO meta tags and structured data

## 📊 Performance

- **Bundle Size**: Optimized with manual chunks
- **Image Loading**: Direct public folder access
- **Animations**: Hardware-accelerated with GSAP
- **Core Web Vitals**: Optimized for excellent scores

## 🎨 Design System

### Colors

- Primary: Tattoo ink black (`#1a1a1a`)
- Accent: Vibrant orange (`#ff6b35`)
- Text: High contrast for accessibility

### Typography

- Clean, modern sans-serif
- Optimized readability across devices
- Proper heading hierarchy

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for all new code
3. Update documentation for significant changes
4. Test across different browsers and devices

## 📞 Contact

**Bloodroot Tattoo Studio**  
1315 Airport Blvd. Building 2  
Morgantown, WV 26505

Follow our artists:

- Alex: [@greenewitchtattoo](https://instagram.com/greenewitchtattoo)
- Kelechi: [@kelech](https://instagram.com/kelech)
- Jameson: [@inkbyjameson](https://instagram.com/inkbyjameson)

---

Built with ❤️ using modern web technologies for exceptional user experience.
