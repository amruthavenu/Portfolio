# Amrutha Venugopal — Portfolio

Personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**. Features a clean, elegant design showcasing my experience as a full-stack software developer based in Stuttgart, Germany.

## 🔗 Live Site
(https://portfolio-amrutha-venugopal.vercel.app/)

---

## ✨ Features

- **Single-page layout** with smooth scroll navigation
- **Expandable experience timeline** for Software and Automotive sections
- **Projects showcase** with category filtering (AI & ML, Embedded/AUTOSAR, Web/Full-Stack)
- **Contact form** powered by [Resend](https://resend.com)
- **Responsive design** — mobile and desktop friendly
- **Paper texture aesthetic** with warm tones and Playfair Display typography

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS Modules |
| UI Components | shadcn/ui |
| Email | Resend |
| Fonts | Playfair Display + DM Mono |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Home — Hero, Experience, Skills, Education, Contact
│   ├── layout.tsx            # Root layout with Navbar
│   ├── globals.css           # Global styles and CSS variables
│   ├── page.module.css       # Page-specific styles
│   ├── projects/
│   │   └── page.tsx          # Projects showcase page
│   └── api/
│       └── contact/
│           └── route.ts      # Resend email API route
├── components/
│   └── Navbar.tsx            # Fixed navbar with anchor + route links
└── public/
    └── images/
        └── photo.jpg         # Profile photo
```

---

## 🚀 Getting Started

**Clone the repo:**
```bash
git clone https://github.com/amruthavenu/Portfolio.git
cd Portfolio
```

**Install dependencies:**
```bash
npm install
```

**Set up environment variables:**

Create a `.env.local` file in the root:
```
RESEND_API_KEY=your_resend_api_key
```

**Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact Form Setup

The contact form uses [Resend](https://resend.com) to send emails.

1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Free tier includes 3,000 emails/month

---

## 🌐 Deployment

This project is optimised for deployment on **Vercel**:

1. Push your code to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add `RESEND_API_KEY` in Vercel's environment variables
4. Deploy

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with Next.js & Tailwind CSS · Stuttgart, Germany*