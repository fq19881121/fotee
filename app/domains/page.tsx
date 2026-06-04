import type { Metadata } from "next";

import { SecondaryPage } from "@/components/secondary-page";

export const metadata: Metadata = {
  title: "Domains",
  description: "Manage custom domains, SSL, DNS verification, and production aliases for Fotoee Publish sites."
};

export default function Domains() {
  return (
    <SecondaryPage
      type="domains"
      title="Domains"
      description="Manage custom domains, SSL certificates, DNS verification, and production aliases for every published site."
      items={["Custom Domain", "SSL Enabled", "DNS Verification", "Production Alias"]}
    />
  );
}
