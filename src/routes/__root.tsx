import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Reveal } from "@/components/home/Reveal";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooterMain } from "@/components/site/SiteFooterMain";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-lh-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-[14.5px] focus:font-medium focus:text-on-ink focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col focus:outline-none">
        <NotFoundContent />
      </main>
      <SiteFooterMain />
    </div>
  );
}

function NotFoundContent() {
  return (
    <div className="relative flex min-h-screen flex-1 items-center overflow-hidden bg-cream text-ink">
      {/* Soft mint atmosphere, matching the hero/CTA glow treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/15 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <Reveal>
            <p className="font-mono text-[11.5px] tracking-[0.16em] text-ink/55 uppercase">
              Error 404 - Page not found
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-[38px] leading-[1.06] font-medium tracking-[-0.02em] sm:text-[52px] lg:text-[62px]">
              This page isn&apos;t in&nbsp;the system.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.55] text-ink/65 sm:text-[19px]">
              The page you&apos;re looking for doesn&apos;t exist or has moved. Check the address,
              or head back and pick up where you left off.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="press inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-[15px] font-medium text-on-ink transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
              >
                Back to home
              </Link>
              <Link
                to="/how-it-works"
                className="press inline-flex items-center justify-center rounded-md border border-ink/25 px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none"
              >
                See how it works
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Floating "claim lookup" card - illustrative, on-brand 404 visual */}
        <Reveal from="scale" delay={350} className="relative mx-auto w-full max-w-[420px]">
          <div
            aria-hidden="true"
            className="float-soft absolute -top-14 -right-7 z-10 hidden rounded-lg border border-line bg-white/85 px-4 py-3 shadow-[0_18px_40px_-30px_rgba(12,32,24,0.45)] backdrop-blur-sm sm:block"
            style={{ animationDelay: "-3.2s" }}
          >
            <p className="font-mono text-[10px] tracking-[0.14em] text-ink/50 uppercase">
              Remittance
            </p>
            <p className="mt-1 font-mono text-[12px] font-medium text-ink/70">No route matched</p>
          </div>

          <div className="float-soft lift rounded-xl border border-line bg-white p-6 shadow-[0_36px_70px_-45px_rgba(12,32,24,0.5)] sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] tracking-[0.16em] text-ink/55 uppercase">
                Claim status
              </p>
              <span className="rounded-full border border-lh-coral/30 bg-lh-coral/10 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.14em] text-lh-coral uppercase">
                Not found
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="pulse-dot h-2.5 w-2.5 shrink-0 rounded-full bg-ink/40" />
              <p className="font-mono text-[13px] font-medium text-ink/80">/this-page</p>
            </div>

            <div className="mt-5 space-y-3 border-t border-line pt-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.14em] text-ink/50 uppercase">
                  Lookup
                </span>
                <span className="font-mono text-[12px] text-ink/70">0 results</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.14em] text-ink/50 uppercase">
                  Recovered
                </span>
                <span className="font-mono text-[12px] text-ink/70">Via homepage</span>
              </div>
              <div className="h-2 w-4/5 rounded-full bg-surface" />
              <div className="h-2 w-3/5 rounded-full bg-surface" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Liquidity Health" },
      {
        name: "description",
        content: "Claims intelligence for healthcare revenue-cycle teams.",
      },
      { name: "author", content: "Liquidity Health, LLC" },
      { property: "og:title", content: "Liquidity Health" },
      {
        property: "og:description",
        content: "Claims intelligence for healthcare revenue-cycle teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://lh.onlinescope.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lh.onlinescope.in/og-image.png" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "generator", content: "Online Scope Studio" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&family=Newsreader:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
