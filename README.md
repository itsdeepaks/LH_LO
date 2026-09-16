# Liquidity Health

> **Claims Intelligence for Healthcare Revenue-Cycle Teams**  
> Engineered & Developed by **Online Scope Studio**

Liquidity Health connects complex healthcare claims, electronic remittance advices (835s), and payer reimbursement terms to surface underpayments, revenue leakage, and priority claims requiring immediate review.

---

## 🌟 Key Features

- **Payer Remittance Analysis**: Automatically correlates 835 remittance data with fee schedules and contracts.
- **Leakage Detection**: Identifies systematic underpayments, unbundling issues, and payer-specific adjudication variances.
- **Editorial Design System**: Crafted with a bespoke typography hierarchy, soft tonal surfaces, and subtle interactive animations.
- **High-Performance SSR**: Server-Side Rendered on TanStack Start for near-instant first contentful paint and enterprise SEO readiness.

---

## 🛠️ Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Engine**: [Vite](https://vitejs.dev/) + [Nitro](https://nitro.unjs.io/)
- **Language**: TypeScript (Strict Mode)
- **Deployment**: Vercel

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- `npm` (v10+)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd LH_LO

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

The application will start locally at `http://localhost:3000` (or the next available port).

### Building for Production

```bash
npm run build
```

This compiles client assets and server functions ready for hosting.

---

## 🌐 Deployment to Vercel

This repository is pre-configured for seamless deployment to **Vercel**:

1. Push your repository to GitHub / GitLab.
2. Import the repository into the **Vercel Dashboard**.
3. Framework Preset: **Other** (Vite / Nitro is automatically detected).
4. Build Command: `npm run build`
5. Output Directory: `.output` (or default Vercel Nitro build output)
6. Optional Environment Variables:
   - `VITE_LOGO_DEV_API_KEY`: API token for logo.dev integration in client showcases.

---

## 📄 License & Attribution

Designed and developed by **Online Scope Studio** for **Liquidity Health, LLC**. All rights reserved.
