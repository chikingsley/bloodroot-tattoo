# Bloodroot Tattoo - Project Overview

## 🎯 Project Purpose

A modern, responsive website for Bloodroot Tattoo Studio showcasing three talented artists: Alex (@greenewitchtattoo-alex), Kelechi (@kelech-kelechi), and Jameson (@inkbyjameson).

## 🏗️ Technical Architecture

### Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.3.1 (fast, modern bundling)
- **Package Manager**: Bun (faster than npm/yarn)
- **Styling**: TailwindCSS 4.1.5
- **Animations**: GSAP 3.13.0 (replaced Framer Motion)
- **Routing**: React Router DOM 7.5.3
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

### Key Features

- ✅ Responsive design for all devices
- ✅ Artist portfolio galleries with photo/video support
- ✅ Smooth scroll animations and transitions
- ✅ Header visibility context for navigation UX
- ✅ Optimized routing with artist detail pages
- ✅ Professional contact information and studio address

## 📁 Project Structure

```text
src/
├── components/           # Reusable UI components
│   ├── artists/         # Artist-specific components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── logo/           # Logo components
│   └── ui/             # Generic UI components (buttons, etc.)
├── context/            # React context providers
│   ├── definitions.ts  # Type definitions for contexts
│   └── HeaderVisibilityContext.tsx
├── data/               # Static data and configurations
│   └── artists.ts      # Artist information and media arrays
├── hooks/              # Custom React hooks
│   └── useHeaderVisibility.ts
├── lib/                # Utility functions and helpers
├── pages/              # Route components
│   ├── HomePage.tsx    # Main landing page
│   ├── ArtistPage.tsx  # Individual artist portfolio
│   └── NotFoundPage.tsx
└── assets/             # Static assets (fonts, etc.)

public/
├── greenewitchtattoo-alex/  # Alex's portfolio media
├── jameson-photos/          # Jameson's portfolio media  
├── profile-photos/          # Artist profile images
│   └── kelech-kelechi/     # Kelechi's additional media
└── vite.svg                # Default Vite favicon (needs replacement)
```

## 🎨 Component Architecture

### Context Pattern

- **HeaderVisibilityContext**: Manages header show/hide state across routes
- **Provider Structure**: Clean separation of concerns with proper TypeScript definitions

### Routing Strategy

- **Client-side routing** with React Router DOM
- **Dynamic artist pages** via `/artist/:slug` pattern
- **Scroll restoration** and smooth navigation

### State Management

- **React Context** for global state (header visibility)
- **Local component state** for UI interactions
- **No external state library** needed (appropriate for project size)

## 🖼️ Media Management

### Current Organization

- Artist folders in `/public/` for direct access
- Mixed naming conventions (needs standardization)
- Support for both images (.jpg) and videos (.mp4)

### Media Loading Strategy

- Direct public folder access (fast loading)
- Lazy loading considerations for gallery performance
- Video controls and poster images

## 🚀 Development Workflow

### Available Scripts

```bash
bun dev      # Start development server
bun build    # Build for production
bun preview  # Preview production build
bun lint     # Run ESLint
```

### Development Server

- **Hot Module Replacement** (HMR) via Vite
- **Fast refresh** for React components
- **TypeScript checking** in real-time

## 🎯 Recent Migration Notes

### From Next.js to Vite

- **Reason**: Simplified build process and faster development
- **Benefits**: Faster HMR, simpler configuration, better DX
- **Trade-offs**: Manual SEO setup (vs automatic Next.js features)

### From Framer Motion to GSAP

- **Performance**: GSAP more performant for complex animations
- **File size**: Better tree-shaking with GSAP
- **Developer experience**: More control over animation timelines

## 🔧 Configuration Files

- `vite.config.ts`: Build configuration with path aliases
- `tsconfig.json`: TypeScript compiler options
- `tailwind.config.js`: TailwindCSS customization
- `eslint.config.js`: Code quality rules
- `components.json`: Radix UI component configuration

## 📍 Studio Information

**Bloodroot Tattoo Studio**  
1315 Airport Blvd. Building 2  
Morgantown, WV 26505
