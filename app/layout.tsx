import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fotoee.publish"),
  title: {
    default: "Fotoee Publish - AI Publishing Platform",
    template: "%s | Fotoee Publish"
  },
  description:
    "Fotoee Publish lets AI creators deploy ZIP websites from ChatGPT, Claude, Lovable, Bolt, Cursor and more in 30 seconds.",
  keywords: [
    "AI publishing platform",
    "ZIP deploy",
    "AI website deployment",
    "ChatGPT website",
    "Claude website",
    "Lovable deploy",
    "Bolt.new deploy",
    "Cursor deploy",
    "SaaS"
  ],
  applicationName: "Fotoee Publish",
  authors: [{ name: "Fotoee" }],
  creator: "Fotoee",
  publisher: "Fotoee",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "Fotoee Publish",
    title: "Fotoee Publish - Deploy AI-generated websites in 30 seconds",
    description:
      "Upload AI-generated website ZIP files, deploy to cloud storage, and get shareable links with lightweight analytics."
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotoee Publish - AI Publishing Platform",
    description:
      "Deploy AI-generated websites from ZIP files in 30 seconds."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
