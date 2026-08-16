import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Code2,
  Terminal,
  Database,
  Cloud,
  Wrench,
  Server,
  Lock,
  Globe,
  Gauge,
  Smartphone,
  ShoppingCart,
  Boxes,
  Network,
  Users,
  PenTool,
  Search,
  TrendingUp,
  BarChart3,
  CreditCard,
  Truck,
  LayoutGrid,
  FileCheck,
  Sliders,
  Check,
  ChevronRight,
  Layers,
  Sparkles,
  Activity,
  Workflow,
  Radio,
  FileCode,
  Laptop,
  CheckCircle,
  Clock,
  Settings,
  ShieldAlert,
} from "lucide-react";

import heroImage from "@/assets/hero-dashboard.jpg";
import servicesDashboard from "@/assets/services-dashboard.jpg";
import mobileHero from "@/assets/mobile-hero.jpg";
import ecommerceHero from "@/assets/ecommerce-hero.jpg";
import uiUxHero from "@/assets/ui-ux-hero.jpg";
import seoHero from "@/assets/seo-hero.jpg";
import erpHero from "@/assets/erp-hero.jpg";
import cloudHero from "@/assets/cloud-hero.jpg";
import cmsHero from "@/assets/cms-hero.jpg";
import crmHero from "@/assets/crm-hero.jpg";
import automationHero from "@/assets/automation-hero.jpg";
import consultingHero from "@/assets/consulting-hero.jpg";

import { Button } from "@/components/ui/button";
import {
  CTASection,
  FAQAccordion,
  FeatureList,
  SectionHeading,
} from "@/components/site/Sections";
import { getService, processSteps, type ServiceDetail } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — KL Tech Solutions" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.service.title} | KL Tech Solutions`;
    const d = loaderData.service.intro.slice(0, 155);
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.service.name,
            description: loaderData.service.intro,
            provider: { "@type": "Organization", name: "KL Tech Solutions" },
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  // Helper to map hero image per service
  const getHeroImage = (slug: string) => {
    switch (slug) {
      case "ecommerce-development":
      case "shopify-development":
      case "woocommerce-development":
        return ecommerceHero;
      case "mobile-app-development":
        return mobileHero;
      case "ui-ux-design":
        return uiUxHero;
      case "seo":
      case "digital-marketing":
        return seoHero;
      case "erp-solutions":
        return erpHero;
      case "crm-solutions":
        return crmHero;
      case "business-automation":
        return automationHero;
      case "cloud-hosting":
      case "website-maintenance":
        return cloudHero;
      case "it-consulting":
        return consultingHero;
      case "wordpress-development":
        return cmsHero;
      case "software-development":
        return erpHero;
      case "web-development":
      default:
        return servicesDashboard;
    }
  };

  const activeHeroImage = getHeroImage(service.slug);

  // Render distinct custom visual layouts according to service category
  if (service.slug === "web-development") {
    return <WebDevLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "mobile-app-development") {
    return <MobileAppLayout service={service} heroImage={activeHeroImage} />;
  }

  if (
    service.slug === "ecommerce-development" ||
    service.slug === "shopify-development" ||
    service.slug === "woocommerce-development"
  ) {
    return <ECommerceLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "erp-solutions") {
    return <ERPLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "crm-solutions") {
    return <CRMLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "business-automation") {
    return <AutomationLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "cloud-hosting") {
    return <CloudHostingLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "it-consulting") {
    return <ITConsultingLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "software-development") {
    return <EnterpriseSoftwareLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "ui-ux-design") {
    return <UIUXLayout service={service} heroImage={activeHeroImage} />;
  }

  if (service.slug === "seo") {
    return <SEOLayout service={service} heroImage={activeHeroImage} />;
  }

  // Fallback layout for CMS / Maintenance with sticky image showcase
  return <GeneralServiceLayout service={service} heroImage={activeHeroImage} />;
}

