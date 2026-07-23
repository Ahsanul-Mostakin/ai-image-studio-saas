<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
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
>>>>>>> be2addd309d682e295a1e72f17c1988e78965489
