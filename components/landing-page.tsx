"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleCheck,
  CloudUpload,
  Code2,
  ExternalLink,
  FileArchive,
  Gauge,
  Globe2,
  Image as ImageIcon,
  Laptop,
  LayoutTemplate,
  Lock,
  Play,
  SearchCheck,
  Shield,
  Smartphone,
  Sparkles,
  Wand2,
  Zap
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const platforms = ["ChatGPT", "Claude", "Lovable", "Bolt", "Cursor", "Gemini"];

const publishSteps = [
  {
    title: "Generate",
    text: "Create your site with any AI builder.",
    icon: Sparkles
  },
  {
    title: "Upload",
    text: "Drop a ZIP and let Fotoee inspect the package.",
    icon: CloudUpload
  },
  {
    title: "Share",
    text: "Get a secure live URL ready for launch.",
    icon: ExternalLink
  }
];

const assistantChecks = [
  { label: "CSS", detail: "Stylesheets mapped", icon: Code2 },
  { label: "JS", detail: "Scripts validated", icon: Zap },
  { label: "Image", detail: "Assets optimized", icon: ImageIcon },
  { label: "SEO", detail: "Metadata repaired", icon: SearchCheck }
];

const templates = ["Landing Page", "Portfolio", "Game", "Casino", "Novel", "Short Drama"];

const pricing = [
  {
    name: "Free",
    price: "$0",
    caption: "For trying your first AI website.",
    features: ["3 projects", "Fotoee subdomain", "Basic analytics", "100 MB upload"],
    highlighted: false
  },
  {
    name: "Pro",
    price: "$19",
    caption: "For creators shipping weekly.",
    features: ["Unlimited projects", "Custom domains", "Assistant auto-fix", "1 GB upload"],
    highlighted: true
  },
  {
    name: "Team",
    price: "$59",
    caption: "For teams and campaign operations.",
    features: ["Team workspace", "Role permissions", "Private links", "Priority deploys"],
    highlighted: false
  }
];

const faqs = [
  {
    q: "Fotoee Publish 支持哪些 AI 生成的网站？",
    a: "支持由 ChatGPT、Claude、Lovable、Bolt、Cursor、Gemini 等工具导出的静态网页 ZIP 包，包含 HTML、CSS、JS 和图片资源。"
  },
  {
    q: "真的可以 30 秒内发布吗？",
    a: "典型静态网页包会在 30 秒内完成检测、上传、部署和链接生成。大型资源或复杂项目会显示实时进度。"
  },
  {
    q: "是否支持自定义域名？",
    a: "Pro 和 Team 计划支持绑定自定义域名、HTTPS、项目级访问控制以及更高上传容量。"
  },
  {
    q: "上传的 ZIP 会被自动修复吗？",
    a: "AI Deployment Assistant 会自动检测入口文件、CSS、JS、图片和 SEO 元数据，并修复常见路径、缺失 meta 与资源引用问题。"
  }
];

const countries = [
  { name: "United States", value: "38%" },
  { name: "Singapore", value: "21%" },
  { name: "Japan", value: "17%" },
  { name: "Germany", value: "12%" }
];

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <PlatformSection />
      <WorkflowSection />
      <AssistantSection />
      <AnalyticsSection />
      <TemplateSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-950 text-white">
            <CloudUpload className="h-4 w-4" />
          </span>
          Fotoee Publish
        </a>
        <nav className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
          <a className="transition hover:text-neutral-950" href="#platforms">
            Platforms
          </a>
          <a className="transition hover:text-neutral-950" href="#assistant">
            Assistant
          </a>
          <a className="transition hover:text-neutral-950" href="#analytics">
            Analytics
          </a>
          <a className="transition hover:text-neutral-950" href="#pricing">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" variant="ghost">
            Sign in
          </Button>
          <Button>
            Start free
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="grid-mask pointer-events-none absolute inset-x-0 top-0 h-[680px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.93fr_1.07fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4665ff]" />
            AI Publishing Platform
          </Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
            Publish Any AI-Created Website in{" "}
            <span className="gradient-text">30 Seconds</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            Turn AI-generated websites into live URLs instantly.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="/upload">
                <FileArchive className="h-5 w-5" />
                Upload ZIP & Publish
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/dashboard">
                <Play className="h-5 w-5" />
                View Demo
              </a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["30s", "Avg deploy"],
              ["5+", "AI sources"],
              ["Live", "HTTPS URL"]
            ].map(([value, label]) => (
              <div key={label} className="border-l border-neutral-200 pl-4">
                <div className="text-2xl font-semibold text-neutral-950">{value}</div>
                <div className="mt-1 text-sm text-neutral-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative min-h-[500px] lg:min-h-[620px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <BrowserPreview />
          <PhonePreview />
          <UrlPill />
        </motion.div>
      </div>
    </section>
  );
}

