import type { Metadata } from "next";

import { AnalyticsPage } from "@/components/analytics-page";

export const metadata: Metadata = {
  title: "Analytics",
  description:
    "Vercel-style analytics for Fotoee Publish with PV, UV, visit trend, top country, and device type charts."
};

export default function Analytics() {
  return <AnalyticsPage />;
}
