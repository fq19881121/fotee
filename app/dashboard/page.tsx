import type { Metadata } from "next";

import { DashboardPage } from "@/components/dashboard-page";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Monitor total sites, visitors, storage usage, countries, analytics, templates, domains, and workspace settings in Fotoee Publish."
};

export default function Dashboard() {
  return <DashboardPage />;
}
