"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CloudUpload,
  Globe2,
  LayoutTemplate,
  Settings,
  ShieldCheck
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const iconMap = {
  templates: LayoutTemplate,
  domains: Globe2,
  settings: Settings
};

export function SecondaryPage({
  type,
  title,
  description,
  items
}: {
  type: keyof typeof iconMap;
  title: string;
  description: string;
  items: string[];
}) {
  const Icon = iconMap[type];

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-neutral-950">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950">
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
          <Button asChild>
            <Link href="/upload">
              <CloudUpload className="h-4 w-4" />
              New Site
            </Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge className="mb-4 gap-2">
            <Icon className="h-3.5 w-3.5 text-[#5668ff]" />
            Fotoee Publish
          </Badge>
          <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item} className="p-5 shadow-line">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-white">
                <Check className="h-4 w-4" />
              </div>
              <h2 className="mt-6 text-xl font-semibold">{item}</h2>
              <p className="mt-3 leading-7 text-neutral-600">
                Designed as a production-ready module placeholder for the full SaaS workflow.
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-5 shadow-line">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Ready for backend integration</div>
                <div className="mt-1 text-sm text-neutral-500">
                  Connect this module to PostgreSQL, S3 storage, and API routes when the feature moves from preview to production.
                </div>
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
