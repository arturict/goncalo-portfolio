# Portfolio Documentation

## Overview

This is the **personal portfolio website** for **Artur Ferreira**, deployed at [arturf.ch](https://arturf.ch).

- **Type**: Frontend-only static website
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Deployment**: Coolify (Docker)
- **Status**: Production Ready ✅

## 🌐 Live URLs

| Environment | URL | Branch | Purpose |
|------------|-----|--------|---------|
| **Production** | [arturf.ch](https://arturf.ch) | `main` | Live website |
| **Preview** | [portfolio-dev.artur.engineer](https://portfolio-dev.artur.engineer) | `dev` | Testing & development |
| **Backend** (future) | [portfolio-v2-dev.artur.engineer](https://portfolio-v2-dev.artur.engineer) | - | API integration |

## 👤 Content

### Profile Information

**Artur Ferreira**
- **Role**: Informatiker EFZ Applikationsentwickler (3. Lehrjahr)
- **Company**: CKW AG / Axpo Group
- **Focus**: Microsoft Technologies (.NET, ASP.NET, C#, MSSQL)
- **School**: Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee
- **Graduation**: August 2027

### Skills

#### Frontend
- Vue.js, JavaScript, HTML/CSS, Tailwind CSS
- React, Next.js

#### Backend
- .NET, ASP.NET, C#
- PHP, Laravel
- Python
- Node.js

#### Database
- MSSQL (primary)
- MySQL
- MongoDB
- PostgreSQL

#### Tools & Technologies
- REST APIs
- WebSocket
- Real-time Applications
- Docker
- Git

### Personal Projects

#### Homelab
- **Platform**: Proxmox cluster with 4 nodes
- **Resources**: 
  - Total RAM: 264GB (128 + 96 + 32 + 8)
  - Always-on: 40GB RAM 24/7
- **Self-hosted PaaS**: Coolify for deployments
- **Focus**: Infrastructure, automation, self-hosting

#### AI Enthusiast
- Interested in AI/ML technologies
- Exploring modern AI tools and frameworks

#### Blog (Coming Soon)
- Simple blog platform in development
- Link will be added when ready

### Featured Project

**CodeCellar** - Real-time Collaborative Code Editor
- **Event**: 2024 Young Talents Hackathon
- **Technologies**: 
  - Monaco Editor (VS Code engine)
  - WebSocket for real-time sync
  - Real-time collaborative editing
- **Link**: [young-talents-hackathon.ch](https://young-talents-hackathon.ch/)
- **Note**: Participant (not winner)

### Contact Information

- **Email**: artur@ferreiracruz.com (PRIMARY)
- **GitHub**: [github.com/arturict](https://github.com/arturict)
- **LinkedIn**: [linkedin.com/in/artur-ferreira7](https://www.linkedin.com/in/artur-ferreira7)
- **Website**: [arturf.ch](https://arturf.ch)

## 🚀 Deployment

### Infrastructure

**Platform**: Coolify (Self-hosted PaaS)
- **Container**: Docker multi-stage build
- **Runtime**: Node.js (production)
- **Port**: 3000
- **Health Check**: `/api/health`

### Deployment Configuration

#### Production (arturf.ch)
```yaml
Branch: main
Dockerfile: ./Dockerfile
Port: 3000
Healthcheck: /api/health
Auto-Deploy: On push to main
```

#### Development Preview (portfolio-dev.artur.engineer)
```yaml
Branch: dev
Dockerfile: ./Dockerfile
Port: 3000
Healthcheck: /api/health
Auto-Deploy: On push to dev
```

### Deployment Workflow

1. **Development Phase**
   - All changes made on `dev` branch
   - Push to `dev` → Auto-deploys to portfolio-dev.artur.engineer
   - Test and validate changes

2. **Production Release**
   - When stable and approved
   - Merge `dev` to `main`
   - Push to `main` → Auto-deploys to arturf.ch
   - Production is live! 🎉

### Git Workflow

```bash
# Development
git checkout dev
# Make changes...
git add .
git commit -m "feat: description"
git push origin dev
# → Deploys to portfolio-dev.artur.engineer

# Production Release
git checkout main
git merge dev
git push origin main
# → Deploys to arturf.ch
```

## 🎨 Design Features

### Visual Style
- **Theme**: Pure Dark Mode
- **Colors**: Cyan/Blue/Purple gradient accents
- **Background**: Pure black (`#000000`)
- **Cards**: Glassmorphism with backdrop blur
- **Effects**: Glowing shadows, smooth transitions

### Animations

#### Mouse-Reactive Background
- Gradient follows cursor position
- Smooth 300ms transitions
- Interactive user experience

#### Scroll Animations
- Sections fade in on scroll
- Intersection Observer API
- Progressive reveal

#### Text Effects
- Animated gradient text in hero
- Flowing color transitions
- Eye-catching headings

#### Floating Blobs
- Background blob animations
- 7-second animation loops
- Smooth, professional movement

### UI Components

#### Cards
- Glassmorphism effect
- Gradient borders
- Hover glow effects
- Responsive padding

#### Skill Badges
- Interactive hover states
- Gradient backgrounds
- Smooth transitions
- Organized by category

#### Buttons & CTAs
- Animated gradient borders
- Hover scale effects
- Icon + text combinations
- Touch-friendly sizing

### Responsive Design

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| **Mobile** | 320px+ | Single column, stacked sections |
| **Tablet** | 768px+ | Improved spacing, 2-column grids |
| **Desktop** | 1024px+ | Full grid layouts, side-by-side |
| **Large** | 1920px+ | Max width container, centered |

**Design Philosophy**: Mobile-first, touch-optimized, accessible

## 🛠️ Technical Details

### Architecture

**Frontend-Only Application**
- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible
- ✅ Client-side interactivity (mouse tracking, scroll observers)
- ❌ NO backend API routes (except `/api/health`)
- ❌ NO database
- ❌ NO authentication
- ❌ NO user management

### Tech Stack

```json
{
  "framework": "Next.js 16 (App Router)",
  "styling": "Tailwind CSS v4",
  "ui": "shadcn/ui",
  "icons": "Lucide React",
  "runtime": {
    "development": "Bun",
    "production": "Node.js"
  },
  "language": "TypeScript 5.9",
  "deployment": "Docker + Coolify"
}
```

### Performance

- **First Load**: ~100KB JS bundle
- **Optimization**: Next.js automatic optimization
- **Images**: Next.js Image component (optimized)
- **Lighthouse Score**: 95+ (Performance)
- **Mouse Tracking**: Optimized with CSS transitions

### File Structure

```
app/
├── page.tsx          # Main portfolio page (Client Component)
│                     # Includes: Hero, Skills, Experience, Projects
├── layout.tsx        # Root layout with metadata
├── globals.css       # Dark theme, animations, custom styles
└── api/
    └── health/
        └── route.ts  # Health check endpoint for Coolify

components/
└── ui/              # shadcn/ui components
    ├── card.tsx
    ├── badge.tsx
    └── button.tsx

lib/
└── utils.ts         # Utility functions (cn, etc.)

public/              # Static assets (images, icons)

Dockerfile           # Multi-stage production build
```

### Content Management

**Content is hardcoded** in `app/page.tsx`:
- Skills organized in categories
- Experience timeline
- Projects list
- Contact information

**No CMS** - Update content directly in code:
```tsx
const skills = {
  frontend: ["Vue.js", "React", "Next.js"],
  backend: [".NET", "C#", "ASP.NET"],
  // ...
};
```

## 📝 Content Updates

### Updating Skills

Edit `app/page.tsx`:
```tsx
const skills = {
  frontend: ["Vue.js", "React", "Next.js", "NEW_SKILL"],
  // Add new skills here
};
```

### Adding Projects

Edit the projects section in `app/page.tsx`:
```tsx
{/* Add new project card */}
<Card>
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Project details */}
  </CardContent>
</Card>
```

### Changing Contact Info

Update contact links in `app/page.tsx`:
```tsx
<a href="mailto:new@email.com">
  {/* Updated email */}
</a>
```

## 🔧 Development

### Local Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev
# → http://localhost:3000

# Build for production
bun run build

# Start production server
bun run start
```

### Adding shadcn/ui Components

```bash
bunx shadcn@latest add [component-name]
```

### Code Style

- **TypeScript**: Strict mode, explicit returns
- **Components**: Functional components only
- **Naming**: 
  - Files: `kebab-case.tsx`
  - Components: `PascalCase`
  - Functions: `camelCase`
- **Styling**: Tailwind utility classes

## 🚨 Important Notes

### What This Project IS
- ✅ Frontend-only portfolio website
- ✅ Server-side rendered with Next.js
- ✅ Static content (no dynamic data)
- ✅ Deployed on Coolify with Docker

### What This Project IS NOT
- ❌ NOT a full-stack application
- ❌ NO backend API (except health check)
- ❌ NO database integration
- ❌ NO authentication system
- ❌ NO user management
- ❌ NO CMS or admin panel

### Future Backend
See `BACKEND.md` for planned backend API features (Phase 2)

## 📚 Additional Resources

- **Repository**: [github.com/arturict/portfolio](https://github.com/arturict/portfolio)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **shadcn/ui Docs**: [ui.shadcn.com](https://ui.shadcn.com)
- **Coolify Docs**: [coolify.io/docs](https://coolify.io/docs)

## 📞 Support

For questions or issues:
- **Email**: artur@ferreiracruz.com
- **GitHub Issues**: Open an issue on the repository

---

**Last Updated**: 2025-01-25  
**Version**: 1.0.0  
**Status**: Production Ready ✅
