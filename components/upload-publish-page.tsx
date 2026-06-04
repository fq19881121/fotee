"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  CloudUpload,
  Code2,
  Copy,
  ExternalLink,
  FileArchive,
  FileCode2,
  Globe2,
  Image as ImageIcon,
  Languages,
  Laptop,
  Loader2,
  QrCode,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Upload,
  Wand2,
  Zap
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PublishState = "idle" | "analyzing" | "deploying" | "success";

const supportedFormats = [
  { label: "HTML", icon: FileCode2 },
  { label: "ZIP", icon: FileArchive },
  { label: "React Build", icon: Code2 },
  { label: "Vue Build", icon: Sparkles }
];

const analysisItems = ["index.html", "CSS Files", "JS Files", "Images", "SEO"];

const improvePrompts = [
  "Make it Dark Mode",
  "Translate to Turkish",
  "Translate to Indonesian",
  "Improve SEO",
  "Generate Social Cover"
];

export function UploadPublishPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<PublishState>("idle");
  const [fileName, setFileName] = useState("");
  const [copied, setCopied] = useState(false);
  const [improvePrompt, setImprovePrompt] = useState("Make it Dark Mode");

  const publishedUrl = useMemo(() => {
    const slug = fileName
      ? fileName
          .replace(/\.[^.]+$/, "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      : "travel-ai";
    return `https://${slug || "travel-ai"}.fotoee.com`;
  }, [fileName]);

  const progress =
    state === "idle" ? 0 : state === "analyzing" ? 42 : state === "deploying" ? 76 : 100;

  function simulatePublish(name: string) {
    setFileName(name);
    setCopied(false);
    setState("analyzing");
    window.setTimeout(() => setState("deploying"), 1000);
    window.setTimeout(() => setState("success"), 2300);
  }

  function handleFile(file?: File) {
    if (!file) return;
    simulatePublish(file.name);
  }

  async function copyLink() {
    await navigator.clipboard.writeText(publishedUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(72,91,255,.16),transparent_34rem)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[680px] bg-[linear-gradient(rgba(15,23,42,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <header className="relative z-10 border-b border-neutral-200/80 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950">
            <ArrowLeft className="h-4 w-4" />
            Fotoee Publish
          </Link>
          <div className="flex items-center gap-2">
            <Badge className="hidden gap-2 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Production console
            </Badge>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
          <div>
            <Badge className="mb-5">Upload & Publish</Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Ship an AI website with one precise upload.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:ml-auto">
            Drop HTML, ZIP, React builds, or Vue builds. Fotoee analyzes the package, validates assets, generates previews, and returns a production URL.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <UploadStage inputRef={inputRef} handleFile={handleFile} state={state} />
          <DeployInspector
            fileName={fileName}
            state={state}
            progress={progress}
            publishedUrl={publishedUrl}
          />
        </div>

        <AiImprovePanel
          prompt={improvePrompt}
          setPrompt={setImprovePrompt}
          active={state !== "idle"}
        />

        <PublishResult
          url={publishedUrl}
          visible={state === "success"}
          copied={copied}
          onCopy={copyLink}
        />
      </section>
    </main>
  );
}

function UploadStage({
  inputRef,
  handleFile,
  state
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleFile: (file?: File) => void;
  state: PublishState;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-soft">
      <div className="flex h-12 items-center justify-between border-b bg-neutral-50/70 px-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
          Deploy surface
        </div>
      </div>
      <div
        className="group relative flex min-h-[560px] cursor-pointer flex-col items-center justify-center overflow-hidden bg-neutral-950 p-6 text-center text-white"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          handleFile(event.dataTransfer.files[0]);
        }}
      >
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          accept=".html,.zip"
          onChange={(event) => handleFile(event.target.files?.[0])}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(93,112,255,.45),transparent_26rem)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:56px_56px]" />
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <CloudUpload className="h-11 w-11" />
        </motion.div>
        <h2 className="relative mt-9 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Drag your build into production.
        </h2>
        <p className="relative mt-5 max-w-xl text-base leading-7 text-white/62">
          A minimal deployment flow for AI-created pages, prototypes, campaigns, games, and launch microsites.
        </p>
        <Button className="relative mt-8 bg-white text-neutral-950 hover:bg-white/90" size="lg">
          <Upload className="h-5 w-5" />
          Choose file
        </Button>
        <div className="relative mt-10 grid w-full max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
          {supportedFormats.map((format) => (
            <div key={format.label} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-white/80 backdrop-blur">
              <format.icon className="mx-auto h-5 w-5 text-white" />
              <div className="mt-3 text-sm font-medium">{format.label}</div>
            </div>
          ))}
        </div>
        <div className="relative mt-8 text-xs uppercase tracking-[0.18em] text-white/35">
          {state === "idle" ? "Awaiting upload" : "Automated deployment running"}
        </div>
      </div>
    </div>
  );
}