/* =========================================================================
   1. WEB DEVELOPMENT LAYOUT (Split Code & Sticky Feature Column)
   ========================================================================= */
function WebDevLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  const [activeCodeTab, setActiveCodeTab] = useState<"react" | "api" | "perf">("react");

  return (
    <>
      {/* Code-Architect Dark Hero */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Code2 className="size-3.5" />
              <span>Modern Web Architecture & Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">View Live Projects</Link>
              </Button>
            </div>
          </div>

          {/* Interactive Code Editor / Visual Preview Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">WebArchitecture.tsx</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveCodeTab("react")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeCodeTab === "react" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "hover:text-slate-200"
                    }`}
                  >
                    React/Next
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("api")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeCodeTab === "api" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "hover:text-slate-200"
                    }`}
                  >
                    REST API
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("perf")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeCodeTab === "perf" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "hover:text-slate-200"
                    }`}
                  >
                    Lighthouse
                  </button>
                </div>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 bg-slate-950/90 overflow-x-auto">
                {activeCodeTab === "react" && (
                  <pre className="text-emerald-300">
{`// Modern High-Speed React 19 / Next.js Setup
export default async function WebApplication() {
  const data = await fetchApiData();
  return (
    <ResponsiveLayout speed="100ms" SEO="Optimized">
      <CustomHeader data={data.header} />
      <MainContent components={data.sections} />
      <GlobalFooter />
    </ResponsiveLayout>
  );
}`}
                  </pre>
                )}
                {activeCodeTab === "api" && (
                  <pre className="text-sky-300">
{`// Scalable Microservice Controller
router.get("/api/v1/services", async (req, res) => {
  const cachedData = await redis.get("web_services");
  if (cachedData) return res.json(JSON.parse(cachedData));
  const services = await db.services.findMany({ active: true });
  await redis.setex("web_services", 3600, JSON.stringify(services));
  return res.status(200).json({ status: "success", data: services });
});`}
                  </pre>
                )}
                {activeCodeTab === "perf" && (
                  <div className="space-y-3 py-2">
                    <div className="flex justify-between items-center text-xs">
                      <span>Performance Score</span>
                      <span className="font-bold text-emerald-400">99 / 100</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[99%]" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 text-[11px]">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                        <span className="block text-slate-400">LCP</span>
                        <span className="font-bold text-emerald-400">0.8s</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                        <span className="block text-slate-400">FID</span>
                        <span className="font-bold text-emerald-400">12ms</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                        <span className="block text-slate-400">CLS</span>
                        <span className="font-bold text-emerald-400">0.00</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Left Sidebar + Scrolling Feature Breakdown Layout */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
                Web Architecture Breakdown
              </span>
              <h2 className="text-3xl font-extrabold font-display text-white">
                Everything We Include in Web Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From responsive layout systems to API integrations and administrative CMS controls, we build web solutions designed to scale effortlessly.
              </p>
              <div className="space-y-3 pt-2">
                {service.whatWeBuild.slice(0, 5).map((item, idx) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <img
                src={heroImage}
                alt="Web Development Dashboard"
                className="w-full rounded-2xl border border-slate-800 shadow-2xl object-cover max-h-[360px]"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-emerald-400">
                  Engineering Capabilities & Standards
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feat) => (
                    <div key={feat} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   2. MOBILE APP DEVELOPMENT LAYOUT (Device Frame Showcase & Timeline)
   ========================================================================= */
function MobileAppLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  return (
    <>
      {/* Mobile-Centric Hero Section */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-10 left-10 size-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold">
              <Smartphone className="size-3.5" />
              <span>Native & Cross-Platform iOS / Android Apps</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>

            {/* Mobile Highlights Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-sky-400">
                <Check className="size-4 text-sky-400" />
                <span>React Native & Flutter</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400">
                <Check className="size-4 text-emerald-400" />
                <span>60 FPS Smooth UI</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
                <Check className="size-4 text-amber-400" />
                <span>Store Publishing Guaranteed</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-xl bg-sky-500 hover:bg-sky-600 font-bold text-white shadow-lg shadow-sky-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">Explore App Work</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs w-full">
              <div className="absolute -inset-1.5 rounded-[40px] bg-gradient-to-r from-sky-500 to-emerald-500 opacity-40 blur-xl" />
              <img
                src={heroImage}
                alt="Mobile App Development"
                className="relative w-full rounded-[32px] border-4 border-slate-800 shadow-2xl object-cover h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal App Development Roadmap Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              End-to-End Mobile Lifecycle
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white mt-3">
              How We Build Your Mobile App
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "App Architecture & UX", desc: "User journeys, screen wireframes, and API schema design." },
              { num: "02", title: "Native / Hybrid Dev", desc: "Clean React Native or Flutter codebase with local SQLite storage." },
              { num: "03", title: "Backend & Push Sync", desc: "FCM Push alerts, REST/GraphQL APIs, and cloud database." },
              { num: "04", title: "App Store Publishing", desc: "Guaranteed Apple App Store & Google Play Store approval." },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative hover:border-sky-500/50 transition-colors">
                <span className="text-3xl font-extrabold font-mono text-sky-400 block mb-3">{step.num}</span>
                <h3 className="text-base font-bold font-display text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* iOS vs Android Feature Cards */}
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid size-10 place-items-center rounded-xl bg-sky-500/10 text-sky-400">
                  <Smartphone className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg text-white">Apple iOS Applications</h3>
                  <p className="text-xs text-slate-400">iPhone & iPad optimized apps</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-sky-400" /> Swift & React Native iOS Architecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-sky-400" /> Apple Pay & In-App Purchase Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-sky-400" /> FaceID / TouchID Security Protocol</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Smartphone className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg text-white">Google Android Applications</h3>
                  <p className="text-xs text-slate-400">Android Phones & Tablets optimized</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> Kotlin & Flutter Android Build</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> Google Pay & Local UPI Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> FCM Background Sync & Offline Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   3. E-COMMERCE LAYOUT (Conversion Stats Header & Payment Gateways Ticker)
   ========================================================================= */
function ECommerceLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  return (
    <>
      {/* High-Converting E-Commerce Banner Hero */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
              <ShoppingCart className="size-3.5" />
              <span>High-Converting Online Stores</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>

            {/* ROI Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div>
                <span className="block text-lg font-extrabold font-display text-amber-400">3.5x</span>
                <span className="text-[11px] text-slate-400">Avg. Conversion Boost</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold font-display text-emerald-400">&lt; 1.2s</span>
                <span className="text-[11px] text-slate-400">Checkout Speed</span>
              </div>
              <div>
                <span className="block text-lg font-extrabold font-display text-sky-400">100%</span>
                <span className="text-[11px] text-slate-400">Mobile Responsive</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-amber-500 hover:bg-amber-600 font-bold text-slate-950 shadow-lg shadow-amber-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">See Stores Built</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={heroImage}
              alt="E-Commerce Store Preview"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Payment Gateways & Logistics Integrations */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Payment & Logistics Matrix
            </span>
            <h2 className="text-2xl font-bold font-display text-white mt-2">
              Supported Payment Gateways & Courier Sync
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {["Stripe", "Razorpay", "PayPal", "Paytm", "PhonePe", "Instant UPI", "Shiprocket", "Custom Gateway"].map((gw) => (
              <div key={gw} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-md flex flex-col items-center justify-center gap-2 hover:border-amber-500/40 transition-colors">
                <CreditCard className="size-5 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">{gw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold font-display text-white mb-8">What We Include in E-Commerce Stores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.whatWeBuild.map((item) => (
              <div key={item} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   4. ERP SOLUTIONS LAYOUT (Enterprise Modules & ROI Matrix)
   ========================================================================= */
function ERPLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  const [activeTab, setActiveTab] = useState<"finance" | "inventory" | "hr" | "procurement">("finance");

  const erpModules = [
    {
      id: "finance",
      title: "Finance & GST Accounting Ledger",
      badge: "100% Tax Compliant",
      desc: "Real-time balance sheet, automated GST E-Way bill generation, multi-currency invoicing, and automated bank reconciliation.",
      bullets: ["Automated GST1 / GST3B export files", "Multi-branch chart of accounts", "Instant P&L and Cashflow statements"],
    },
    {
      id: "inventory",
      title: "Multi-Warehouse Stock & Logistics",
      badge: "Real-time Tracking",
      desc: "Barcode & QR scanning, serial number tracking, multi-location stock transfers, and automated low-stock reorder triggers.",
      bullets: ["Batch & Expiry date management", "Live stock valuation (FIFO / LIFO)", "Warehouse bin location mapping"],
    },
    {
      id: "procurement",
      title: "Purchase & Vendor Procurement",
      badge: "Cost Control",
      desc: "Streamlined purchase requisitions, automated vendor quotation comparisons, PO approvals, and GRN inspection logs.",
      bullets: ["Vendor performance scoring", "Multi-tier approval workflows", "Automated purchase order emails"],
    },
    {
      id: "hr",
      title: "HR, Payroll & Attendance",
      badge: "Biometric Integrated",
      desc: "Seamless integration with biometric attendance devices, automated salary slip generation, PF/ESI deductions, and leave tracking.",
      bullets: ["Automated monthly payroll run", "Employee self-service portal", "Overtime & incentive rules"],
    },
  ];

  return (
    <>
      {/* Enterprise ERP Hero */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-1/3 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Network className="size-3.5" />
              <span>Unified Enterprise Resource Planning (ERP)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect sales, inventory, accounts, and human resources into a single audit-ready enterprise platform.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">Explore ERP Demos</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={heroImage}
              alt="Enterprise ERP Dashboard"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
            <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl hidden sm:flex items-center gap-3 shadow-xl">
              <div className="size-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                100%
              </div>
              <div>
                <p className="text-xs font-bold text-white">Single Source of Truth</p>
                <p className="text-[11px] text-slate-400">Zero data silos across departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section: ERP Core Modules Breakdown */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">
              Core Business Modules
            </span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
              Everything Your Enterprise Needs to Scale
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {erpModules.map((m) => (
              <div key={m.id} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
                    {m.badge}
                  </span>
                  <Database className="size-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section: ERP vs Spreadsheets ROI Comparison */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Business Transformation
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white mt-2">
              Manual Spreadsheets vs KL Tech ERP
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Before: Manual Operations</span>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> Data scattered across dozens of unlinked Excel files
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> High human error in inventory stock counts and GST billing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span> Delayed decision making due to manual end-of-month reporting
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-emerald-500/30 space-y-4 relative shadow-lg shadow-emerald-500/5">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">After: KL Tech Custom ERP</span>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" /> 100% centralized database with role-based access control
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" /> Automated GST tax calculations & instantaneous E-Way bills
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" /> Live executive dashboard with real-time revenue & stock insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an ERP Expert" />
    </>
  );
}

/* =========================================================================
   5. CRM SOLUTIONS LAYOUT (Sales Pipeline & Omnichannel Capture)
   ========================================================================= */
function CRMLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const pipelineStages = [
    { title: "1. Lead Ingestion", action: "Auto-captured from Website, Meta Ads & WhatsApp API instantly into CRM." },
    { title: "2. Qualification & Assign", action: "Smart round-robin assignment to sales reps with instant mobile alert." },
    { title: "3. Quotation & Nudge", action: "Automated WhatsApp quote PDF generator and follow-up alarm triggers." },
    { title: "4. Deal Closure & Onboarding", action: "One-click conversion to customer account and invoice generation." },
  ];

  return (
    <>
      {/* Violet Gradient CRM Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-violet-950/40 to-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold">
              <Users className="size-3.5" />
              <span>Smart Sales & Customer Relationship Management</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Capture every lead, automate sales follow-ups, and track deal stages in a visual sales pipeline your team will love using.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-violet-600 hover:bg-violet-700 font-bold text-white shadow-lg shadow-violet-600/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">Request CRM Demo</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={heroImage}
              alt="CRM Sales Pipeline Dashboard"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Light Section: Lead Ingestion Channels */}
      <section className="py-16 bg-violet-50/50 text-slate-900">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">
              Omnichannel Lead Capture
            </span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
              Never Miss a Potential Customer Again
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Website Forms", detail: "Direct Webhook Sync" },
              { name: "Meta Lead Ads", detail: "Instant FB/IG Feed" },
              { name: "WhatsApp Business API", detail: "Auto Lead Chatbot" },
              { name: "IndiaMART & B2B", detail: "Third-party API Sync" },
              { name: "Phone Call Logs", detail: "Mobile App Recorder" },
            ].map((ch) => (
              <div key={ch.name} className="p-4 rounded-2xl bg-white border border-violet-100 shadow-sm text-center">
                <div className="size-8 rounded-full bg-violet-100 text-violet-600 mx-auto flex items-center justify-center font-bold text-xs mb-2">
                  ✓
                </div>
                <h4 className="text-xs font-bold text-slate-900">{ch.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{ch.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Interactive Section: Visual Pipeline Kanban */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
              Visual Sales Pipeline
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white mt-2">
              Automated Stages from Lead to Deal Closure
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              {pipelineStages.map((st, idx) => (
                <button
                  key={st.title}
                  onClick={() => setSelectedStage(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    selectedStage === idx
                      ? "bg-slate-900 border-violet-500 shadow-lg shadow-violet-500/10"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-display text-sm text-white">{st.title}</span>
                    <ChevronRight className={`size-4 transition-transform ${selectedStage === idx ? "rotate-90 text-violet-400" : "text-slate-500"}`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900 border border-slate-800 min-h-[200px] flex flex-col justify-center">
              <span className="text-xs font-bold text-violet-400 font-mono">Stage 0{selectedStage + 1} Automation</span>
              <h3 className="text-xl font-bold font-display text-white mt-2">{pipelineStages[selectedStage]?.title}</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">{pipelineStages[selectedStage]?.action}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-violet-400">
                <Sparkles className="size-4" />
                <span>Zero Manual Lead Leakage Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Discuss CRM Specs" />
    </>
  );
}

/* =========================================================================
   6. BUSINESS AUTOMATION LAYOUT (Workflow Node Simulator & Hours Saved ROI)
   ========================================================================= */
function AutomationLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  const [activeRecipe, setActiveRecipe] = useState(0);

  const recipes = [
    { title: "Order Form ➔ Auto GST Invoice ➔ WhatsApp Sync", timeSaved: "120 hrs/mo", desc: "When a customer completes a form or order, our system auto-generates a PDF invoice, registers the tax entry, and sends a WhatsApp message with the link." },
    { title: "New Web Inquiry ➔ Lead Routing ➔ Sales Rep Push", timeSaved: "85 hrs/mo", desc: "Inquiries are instant-filtered by region/budget and pushed directly to the duty manager's phone within 3 seconds." },
    { title: "Daily EOD Performance PDF Emailer", timeSaved: "45 hrs/mo", desc: "Every evening at 8 PM, an automated worker aggregates sales, stock, and payment data into an executive summary PDF emailed to directors." },
  ];

  return (
    <>
      {/* Cyan High-Tech Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/3 size-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
              <Workflow className="size-3.5" />
              <span>Process & Workflow Automation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Eliminate manual data entry, repetitive copy-pasting, and delayed approvals with custom automated background workers.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-cyan-500 hover:bg-cyan-600 font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5 text-slate-950" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">Explore Workflows</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={heroImage}
              alt="Business Automation Workflow Diagram"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Light Section: Automation Recipes */}
      <section className="py-16 bg-cyan-50/50 text-slate-900">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-cyan-700 uppercase tracking-widest">
              Ready-to-Deploy Recipes
            </span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
              Proven Automations That Save Hundreds of Hours
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              {recipes.map((r, idx) => (
                <button
                  key={r.title}
                  onClick={() => setActiveRecipe(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    activeRecipe === idx
                      ? "bg-white border-cyan-500 shadow-md"
                      : "bg-white/60 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-display text-xs sm:text-sm text-slate-900">{r.title}</span>
                    <span className="text-[11px] font-bold text-cyan-600 px-2 py-0.5 bg-cyan-100 rounded-md shrink-0 ml-2">{r.timeSaved}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-cyan-200 shadow-sm min-h-[220px] flex flex-col justify-center">
              <span className="text-xs font-bold text-cyan-600 font-mono">Automation Flow #0{activeRecipe + 1}</span>
              <h3 className="text-xl font-bold font-display text-slate-900 mt-2">{recipes[activeRecipe]?.title}</h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{recipes[activeRecipe]?.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-cyan-600">
                <CheckCircle2 className="size-4 text-cyan-500" />
                <span>Runs 24/7/365 in background with automatic error retry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Automate My Business" secondaryLabel="Talk to an Automation Engineer" />
    </>
  );
}

/* =========================================================================
   7. CLOUD & HOSTING LAYOUT (Infrastructure Stack & 99.99% Uptime SLA)
   ========================================================================= */
function CloudHostingLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  return (
    <>
      {/* Sky Blue Hybrid Cloud Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold">
              <Cloud className="size-3.5" />
              <span>High-Availability Cloud Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Deploy your web apps, APIs, and databases on secure, auto-scaling cloud servers with 99.99% guaranteed uptime.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-blue-500 hover:bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">View Cloud Setups</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={heroImage}
              alt="Cloud Server Infrastructure"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
            <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 rounded-2xl flex items-center gap-3 shadow-xl">
              <div className="size-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white">System Status: Operational</p>
                <p className="text-[11px] text-slate-400">99.99% Uptime SLA Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section: Infrastructure Pillars */}
      <section className="py-16 bg-slate-50 text-slate-900">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Cloud Engineering
            </span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
              Enterprise Infrastructure Built to Scale
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AWS VPC & Auto Scaling", icon: Server, desc: "Elastic compute instances that scale up automatically during high traffic spikes." },
              { title: "Docker Containerization", icon: Boxes, desc: "Isolated micro-container builds ensuring identical environment execution." },
              { title: "WAF Firewall & DDoS Shield", icon: Lock, desc: "Proactive Cloudflare & AWS WAF filtering against malicious bot traffic." },
              { title: "Zero-Downtime CI/CD", icon: Zap, desc: "Automated GitHub deployment pipelines with zero site disruption." },
            ].map((p) => (
              <div key={p.title} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <p.icon className="size-8 text-blue-600 mb-4" />
                  <h3 className="text-base font-bold font-display text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get Cloud Quote" secondaryLabel="Talk to a Cloud Architect" />
    </>
  );
}

/* =========================================================================
   8. IT CONSULTING LAYOUT (Executive Framework & Tech Strategy Audit)
   ========================================================================= */
function ITConsultingLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    { title: "1. Tech Debt & Stack Audit", desc: "Deep architectural code review to identify performance bottlenecks, security flaws, and legacy scaling risks." },
    { title: "2. Digital Transformation Roadmap", desc: "Step-by-step quarterly execution plan to modernize business software and migrate legacy databases." },
    { title: "3. Build vs Buy Vendor Evaluation", desc: "Unbiased technical analysis on whether to build custom software or integrate existing SaaS platforms." },
    { title: "4. Security & SOC2/ISO Compliance", desc: "Comprehensive data privacy and cybersecurity posture assessment for enterprise compliance." },
  ];

  return (
    <>
      {/* Corporate Slate/Amber Hybrid Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
              <Sparkles className="size-3.5" />
              <span>Strategic Executive IT Advisory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Pragmatic advice on technology architecture, vendor evaluation, and digital roadmaps before committing capital.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-amber-500 hover:bg-amber-600 font-bold text-slate-950 shadow-lg shadow-amber-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5 text-slate-950" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/about">Our Advisory Team</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={heroImage}
              alt="IT Strategy Advisory Boardroom"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Light Section: Strategic Pillars */}
      <section className="py-16 bg-amber-50/40 text-slate-900">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-widest">
              Advisory Pillars
            </span>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 mt-2">
              4-Phase Strategic Technology Blueprint
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              {pillars.map((p, idx) => (
                <button
                  key={p.title}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    activePillar === idx
                      ? "bg-white border-amber-500 shadow-md"
                      : "bg-white/60 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-display text-sm text-slate-900">{p.title}</span>
                    <ChevronRight className={`size-4 transition-transform ${activePillar === idx ? "rotate-90 text-amber-600" : "text-slate-400"}`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-amber-200 shadow-sm min-h-[220px] flex flex-col justify-center">
              <span className="text-xs font-bold text-amber-600 font-mono">Pillar 0{activePillar + 1} Deliverable</span>
              <h3 className="text-xl font-bold font-display text-slate-900 mt-2">{pillars[activePillar]?.title}</h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{pillars[activePillar]?.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-amber-700">
                <CheckCircle2 className="size-4 text-amber-600" />
                <span>Includes Written Architecture Master Report & Executive Deck</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Book a Strategy Session" secondaryLabel="Talk to CTO Advisor" />
    </>
  );
}

/* =========================================================================
   9. ENTERPRISE CUSTOM SOFTWARE LAYOUT (Module Control Center)
   ========================================================================= */
function EnterpriseSoftwareLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { title: "Core Workflows & Automation", desc: "Automated business rules, scheduled reports, and multi-department approvals." },
    { title: "Role-Based Access Control (RBAC)", desc: "Fine-grained permissions, encrypted audit trails, and isolated workspace data." },
    { title: "Legacy System Integration", desc: "Seamless REST/GraphQL connectors to existing CRMs, ERPs, and databases." },
    { title: "Real-Time Dashboard Analytics", desc: "Live operational charts, revenue forecasting, and executive reporting." },
  ];

  return (
    <>
      {/* Enterprise Control Center Hero */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-1/3 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Boxes className="size-3.5" />
              <span>Custom Enterprise Software Systems</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">View Enterprise Systems</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={heroImage}
              alt="Enterprise Software Dashboard"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Interactive Enterprise Module Switcher Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Enterprise Module Breakdown
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white mt-2">
              Tailored Architecture for Business Operations
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              {modules.map((m, idx) => (
                <button
                  key={m.title}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                    activeModule === idx
                      ? "bg-slate-950 border-emerald-500 shadow-lg"
                      : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-display text-sm text-white">{m.title}</span>
                    <ChevronRight className={`size-4 transition-transform ${activeModule === idx ? "rotate-90 text-emerald-400" : "text-slate-500"}`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-950 border border-slate-800 min-h-[220px] flex flex-col justify-center">
              <span className="text-xs font-bold text-emerald-400 font-mono">Module 0{activeModule + 1} Overview</span>
              <h3 className="text-2xl font-bold font-display text-white mt-2">{modules[activeModule]?.title || "Enterprise Module"}</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">{modules[activeModule]?.desc || ""}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="size-4" />
                <span>100% Custom Built & Documented Handoff</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   5. UI/UX DESIGN LAYOUT (Creative Canvas & Design System Showcase)
   ========================================================================= */
function UIUXLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  return (
    <>
      {/* Creative Canvas Hero */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold">
              <PenTool className="size-3.5" />
              <span>User Experience & Visual Interface Design</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-purple-500 hover:bg-purple-600 font-bold text-white shadow-lg shadow-purple-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">Explore Designs</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={heroImage}
              alt="UI/UX Design Systems"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Design System & Figma Token Showcase */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              Design Systems Ready for Handoff
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white mt-2">
              From Wireframes to Pixel-Perfect UI
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-bold text-purple-400">STAGE 01</span>
              <h3 className="text-lg font-bold font-display text-white">User Research & Wireframes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Persona mapping, layout hierarchy, and low-fidelity structural sketches to validate navigation early.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-bold text-purple-400">STAGE 02</span>
              <h3 className="text-lg font-bold font-display text-white">Figma Design Systems</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reusable component libraries, auto-layout tokens, dark/light themes, and color variable palettes.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-bold text-purple-400">STAGE 03</span>
              <h3 className="text-lg font-bold font-display text-white">Interactive Prototypes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clickable micro-interactions and developer CSS tokens ready for instant React/Tailwind implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   6. SEO & DIGITAL MARKETING LAYOUT (Lighthouse Audit & Growth Stats)
   ========================================================================= */
function SEOLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  return (
    <>
      {/* Analytics Growth Hero */}
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-0 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Search className="size-3.5" />
              <span>Search Engine Optimization & Organic Growth</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3">
                <BarChart3 className="size-8 text-emerald-400" />
                <div>
                  <span className="block text-base font-bold text-white">90+ Lighthouse</span>
                  <span className="text-[11px] text-slate-400">Core Web Vitals Pass</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="size-8 text-sky-400" />
                <div>
                  <span className="block text-base font-bold text-white">Rank #1 Target</span>
                  <span className="text-[11px] text-slate-400">Keywords & Traffic</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/contact">Get Free SEO Audit</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={heroImage}
              alt="SEO Analytics Dashboard"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Technical SEO Audit Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold font-display text-white mb-8">Included in Our Technical SEO Audit</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.whatWeBuild.map((item) => (
              <div key={item} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   7. GENERAL / CMS / CLOUD SERVICE LAYOUT (Sticky Image & Key Capabilities)
   ========================================================================= */
function GeneralServiceLayout({ service, heroImage }: { service: ServiceDetail; heroImage: string }) {
  return (
    <>
      <section className="relative bg-slate-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Cpu className="size-3.5" />
              <span>{service.name} Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.intro}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/25">
                <Link to="/contact">
                  {service.cta} <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                <Link to="/portfolio">Explore Projects</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={heroImage}
              alt={service.name}
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Feature Capabilities Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold font-display text-white mb-8">What We Deliver for {service.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.whatWeBuild.map((item) => (
              <div key={item} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Matrix List */}
      <TechStackList technologies={service.technologies} serviceName={service.name} />

      {/* FAQ & CTA */}
      <FAQSection faqs={service.faqs} serviceName={service.name} />
      <CTASection title={service.cta} primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

/* =========================================================================
   REUSABLE SUB-COMPONENTS
   ========================================================================= */
function TechStackList({ technologies, serviceName }: { technologies: string[]; serviceName: string }) {
  return (
    <section className="py-16 bg-slate-950 text-white border-t border-slate-900">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Tech Stack Matrix
            </span>
            <h2 className="text-2xl font-bold font-display text-white mt-1">
              Production Stack for {serviceName}
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            {technologies.length}+ Production Technologies Supported
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {technologies.map((t) => (
            <span
              key={t}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:border-emerald-500/40 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ faqs, serviceName }: { faqs: { q: string; a: string }[]; serviceName: string }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="container-page max-w-3xl mx-auto">
        <SectionHeading eyebrow="FAQ" title={`${serviceName} Frequently Asked Questions`} />
        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
