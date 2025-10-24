# Backend API Documentation

## API Endpoint

The portfolio backend API is deployed at:

```
https://portfolio-v2-dev.artur.engineer
```

## Purpose

This API will provide endpoints for:
- Contact form submissions
- Project data management
- Analytics tracking
- Dynamic content delivery

## Architecture

- **Frontend**: https://arturf.ch (This Next.js app)
- **Backend API**: https://portfolio-v2-dev.artur.engineer
- **Communication**: REST API / GraphQL

## Environment Variables (For Backend Integration)

When integrating the backend, add to `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://portfolio-v2-dev.artur.engineer
```

## Future Endpoints

### Contact Form
```
POST /api/contact
Body: { name, email, message }
```

### Projects
```
GET /api/projects
GET /api/projects/:id
```

### Analytics
```
POST /api/analytics/page-view
POST /api/analytics/event
```

## Notes

- Currently, the portfolio is **frontend-only**
- Backend will be added in Phase 2
- API URL is reserved and documented for future use
- All data is currently hardcoded in the frontend
