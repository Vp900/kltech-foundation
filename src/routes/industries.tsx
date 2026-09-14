import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, PageHero } from "@/components/site/Sections";
import { industries } from "@/data/site";
import { ArrowRight, CheckCircle2, Building, Sparkles, Layers, Shield, Zap } from "lucide-react";

const title = "Industries We Serve — Enterprise Sector Solutions | SVM IT Solutions";
const description =
  "SVM IT Solutions delivers specialized software, ERP, CRM, and cloud engineering for E-Commerce, Healthcare, EdTech, Real Estate, Manufacturing, Finance, and Logistics.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

import industriesHero from "@/assets/industries-hero.jpg";

function IndustriesPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeIndustry = industries[selectedIndex];

  return (
    <>
      {/* Rich 2-Column Hero Section for Industries */}
      <section className="relative bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white pt-12 pb-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/3 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <Building className="size-3.5" />
              <span>Sector Engineering & Domain Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
              Industry-Tailored Web & Enterprise Architecture
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              We design custom software, ERPs, CRMs, and web applications tailored specifically for Healthcare, E-Commerce, Logistics, Real Estate, and Manufacturing.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-2">
                <Zap className="size-4" />
                <span>Domain Workflows Tailored</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-sky-400 flex items-center gap-2">
                <Shield className="size-4" />
                <span>100% Industry Compliant</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={industriesHero}
              alt="Enterprise Industry Sectors SVM IT"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Non-Grid Interactive Split Showcase Section */}
      <section className="section-y bg-slate-50 dark:bg-slate-950/80 relative">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-500 mb-3">
              <Sparkles className="size-3.5" />
              <span>Interactive Sector Explorer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
              Select Your Industry Domain
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Click through sectors to explore operational challenges and our custom engineering solutions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start mt-8">
            {/* Left Non-Grid Vertical Interactive Selector Bar */}
            <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {industries.map((ind, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={ind.name}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-500/10 shadow-lg scale-[1.02]"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`grid size-10 place-items-center rounded-xl font-bold text-xs ${
                          isSelected
                            ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <Building className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">{ind.name}</h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{ind.solution}</p>
                      </div>
                    </div>
                    <ArrowRight className={`size-4 transition-transform ${isSelected ? "text-emerald-500 translate-x-1" : "text-slate-400 opacity-40"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Detail Feature Showcase Card */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[480px]">
              <div className="absolute top-0 right-0 size-64 bg-emerald-500/10 blur-3xl pointer-events-none" />

              <div>
                {/* Sector Header Pill */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Industry Deep Dive</span>
                    <h3 className="text-2xl font-extrabold font-display text-slate-900 dark:text-white mt-1">
                      {activeIndustry?.name || "Industry"} Solutions
                    </h3>
                  </div>
                  <div className="grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <Zap className="size-6" />
                  </div>
                </div>

                {/* Challenge & Solution Cards */}
                <div className="space-y-6">
                  <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-5">
                    <div className="flex items-center gap-2 font-bold text-xs text-rose-500 uppercase tracking-wider mb-2">
                      <Shield className="size-4" />
                      <span>Industry Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {activeIndustry?.problem || ""}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-500 uppercase tracking-wider mb-2">
                      <CheckCircle2 className="size-4" />
                      <span>Our Engineered Approach</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {activeIndustry?.solution || ""}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Layers className="size-4 text-emerald-500" />
                  <span>Custom Architecture & Scalable Integration</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all hover:gap-3"
                >
                  Discuss {activeIndustry?.name || "Industry"} Project <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Operating in another sector?" primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}
