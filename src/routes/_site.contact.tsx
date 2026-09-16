import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/home/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { SectionShell } from "@/components/site/SectionShell";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Analyze My Claims for Free - Liquidity Health" },
      {
        name: "description",
        content:
          "Tell us about your organization and we will review a sample of your remittances and share what we find. No documents are collected through this form.",
      },
      { property: "og:title", content: "Analyze My Claims for Free - Liquidity Health" },
      {
        property: "og:description",
        content:
          "Free claims analysis, demos, partnership, sales and investor enquiries - one short form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const INQUIRY_TYPES = [
  "Free claims analysis",
  "Request a demo",
  "Billing / RCM partnership",
  "Sales inquiry",
  "Investor inquiry",
  "General inquiry",
];

const ORG_TYPES = [
  "Medical practice",
  "Billing / RCM organization",
  "Health system / MSO",
  "Other",
];

const VOLUMES = [
  "Under 500 claims per month",
  "500 – 2,000 claims per month",
  "2,000 – 10,000 claims per month",
  "Over 10,000 claims per month",
  "Not sure",
];

const label = "block text-[13.5px] font-medium text-ink";
const field =
  "mt-2 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-ink/40 focus-visible:ring-2 focus-visible:ring-ink/25";
const selectField = `${field} select-chevron`;
const errorText = "mt-1.5 text-[12.5px] leading-snug break-words text-lh-coral";

function ContactPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const organization = String(data.get("organization") ?? "").trim();

    if (!name) next["fullName"] = "Please enter your full name.";
    if (!organization) next["organization"] = "Please enter your organization name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next["email"] = "Please enter a valid work email.";
    if (phone.replace(/\D/g, "").length < 7)
      next["phone"] = "Please enter a phone number we can reach you on.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Local preview only: nothing is sent, stored or uploaded.
    navigate({ to: "/thank-you" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Analyze my claims for free."
        intro="Tell us a little about your organization. We will get in touch to arrange a secure way to share a sample of remittances, and then walk you through what we find. Documents are never uploaded through this website."
      />

      <SectionShell tone="surface">
        <Reveal className="mx-auto max-w-[800px] min-w-0">
          <form onSubmit={onSubmit} noValidate>
            <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label className={label} htmlFor="fullName">
                    Full name{" "}
                    <span className="text-lh-coral" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    maxLength={100}
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={!!errors["fullName"]}
                    aria-describedby={errors["fullName"] ? "fullName-error" : undefined}
                    className={field}
                  />
                  {errors["fullName"] ? (
                    <p id="fullName-error" role="alert" className={errorText}>
                      {errors["fullName"]}
                    </p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="email">
                    Work email{" "}
                    <span className="text-lh-coral" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    autoComplete="email"
                    required
                    aria-required="true"
                    aria-invalid={!!errors["email"]}
                    aria-describedby={errors["email"] ? "email-error" : undefined}
                    className={field}
                  />
                  {errors["email"] ? (
                    <p id="email-error" role="alert" className={errorText}>
                      {errors["email"]}
                    </p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="phone">
                    Phone number{" "}
                    <span className="text-lh-coral" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={30}
                    autoComplete="tel"
                    required
                    aria-required="true"
                    aria-invalid={!!errors["phone"]}
                    aria-describedby={errors["phone"] ? "phone-error" : undefined}
                    className={field}
                  />
                  {errors["phone"] ? (
                    <p id="phone-error" role="alert" className={errorText}>
                      {errors["phone"]}
                    </p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="inquiryType">
                    Inquiry type{" "}
                    <span className="text-lh-coral" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    defaultValue={INQUIRY_TYPES[0]}
                    required
                    aria-required="true"
                    className={selectField}
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="organization">
                    Organization name{" "}
                    <span className="text-lh-coral" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    maxLength={120}
                    autoComplete="organization"
                    required
                    aria-required="true"
                    aria-invalid={!!errors["organization"]}
                    aria-describedby={errors["organization"] ? "organization-error" : undefined}
                    className={field}
                  />
                  {errors["organization"] ? (
                    <p id="organization-error" role="alert" className={errorText}>
                      {errors["organization"]}
                    </p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="jobTitle">
                    Job title
                  </label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    maxLength={120}
                    autoComplete="organization-title"
                    className={field}
                  />
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="organizationType">
                    Organization type
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    defaultValue=""
                    className={selectField}
                  >
                    <option value="">Select an option</option>
                    {ORG_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="min-w-0">
                  <label className={label} htmlFor="claimVolume">
                    Monthly claim volume
                  </label>
                  <select id="claimVolume" name="claimVolume" defaultValue="" className={selectField}>
                    <option value="">Select an option</option>
                    {VOLUMES.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5 min-w-0">
                <label className={label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  aria-describedby="message-helper"
                  className={`${field} resize-none`}
                />
                <p id="message-helper" className="mt-2 text-[12.5px] leading-relaxed text-ink/60">
                  Please do not include patient names, claim numbers, or any patient information.
                </p>
              </div>

              <button
                type="submit"
                className="press mt-6 w-full rounded-md bg-ink px-5 py-3 text-[15px] font-medium text-on-ink transition-colors hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
              >
                Send inquiry
              </button>

              <p className="mt-4 text-[12.5px] leading-relaxed text-ink/60">
                This form does not accept file attachments and does not collect patient, claim or
                insurance data. If a claims analysis is arranged, documents are shared through a
                separate secure channel.
              </p>
            </div>
          </form>
        </Reveal>
      </SectionShell>
    </>
  );
}
