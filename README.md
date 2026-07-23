# AI Image Studio

An AI-powered image transformation SaaS that allows users to upload an image and convert it into six different artistic styles using FLUX.1-Kontext. Built with a modern full-stack architecture using Next.js, TypeScript, PostgreSQL, and Clerk Authentication.

## Live Demo

🔗 https://ai-image-studio-saas-9thn.vercel.app/

---

## Screenshots

### Landing Page

<img width="1362" alt="Landing Page" src="https://github.com/user-attachments/assets/d5a15258-c9a3-4a3e-b0db-33ad1af7cfd7" />

### AI Style Transformation

<img width="1362" alt="Generated Result" src="https://github.com/user-attachments/assets/113d5ef7-88ee-4e99-aff0-cb782c6ef03a" />

### Generation History

<img width="642" alt="Generation History" src="https://github.com/user-attachments/assets/9449c5af-2526-4c0e-bd16-7e89c6000b22" />

### Pricing

<img width="1366" alt="Pricing" src="https://github.com/user-attachments/assets/9021df58-23ee-4763-9165-34d3f6257ee9" />

---

## Features

- Google & GitHub authentication using Clerk
- AI-powered image transformation with FLUX.1-Kontext
- Six artistic styles
- Secure image upload with ImageKit
- Monthly generation quota
- Generation history (view, download, delete)
- Error monitoring with Sentry
- Responsive UI
- Deployed on Vercel

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
| AI Model | FLUX.1-Kontext (Hugging Face Inference Providers) |
| Monitoring | Sentry |
| Deployment | Vercel |

---

## Getting Started

Clone the repository.

```bash
git clone https://github.com/Ahsanul-Mostakin/ai-image-studio-saas.git
cd ai-image-studio-saas
```

Install dependencies.

```bash
npm install
```

Create a `.env.local` file.

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=

HF_TOKEN=

SENTRY_AUTH_TOKEN=
```

Run the development server.

```bash
npm run dev
```

Open http://localhost:3000
