# GitHub Copilot Instructions - Portfolio Project

## Project Overview

This is a **frontend-only** portfolio website for Artur Ferreira built with Next.js 15, Tailwind CSS, and shadcn/ui.

**Important**: This is a static portfolio website with NO backend, NO database, NO authentication.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Runtime**: Bun
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
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── api/
│       └── health/       # Health check endpoint only
├── components/
│   └── ui/              # shadcn/ui components only
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## What This Project IS

✅ A static portfolio website
✅ Server-side rendered (SSR) with Next.js
✅ Showcasing profile, skills, experience, and projects
✅ Beautiful UI with Tailwind CSS and shadcn/ui
✅ Fully responsive design
✅ Deployable to Coolify with Docker

## What This Project IS NOT

❌ NO backend API routes (except /api/health)
❌ NO database (PostgreSQL, MongoDB, etc.)
❌ NO authentication (NextAuth, Auth.js, etc.)
❌ NO user management
❌ NO CMS or admin panel
❌ NO data fetching from external APIs
❌ NO server actions beyond rendering
❌ NO environment variables for secrets
❌ NO rate limiting, analytics, or third-party services

## Portfolio Content

Show information about Artur Ferreira:

- **Name**: Artur Ferreira
- **Role**: Informatiker EFZ Applikationsentwickler (3. Lehrjahr)
- **Company**: CKW AG / Axpo Group
- **School**: Berufsbildungszentrum Wirtschaft, Informatik und Technik Sursee
- **Skills**:
  - Frontend: Vue.js, JavaScript, HTML/CSS, Tailwind CSS
  - Backend: PHP, Laravel, .NET, ASP.NET, C#, Python
  - Database: MySQL, MSSQL, MongoDB
  - Other: REST APIs, WebSocket, Real-time Applications
- **Featured Project**: CodeCellar - Real-time code editor from 2024 Young Talents Hackathon (https://young-talents-hackathon.ch/)
- **Links**:
  - GitHub: https://github.com/arturict
  - LinkedIn: https://www.linkedin.com/in/artur-ferreira7

## Code Style

### TypeScript
- Use strict mode
- Prefer `const` over `let`
- Use type inference when obvious
- Explicitly type function returns for components

### React/Next.js
- Server Components by default
- Use `"use client"` only when absolutely necessary
- Functional components only
- Use Next.js 15 App Router conventions

### Tailwind CSS
- Use utility classes directly in JSX
- Follow mobile-first responsive design
- Use Tailwind v4 syntax (with `@theme` directive)
- Leverage arbitrary values when needed: `w-[342px]`

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
1. Create component in `components/`
2. Import in `app/page.tsx`
3. Use shadcn/ui components for consistency
4. Apply Tailwind CSS for styling

### Updating portfolio content
- Edit `app/page.tsx` directly
- Content is hardcoded (no database)
- Update skills, projects, or experience inline

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

- Dockerfile in root
- No environment variables needed
- Port: 3000
- Health check: `/api/health`

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

❌ Don't add backend routes
❌ Don't install database libraries
❌ Don't add authentication
❌ Don't add environment variables for secrets
❌ Don't add API integrations
❌ Don't add server actions that mutate data
❌ Don't overcomplicate - keep it simple!

## When Helping with Code

1. **Check Context7 first** for Next.js, Tailwind, or shadcn/ui questions
2. **Use Playwright MCP** for browser testing or automation
3. **Keep it frontend-only** - no backend logic
4. **Use Server Components** by default
5. **Leverage shadcn/ui** for UI consistency
6. **Mobile-first** responsive design
7. **Type-safe** with TypeScript

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
// components/about-section.tsx
export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">About</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

### Using Context7
```
"Get me the Next.js metadata API documentation using Context7"
"Show me Tailwind CSS gradient utilities from Context7"
"Find shadcn/ui Button component examples via Context7"
```

## Remember

This is a simple, beautiful portfolio website. No backend. No database. Just a clean, professional showcase of Artur's work and skills.

**When in doubt, check Context7 for documentation!**
