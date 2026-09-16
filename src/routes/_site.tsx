import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooterMain } from "@/components/site/SiteFooterMain";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-lh-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-[14.5px] focus:font-medium focus:text-on-ink focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <SiteFooterMain />
    </div>
  );
}
