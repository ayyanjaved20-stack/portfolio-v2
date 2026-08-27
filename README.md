# AYYAN.JAVED — **SYSTEM**

> Personal website of Ayyan Javed.
> Software engineer, creative developer.
> I build digital systems that feel good to use.

A minimalist, editorial portfolio — a personal system: dark-and-light themed, kinetic, and deliberate. Built as a single-page document that reads from `SYSTEM ONLINE` to `END OF DOCUMENT`.

**Live site →** [portfolio-ruby-ten-66.vercel.app](https://portfolio-ruby-ten-66.vercel.app/)

---

## 01 · System Specification

| Field | Value |
| --- | --- |
| STATUS | OPERATIONAL |
| VERSION | 2026.1 |
| LOCATION | ISLAMABAD / PK |
| FRAMEWORK | Next.js 16 (App Router) |
| LANGUAGE | TypeScript |
| STYLING | Tailwind CSS |
| MOTION | GSAP + ScrollTrigger, Lenis smooth scroll |
| FONTS | Space Grotesk / JetBrains Mono |
| HOSTING | Vercel |

---

## 02 · The Stack

- **Next.js 16** — App Router, static generation, route-level optimization
- **TypeScript** — strict, typed end-to-end
- **Tailwind CSS** — utility-first styling driven by CSS variables, so the theme flips without a flash
- **GSAP + ScrollTrigger** — scroll-scrubbed reveals, line-growth dividers
- **Lenis** — buttery inertial scrolling
- **System theme** — light/dark with an inline blocking script that applies the saved theme before first paint

---

## 03 · Selected Work

The projects are divided into two tiers — **SELECTED WORK** and **EXPERIMENTS** — so the hierarchy reads instantly.

| Nº | Project | Type | Status |
| --- | --- | --- | --- |
| 001 | **AYYANFLIX** | Full stack app | Deployed |
| 002 | **Abdul Salam Jewellers** | E-commerce store | Completed |
| 003 | **Anchorage Phase 2** | Production website | Delivered |
| 004 | **Heavy Racing** | 2D arcade game | Complete |
| 005 | Ride-Hailing DBMS | Database design | Academic |
| 006 | Huffman Encoding | Algorithms | Academic |

---

## 04 · Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Action |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 05 · Project Structure

```
src/
├── app/
│   ├── components/
│   ├── layout.tsx     # Root layout, metadata, inline theme script
│   ├── page.tsx       # Single-page document (hero → work → profile → contact → system)
│   ├── globals.css    # Design tokens, theme variables, components
│   ├── ThemeProvider.tsx  # Hydration-safe theme context
│   └── ThemeToggle.tsx    # Light/dark toggle
├── public/
│   └── favicon.png    # Favicon
```

---

## 06 · Theming

The site ships with a system theme that respects the user's saved preference — or their OS default — with **zero flash on reload**.

An inline blocking script (`layout.tsx`) sets `data-theme` on `<html>` before first paint, and `ThemeProvider` reads that same state to keep the context in sync.

```
Grain overlay  → 0.03 opacity film texture
Accent         → #FF3B30 light / #FF453A dark
Type           → Space Grotesk for display, JetBrains Mono for meta
```

---

## 07 · Deploy

Production-ready for Vercel — static, no server dependencies, no environment variables required.

```bash
git push origin main
```

Vercel auto-detects Next.js and handles the rest.

---

**END OF DOCUMENT** — Copyright © 2026 Ayyan Javed. All rights reserved.
