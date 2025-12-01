<div align="center">
  <img src="public/header/logo-black.svg" alt="Renovo Atelier Logo" width="200"/>
  
  # Renovo Atelier
  
  **Professional website for a clothing repair and tailoring atelier**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  
  [🌐 Demo](https://app-renovo-atelier.vercel.app/) • [📋 Features](#-features) • [🛠 Tech Stack](#-tech-stack)
</div>

---

## 📖 About

**Renovo Atelier** — a modern multilingual website for an atelier specializing in clothing repair, tailoring, and restoration. The project is built with a focus on performance, SEO optimization, and user experience.

### 🎯 Key Highlights

- **🚀 High Performance** — built on Next.js 15 with App Router and React Server Components
- **🌍 4 Languages** — full localization in English, Polish, Russian, and Ukrainian
- **📱 Responsive Design** — perfect display on all devices
- **🔍 SEO Optimized** — sitemap, robots.txt, Open Graph meta tags
- **♿ Accessibility** — semantic markup and keyboard navigation support

---

## ✨ Features

| Section          | Description                                         |
| ---------------- | --------------------------------------------------- |
| 🏠 **Hero**      | Attractive landing screen with call-to-action       |
| 🛠 **Services**  | Service catalog with prices and add-to-cart feature |
| 📸 **Portfolio** | Gallery of completed works with slider              |
| 👥 **About Us**  | Information about the atelier and team              |
| ⭐ **Reviews**   | Customer reviews with slider                        |
| ❓ **FAQ**       | Answers to frequently asked questions (accordion)   |
| 📬 **Contacts**  | Contact form with validation                        |
| 🛒 **Cart**      | Service cart with order checkout                    |

---

## 🛠 Tech Stack

### Frontend

| Technology       | Version | Purpose                      |
| ---------------- | ------- | ---------------------------- |
| **Next.js**      | 15.4    | React framework with SSR/SSG |
| **React**        | 19.1    | UI library                   |
| **TypeScript**   | 5.x     | Type safety                  |
| **Tailwind CSS** | 4.x     | Utility-first CSS framework  |

### State & Data Management

| Technology    | Purpose                     |
| ------------- | --------------------------- |
| **Zustand**   | Global state (cart)         |
| **next-intl** | Internationalization (i18n) |

### Forms & Validation

| Technology              | Purpose                   |
| ----------------------- | ------------------------- |
| **Formik**              | Form management           |
| **Yup**                 | Schema validation         |
| **react-phone-input-2** | International phone input |

### UI Components

| Technology         | Purpose                  |
| ------------------ | ------------------------ |
| **Headless UI**    | Accessible UI primitives |
| **Swiper**         | Sliders and carousels    |
| **react-toastify** | Notifications            |

### Integrations

| Technology           | Purpose                  |
| -------------------- | ------------------------ |
| **EmailJS**          | Serverless form handling |
| **Vercel Analytics** | Traffic analytics        |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   └── [locale]/           # Dynamic locale routing
├── components/
│   ├── business/           # Business components (Header, Footer, Services...)
│   └── ui/                 # UI components (Button, Input, Link...)
├── hooks/                  # Custom React hooks
├── stores/                 # Zustand stores
├── i18n/                   # Localization config
├── constants/              # App constants
├── types/                  # TypeScript types
└── utils/                  # Utilities

messages/                   # Translation files (en, pl, ru, uk)
public/                     # Static assets
```

---

## 🚀 Getting Started

### Requirements

- Node.js 18.x or higher
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/renovo-atelier.git
cd renovo-atelier

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command          | Description          |
| ---------------- | -------------------- |
| `npm run dev`    | Start dev server     |
| `npm run build`  | Build for production |
| `npm run start`  | Run production build |
| `npm run lint`   | Run ESLint           |
| `npm run format` | Format with Prettier |

---

## 🌐 Localization

The project supports 4 languages:

| Code | Language   | File               |
| ---- | ---------- | ------------------ |
| `en` | English    | `messages/en.json` |
| `pl` | Polski     | `messages/pl.json` |
| `ru` | Русский    | `messages/ru.json` |
| `uk` | Українська | `messages/uk.json` |

To add a new language:

1. Create a file `messages/{code}.json`
2. Add the locale code to the `src/i18n/` configuration

---

## 📊 Performance

The project is optimized for high Lighthouse scores:

- ⚡ **Performance** — image optimization via `next/image`
- 🔍 **SEO** — auto-generated sitemap.xml and robots.txt
- ♿ **Accessibility** — semantic HTML markup
- 📱 **Best Practices** — modern web standards

---

## 📄 License

This project is private and protected by copyright.

---

<div align="center">
  <sub>Made with ❤️ for Renovo Atelier</sub>
</div>
