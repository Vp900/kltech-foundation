import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles, ShieldCheck, Zap } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  FAQAccordion,
  Icon,
  SectionHeading,
  ServiceCard,
} from "@/components/site/Sections";
import { ProjectBuilder } from "@/components/site/Forms";
import { ClientSlider } from "@/components/site/ClientSlider";
import { TechStack } from "@/components/site/TechStack";
import { Testimonials } from "@/components/site/Testimonials";
import {
  featuredServices,
  generalFaqs,
  industries,
  processSteps,
  services,
  whyChooseUs,
} from "@/data/site";

const title = "KL Tech Solutions — IT Services, Software & Web Development Company";
const description =
  "KL Tech Solutions builds high-performance websites, web applications, mobile apps, ERP, CRM and custom software for businesses, startups and organizations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KL Tech Solutions",
          description,
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-20">
        <div className="absolute top-0 right-0 size-[32rem] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-[32rem] rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

        <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
              <Sparkles className="size-3.5" />
              <span>INNOVATE • DEVELOP • DELIVER</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-display">
              Build Better. Grow Faster with <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">KL Tech Solutions</span>.
            </h1>
            <p className="mt-4 text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              Custom websites, mobile apps, AI integrations, ERP/CRM, and enterprise cloud software.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/25">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800"
              >
                <Link to="/portfolio">Explore Our Clients & Work</Link>
              </Button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl font-extrabold text-white">15+</p>
                <p className="text-[11px] text-slate-400">Live Client Systems</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-emerald-400">99.9%</p>
                <p className="text-[11px] text-slate-400">Uptime Architecture</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-sky-400">24/7</p>
                <p className="text-[11px] text-slate-400">Support Included</p>
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 opacity-20 blur-xl" />
            <img
              src={heroImage}
              width={1280}
              height={960}
              alt="Analytics dashboard and mobile app interface built by KL Tech Solutions"
              className="relative w-full rounded-3xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Services (8 Grid) */}
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Complete IT Solutions for Your Growth"
            text="High-performance websites, mobile apps, ERP, CRM, and cloud engineering."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} name={s.name} short={s.short} icon={s.icon} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link to="/services">View All 15 Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infinite Client Logo Slider (Our Valued Clients & Projects) */}
      <ClientSlider />

      {/* Enterprise Tech Stack */}
      <TechStack />

      {/* Solutions Section */}
      <section className="section-y bg-slate-50 dark:bg-slate-900/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Solutions"
            title="Featured Enterprise Systems"
            text="Systems that streamline operations, automate workflows, and drive profitability."
            align="left"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["erp-solutions", "crm-solutions", "business-automation"].map((slug) => {
              const s = services.find((x) => x.slug === slug)!;
              return (
                <article key={slug} className="card-surface p-7 group">
                  <Icon name={s.icon} className="size-7 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.intro}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-2 transition-all"
                  >
                    Explore Solution <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Industries */}
      <section className="section-y bg-background">
        <div className="container-page">
          <SectionHeading eyebrow="Industries" title="Industries We Empower" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 12).map((i) => (
              <li key={i.name} className="card-surface p-5 hover:border-emerald-500/40 transition-colors">
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{i.name}</h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">{i.solution}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section with Fixed Parallax Background Image */}
      <section
        className="relative overflow-hidden py-20 text-white bg-slate-950 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: "fixed" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-0" />

        <div className="container-page relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-3 backdrop-blur-md">
              <Sparkles className="size-3.5" />
              <span>Agile Engineering Delivery</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              How We Deliver Projects On Time & On Budget
            </h2>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Four structured phases from initial requirement scoping to battle-tested production release.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-stretch max-w-6xl mx-auto">
            {processSteps.map((p, idx) => (
              <li
                key={p.step}
                className="w-full relative rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-7 shadow-2xl hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center justify-start"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-3xl font-extrabold font-display text-emerald-400 font-mono">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Phase {p.step}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-medium">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>



      {/* FAQ */}
      <section className="section-y bg-slate-50 dark:bg-slate-900/50">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQAccordion items={generalFaqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="Let's build something extraordinary together"
        text="Share your project ideas and receive a detailed roadmap, architecture design, and proposal."
        primaryLabel="Get a Free Quote"
        secondaryLabel="Talk to an Expert"
      />
    </>
  );
}

