import type { Metadata } from "next";

import { SecondaryPage } from "@/components/secondary-page";

export const metadata: Metadata = {
  title: "Templates",
  description: "Browse Fotoee Publish templates for landing pages, portfolios, games, campaigns, novels, and short drama sites."
};

export default function Templates() {
  return (
    <SecondaryPage
      type="templates"
      title="Templates"
      description="A future marketplace for AI-ready website templates that can be downloaded, customized, uploaded, and published."
      items={["Landing Page", "Portfolio", "Game", "Casino", "Novel", "Short Drama"]}
    />
  );
}
