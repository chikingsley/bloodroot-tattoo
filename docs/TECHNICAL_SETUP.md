# Technical Setup & Configuration

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

# Run linting
bun lint
```

## ⚙️ Configuration Files

### Vite Configuration (`vite.config.ts`)

- **Build Optimization**: Manual chunks for vendor, router, and animation libraries
- **Asset Handling**: Optimized for media-heavy content (images/videos)
- **Development Server**: Port 3000 with auto-open
- **Preview Server**: Port 3001 for production testing

### TypeScript Configuration

- **`tsconfig.json`**: Base TypeScript configuration
- **`tsconfig.app.json`**: Application-specific settings with strict type checking
- **`tsconfig.node.json`**: Node.js environment settings for build tools

### ESLint Configuration (`eslint.config.js`)

- React-specific rules with hooks and refresh plugins
- TypeScript ESLint integration
- Modern flat config format

### TailwindCSS Setup

- **File**: `@tailwindcss/vite` plugin integration
- **Components**: Radix UI integration via `components.json`
- **Utilities**: Custom utility classes in `src/index.css`

## 📦 Dependencies Overview

### Core Framework

```json
{
  "react": "^19.0.0",           // Latest React with concurrent features
  "react-dom": "^19.0.0",      // DOM rendering
  "react-router-dom": "^7.5.3" // Client-side routing
}
```

### Build Tools

```json
{
  "vite": "^6.3.1",            // Fast build tool and dev server
  "typescript": "~5.7.2",      // Type safety
  "@vitejs/plugin-react": "^4.3.4" // React support for Vite
}
```

### Styling & UI

```json
{
  "tailwindcss": "^4.1.5",     // Utility-first CSS framework
  "@tailwindcss/vite": "^4.1.5", // Vite integration
  "@radix-ui/react-*": "^1.x", // Accessible UI primitives
  "lucide-react": "^0.507.0"   // Icon library
}
```

### Animation & Interactions

```json
{
  "gsap": "^3.13.0"            // Professional animation library
}
```

### Development Tools

```json
{
  "eslint": "^9.22.0",         // Code linting
  "typescript-eslint": "^8.26.1" // TypeScript-specific linting
}
```

## 🏗️ Build Process

### Development

1. **Hot Module Replacement (HMR)**: Instant updates during development
2. **TypeScript Checking**: Real-time type validation
3. **ESLint Integration**: Code quality enforcement
4. **Asset Processing**: Direct public folder access for media

### Production Build

1. **Code Splitting**: Vendor, router, and animation chunks
2. **Minification**: JavaScript and CSS optimization
3. **Asset Optimization**: Image and video handling
4. **Type Checking**: Full TypeScript compilation

### Build Output Structure

```text
dist/
├── assets/
│   ├── index-[hash].js      # Main application bundle
│   ├── vendor-[hash].js     # React, React DOM
│   ├── router-[hash].js     # React Router
│   ├── animations-[hash].js # GSAP
│   └── index-[hash].css     # Compiled styles
├── greenewitchtattoo-alex/  # Artist media (copied)
├── jameson-photos/          # Artist media (copied)
├── profile-photos/          # Profile images (copied)
└── index.html               # Entry point with SEO meta tags
```

## 🔧 Development Workflow

### Local Development

```bash
# Standard development
bun dev

# Development with specific port
bun dev --port 3001

# Development with network access
bun dev --host
```

### Code Quality

```bash
# Lint check
bun lint

# Type check
bun run tsc --noEmit

# Format check (if Prettier added)
bun run prettier --check .
```

### Testing (Future)

```bash
# Unit tests (when added)
bun test

# E2E tests (when added)  
bun test:e2e
```

## 📱 Browser Support

### Modern Browsers

- **Chrome**: 88+
- **Firefox**: 78+
- **Safari**: 14+
- **Edge**: 88+

### Features Used

- **ES2020**: Modern JavaScript features
- **CSS Grid & Flexbox**: Layout systems
- **CSS Custom Properties**: Dynamic theming
- **Intersection Observer**: Scroll animations
- **HTML5 Video**: Media playback

## 🚀 Performance Considerations

### Bundle Optimization

- **Manual Chunks**: Separate vendor and feature libraries
- **Tree Shaking**: Automatic unused code removal
- **Asset Optimization**: Proper image/video handling

### Runtime Performance

- **React 19**: Concurrent features and automatic batching
- **GSAP**: Hardware-accelerated animations
- **Lazy Loading**: Context-based component loading

### Development Performance

- **Vite HMR**: Sub-second refresh times
- **TypeScript**: Incremental compilation
- **Bun**: Fast package installation and script execution

## 🔒 Security Considerations

### Current Setup

- **No external API calls**: Static site security
- **Type Safety**: TypeScript prevents common vulnerabilities
- **Modern Dependencies**: Regular security updates

### Production Recommendations

- **Content Security Policy (CSP)**: Add to deployment
- **HTTPS**: Required for production
- **Asset Integrity**: Consider subresource integrity for CDN assets

## 🌐 Deployment Options

### Static Hosting (Recommended)

- **Vercel**: Zero-config deployment with analytics
- **Netlify**: Form handling and edge functions
- **GitHub Pages**: Free hosting for open source

### Custom Server

- **Node.js**: Express/Fastify with static middleware
- **Nginx**: Direct static file serving
- **CDN**: CloudFlare or AWS CloudFront

### Environment Variables

```bash
# Production build
VITE_NODE_ENV=production

# Analytics (optional)
VITE_GA_ID=G-XXXXXXXXXX

# API endpoints (if added)
VITE_API_URL=https://api.bloodroottattoo.com
```

## 📊 Monitoring & Analytics

### Performance Monitoring

- **Core Web Vitals**: LCP, FID, CLS tracking
- **Bundle Analyzer**: `bun run build --analyze`
- **Lighthouse**: Regular performance audits

### User Analytics (Optional)

- **Google Analytics 4**: Privacy-focused tracking
- **Plausible**: GDPR-compliant alternative
- **Custom Events**: Portfolio interactions, contact form usage

## 🔧 Troubleshooting

### Common Issues

1. **Port Already in Use**: Change port in `vite.config.ts`
2. **Asset Not Found**: Check public folder paths
3. **Type Errors**: Update TypeScript definitions
4. **Build Failures**: Clear `node_modules` and reinstall

### Debug Commands

```bash
# Clear all caches
rm -rf node_modules dist .vite
bun install

# Verbose build output
bun build --debug

# Check bundle size
bun build --analyze
```
