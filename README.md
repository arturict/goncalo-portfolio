# Gonçalo Torres Novo - Commercial Apprentice Portfolio

> **Modern portfolio website** for a commercial apprentice showcasing professional profile, experience, and skills. Built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

![Portfolio](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/arturict/goncalo-portfolio.git
cd goncalo-portfolio
bun install

# Development
bun dev          # Start dev server at localhost:3000

# Production
bun run build    # Build for production
bun start        # Start production server
```

## 🌐 Deployments

| Environment | URL | Branch | Status |
|------------|-----|--------|--------|
| **Production** | goncalo.artur.engineer | `main` | 🚀 Ready |
| **Development** | goncalo-dev.artur.engineer | `dev` | 🧪 Dev |

## ✨ Features

- **🎯 Professional Focus**: Tailored for commercial/business professionals
- **🌙 Dark Mode**: Modern dark theme with professional gradient accents
- **🖱️ Interactive Background**: Subtle mouse-reactive gradient
- **🎨 Smooth Animations**: Scroll-based fade-ins, subtle transitions
- **⚡ Performance**: Server-side rendering with Next.js + optimized Docker builds
- **📱 Fully Responsive**: Mobile-first, professional design
- **🎭 Modern UI**: shadcn/ui components with business aesthetic

## ⚡ Performance

Deployments run **45% faster** with:
- Optimized Docker multi-stage build using Bun
- Native Bun health check to `/api/health` endpoint
- Reduced build context (427KB vs 169MB)
- Smart layer caching for rapid rebuilds

**Average Deploy Time**: ~1:15 minutes (goncalo-dev.artur.engineer)

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
- **Runtime**: Bun (blazingly fast JavaScript runtime)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: For type safety
- **Docker**: Multi-stage build with Bun runtime

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

**Gonçalo Torres Novo** - Kaufmann EFZ Lehrling (Commercial Apprentice - 3rd Year)  
CALIDA AG Sursee | Based in Emmen, Luzern, Switzerland | Graduating August 2026

**Professional Focus:**
- Retail Operations & Management
- Customer Service Excellence
- Business Administration
- Team Collaboration & Communication
- Languages: German, Portuguese, English

**Contact:**
📧 [goncalo@torres-novo.ch](mailto:goncalo@torres-novo.ch) | 💼 [LinkedIn](https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/)

**Portfolio Design & Development**: [Artur Ferreira - arturf.ch](https://arturf.ch)

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
bun dev                   # Dev Server with Hot Reload

# Production
bun run build             # Optimized Build
bun start                 # Production Server

# Code Quality
bun run lint              # ESLint Check

# Docker
docker build -t goncalo-portfolio .     # Build Image
docker run -p 3000:3000 goncalo-portfolio  # Run Container
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
**Portfolio Design & Development** by [Artur Ferreira](https://artur.engineer)

## 🤝 Contact

- **Email**: goncalo@torres-novo.ch
- **GitHub**: [goncalo-torres-novo](https://github.com/goncalo-torres-novo)
- **LinkedIn**: [gonçalo-torres-novo-768a25389](https://www.linkedin.com/in/gonçalo-torres-novo-768a25389/)

---

**Design Credit**: [Artur Ferreira - artur.engineer](https://artur.engineer) | Made with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), and [Bun](https://bun.sh)