function DeployInspector({
  fileName,
  state,
  progress,
  publishedUrl
}: {
  fileName: string;
  state: PublishState;
  progress: number;
  publishedUrl: string;
}) {
  return (
    <Card className="overflow-hidden bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4 border-b pb-5">
        <div>
          <div className="text-sm text-neutral-500">Deployment graph</div>
          <h2 className="mt-1 text-2xl font-semibold text-neutral-950">
            {fileName || "No build selected"}
          </h2>
        </div>
        <StatusBadge state={state} />
      </div>

      <div className="py-6">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="text-neutral-500">
            {state === "idle"
              ? "Ready"
              : state === "analyzing"
                ? "Analyzing package"
                : state === "deploying"
                  ? "Publishing globally"
                  : "Live on Fotoee"}
          </span>
          <span className="font-medium text-neutral-950">{progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <motion.div
            className="h-1.5 rounded-full bg-neutral-950"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45 }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {analysisItems.map((item, index) => {
          const isDone = state === "success" || (state !== "idle" && index < (state === "analyzing" ? 3 : 5));
          return (
            <div key={item} className="flex items-center justify-between rounded-lg border bg-white p-4">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md",
                    isDone ? "bg-neutral-950 text-white" : "bg-neutral-100 text-neutral-400"
                  )}
                >
                  {isDone ? <Check className="h-4 w-4" /> : <SearchCheck className="h-4 w-4" />}
                </div>
                <span className="font-medium">{item}</span>
              </div>
              <span className={cn("text-sm", isDone ? "text-neutral-950" : "text-neutral-400")}>
                {isDone ? "Verified" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-lg border bg-neutral-50 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-950">
          <Globe2 className="h-4 w-4 text-[#5668ff]" />
          {publishedUrl}
        </div>
        <div className="mt-2 text-sm text-neutral-500">Reserved URL generated from package name.</div>
      </div>
    </Card>
  );
}

function StatusBadge({ state }: { state: PublishState }) {
  if (state === "idle") return <Badge>Idle</Badge>;
  if (state === "success") {
    return (
      <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700">
        <Check className="h-3.5 w-3.5" />
        Live
      </Badge>
    );
  }

  return (
    <Badge className="gap-2 border-neutral-200 bg-neutral-50 text-neutral-700">
      <Loader2 className="h-3.5 w-3.5 animate-spin" />
      {state === "analyzing" ? "Analyzing" : "Deploying"}
    </Badge>
  );
}

function AiImprovePanel({
  prompt,
  setPrompt,
  active
}: {
  prompt: string;
  setPrompt: (value: string) => void;
  active: boolean;
}) {
  return (
    <section className="mt-6 rounded-lg border border-neutral-200 bg-white p-5 shadow-soft">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge className="gap-2">
            <Wand2 className="h-3.5 w-3.5 text-[#5668ff]" />
            AI Improve Website
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950">
            A future editor for AI-generated sites.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-neutral-600">
            Reserved for automatic webpage modification: theme changes, translation, SEO repair, and generated social covers before redeploy.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {improvePrompts.map((item) => (
              <button
                key={item}
                className="rounded-full border bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 shadow-line transition hover:border-neutral-950 hover:text-neutral-950"
                onClick={() => setPrompt(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-neutral-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Modification prompt</div>
                <div className="text-sm text-neutral-500">
                  {active ? "Ready after analysis" : "Upload a site to enable"}
                </div>
              </div>
            </div>
            <Badge>Planned</Badge>
          </div>
          <div className="mt-4 rounded-lg border bg-white p-3">
            <textarea
              className="min-h-28 w-full resize-none bg-transparent text-sm leading-6 outline-none"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Tell AI how to improve this website..."
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <PreviewCapability icon={Languages} title="Translate" text="TR / ID" />
            <PreviewCapability icon={SearchCheck} title="SEO" text="Meta + OG" />
            <PreviewCapability icon={ImageIcon} title="Cover" text="Social image" />
          </div>
          <Button className="mt-4 w-full" disabled>
            <Wand2 className="h-4 w-4" />
            AI auto-modify website
          </Button>
        </div>
      </div>
    </section>
  );
}

function PreviewCapability({
  icon: Icon,
  title,
  text
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border bg-white p-3">
      <Icon className="h-4 w-4 text-[#5668ff]" />
      <div className="mt-3 text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-neutral-500">{text}</div>
    </div>
  );
}

function PublishResult({
  url,
  visible,
  copied,
  onCopy
}: {
  url: string;
  visible: boolean;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <motion.section
      className={cn("mt-6", !visible && "pointer-events-none opacity-35")}
      initial={false}
      animate={{ opacity: visible ? 1 : 0.35, y: visible ? 0 : 12 }}
    >
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-soft">
        <div className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm text-neutral-500">Generated live URL</div>
            <div className="mt-2 flex items-center gap-2 text-xl font-semibold text-neutral-950">
              <Globe2 className="h-5 w-5 text-[#5668ff]" />
              {url}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button onClick={onCopy} disabled={!visible}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy URL"}
            </Button>
            <Button variant="outline" disabled={!visible}>
              <ExternalLink className="h-4 w-4" />
              Open
            </Button>
          </div>
        </div>

        <div className="grid gap-5 p-5 lg:grid-cols-[0.72fr_1.18fr_0.7fr]">
          <div className="rounded-lg border bg-white p-5">
            <div className="mb-4 flex items-center gap-2 font-medium">
              <QrCode className="h-5 w-5 text-[#5668ff]" />
              QR Code
            </div>
            <div className="mx-auto grid h-44 w-44 grid-cols-7 gap-1 rounded-lg bg-white p-3 shadow-line">
              {Array.from({ length: 49 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "rounded-[2px]",
                    (index * 7 + index) % 5 === 0 || index % 8 === 0 || index < 8 || index > 40
                      ? "bg-neutral-950"
                      : "bg-neutral-100"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-neutral-50 p-5">
            <div className="mb-4 flex items-center gap-2 font-medium">
              <Laptop className="h-5 w-5 text-[#5668ff]" />
              Desktop screenshot
            </div>
            <div className="overflow-hidden rounded-lg border bg-white">
              <div className="flex h-8 items-center gap-1.5 border-b bg-neutral-50 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="h-52 bg-[linear-gradient(135deg,#111827,#445cff_48%,#a66cff)] p-6 text-white">
                <Badge className="border-white/20 bg-white/10 text-white">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Live with SSL
                </Badge>
                <div className="mt-10 h-8 w-64 max-w-full rounded-md bg-white/90" />
                <div className="mt-4 h-3 w-80 max-w-full rounded-full bg-white/40" />
                <div className="mt-2 h-3 w-60 max-w-full rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-5">
            <div className="mb-4 flex items-center gap-2 font-medium">
              <Smartphone className="h-5 w-5 text-[#5668ff]" />
              Mobile screenshot
            </div>
            <div className="mx-auto w-40 rounded-[1.75rem] bg-neutral-950 p-2">
              <div className="overflow-hidden rounded-[1.35rem] bg-white p-3">
                <div className="h-28 rounded-xl bg-[linear-gradient(135deg,#111827,#5668ff,#a66cff)]" />
                <div className="mt-4 h-3 w-24 rounded-full bg-neutral-900" />
                <div className="mt-2 h-2 rounded-full bg-neutral-200" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-neutral-200" />
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="h-12 rounded-lg bg-neutral-100" />
                  <div className="h-12 rounded-lg bg-neutral-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
