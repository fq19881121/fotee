import {
  BarChart3,
  Bot,
  Brain,
  CloudUpload,
  Code2,
  Gamepad2,
  Globe,
  LineChart,
  Link2,
  LockKeyhole,
  Megaphone,
  PackageCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer
} from "lucide-react";

export const audiences = [
  { label: "AI 创作者", icon: Sparkles },
  { label: "独立开发者", icon: Code2 },
  { label: "产品经理", icon: Brain },
  { label: "营销人员", icon: Megaphone },
  { label: "游戏运营团队", icon: Gamepad2 },
  { label: "普通用户", icon: Bot }
];

export const workflow = [
  {
    title: "上传 ZIP",
    description: "拖拽 AI 生成网页包，自动识别入口文件、资源路径和静态依赖。",
    icon: CloudUpload
  },
  {
    title: "云端部署",
    description: "构建、校验、上传至 S3 兼容存储，并生成独立访问域名。",
    icon: Rocket
  },
  {
    title: "分享分析",
    description: "30 秒拿到链接，追踪访问、来源、设备与页面事件。",
    icon: LineChart
  }
];

export const projects = [
  {
    name: "AI Product Launch",
    source: "ChatGPT",
    status: "Live",
    url: "launch.fotoee.app",
    views: "18.4K",
    conversion: "7.8%"
  },
  {
    name: "Game Event Landing",
    source: "Claude",
    status: "Deploying",
    url: "event.fotoee.app",
    views: "6.2K",
    conversion: "11.3%"
  },
  {
    name: "Cursor SaaS Demo",
    source: "Cursor",
    status: "Live",
    url: "demo.fotoee.app",
    views: "31.9K",
    conversion: "4.9%"
  }
];

export const capabilities = [
  {
    title: "AI 网页包智能识别",
    description: "兼容 ChatGPT、Claude、Lovable、Bolt、Cursor 生成的静态站点 ZIP。",
    icon: PackageCheck
  },
  {
    title: "安全发布空间",
    description: "每个项目隔离存储，支持私密链接、过期访问与团队权限。",
    icon: LockKeyhole
  },
  {
    title: "自动 HTTPS 与 CDN",
    description: "部署完成后自动生成可分享链接，支持自定义域名扩展。",
    icon: Globe
  },
  {
    title: "Plausible 风格统计",
    description: "轻量、直观、无噪音地查看访问量、来源、设备和转化。",
    icon: BarChart3
  },
  {
    title: "部署前校验",
    description: "发现缺失入口、超大资源、破损链接与常见打包问题。",
    icon: ShieldCheck
  },
  {
    title: "30 秒发布体验",
    description: "从上传到获得链接只保留必要步骤，降低非技术用户门槛。",
    icon: Timer
  }
];

export const deploySteps = [
  "ZIP uploaded",
  "Entry detected",
  "Assets optimized",
  "S3 synced",
  "Share link ready"
];

export const integrations = ["ChatGPT", "Claude", "Lovable", "Bolt.new", "Cursor", "Figma"];

export const navItems = [
  { label: "产品", href: "#product" },
  { label: "流程", href: "#workflow" },
  { label: "统计", href: "#analytics" },
  { label: "价格", href: "#pricing" }
];

export const primaryCta = {
  label: "上传 ZIP",
  href: "#deploy"
};

export const secondaryCta = {
  label: "查看演示",
  href: "#dashboard"
};

export const trustMetrics = [
  { value: "30s", label: "平均部署" },
  { value: "99.9%", label: "访问可用性" },
  { value: "5+", label: "AI 工具兼容" }
];

export const shareLinks = [
  { label: "Public", icon: Link2 },
  { label: "Protected", icon: LockKeyhole },
  { label: "Campaign", icon: Megaphone }
];
