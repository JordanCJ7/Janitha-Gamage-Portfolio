<div align="center">

# ✦ Janitha Gamage — Portfolio

**Emerging Developer & Product Strategist**

A modern, minimalist, single-page portfolio built with Next.js 16, React 19, and Tailwind CSS v4.
Designed for clarity, elegance, and a seamless reading experience.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-New_York-000?style=flat-square)](https://ui.shadcn.com/)
[![Deployed on Furo](https://img.shields.io/badge/Furo-Deployed-00E19B?style=flat-square)](https://janithagamage.furo.lk)

[**Live Demo →**](https://janithagamage.furo.lk/)

</div>

---

## ✦ Overview

A clean, content-first developer portfolio that prioritizes **readability** and **substance** over visual noise. Inspired by the minimalist CV-style approach of modern developer portfolios, it presents professional information in a single, scroll-friendly page with subtle interactive touches that reward exploration.

### Design Philosophy

```
Minimalist form. Maximum substance.
```

- **Single-page layout** — Everything accessible without navigation complexity.
- **Data-driven** — All content lives in one TypeScript file (`src/data/resume-data.tsx`).
- **Typography-first** — Inter font family, careful typographic hierarchy.
- **Monochrome + accent** — Zinc-neutral palette with a single accent color (red) used sparingly.
- **Print-ready** — Optimized for printing as a professional resume.

---

## ✦ Features

### Core
| Feature | Description |
|---|---|
| 📄 **Single-Page Resume** | All content in one elegant, scrollable page |
| 🎨 **shadcn/ui Components** | New York style, zinc base — premium UI out of the box |
| ⌨️ **⌘K Command Palette** | Quick navigation, social links, and actions via keyboard |
| 🌗 **Dark / Light Mode** | System-aware theme with manual toggle in command palette |
| 🖨️ **Print Optimized** | Clean resume output, interactive elements auto-hidden |
| 📱 **Fully Responsive** | Mobile-first design with adaptive command palette floating button |

### Interactive Details
| Feature | Description |
|---|---|
| 👤 **Avatar Effect** | Grayscale profile image that zooms slightly and shifts to full color on hover |
| ✨ **Section Heading Animation** | Organic clip-path highlight reveals behind titles on section hover |
| 〰️ **Wavy Link Underlines** | SVG-based animated underlines on link hover |
| → **Arrow Link Pattern** | Consistent "→ label" navigation with translate animation |
| 📊 **Project Metrics** | Key impact numbers (e.g., *📊 2M+ Active Users*) displayed on project cards |

### SEO & Performance
| Feature | Description |
|---|---|
| 🔍 **JSON-LD Structured Data** | Person schema loaded dynamically for rich search results |
| 🏷️ **Open Graph + Twitter Cards** | Custom metadata configured for beautiful link previews |
| ⚡ **Static Generation** | Built with Next.js App Router for instant load times |

---

## ✦ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | React framework with SSG/SSR |
| **Language** | [TypeScript 5](https://typescriptlang.org/) | Type-safe development |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS configured via CSS variables |
| **UI Library** | [shadcn/ui](https://ui.shadcn.com/) | Radix-based component system |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent icon set |
| **Fonts** | Inter + JetBrains Mono | Loaded via `next/font` (zero CLS) |
| **Command Palette** | [cmdk](https://cmdk.paco.me/) | ⌘K search interface |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| **Animation** | [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | CSS animation utilities |

---

## ✦ Project Structure

```
Janitha Gamage Portfolio/
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Design system (CSS vars, animations, print styles)
│   │   ├── layout.tsx          # Root layout (fonts, theme, SEO meta, JSON-LD)
│   │   └── page.tsx            # Main single-page portfolio
│   │
│   ├── components/
│   │   ├── command-menu.tsx    # ⌘K command palette
│   │   ├── theme-provider.tsx  # next-themes wrapper
│   │   ├── icons/              # Custom social platform SVG icons
│   │   └── ui/                 # shadcn/ui components (New York style)
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── command.tsx
│   │       ├── dialog.tsx
│   │       └── section.tsx
│   │
│   ├── data/
│   │   └── resume-data.tsx     # ★ Single source of truth — ALL content here
│   │
│   └── lib/
│       └── utils.ts            # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── avatar.jpg              # Profile photo (optimized)
│   ├── certs/                  # Certification badge images
│   ├── logos/                  # Institution logos
│   └── projects/               # Project screenshots & mockups
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md                   # You are here
```

---

## ✦ Content Architecture

All portfolio content lives in a single file: **`src/data/resume-data.tsx`**

This "CV-as-code" approach means:
- ✅ **One file to update** — Change your bio, add a project, update skills — all in one place.
- ✅ **Type-safe** — TypeScript catches errors before they reach production.
- ✅ **No CMS needed** — Content is version-controlled with your code.

---

## ✦ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm start
```

---

## ✦ Command Palette (⌘K)

Press `Ctrl+K` (Windows/Linux) or `⌘K` (macOS) anywhere on the page to open the command palette:

| Group | Commands |
|---|---|
| **Navigation** | Jump to: About, Skills, Projects, Experience, Education, Certifications, Contact |
| **Contact / Actions** | Send Email, Copy Email Address |
| **Social** | Open: GitHub, LinkedIn, Twitter/X, Instagram, Facebook |
| **Theme Settings** | Light, Dark, System Theme |

On mobile, a floating action button appears in the bottom-right corner.

---

## ✦ Print Support

The portfolio includes a comprehensive print stylesheet. When printed (`Ctrl+P`):

- ✅ Interactive elements (command palette, theme toggle, hover effects) are hidden.
- ✅ Layout adjusts to standard paper dimensions.
- ✅ Email and phone are exposed in plaintext.
- ✅ Clean, professional resume output suitable for job applications.

---

## ✦ Design Credits & Inspiration

This portfolio's design language draws inspiration from:

| Portfolio | Inspiration Taken |
|---|---|
| [**Sayuru Rehan**](https://sayururehan.vercel.app) | Single-page flow, card-based layout, ⌘K command palette, data-driven architecture, shadcn/ui New York style, avatar crossfade, print support |
| [**Isala.me**](https://isala.me) | Section heading animations, dotted border dividers, arrow link pattern, wavy link underlines, progressive disclosure |

---

## ✦ License

This project is open source and available under the [MIT License](LICENSE).
