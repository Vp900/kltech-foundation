import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/site/Sections";
import { TechStack } from "@/components/site/TechStack";

const title = "Technology Stack & Software Tools — SVM IT Solutions";
const description =
  "Discover the engineering technologies, programming languages (Java, Python, Django, React, Angular, TypeScript, Node.js), databases, cloud infra, and development software used by SVM IT Solutions.";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechnologiesPage,
});

import { Code2, Cpu, Sparkles } from "lucide-react";
import technologiesHero from "@/assets/technologies-hero.jpg";

function TechnologiesPage() {
  return (
    <>
      {/* Rich 2-Column Hero Section for Technologies */}
      <section className="relative bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white pt-12 pb-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-1/3 size-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
              <Cpu className="size-3.5" />
              <span>Technology Stack & Software Tools</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
              Enterprise Languages, Frameworks & Cloud Architecture
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              We engineer custom applications using modern React, Node.js, Python, Java, Docker, AWS, and modern databases built for speed and security.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 flex items-center gap-2">
                <Code2 className="size-4" />
                <span>Modern Stack Standard</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-2">
                <Sparkles className="size-4" />
                <span>High Performance Architecture</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={technologiesHero}
              alt="SVM IT Engineering Tech Stack"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      <TechStack showTitle={false} />
      <CTASection title="Need technical guidance for your architecture?" primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

