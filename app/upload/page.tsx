import type { Metadata } from "next";

import { UploadPublishPage } from "@/components/upload-publish-page";

export const metadata: Metadata = {
  title: "Upload & Publish",
  description:
    "Upload HTML, ZIP, React builds, or Vue builds and publish AI-created websites instantly with automatic analysis, screenshots, QR codes, and share links."
};

export default function UploadPage() {
  return <UploadPublishPage />;
}
