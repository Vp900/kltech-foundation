import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, PageHero } from "@/components/site/Sections";
import { CLIENT_PROJECTS } from "@/data/clients";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

const title = "Our Work & Client Portfolio — SVM IT Solutions";
const description =
  "Explore the SVM IT Solutions client portfolio featuring 15+ live web applications, e-commerce stores, CPaaS AI platforms, edtech solutions, and enterprise industrial websites.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const filters = ["All", "AI & Cloud", "E-Commerce", "EdTech", "Industrial", "Media & Events", "Corporate"];

import portfolioHero from "@/assets/portfolio-hero.jpg";

function PortfolioPage() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? CLIENT_PROJECTS
      : CLIENT_PROJECTS.filter((p) => {
          if (active === "AI & Cloud") return p.category.includes("AI") || p.category.includes("CPaaS");
          if (active === "E-Commerce") return p.category.includes("Commerce") || p.category.includes("Retail");
          if (active === "EdTech") return p.category.includes("EdTech") || p.category.includes("Learning");
          if (active === "Industrial") return p.category.includes("Industrial") || p.category.includes("Manufacturing");
          if (active === "Media & Events") return p.category.includes("Media") || p.category.includes("Event") || p.category.includes("Blog");
          if (active === "Corporate") return p.category.includes("Corporate") || p.category.includes("Consulting") || p.category.includes("Hospitality");
          return true;
        });

  return (
    <>
      {/* Rich 2-Column Hero Section for Portfolio / Our Work */}
      <section className="relative bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white pt-12 pb-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Sparkles className="size-3.5" />
              <span>Our Work & Client Showcase</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
              Live Client Ecosystems & Software Portfolio
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Explore 15+ live production web applications, e-commerce stores, CPaaS platforms, and enterprise solutions built by SVM IT Solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-2">
                <Layers className="size-4" />
                <span>15+ Active Production Websites</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-sky-400 flex items-center gap-2">
                <ExternalLink className="size-4" />
                <span>100% Live Domain Verified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={portfolioHero}
              alt="SVM IT Client Portfolio Showcase"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50 dark:bg-slate-950/60">
        <div className="container-page">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active === f
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Accent Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accentColor} font-display font-extrabold text-white text-base shadow-md group-hover:rotate-3 transition-transform`}
                    >
                      {p.logoText.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {p.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center gap-2">
                    {p.name}
                    <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a similar software idea?" primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

