import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, ServiceCard } from "@/components/site/Sections";
import { services } from "@/data/site";
import servicesDashboard from "@/assets/services-dashboard.jpg";

const title = "Enterprise IT Services — Web, Mobile, Software & Cloud | SVM IT Solutions";
const description =
  "Explore SVM IT Solutions services: web development, e-commerce, mobile apps, custom software, ERP, CRM, UI/UX, SEO, and cloud engineering.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      {/* Compact 2-Column Hero Section with Image */}
      <section className="relative overflow-hidden bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white py-12 lg:py-16">
        <div className="absolute top-0 right-0 size-[28rem] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-[28rem] rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

        <div className="container-page relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
              <Sparkles className="size-3.5" />
              <span>SVM IT Solutions Services</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-display">
              Complete Engineering & <span className="bg-gradient-to-r from-emerald-600 via-sky-500 to-blue-600 dark:from-emerald-400 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              Full-spectrum digital services from websites and mobile apps to ERP, CRM, and enterprise cloud engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/20">
                <Link to="/contact">
                  Discuss Your Project <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-medium border-t border-slate-200 dark:border-slate-800/80 pt-5">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-sky-400" />
                <span>Custom ERP & CRM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-indigo-400" />
                <span>Cloud & DevOps</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 opacity-20 blur-xl" />
            <img
              src={servicesDashboard}
              width={1280}
              height={720}
              alt="SVM IT Solutions engineering services overview dashboard"
              className="relative w-full rounded-3xl border border-slate-800 shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50 dark:bg-slate-950/60">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} name={s.name} short={s.short} icon={s.icon} />
          ))}
        </div>
      </section>
      <CTASection title="Need advice on choosing the right service?" primaryLabel="Get a Free Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}

