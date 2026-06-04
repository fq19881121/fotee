"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  CloudUpload,
  Globe2,
  HardDrive,
  Home,
  LayoutDashboard,
  LayoutTemplate,
  LineChart,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", active: true },
  { label: "My Sites", icon: Home, href: "/sites", active: false },
  { label: "Analytics", icon: BarChart3, href: "/analytics", active: false },
  { label: "Templates", icon: LayoutTemplate, href: "/templates", active: false },
  { label: "Domains", icon: Globe2, href: "/domains", active: false },
  { label: "Settings", icon: Settings, href: "/settings", active: false }
] as const;

const metrics = [
  {
    label: "Total Sites",
    value: "128",
    change: "+18 this month",
    icon: CloudUpload,
    tint: "bg-blue-50 text-blue-600"
  },
  {
    label: "Total Visitors",
    value: "482.9K",
    change: "+24.8%",
    icon: Users,
    tint: "bg-violet-50 text-violet-600"
  },
  {
    label: "Storage Usage",
    value: "68.4 GB",
    change: "42% of plan",
    icon: HardDrive,
    tint: "bg-neutral-100 text-neutral-700"
  },
  {
    label: "Countries",
    value: "57",
    change: "+9 regions",
    icon: MapPin,
    tint: "bg-emerald-50 text-emerald-600"
  }
];

const sites = [
  {
    name: "travel-ai",
    url: "travel-ai.fotoee.com",
    status: "Live",
    visitors: "82.4K",
    source: "ChatGPT"
  },
  {
    name: "game-campaign",
    url: "game-campaign.fotoee.com",
    status: "Live",
    visitors: "48.1K",
    source: "Claude"
  },
  {
    name: "portfolio-v2",
    url: "portfolio-v2.fotoee.com",
    status: "Review",
    visitors: "19.7K",
    source: "Cursor"
  },
  {
    name: "short-drama-launch",
    url: "drama-launch.fotoee.com",
    status: "Live",
    visitors: "66.9K",
    source: "Lovable"
  }
];

const countries = [
  ["United States", "34%"],
  ["Japan", "18%"],
  ["Singapore", "14%"],
  ["Germany", "11%"],
  ["Brazil", "8%"]
];

export function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-neutral-950">
      <div className="flex min-h-screen">
        <Sidebar />
        <section className="min-w-0 flex-1">
          <Topbar />
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge className="mb-4 gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Workspace overview
                </Badge>
                <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                  Dashboard
                </h1>
                <p className="mt-2 text-neutral-600">
                  Track every AI-created site, launch signal, visitor region, and storage limit from one quiet command center.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Sparkles className="h-4 w-4" />
                  AI Report
                </Button>
                <Button asChild>
                  <Link href="/upload">
                    <Plus className="h-4 w-4" />
                    New Site
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Card className="p-5 shadow-line">
                    <div className="flex items-start justify-between">
                      <div className={cn("flex h-11 w-11 items-center justify-center rounded-md", metric.tint)}>
                        <metric.icon className="h-5 w-5" />
                      </div>
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="mt-7 text-sm text-neutral-500">{metric.label}</div>
                    <div className="mt-2 text-3xl font-semibold">{metric.value}</div>
                    <div className="mt-2 text-sm text-neutral-500">{metric.change}</div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <TrafficPanel />
              <CountryPanel />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.75fr]">
              <SitesPanel />
              <StoragePanel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-neutral-200 bg-white lg:block">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-950 text-white">
          <CloudUpload className="h-4 w-4" />
        </span>
        <span className="font-semibold">Fotoee Publish</span>
      </div>
      <nav className="space-y-1 px-3 py-5">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition",
              item.active
                ? "bg-neutral-950 text-white"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mx-3 mt-6 rounded-lg border bg-neutral-50 p-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-line">
          <ShieldCheck className="h-4 w-4 text-[#5668ff]" />
        </div>
        <div className="mt-4 text-sm font-semibold">Pro Workspace</div>
        <p className="mt-2 text-sm leading-6 text-neutral-500">
          Custom domains, analytics, and 1 TB storage are active.
        </p>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-md border bg-neutral-50 px-3 py-2 text-sm text-neutral-500 sm:max-w-md">
          <Search className="h-4 w-4 shrink-0" />
          <span className="truncate">Search sites, domains, visitors...</span>
        </div>
        <button className="flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium shadow-line">
          Fotoee Team
          <ChevronDown className="h-4 w-4 text-neutral-400" />
        </button>
      </div>
    </header>
  );
}

