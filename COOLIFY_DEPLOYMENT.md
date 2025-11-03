# Coolify Deployment Guide - Gonçalo's Portfolio

This guide explains how to deploy Gonçalo's portfolio to Coolify.

## Prerequisites

- Coolify instance running and accessible
- GitHub repository access (https://github.com/arturict/goncalo-portfolio)
- Domain/Subdomain configuration

## Deployment Environments

### Production (goncalo.artur.engineer)

**Branch**: `main`  
**Update Policy**: Auto-deploy on push to main

### Development (goncalo-dev.artur.engineer)

**Branch**: `dev`  
**Update Policy**: Auto-deploy on push to dev

## Coolify Configuration

### 1. Create New Application in Coolify

**Settings:**
- **Repository**: https://github.com/arturict/goncalo-portfolio
- **Branch**: `main` (for production) or `dev` (for development)
- **Build Pack**: Dockerfile
- **Dockerfile Location**: `./Dockerfile`

### 2. Environment Variables

No environment variables required for this frontend-only portfolio.

Optional:
```
NODE_ENV=production
PORT=3000
```

### 3. Build Configuration

**Build Command**: (handled by Dockerfile)  
**Start Command**: (handled by Dockerfile)  
**Port**: `3000`

### 4. Container Settings

**Image**: Built from `oven/bun:1` Dockerfile  
**Expose**: Port 3000  
**Health Check**: Enabled (optional)

### 5. Domain/SSL Configuration

- **Production**: Point `goncalo.artur.engineer` to Coolify application
- **Development**: Point `goncalo-dev.artur.engineer` to Coolify application
- SSL certificates are auto-managed by Coolify

## Deployment Steps

1. **In Coolify Dashboard:**
   - Click "New" → "Application"
   - Select "Docker" as source
   - Paste GitHub repo URL
   - Select branch (`main` or `dev`)

2. **Configure:**
   - Set resource limits (CPU, Memory as needed)
   - Configure domains
   - Enable auto-deploy on commit

3. **Deploy:**
   - Click "Deploy"
   - Coolify will clone the repo, build with Bun, and start the container

4. **Verify:**
   - Visit `goncalo.artur.engineer` for production
   - Visit `goncalo-dev.artur.engineer` for development

## Dockerfile Details

The Dockerfile uses Bun's official image for optimized performance:

```dockerfile
FROM oven/bun:1
```

**Multi-stage build includes:**
1. **Install stage**: Install dependencies with `bun install`
2. **Build stage**: Run `bun run build` to compile Next.js
3. **Production stage**: Copy only production dependencies

**Build time**: ~2-3 minutes (depending on server)  
**Image size**: ~500-600 MB

## Troubleshooting

### Build fails
- Check Dockerfile syntax
- Ensure bun.lock is committed
- Check build logs in Coolify

### Application won't start
- Verify PORT 3000 is accessible
- Check health endpoint: `GET /`
- Review application logs

### Static assets not loading
- Ensure `public/` directory is copied
- Check `.next/` directory permissions

## Git Workflow

```bash
# For development
git checkout dev
git push origin dev  # Auto-deploys to goncalo-dev.artur.engineer

# For production
git checkout main
git merge dev
git push origin main  # Auto-deploys to goncalo.artur.engineer
```

## Performance Tips

- Bun is significantly faster than Node.js (2-3x faster installs)
- First deployment may take longer (~3 min)
- Subsequent deployments are faster (~1-2 min)
- Cold starts are minimal due to efficient Bun runtime

## Monitoring

Coolify provides real-time logs and metrics. Monitor:
- Build status
- Deployment logs
- Container resource usage
- Application errors

## Support

For Coolify-specific issues: [Coolify Docs](https://coolify.io)  
For application issues: [GitHub Issues](https://github.com/arturict/goncalo-portfolio/issues)