function BrowserPreview() {
  return (
    <Card className="absolute left-0 top-4 w-full overflow-hidden rounded-lg bg-white shadow-soft md:w-[86%]">
      <div className="flex h-11 items-center gap-2 border-b bg-neutral-50 px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex h-7 flex-1 items-center rounded-md border bg-white px-3 text-xs text-neutral-500">
          https://travel-ai.fotoee.com
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="overflow-hidden rounded-lg border bg-neutral-950 text-white">
          <div className="relative h-56 bg-[linear-gradient(135deg,#101827,#273169_42%,#7c4cff)] p-6 sm:h-72">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="relative max-w-sm">
              <Badge className="border-white/20 bg-white/10 text-white">AI Travel</Badge>
              <h3 className="mt-6 text-3xl font-semibold leading-tight">
                Design your Tokyo weekend with AI
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/72">
                Personalized routes, boutique hotels, and instant booking pages.
              </p>
            </div>
          </div>
          <div className="grid gap-4 bg-white p-5 text-neutral-950 sm:grid-cols-3">
            {["Route", "Hotel", "Dining"].map((item) => (
              <div key={item} className="rounded-md border bg-neutral-50 p-4">
                <div className="h-16 rounded-md bg-gradient-to-br from-neutral-200 to-white" />
                <div className="mt-3 text-sm font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function PhonePreview() {
  return (
    <motion.div
      className="absolute bottom-0 right-2 w-[170px] rounded-[2rem] border border-neutral-200 bg-neutral-950 p-2 shadow-soft sm:right-8 sm:w-[215px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="overflow-hidden rounded-[1.55rem] bg-white">
        <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-neutral-900" />
        <div className="p-3">
          <div className="h-28 rounded-2xl bg-[linear-gradient(135deg,#111827,#4f63ff,#b17cff)]" />
          <div className="mt-4 h-3 w-24 rounded-full bg-neutral-900" />
          <div className="mt-2 h-2 w-full rounded-full bg-neutral-200" />
          <div className="mt-2 h-2 w-4/5 rounded-full bg-neutral-200" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-xl bg-neutral-100" />
            <div className="h-16 rounded-xl bg-neutral-100" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function UrlPill() {
  return (
    <motion.div
      className="absolute bottom-24 left-4 flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-soft sm:left-12"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Globe2 className="h-4 w-4 text-[#4665ff]" />
      travel-ai.fotoee.com
      <CircleCheck className="h-4 w-4 text-emerald-500" />
    </motion.div>
  );
}

function PlatformSection() {
  return (
    <section id="platforms" className="border-y bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
          Supports every AI website workflow
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center rounded-lg border bg-white text-lg font-semibold text-neutral-800 shadow-line transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="bg-neutral-50 py-24">
      <SectionIntro
        eyebrow="Three steps"
        title="三步完成发布"
        text="From AI generated files to a production-ready link, Fotoee keeps the path short and visible."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {publishSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-neutral-950 text-white">
                <step.icon className="h-5 w-5" />
              </div>
              <div className="mt-8 text-sm text-neutral-500">Step 0{index + 1}</div>
              <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
              <div className="mt-7 h-2 rounded-full bg-neutral-100">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-[#4665ff] to-[#9b5cff]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${45 + index * 25}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 + index * 0.1 }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AssistantSection() {
  return (
    <section id="assistant" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge>AI Deployment Assistant</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-normal sm:text-5xl">
            自动检测，自动修复，自动上线。
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
            Fotoee scans every uploaded ZIP before publishing, fixes common AI export issues, and keeps non-technical users out of deployment trouble.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["入口文件检测", "路径修复", "SEO 补全", "资源压缩"].map((item) => (
              <Badge key={item} className="gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <Card className="overflow-hidden p-4 shadow-soft">
          <div className="rounded-lg border bg-neutral-950 p-4 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <Wand2 className="h-5 w-5 text-[#a9b6ff]" />
                </div>
                <div>
                  <div className="font-semibold">Deployment Assistant</div>
                  <div className="text-xs text-white/50">travel-ai.zip</div>
                </div>
              </div>
              <Badge className="border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
                Ready
              </Badge>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {assistantChecks.map((check, index) => (
                <motion.div
                  key={check.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="flex items-center justify-between">
                    <check.icon className="h-5 w-5 text-[#a9b6ff]" />
                    <CircleCheck className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="mt-5 text-2xl font-semibold">{check.label}</div>
                  <div className="mt-1 text-sm text-white/55">{check.detail}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Shield className="h-4 w-4 text-emerald-300" />
                Fixed 4 relative paths, added Open Graph tags, compressed 12 images.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  return (
    <section id="analytics" className="bg-neutral-50 py-24">
      <SectionIntro
        eyebrow="Realtime analytics"
        title="实时统计"
        text="Plausible-style analytics for live launches, campaigns and AI-generated landing pages."
      />
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden p-5 shadow-soft">
          <div className="flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm text-neutral-500">travel-ai.fotoee.com</div>
              <h3 className="mt-1 text-2xl font-semibold">Live dashboard</h3>
            </div>
            <div className="flex gap-2">
              {["24h", "7d", "30d"].map((item, index) => (
                <button
                  className={cn(
                    "h-9 rounded-md border px-3 text-sm",
                    index === 1 ? "bg-neutral-950 text-white" : "bg-white text-neutral-600"
                  )}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["PV", "48,291", "+18%"],
              ["UV", "12,804", "+11%"],
              ["Country", "42", "+7"],
              ["Device", "68% Mobile", "+5%"]
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-lg border bg-white p-5">
                <div className="text-sm text-neutral-500">{label}</div>
                <div className="mt-3 text-3xl font-semibold">{value}</div>
                <div className="mt-2 text-sm text-emerald-600">{delta}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-lg border bg-white p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-medium">Visitors</div>
                <BarChart3 className="h-5 w-5 text-neutral-400" />
              </div>
              <div className="flex h-56 items-end gap-2">
                {[42, 60, 38, 74, 68, 88, 56, 94, 82, 102, 91, 120].map((height, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-[#4665ff] to-[#9b5cff]"
                    initial={{ height: 0 }}
                    whileInView={{ height }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.035 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-medium">Country</div>
                <Globe2 className="h-5 w-5 text-neutral-400" />
              </div>
              <div className="space-y-4">
                {countries.map((country) => (
                  <div key={country.name}>
                    <div className="flex justify-between text-sm">
                      <span>{country.name}</span>
                      <span className="text-neutral-500">{country.value}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-neutral-100">
                      <div
                        className="h-2 rounded-full bg-neutral-950"
                        style={{ width: country.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function TemplateSection() {
  return (
    <section className="bg-white py-24">
      <SectionIntro
        eyebrow="Template marketplace"
        title="模板市场"
        text="Start from popular AI publishing formats, then customize and publish with one ZIP upload."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {templates.map((template, index) => (
          <Card
            key={template}
            className="group overflow-hidden p-5 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex h-44 items-end rounded-lg bg-gradient-to-br from-neutral-100 via-white to-[#eef0ff] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white shadow-line">
                <LayoutTemplate className="h-5 w-5 text-[#4665ff]" />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{template}</h3>
                <p className="mt-1 text-sm text-neutral-500">Template 0{index + 1}</p>
              </div>
              <Button size="icon" variant="outline">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-neutral-50 py-24">
      <SectionIntro
        eyebrow="Pricing"
        title="Start free, scale when you publish more."
        text="Simple SaaS pricing for solo creators, product teams and campaign operations."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {pricing.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative p-6",
              plan.highlighted && "border-neutral-950 bg-neutral-950 text-white shadow-soft"
            )}
          >
            {plan.highlighted ? (
              <Badge className="absolute right-5 top-5 border-white/15 bg-white/10 text-white">
                Popular
              </Badge>
            ) : null}
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-semibold">{plan.price}</span>
              <span className={cn("pb-2 text-sm", plan.highlighted ? "text-white/55" : "text-neutral-500")}>
                /mo
              </span>
            </div>
            <p className={cn("mt-4 leading-7", plan.highlighted ? "text-white/65" : "text-neutral-600")}>
              {plan.caption}
            </p>
            <Button
              className="mt-7 w-full"
              variant={plan.highlighted ? "secondary" : "default"}
            >
              Get started
            </Button>
            <div className="mt-7 space-y-3">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className={cn("flex items-center gap-3 text-sm", plan.highlighted ? "text-white/75" : "text-neutral-600")}
                >
                  <Check className={cn("h-4 w-4", plan.highlighted ? "text-white" : "text-emerald-600")} />
                  {feature}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-24">
      <SectionIntro
        eyebrow="FAQ"
        title="Questions before publishing?"
        text="Everything most teams ask before moving AI-generated pages into public links."
      />
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, index) => (
          <details
            key={faq.q}
            className="group border-b py-5"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
              {faq.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-neutral-400 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 leading-7 text-neutral-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-neutral-950">
              <CloudUpload className="h-4 w-4" />
            </span>
            Fotoee Publish
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/55">
            The AI publishing platform for turning generated web pages into fast, secure, shareable URLs.
          </p>
        </div>
        {[
          ["Product", "Upload", "Assistant", "Analytics", "Templates"],
          ["Company", "About", "Customers", "Security", "Contact"],
          ["Resources", "Docs", "API", "Status", "Changelog"]
        ].map(([title, ...links]) => (
          <div key={title}>
            <h3 className="font-medium">{title}</h3>
            <div className="mt-4 space-y-3 text-sm text-white/55">
              {links.map((link) => (
                <a key={link} href="#" className="block transition hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© 2026 Fotoee. All rights reserved.</span>
          <span>Privacy · Terms · Security</span>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-4xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{text}</p>
    </div>
  );
}
