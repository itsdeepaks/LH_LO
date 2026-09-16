import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/home/Reveal";
import { SectionShell } from "@/components/site/SectionShell";

export const Route = createFileRoute("/_site/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You - Liquidity Health" },
      {
        name: "description",
        content:
          "Thank you for contacting Liquidity Health. We have received your inquiry and our team will be in touch shortly.",
      },
      { property: "og:title", content: "Thank You - Liquidity Health" },
      {
        property: "og:description",
        content: "We have received your inquiry and our team will be in touch shortly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/thank-you" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SectionShell className="flex min-h-[62vh] items-center">
      <Reveal className="mx-auto max-w-[660px] text-center">
        <p className="font-mono text-[11.5px] tracking-[0.16em] text-ink/65 uppercase">
          Inquiry Received
        </p>
        <h1 className="mt-5 font-display text-[34px] leading-[1.08] font-medium tracking-[-0.02em] text-ink sm:text-[44px]">
          Thank you for reaching out.
        </h1>
        <p className="mt-6 text-[16.5px] leading-relaxed text-ink/65 sm:text-[18px]">
          We have received your organization&apos;s details. A member of our revenue-cycle intelligence
          team will review your request and get in touch within one business day to discuss next steps
          and arrange a secure evaluation.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            to="/platform"
            className="press rounded-md bg-ink px-5 py-3 text-center text-[14px] font-medium text-on-ink hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
          >
            Explore the platform
          </Link>
          <Link
            to="/how-it-works"
            className="press rounded-md border border-ink/25 px-5 py-3 text-center text-[14px] font-medium text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:py-2.5"
          >
            See how it works
          </Link>
        </div>
      </Reveal>
    </SectionShell>
  );
}
