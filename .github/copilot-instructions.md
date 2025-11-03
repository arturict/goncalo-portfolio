# GitHub Copilot Instructions - Gonçalo's Portfolio

## Project Overview

This is a **professional portfolio website** for Gonçalo Torres Novo (Commercial Apprentice) built with Next.js 16, Tailwind CSS, and shadcn/ui.

**Important**: This is a commercial apprentice portfolio - NO backend, NO database, NO authentication. Focus is on professional business presentation, not technical/development showcase.

## 🌐 Deployment & Branching

### Production & Development URLs

#### Main Branch (Production)
- **URL**: https://goncalo.artur.engineer
- **Purpose**: Live production portfolio
- **Auto-Deploy**: Coolify deploys on every push to `main`
- **Status**: Only merge after user approval

#### Dev Branch (Development/Preview)
- **URL**: https://goncalo-dev.artur.engineer
- **Purpose**: Testing and preview before production
- **Auto-Deploy**: Coolify deploys on every push to `dev`
- **Workflow**: ALL changes start here first

### Workflow Rules

**ALWAYS work on the `dev` branch for new features!**

1. **Development**: Make all changes on `dev` branch
2. **Push to dev**: `git push origin dev` → Auto-deploys to goncalo-dev.artur.engineer
3. **Test Preview**: Check changes at goncalo-dev.artur.engineer
4. **Request Approval**: Ask user: "Ready zum mergen zu main?"
5. **Wait for Confirmation**: User tests and confirms the changes
6. **Merge to main**: Only after user approval → `git merge dev` → `git push origin main`
7. **Production Deploy**: Auto-deploys to goncalo.artur.engineer

**IMPORTANT**: 
- ⚠️ NEVER push directly to `main` without user confirmation
- ✅ ALWAYS work on `dev` first
- ✅ ALWAYS ask for user approval before merging to `main`
- ✅ ALWAYS sync dev with main after merging: `git checkout dev && git merge main && git push origin dev`

### Commands

```bash
# Switch to dev for development
git checkout dev

# Make changes, commit, push to dev
git add .
git commit -m "feat: your changes"
git push origin dev
# → Auto-deploys to goncalo-dev.artur.engineer for preview

# After user confirmation, merge to main
git checkout main
git merge dev
git push origin main
# → Auto-deploys to goncalo.artur.engineer

# Sync dev back with main after merging
git checkout dev
git merge main
git push origin dev
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Runtime**: Bun (dev) / Node.js (production)
- **Language**: TypeScript

## Documentation Sources

**ALWAYS use Context7 for up-to-date documentation:**

- For **Next.js**: Use Context7 with library ID `/vercel/next.js`
- For **Tailwind CSS**: Use Context7 with library ID `/tailwindlabs/tailwindcss.com`
- For **shadcn/ui**: Use Context7 with library ID `/shadcn-ui/ui`
- For **Playwright** (if testing): Use the Playwright MCP tool

Example:
```
Use Context7 to get Next.js metadata API docs
Use Context7 to get Tailwind gradient utilities
Use Playwright MCP for browser testing
```

## Project Structure

```
portfolio/
 app/
   ├── page.tsx          # Main portfolio page (Client Component)
   ├── layout.tsx        # Root layout
   ├── globals.css       # Global styles + animations
   └── api/
       └── health/       # Health check endpoint only
 components/
   └── ui/              # shadcn/ui components only
 lib/
   └── utils.ts         # Utility functions
 public/              # Static assets
