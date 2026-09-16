# Engineering Guidelines - Online Scope Studio

This repository hosts the web platform for **Liquidity Health**, engineered and maintained by **Online Scope Studio**.

## Architecture & Code Standards
- **Framework**: TanStack Start (React 19, TypeScript, Vite, Tailwind CSS).
- **Styling**: Tailwind CSS v4 design tokens and utilities, adhering to brand guidelines (`--color-lh-*`, `--mint`, `--ink`, `--cream`).
- **Typography**: Editorial typography hierarchy using `Outfit` for display headings, `DM Sans` for body copy, and `IBM Plex Mono` for technical labels.
- **Routing**: File-based routing managed by TanStack Router under `src/routes/`.
- **SSR / Deployment**: SSR entry wrapped via `src/server.ts` targeting Vercel deployment with Nitro engine.

## Guidelines for AI Assistants & Contributors
1. Preserve all existing design aesthetics, animation timings (`Reveal.tsx`, marquee tracks), and typography standards.
2. Ensure all pages maintain zero broken assets, strict TypeScript typing, and accessible markup (`aria-label`, skip links, proper contrast).
3. Do not introduce extraneous dependencies or proprietary framework configs without explicit confirmation.
