# Artur Ferreira - Portfolio

Ein modernes Dark-Mode Portfolio mit smooth Scroll-Animationen, gebaut mit Next.js 16, Tailwind CSS und shadcn/ui.

![Portfolio](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)
![Bun](https://img.shields.io/badge/Bun-1.3-000000?style=flat&logo=bun)

## ✨ Features

- **🌙 Dark Mode**: Komplett in Dark Mode designed
- **🎨 Smooth Animations**: Scroll-based fade-ins, blob animations, gradient effects
- **⚡ Performance**: Server-side Rendering mit Next.js
- **📱 Fully Responsive**: Funktioniert perfekt auf allen Geräten
- **🎯 Modern UI**: shadcn/ui Komponenten mit Tailwind CSS v4
- **🚀 TypeScript**: Type-safe development
- **📦 Bun**: Schneller Package Manager und Runtime

## 🎭 Design Features

### Animations
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
# Dependencies installieren
bun install

# Development Server
bun run dev

# Production Build
bun run build

# Production Start
bun run start
```

## 🚀 Deployment

### Live URLs
- **Production**: https://arturf.ch
- **Backend API** (future): https://portfolio-v2-dev.artur.engineer

### Coolify Deployment

1. Repository verbinden
2. Dockerfile: `Dockerfile` (root)
3. Port: `3000`
4. Healthcheck: Aktiviert (curl installiert)
5. Deploy!

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
- **Company**: CKW AG / Axpo Group
- **School**: Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee

### Skills
- **Frontend**: Vue.js, React, Next.js, JavaScript, HTML/CSS, Tailwind CSS
- **Backend**: PHP, Laravel, .NET, ASP.NET, C#, Python, Node.js
- **Database**: MySQL, MSSQL, MongoDB, PostgreSQL
- **Other**: REST APIs, WebSocket, Real-time Apps, Docker, Git

### Featured Project
- **CodeCellar**: Real-time collaborative code editor
- **Event**: 2024 Young Talents Hackathon
- **Tech**: Monaco Editor, WebSocket, Real-time Sync
- **Link**: https://young-talents-hackathon.ch/

### Contact
- **Email**: artur@arturf.ch
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
   ├── page.tsx              # Portfolio Hauptseite (Dark Mode)
   ├── layout.tsx            # Root Layout mit Metadata
   ├── globals.css           # Dark theme + Animations
   └── api/health/           # Health Check Endpoint
 components/
   ├── ui/                   # shadcn/ui Komponenten
   └── scroll-animations.tsx # Scroll Observer
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
```

## 📚 Documentation

- [BACKEND.md](./BACKEND.md) - Backend API Documentation (für Phase 2)
- Backend API URL: `https://portfolio-v2-dev.artur.engineer`

## 🌟 Key Features Explained

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

## 📄 Lizenz

Gebaut mit 💚 von Artur Ferreira

## 🤝 Kontakt

- **Website**: https://arturf.ch
- **Email**: artur@arturf.ch
- **GitHub**: [arturict](https://github.com/arturict)
- **LinkedIn**: [artur-ferreira7](https://www.linkedin.com/in/artur-ferreira7)

---

Made with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com)
