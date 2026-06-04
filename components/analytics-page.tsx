"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  ChevronDown,
  Circle,
  CloudUpload,
  Globe2,
  Laptop,
  LineChart,
  Monitor,
  Search,
  Smartphone,
  Tablet,
  TrendingUp,
  Users
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const trend = [36, 54, 48, 72, 63, 90, 78, 112, 96, 138, 124, 156, 142, 178];

const countries = [
  { name: "United States", visitors: "38,420", share: 38 },
  { name: "Japan", visitors: "18,904", share: 19 },
  { name: "Singapore", visitors: "14,310", share: 14 },
  { name: "Germany", visitors: "10,828", share: 11 },
  { name: "United Kingdom", visitors: "8,440", share: 8 }
];

const devices = [
  { label: "Mobile", value: 61, icon: Smartphone, color: "bg-neutral-950" },
  { label: "Desktop", value: 31, icon: Monitor, color: "bg-[#5668ff]" },
  { label: "Tablet", value: 8, icon: Tablet, color: "bg-[#9d66ff]" }
];

export function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950">
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-md border bg-neutral-50 px-3 py-2 text-sm text-neutral-500 md:flex md:max-w-md">
            <Search className="h-4 w-4 shrink-0" />
            <span className="truncate">Search page, referrer, country...</span>
          </div>
          <Button asChild>
            <Link href="/upload">
              <CloudUpload className="h-4 w-4" />
              Publish Site
            </Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 border-b pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge className="mb-4 gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Vercel-style Analytics
            </Badge>
            <h1 className="text-3xl font-semibold tracking-normal sm:text-5xl">
              Analytics
            </h1>
            <p className="mt-3 text-neutral-600">
              Real-time traffic intelligence for AI-created sites, campaigns, and landing pages.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="flex h-10 items-center justify-between gap-8 rounded-md border bg-white px-3 text-sm font-medium shadow-line">
              travel-ai.fotoee.com
              <ChevronDown className="h-4 w-4 text-neutral-400" />
            </button>
            <div className="flex rounded-md border bg-neutral-50 p-1">
              {["24h", "7d", "30d"].map((range, index) => (
                <button
                  key={range}
                  className={cn(
                    "h-8 rounded px-3 text-sm font-medium transition",
                    index === 1 ? "bg-white text-neutral-950 shadow-line" : "text-neutral-500 hover:text-neutral-950"
                  )}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="PV" value="128,482" delta="+18.7%" icon={BarChart3} />
          <MetricCard label="UV" value="42,918" delta="+12.4%" icon={Users} />
          <MetricCard label="Top Country" value="United States" delta="38% share" icon={Globe2} />
          <MetricCard label="Device Type" value="Mobile" delta="61% traffic" icon={Laptop} />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <VisitTrend />
          <DeviceType />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <TopCountry />
          <ReferrerTable />
        </div>
      </section>
    </main>
  );
}

function MetricCard({
  label,
  value,
  delta,
  icon: Icon
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="p-5 shadow-line">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100">
          <Icon className="h-5 w-5 text-neutral-700" />
        </div>
        <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">
          <TrendingUp className="h-3.5 w-3.5" />
          {delta}
        </Badge>
      </div>
      <div className="mt-7 text-sm text-neutral-500">{label}</div>
      <div className="mt-2 truncate text-3xl font-semibold">{value}</div>
    </Card>
  );
}

function VisitTrend() {
  const max = Math.max(...trend);
  const points = trend
    .map((value, index) => {
      const x = (index / (trend.length - 1)) * 100;
      const y = 100 - (value / max) * 82;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <Card className="overflow-hidden p-5 shadow-line">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Visit Trend</h2>
          <p className="mt-1 text-sm text-neutral-500">Page views and visitors over the last 14 days</p>
        </div>
        <Badge className="gap-2">
          <Circle className="h-2.5 w-2.5 fill-[#5668ff] text-[#5668ff]" />
          PV / UV
        </Badge>
      </div>
      <div className="relative mt-8 h-80 rounded-lg border bg-[linear-gradient(rgba(15,23,42,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.05)_1px,transparent_1px)] bg-[size:56px_56px] p-4">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="analyticsLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#425dff" />
              <stop offset="100%" stopColor="#9d66ff" />
            </linearGradient>
          </defs>
          <motion.polyline
            points={points}
            fill="none"
            stroke="url(#analyticsLine)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
        <div className="absolute inset-x-4 bottom-4 flex items-end gap-2">
          {trend.map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-t bg-neutral-950/10"
              initial={{ height: 0 }}
              animate={{ height: `${18 + (height / max) * 54}%` }}
              transition={{ duration: 0.5, delay: index * 0.025 }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

function DeviceType() {
  return (
    <Card className="p-5 shadow-line">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Device Type</h2>
        <LineChart className="h-5 w-5 text-neutral-400" />
      </div>
      <div className="mt-8 flex justify-center">
        <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-[conic-gradient(#111827_0_61%,#5668ff_61%_92%,#9d66ff_92%_100%)]">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white shadow-line">
            <div className="text-3xl font-semibold">61%</div>
            <div className="mt-1 text-sm text-neutral-500">Mobile</div>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {devices.map((device) => (
          <div key={device.label} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={cn("flex h-9 w-9 items-center justify-center rounded-md text-white", device.color)}>
                <device.icon className="h-4 w-4" />
              </div>
              <span className="font-medium">{device.label}</span>
            </div>
            <span className="text-sm text-neutral-500">{device.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TopCountry() {
  return (
    <Card className="p-5 shadow-line">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Top Country</h2>
        <Globe2 className="h-5 w-5 text-neutral-400" />
      </div>
      <div className="mt-6 space-y-5">
        {countries.map((country) => (
          <div key={country.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{country.name}</span>
              <span className="text-neutral-500">{country.visitors}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-neutral-100">
              <motion.div
                className="h-2 rounded-full bg-neutral-950"
                initial={{ width: 0 }}
                animate={{ width: `${country.share}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ReferrerTable() {
  const rows = [
    ["Direct", "42,881", "33.4%"],
    ["x.com", "21,048", "16.3%"],
    ["producthunt.com", "14,906", "11.6%"],
    ["google.com", "12,602", "9.8%"],
    ["linkedin.com", "8,108", "6.3%"]
  ];

  return (
    <Card className="overflow-hidden shadow-line">
      <div className="border-b p-5">
        <h2 className="text-xl font-semibold">Traffic sources</h2>
        <p className="mt-1 text-sm text-neutral-500">Where visitors came from</p>
      </div>
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-5 py-3 font-medium">Referrer</th>
            <th className="px-5 py-3 font-medium">Visitors</th>
            <th className="px-5 py-3 font-medium">Share</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([source, visitors, share]) => (
            <tr key={source} className="border-t">
              <td className="px-5 py-4 font-medium">{source}</td>
              <td className="px-5 py-4 text-neutral-600">{visitors}</td>
              <td className="px-5 py-4 text-neutral-600">{share}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
