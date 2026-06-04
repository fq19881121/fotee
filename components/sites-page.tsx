"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Check,
  CloudUpload,
  Copy,
  Globe2,
  Link2,
  MoreHorizontal,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sites = [
  {
    id: "travel-ai",
    name: "Travel AI Weekend",
    url: "https://travel-ai.fotoee.com",
    theme: "from-neutral-950 via-[#465cff] to-[#a16bff]",
    visitors: "82.4K"
  },
  {
    id: "game-campaign",
    name: "Game Campaign Hub",
    url: "https://game-campaign.fotoee.com",
    theme: "from-neutral-950 via-[#0f9f8f] to-[#7dd3fc]",
    visitors: "48.1K"
  },
  {
    id: "portfolio-v2",
    name: "Creator Portfolio V2",
    url: "https://portfolio-v2.fotoee.com",
    theme: "from-neutral-950 via-[#7c3aed] to-[#f472b6]",
    visitors: "19.7K"
  }
];

export function SitesPage() {
  const [copiedId, setCopiedId] = useState("");

  async function copyUrl(id: string, url: string) {
    await navigator.clipboard.writeText(url);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(""), 1400);
  }

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-neutral-950">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950">
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-md border bg-neutral-50 px-3 py-2 text-sm text-neutral-500 md:flex md:max-w-md">
            <Search className="h-4 w-4 shrink-0" />
            <span className="truncate">Search sites...</span>
          </div>
          <Button asChild>
            <Link href="/upload">
              <CloudUpload className="h-4 w-4" />
              New Site
            </Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="mb-4 gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Published sites
            </Badge>
            <h1 className="text-3xl font-semibold tracking-normal sm:text-5xl">
              My Sites
            </h1>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Manage screenshots, live URLs, SSL status, domains, redeploys, and analytics for every published AI website.
            </p>
          </div>
          <Button variant="outline">
            <MoreHorizontal className="h-4 w-4" />
            Bulk actions
          </Button>
        </div>

        <div className="mt-7 grid gap-5">
          {sites.map((site) => (
            <Card key={site.id} className="overflow-hidden bg-white shadow-line">
              <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
                <div className="border-b bg-neutral-50 p-4 lg:border-b-0 lg:border-r">
                  <div className="overflow-hidden rounded-lg border bg-white shadow-line">
                    <div className="flex h-8 items-center gap-1.5 border-b bg-neutral-50 px-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className={`h-48 bg-gradient-to-br ${site.theme} p-5 text-white`}>
                      <Badge className="border-white/20 bg-white/10 text-white">Live Preview</Badge>
                      <div className="mt-12 h-7 w-56 max-w-full rounded-md bg-white/90" />
                      <div className="mt-4 h-3 w-64 max-w-full rounded-full bg-white/40" />
                      <div className="mt-2 h-3 w-44 max-w-full rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                      <div className="text-sm text-neutral-500">网站名称</div>
                      <h2 className="mt-1 text-2xl font-semibold">{site.name}</h2>
                      <div className="mt-4 text-sm text-neutral-500">访问地址</div>
                      <a
                        href={site.url}
                        className="mt-1 flex items-center gap-2 font-medium text-[#465cff] transition hover:text-neutral-950"
                      >
                        <Globe2 className="h-4 w-4" />
                        {site.url}
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">
                        <Check className="h-3.5 w-3.5" />
                        Live
                      </Badge>
                      <Badge className="border-blue-200 bg-blue-50 text-blue-700">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        SSL Enabled
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    <Button variant="outline" onClick={() => copyUrl(site.id, site.url)}>
                      {copiedId === site.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copiedId === site.id ? "Copied" : "Copy URL"}
                    </Button>
                    <Button variant="outline">
                      <Link2 className="h-4 w-4" />
                      Custom Domain
                    </Button>
                    <Button variant="outline">
                      <RefreshCw className="h-4 w-4" />
                      Redeploy
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/analytics">
                        <BarChart3 className="h-4 w-4" />
                        Analytics
                      </Link>
                    </Button>
                    <Button className="border-red-200 text-red-600 hover:bg-red-50" variant="outline">
                      <Trash2 className="h-4 w-4" />
                      Delete Site
                    </Button>
                  </div>

                  <div className="mt-6 grid gap-3 border-t pt-5 sm:grid-cols-3">
                    <InfoItem label="Status" value="Live" />
                    <InfoItem label="SSL" value="Enabled" />
                    <InfoItem label="Visitors" value={site.visitors} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-neutral-50 p-4">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="mt-2 font-semibold text-neutral-950">{value}</div>
    </div>
  );
}