```

## What This Project IS

 A static portfolio website  
 Server-side rendered (SSR) with Next.js  
 Showcasing profile, skills, experience, and projects  
 Beautiful UI with Dark Mode  
 Mouse-reactive background  
 Smooth scroll animations  
 Fully responsive design  
 Deployable to Coolify with Docker  

## What This Project IS NOT

 NO backend API routes (except /api/health)  
 NO database (PostgreSQL, MongoDB, etc.)  
 NO authentication (NextAuth, Auth.js, etc.)  
 NO user management  
 NO CMS or admin panel  
 NO data fetching from external APIs  
 NO server actions beyond rendering  
 NO environment variables for secrets  
 NO rate limiting, analytics, or third-party services  

## Portfolio Content

Show information about Artur Ferreira:

### Basic Info
- **Name**: Artur Ferreira
- **Role**: Informatiker EFZ Applikationsentwickler (3. Lehrjahr)
- **Company**: CKW AG / Axpo Group
- **Technologies**: Microsoft Stack (.NET, ASP.NET, C#, MSSQL)
- **School**: Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee
- **Graduation**: August 2027

### Skills
- **Frontend**: Vue.js, JavaScript, HTML/CSS, Tailwind CSS, React, Next.js
- **Backend**: .NET, ASP.NET, C#, PHP, Laravel, Python, Node.js
- **Database**: MSSQL, MySQL, MongoDB, PostgreSQL
- **Other**: REST APIs, WebSocket, Real-time Applications, Docker, Git

### Personal Projects
- **Homelab**: Proxmox cluster with 4 nodes
  - Total RAM: 264GB (128 + 96 + 32 + 8)
  - Always-on: 40GB RAM 24/7
  - Self-hosted PaaS: Coolify for deployments
- **AI Enthusiast**: Interested in AI/ML technologies
- **Blog**: Coming Soon - Simple blog platform (link will be added later)

### Featured Project
- **CodeCellar**: Real-time code editor from 2024 Young Talents Hackathon
- **Tech**: Monaco Editor, WebSocket, Real-time Sync
- **Link**: https://young-talents-hackathon.ch/
- **Note**: NOT a hackathon winner, just participated

### Links
- **Email**: artur@ferreiracruz.com (PRIMARY)
- **GitHub**: https://github.com/arturict
- **LinkedIn**: https://www.linkedin.com/in/artur-ferreira7
- **Website**: https://arturf.ch

## Code Style

### TypeScript
- Use strict mode
- Prefer `const` over `let`
- Use type inference when obvious
- Explicitly type function returns for components

### React/Next.js
- Use Client Components ("use client") when needed (mouse tracking, animations)
- Server Components by default for static content
- Functional components only
- Use Next.js 16 App Router conventions

### Tailwind CSS
- Use utility classes directly in JSX
- Follow mobile-first responsive design
- Use Tailwind v4 syntax (with `@theme` directive)
- Leverage arbitrary values when needed: `w-[342px]`
- Responsive classes: `text-base sm:text-lg md:text-xl`

### Components
- One component per file
- Name files in kebab-case: `portfolio-section.tsx`
- Export components as default
- Keep components small and focused

## Naming Conventions

- **Files**: kebab-case (`portfolio-header.tsx`)
- **Components**: PascalCase (`PortfolioHeader`)
- **Functions**: camelCase (`formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_SKILLS`)

## Common Tasks

### Adding a new section
1. Create component in `components/` (if reusable)
2. Add to `app/page.tsx`
3. Use shadcn/ui components for consistency
4. Apply Tailwind CSS for styling
5. Test on dev deployment

### Updating portfolio content
- Edit `app/page.tsx` directly
- Content is hardcoded (no database)
- Update skills, projects, or experience inline
- Push to `dev` branch first!

### Styling
- Use Tailwind utility classes
- Check Context7 for Tailwind docs
- Use shadcn/ui variants for consistency
- Add custom animations in `globals.css` if needed

### Adding shadcn/ui components
```bash
bunx shadcn@latest add [component-name]
```

## Deployment

**Target**: Coolify with Docker

### Production (arturf.ch)
- Branch: `main`
- Dockerfile: `Dockerfile`
- Port: `3000`
- Health check: `/api/health`

### Development (portfolio-dev.artur.engineer)
- Branch: `dev`
- Dockerfile: `Dockerfile`
- Port: `3000`
- Health check: `/api/health`

### Backend API (Future)
- URL: `https://portfolio-v2-dev.artur.engineer`
- See: `BACKEND.md`

