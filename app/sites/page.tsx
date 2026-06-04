import type { Metadata } from "next";

import { SitesPage } from "@/components/sites-page";

export const metadata: Metadata = {
  title: "My Sites",
  description:
    "Manage published Fotoee sites with screenshots, live URLs, SSL status, copy URL, custom domain, redeploy, delete, and analytics actions."
};

export default function Sites() {
  return <SitesPage />;
}
