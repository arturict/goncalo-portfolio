# Artur Ferreira - Portfolio

Ein modernes Dark-Mode Portfolio mit smooth Scroll-Animationen und Mouse-Reactive Background, gebaut mit Next.js 16, Tailwind CSS und shadcn/ui.

![Portfolio](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)
![Bun](https://img.shields.io/badge/Bun-1.3-000000?style=flat&logo=bun)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)

## 🌐 Deployments

### Production
- **URL**: https://arturf.ch
- **Branch**: `main`
- **Auto-Deploy**: On push to main
- **Status**: Stable Release

### Development
- **URL**: https://portfolio-dev.artur.engineer
- **Branch**: `dev`
- **Auto-Deploy**: On push to dev
- **Status**: Testing & Preview

## 🔄 Branching Strategy

### Main Branch (Production)
- **Protected**: Only merge from `dev` when stable
- **Deploys to**: arturf.ch
- **Purpose**: Production-ready releases only

### Dev Branch (Development)
- **Active Development**: All new features here
- **Deploys to**: portfolio-dev.artur.engineer
- **Purpose**: Testing and iteration
- **Workflow**: 
  1. Make changes on `dev`
  2. Test on portfolio-dev.artur.engineer
  3. When stable → Merge to `main`

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

## 📝 Inhalt

Portfolio für **Artur Ferreira**:

### Profile
- **Role**: Informatiker EFZ Applikationsentwickler (3. Lehrjahr)
- **Company**: CKW AG / Axpo Group (Microsoft Technologies)
- **School**: Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee
- **Graduation**: August 2027

### Skills
- **Frontend**: Vue.js, React, Next.js, JavaScript, HTML/CSS, Tailwind CSS
- **Backend**: .NET, ASP.NET, C#, PHP, Laravel, Python, Node.js
- **Database**: MSSQL, MySQL, MongoDB, PostgreSQL
- **Other**: REST APIs, WebSocket, Real-time Apps, Docker, Git

### Featured Project
- **CodeCellar**: Real-time collaborative code editor
- **Event**: 2024 Young Talents Hackathon
- **Tech**: Monaco Editor, WebSocket, Real-time Sync
- **Link**: https://young-talents-hackathon.ch/

### Contact
- **Email**: artur@ferreiracruz.com
- **GitHub**: https://github.com/arturict
- **LinkedIn**: https://www.linkedin.com/in/artur-ferreira7

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

## 📁 Projekt Struktur

```
portfolio/
 app/
   ├── page.tsx              # Portfolio Hauptseite (Dark Mode + Mouse Tracking)
   ├── layout.tsx            # Root Layout mit Metadata
   ├── globals.css           # Dark theme + Animations
   └── api/health/           # Health Check Endpoint
 components/
   └── ui/                   # shadcn/ui Komponenten
 public/                   # Statische Assets
 Dockerfile                # Production-ready Docker
 BACKEND.md               # Backend API Documentation
 README.md                # This file
```

## 🔧 Commands

```bash
# Development
bun run dev                   # Dev Server mit Hot Reload

# Production
bun run build                 # Optimized Build
bun run start                 # Production Server

# Code Quality
bun run lint                  # ESLint Check

# Docker
docker build -t portfolio .   # Build Image
docker run -p 3000:3000 portfolio  # Run Container

# Git Workflow
git checkout dev              # Switch to dev branch
git checkout main             # Switch to main branch
git merge dev                 # Merge dev into main
```

## 📚 Documentation

- [BACKEND.md](./BACKEND.md) - Backend API Documentation (für Phase 2)
- [.github/copilot-instructions.md](./.github/copilot-instructions.md) - GitHub Copilot Instructions
- Backend API URL: `https://portfolio-v2-dev.artur.engineer`

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

## 🔐 Environment Variables

No environment variables needed for frontend-only deployment.

For future backend integration, add to `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://portfolio-v2-dev.artur.engineer
```

## 📄 Lizenz

Gebaut mit 💚 von Artur Ferreira

## 🤝 Kontakt

- **Website**: https://arturf.ch
- **Email**: artur@ferreiracruz.com
- **GitHub**: [arturict](https://github.com/arturict)
- **LinkedIn**: [artur-ferreira7](https://www.linkedin.com/in/artur-ferreira7)

---

Made with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com)
