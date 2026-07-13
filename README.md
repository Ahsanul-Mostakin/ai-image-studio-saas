# AI Image Studio

Transform photos into 6 curated art styles using AI — built with Next.js 16, TypeScript, and a full production stack.

**🔗 Live Demo:** [ai-image-studio-saas-9thn.vercel.app](https://ai-image-studio-saas-9thn.vercel.app/)

---

## 📸 Screenshots

### Landing Page
<img width="1362" alt="Landing page" src="https://github.com/user-attachments/assets/d5a15258-c9a3-4a3e-b0db-33ad1af7cfd7" />

### Style Transfer Result
<img width="1362" alt="Generated result" src="https://github.com/user-attachments/assets/113d5ef7-88ee-4e99-aff0-cb782c6ef03a" />

### Side-by-Side Comparison
<img width="1366" alt="Before and after comparison" src="https://github.com/user-attachments/assets/8f9b6d8f-9170-4555-a895-200d85b08b93" />

### Pricing Plans
<img width="1366" alt="Pricing plans" src="https://github.com/user-attachments/assets/9021df58-23ee-4763-9165-34d3f6257ee9" />

### Generation History
<img width="642" alt="Generation history" src="https://github.com/user-attachments/assets/9449c5af-2526-4c0e-bd16-7e89c6000b22" />

---

## Features

- 🔐 Authentication with Google & GitHub login (Clerk)
- 🎨 6 curated art styles — Storybook 3D, Anime Cel, Clay Render, Pixart, Voxel Block, Marble Sculpture
- 🧠 AI-powered image style transfer with identity preservation
- 📂 Image upload via ImageKit
- 📊 Monthly generation quota tracking
- 🗂️ Generation history — view, download, and delete past results
- 💳 Tiered pricing (Free live, Pro/Studio coming soon)
- 🚨 Error monitoring with Sentry
- 🌐 Deployed on Vercel

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth | Clerk |
| Database | PostgreSQL (Neon) |
| ORM | Drizzle ORM |
| Image Hosting | ImageKit |
| AI Generation | Hugging Face Inference Providers (FLUX.1-Kontext) |
| Monitoring | Sentry |
| Deployment | Vercel |

## Getting Started

```bash
git clone https://github.com/Ahsanul-Mostakin/ai-image-studio-saas.git
cd ai-image-studio-saas
npm install
```

Create a `.env.local` file:

```
DATABASE_URL=
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
HF_TOKEN=
```

Run the dev server:

```bash
npm run dev
```

## License

Open source, available for learning purposes.

---

**Built by [Ahsanul Mostakin](https://github.com/Ahsanul-Mostakin)**
