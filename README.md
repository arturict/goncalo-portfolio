# Gonçalo Torres Novo - Portfolio

> **Frontend-only** portfolio website showcasing skills, experience, and education. Built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

![Portfolio](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/arturict/goncalo-portfolio.git
cd goncalo-portfolio
npm install

# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server
```

## 🌐 Deployments

| Environment | URL | Branch | Status |
|------------|-----|--------|--------|
| **Production** | TBD | `main` | 🚀 Ready |

## ✨ Features

- **🌙 Dark Mode**: Komplett in Dark Mode designed
- **🖱️ Mouse-Reactive Background**: Gradient folgt dem Cursor
- **🎨 Smooth Animations**: Scroll-based fade-ins, blob animations, gradient effects
- **⚡ Performance**: Server-side Rendering mit Next.js
- **📱 Fully Responsive**: Mobile-first Design
- **🎯 Modern UI**: shadcn/ui Komponenten mit Tailwind CSS v4
- **🚀 TypeScript**: Type-safe development
- **📦 Bun**: Schneller Package Manager

## 🎭 Design Features

### Animations
- Mouse-reactive gradient background
- Animated gradient hero text
- Floating blob background
- Scroll-triggered fade-in sections
- Smooth hover transitions
- Glowing shadows and borders

### UI Elements
- Glassmorphism cards with backdrop blur
- Gradient borders and backgrounds
- Smooth color transitions
- Interactive skill badges
- Animated CTA buttons
- Custom scrollbar

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Runtime**: Bun (dev) / Node.js (production)
- **TypeScript**: For type safety
- **Docker**: Multi-stage build with Node.js

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/arturict/portfolio.git
cd portfolio

# Checkout dev branch for development
git checkout dev

# Dependencies installieren
bun install

# Development Server
bun run dev

# Production Build
bun run build

# Production Start
bun run start
```

## 🚀 Development Workflow

### Working on Features

```bash
# Switch to dev branch
git checkout dev

# Make your changes
# ...

# Commit changes
git add .
git commit -m "feat: your feature description"

# Push to dev
git push origin dev

# Check preview at portfolio-dev.artur.engineer
```

### Releasing to Production

```bash
# When dev is stable and tested
git checkout main
git merge dev
git push origin main

# Deploys to arturf.ch
```

## 🚀 Deployment

### Live URLs
- **Production**: https://arturf.ch (main branch)
- **Development**: https://portfolio-dev.artur.engineer (dev branch)
- **Backend API** (future): https://portfolio-v2-dev.artur.engineer

### Coolify Deployment

#### Production (arturf.ch)
- Branch: `main`
- Dockerfile: `Dockerfile`
- Port: `3000`
- Healthcheck: Enabled

#### Development (portfolio-dev.artur.engineer)
- Branch: `dev`
- Dockerfile: `Dockerfile`
- Port: `3000`
- Healthcheck: Enabled

### Docker

```bash
# Image bauen
docker build -t portfolio:latest .

# Container starten
docker run -d -p 3000:3000 portfolio:latest

# Logs ansehen
docker logs -f <container-id>
```

## 👤 About

**Gonçalo Torres Novo** - Kaufmann EFZ Lehrling (Commercial Apprentice - 2nd Year)  
CALIDA AG | Emmen, Luzern, Switzerland | Graduating August 2026

**Skills & Competencies:**
- Business Operations & Retail Management
- Customer Service & Team Collaboration
- Office Tools & Digital Communication
- Languages: German, Portuguese, English
- Soft Skills: Reliability, Adaptability, Work Ethic, Initiative

**Contact:**
📧 [goncalo@torres-novo.ch](mailto:goncalo@torres-novo.ch) | 💼 [LinkedIn](https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/) | 🐙 [GitHub](https://github.com/goncalo-torres-novo)

## 🎨 Customization

### Colors
Gradient colors and theme can be adjusted in `app/globals.css`:
```css
--color-primary: /* Your color */;
```

### Animations
Animation timings and effects in `app/globals.css`:
```css
@keyframes blob {
  /* Customize animation */
}
```

### Content
Update portfolio content in `app/page.tsx`:
```tsx
const skills = {
  frontend: ["Vue.js", "React", "..."],
  // Add your skills
}
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main portfolio page (Client Component)
│   ├── layout.tsx        # Root layout with metadata
│   ├── globals.css       # Dark theme + animations
│   └── api/health/       # Health check endpoint
├── components/ui/        # shadcn/ui components
├── lib/                  # Utility functions
├── public/               # Static assets
├── Dockerfile            # Production Docker config
├── BACKEND.md            # Backend API docs (future)
├── DOCS.md               # Content & deployment docs
└── README.md             # This file
```

## 🔧 Commands

```bash
# Development
npm run dev                   # Dev Server with Hot Reload

# Production
npm run build                 # Optimized Build
npm run start                 # Production Server

# Code Quality
npm run lint                  # ESLint Check

# Docker
docker build -t portfolio .   # Build Image
docker run -p 3000:3000 portfolio  # Run Container
```

## 📚 Documentation

- **[DOCS.md](./DOCS.md)** - Content reference & deployment guide
- **[BACKEND.md](./BACKEND.md)** - Backend API documentation (future phase)
- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)** - Development guidelines

## 🌟 Key Features Explained

### Mouse-Reactive Background
Background gradient follows your cursor for an interactive experience:
```tsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// Gradient moves with cursor position
```

### Scroll Animations
Sections fade in when scrolling using Intersection Observer API:
```tsx
<section className="scroll-fade-in">
  {/* Content fades in on scroll */}
</section>
```

### Gradient Text
Animated gradient text in hero:
```tsx
<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
               bg-clip-text text-transparent animate-gradient">
  Artur Ferreira
</span>
```

### Blob Animation
Floating background blobs:
```css
.animate-blob {
  animation: blob 7s infinite;
}
```

### Glassmorphism Cards
Cards with backdrop blur:
```tsx
<Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 
               border-gray-800 backdrop-blur-sm">
```

## 🚀 Performance

- **First Load**: ~100KB JS
- **SSR**: Pre-rendered static pages
- **Optimization**: Next.js image optimization
- **Lighthouse Score**: 95+ (Performance)
- **Mouse Tracking**: Optimized with 300ms transitions

## 📱 Responsive Design

- **Mobile**: 320px+ (Single column, touch-optimized)
- **Tablet**: 768px+ (Improved spacing)
- **Desktop**: 1024px+ (Full grid layouts)
- **Large**: 1920px+ (Max width container)

## ⚙️ Environment

**Frontend-only deployment** - No environment variables required.

Future backend integration will use:
- `NEXT_PUBLIC_API_URL=https://portfolio-v2-dev.artur.engineer`

## 📄 License

Built with 💚 by Gonçalo Torres Novo

## 🤝 Contact

- **Email**: goncalo@torres-novo.ch
- **GitHub**: [goncalo-torres-novo](https://github.com/goncalo-torres-novo)
- **LinkedIn**: [gonçalo-torres-novo-768a25389](https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/)

---

Made with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com)