## Commands

```bash
# Development
bun run dev

# Build
bun run build

# Production
bun run start

# Linting
bun run lint
```

## What to AVOID

 Don't add backend routes  
 Don't install database libraries  
 Don't add authentication  
 Don't add environment variables for secrets  
 Don't add API integrations  
 Don't add server actions that mutate data  
 Don't push directly to main (use dev first!)  
 Don't overcomplicate - keep it simple!  

## When Helping with Code

1. **Check branch** - Use `dev` for all development
2. **Check Context7 first** for Next.js, Tailwind, or shadcn/ui questions
3. **Use Playwright MCP** for browser testing or automation
4. **Keep it frontend-only** - no backend logic
5. **Use Client Components** when needed (mouse tracking, scroll observers)
6. **Leverage shadcn/ui** for UI consistency
7. **Mobile-first** responsive design
8. **Type-safe** with TypeScript
9. **Test on dev** before merging to main

## Design Guidelines

### Dark Mode
- Pure black background (`bg-black`)
- Cyan/Blue/Purple gradient accents
- Glassmorphism cards
- Glowing shadows on hover

### Animations
- Mouse-reactive background gradient
- Scroll-triggered fade-ins
- Smooth transitions (300ms)
- Blob animations (7s loop)
- Not cringe, professional!

### Responsive
- Mobile: 320px+ (single column)
- Tablet: 768px+ (better spacing)
- Desktop: 1024px+ (grid layouts)
- Touch-friendly buttons

## Examples

### Adding a new skill
```tsx
// In app/page.tsx
const skills = {
  frontend: ["Vue.js", "React", "JavaScript"],
  // Add new skill here
}
```

### Creating a new section
```tsx
// In app/page.tsx (or new component)
<section className="scroll-fade-in space-y-12">
  <div className="flex items-center gap-4">
    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl">
      <Icon className="w-8 h-8 text-cyan-400" />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold">Section Title</h2>
  </div>
  {/* Content */}
</section>
```

### Using Context7
```
"Get me the Next.js metadata API documentation using Context7"
"Show me Tailwind CSS gradient utilities from Context7"
"Find shadcn/ui Button component examples via Context7"
```

## Remember

- **Always work on `dev` branch** for new features
- **Test on portfolio-dev.artur.engineer** before merging
- **User approval required** before merging to main
- **This is frontend-only** - no backend, no database
- **Content is hardcoded** - no CMS needed
- **Mobile-first** design approach
- **When in doubt, check Context7** for documentation!

## Docker Build Optimization

This project uses an optimized multi-stage Docker build for **45% faster deployments**:

- **Build Time**: ~26 seconds (down from 47 seconds)
- **Total Deploy Time**: ~68 seconds (down from 185 seconds)
- **Key Optimization**: Parallel dependency installation + enhanced .dockerignore

### How It Works
1. **Stage 1 (install)**: Copies package files and installs all dependencies
2. **Stage 2 (prod-deps)**: Runs in parallel - installs production dependencies only
3. **Stage 3 (builder)**: Builds Next.js app using dev dependencies
4. **Stage 4 (runtime)**: Minimal production image with only necessary files

### Health Check
Uses native Bun HTTP fetch (no curl/wget required):
```dockerfile
CMD bun --eval "const res = await fetch('http://localhost:3000/api/health'); process.exit(res.ok ? 0 : 1)"
```

### When Modifying Dockerfile
- Always test locally: `docker build -t portfolio:test .`
- Ensure health check passes: `docker run -d --name test portfolio:test && sleep 3 && docker inspect --format='{{json .State.Health.Status}}' test`
- Verify `/api/health` endpoint returns 200 status

## Release Process

1. Develop on `dev` branch
2. Push to `dev` → Auto-deploys to goncalo-dev.artur.engineer
3. User tests and approves
4. Merge `dev` to `main`
5. Push to `main` → Auto-deploys to goncalo.artur.engineer
6. Production is live! 🎉
