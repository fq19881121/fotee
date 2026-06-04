import type { Metadata } from "next";

import { SecondaryPage } from "@/components/secondary-page";

export const metadata: Metadata = {
  title: "Settings",
  description: "Configure workspace, authentication, storage, billing, and deployment settings for Fotoee Publish."
};

export default function Settings() {
  return (
    <SecondaryPage
      type="settings"
      title="Settings"
      description="Configure workspace access, authentication providers, billing limits, S3 storage, and deployment defaults."
      items={["Workspace", "Authentication", "Storage", "Billing", "Security"]}
    />
  );
}
