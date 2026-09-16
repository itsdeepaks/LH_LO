import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/funding")({
  head: () => ({
    meta: [{ title: "Liquidity Health" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/platform" });
  },
  component: () => null,
});
