# AI Image Studio

An AI-powered image transformation SaaS that lets users upload a photo and generate six artistic variations while preserving the original identity using FLUX.1 Kontext.

**Live Demo:** https://ai-image-studio-saas-9thn.vercel.app/

---

## Overview

AI Image Studio is a full-stack SaaS application built with the modern Next.js ecosystem. Users can authenticate, upload images, generate AI-powered transformations, track monthly usage, and access generation history.

This project demonstrates production-ready architecture including authentication, database integration, AI inference, cloud image storage, monitoring, and deployment.

---

## Features

- Secure authentication with Google & GitHub (Clerk)
- Upload images using ImageKit
- Generate images in 6 curated artistic styles
- Identity-preserving AI transformations using FLUX.1 Kontext
- Monthly generation quota tracking
- Generation history
- Download generated images
- Delete previous generations
- Responsive UI
- Error monitoring with Sentry

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Clerk |
| Database | PostgreSQL (Neon) |
| ORM | Drizzle ORM |
| Image Storage | ImageKit |
| AI Model | FLUX.1 Kontext (Hugging Face Inference Providers) |
| Monitoring | Sentry |
| Deployment | Vercel |

---

## Architecture

```
Client
   │
Next.js App Router
   │
Authentication (Clerk)
   │
Server Actions / API
   │
PostgreSQL (Neon)
   │
Drizzle ORM
   │
AI Generation
(Hugging Face + FLUX.1 Kontext)
   │
Image Storage (ImageKit)
```

---

## Getting Started

Clone the repository

```bash
git clone https://github.com/Ahsanul-Mostakin/ai-image-studio-saas.git
```

Install dependencies

```bash
npm install
```

Create a `.env.local`

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=

HF_TOKEN=

SENTRY_AUTH_TOKEN=
```

Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## Project Highlights

- Production-ready full-stack architecture
- Modern App Router patterns
- Type-safe database access with Drizzle ORM
- Server-side authentication
- AI image generation workflow
- Cloud image management
- Usage tracking system
- Error monitoring and logging

---

## Future Improvements

- Subscription billing (Stripe)
- Admin dashboard
- Image collections
- More AI styles
- Prompt customization
- Team workspaces
- Background removal
- Image upscaling

---

## Author

**Ahsanul Mostakin**

Full Stack Developer (Next.js | TypeScript | PostgreSQL)

GitHub:
https://github.com/Ahsanul-Mostakin

LinkedIn:
https://www.linkedin.com/in/ahsanul-mostakin-2251b5192/

---

## License

This project is available for learning and portfolio purposes.