function TrafficPanel() {
  const bars = [48, 66, 42, 88, 74, 110, 92, 126, 100, 142, 118, 154, 132, 168];

  return (
    <Card className="p-5 shadow-line">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Visitor growth</h2>
          <p className="mt-1 text-sm text-neutral-500">Last 14 days across all published sites</p>
        </div>
        <Button size="sm" variant="outline">
          <LineChart className="h-4 w-4" />
          Details
        </Button>
      </div>
      <div className="mt-8 flex h-72 items-end gap-2">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#425dff] to-[#9d66ff]"
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 0.55, delay: index * 0.025 }}
          />
        ))}
      </div>
    </Card>
  );
}

function CountryPanel() {
  return (
    <Card className="p-5 shadow-line">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Countries</h2>
        <Globe2 className="h-5 w-5 text-neutral-400" />
      </div>
      <div className="mt-6 space-y-5">
        {countries.map(([name, value]) => (
          <div key={name}>
            <div className="flex justify-between text-sm">
              <span className="font-medium">{name}</span>
              <span className="text-neutral-500">{value}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-neutral-100">
              <div
                className="h-2 rounded-full bg-neutral-950"
                style={{ width: value }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function SitesPanel() {
  return (
    <Card className="overflow-hidden shadow-line">
      <div className="flex items-center justify-between border-b p-5">
        <div>
          <h2 className="text-xl font-semibold">My Sites</h2>
          <p className="mt-1 text-sm text-neutral-500">Recently published AI websites</p>
        </div>
        <Button size="icon" variant="outline">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-500">
            <tr>
              <th className="px-5 py-3 font-medium">Site</th>
              <th className="px-5 py-3 font-medium">Source</th>
              <th className="px-5 py-3 font-medium">Visitors</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site.url} className="border-t">
                <td className="px-5 py-4">
                  <div className="font-medium text-neutral-950">{site.name}</div>
                  <div className="mt-1 text-neutral-500">{site.url}</div>
                </td>
                <td className="px-5 py-4 text-neutral-600">{site.source}</td>
                <td className="px-5 py-4 font-medium">{site.visitors}</td>
                <td className="px-5 py-4">
                  <Badge className={cn(
                    site.status === "Live"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-amber-200 bg-amber-50 text-amber-700"
                  )}>
                    {site.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function StoragePanel() {
  return (
    <Card className="p-5 shadow-line">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Storage Usage</h2>
        <HardDrive className="h-5 w-5 text-neutral-400" />
      </div>
      <div className="mt-8 flex items-end gap-2">
        <span className="text-5xl font-semibold">68.4</span>
        <span className="pb-2 text-neutral-500">GB used</span>
      </div>
      <div className="mt-6 h-3 rounded-full bg-neutral-100">
        <div className="h-3 w-[42%] rounded-full bg-gradient-to-r from-[#425dff] to-[#9d66ff]" />
      </div>
      <div className="mt-3 flex justify-between text-sm text-neutral-500">
        <span>42% of plan</span>
        <span>1 TB limit</span>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {[
          ["HTML", "12.8 GB"],
          ["Images", "37.1 GB"],
          ["JS/CSS", "9.6 GB"],
          ["Archives", "8.9 GB"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border bg-neutral-50 p-4">
            <div className="text-sm text-neutral-500">{label}</div>
            <div className="mt-2 font-semibold">{value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
