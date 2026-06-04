# Fotoee Publish

Fotoee Publish is an AI Publishing Platform that turns AI-created website packages into live URLs. Users can upload HTML, ZIP, React builds, or Vue builds, then get deployment analysis, screenshots, a QR code, analytics, and a shareable production URL.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- Shadcn-style UI primitives
- Framer Motion
- Next API Routes
- PostgreSQL schema via Prisma
- S3-compatible storage configuration
- NextAuth Google and email login
- Docker

## Priority Pages

- `/` - International SaaS homepage
- `/upload` - Upload & Publish workflow
- `/dashboard` - SaaS data dashboard

## Page Structure

- Home
  - Hero
  - Supported platforms
  - Three-step publishing
  - AI Deployment Assistant
  - Analytics preview
  - Template marketplace
  - Pricing
  - FAQ
  - Footer
- Upload & Publish
  - Large drag-and-drop upload surface
  - HTML / ZIP / React Build / Vue Build support
  - Automatic analysis checklist
  - AI Improve Website future entry
  - Generated URL
  - QR code
  - Desktop screenshot preview
  - Mobile screenshot preview
  - Copy URL action
- Dashboard
  - Left navigation
  - Total Sites
  - Total Visitors
  - Storage Usage
  - Countries
  - Visitor trend
  - Country distribution
  - Recent sites
  - Storage breakdown
- My Sites
  - Website screenshot
  - Website name
  - Visit URL
  - Live status
  - SSL Enabled
  - Copy URL
  - Custom Domain
  - Delete Site
  - Redeploy
  - Analytics
- Analytics
  - PV
  - UV
  - Visit Trend
  - Top Country
  - Device Type
  - Traffic sources
- Templates
- Domains
- Settings

## Component Structure

- `components/landing-page.tsx` - Homepage sections and marketing UI
- `components/upload-publish-page.tsx` - Upload, analysis, AI Improve Website, and publish result UI
- `components/dashboard-page.tsx` - Dashboard shell, navigation, metrics, charts, recent sites
- `components/analytics-page.tsx` - Vercel-style analytics UI
- `components/sites-page.tsx` - Published site management cards
- `components/secondary-page.tsx` - Shared layout for Templates, Domains, and Settings
- `components/ui/button.tsx` - Button primitive
- `components/ui/badge.tsx` - Badge primitive
- `components/ui/card.tsx` - Card primitive
- `lib/utils.ts` - Utility helpers
- `lib/mock-data.ts` - Product mock data for landing sections

## Database Design

The Prisma schema lives in `prisma/schema.prisma`.

Models:

- `User`
  - Owns projects
  - Stores email, name, image, timestamps
- `Project`
  - Represents a published AI website
  - Stores owner, name, slug, source, status, ZIP object key, public URL
- `Deployment`
  - Tracks each deployment attempt
  - Stores status, checks, start time, end time
- `AnalyticsEvent`
  - Tracks page events
  - Stores type, country, device, referrer, path, timestamp

Enum:

- `DeployStatus`
  - `QUEUED`
  - `SCANNING`
  - `DEPLOYING`
  - `LIVE`
  - `FAILED`

## API Design

- `POST /api/deploy`
  - Accepts multipart form data with a `file`
  - Validates ZIP upload
  - Generates deployment ID
  - Returns queued status, checks, estimated publish URL, and estimated seconds
- `GET /api/analytics`
  - Returns Plausible/Vercel-style analytics mock data
  - Includes PV, UV, country count, device share, and referrers
- `/api/auth/[...nextauth]`
  - NextAuth route handler
  - Supports Google login and email login

## File Structure

```txt
app/
  analytics/page.tsx
  api/analytics/route.ts
  api/auth/[...nextauth]/route.ts
  api/deploy/route.ts
  dashboard/page.tsx
  domains/page.tsx
  layout.tsx
  page.tsx
  robots.ts
  settings/page.tsx
  sitemap.ts
  sites/page.tsx
  templates/page.tsx
  upload/page.tsx
components/
  analytics-page.tsx
  dashboard-page.tsx
  landing-page.tsx
  secondary-page.tsx
  sites-page.tsx
  upload-publish-page.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
lib/
  mock-data.ts
  utils.ts
prisma/
  schema.prisma
auth.ts
Dockerfile
next.config.ts
tailwind.config.ts
tsconfig.json
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and configure:

- PostgreSQL
- Google OAuth
- Email login provider
- S3-compatible storage
- Public app URL
