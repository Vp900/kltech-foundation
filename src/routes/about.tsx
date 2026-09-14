import { createFileRoute } from "@tanstack/react-router";
import { CTASection, Icon, SectionHeading } from "@/components/site/Sections";
import { TeamSection } from "@/components/site/TeamSection";
import { whyChooseUs } from "@/data/site";
import heroImage from "@/assets/hero-dashboard.jpg";
import { Sparkles } from "lucide-react";

const title = "About SVM IT Solutions — Our Mission, Leadership & Engineering Team";
const description =
  "Learn about SVM IT Solutions: our founders, executive leadership team, engineering talent, mission, vision, and core values.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Our Mission",
    text: "Make dependable, enterprise-grade web technology accessible to businesses of every size with clear scope, honest timelines, and robust engineering.",
  },
  {
    title: "Our Vision",
    text: "Become a trusted long-term technology partner that enterprises rely on as they expand, innovate, and automate.",
  },
  {
    title: "Our Values",
    text: "Transparency, quality-first code, user-centric design, and 24/7 post-launch engineering support.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Reduced Height 2-Column Hero Section with Image */}
      <section className="relative overflow-hidden bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white py-12 lg:py-16">
        <div className="absolute top-0 right-0 size-[28rem] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-[28rem] rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

        <div className="container-page relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
              <Sparkles className="size-3.5" />
              <span>About SVM IT Solutions</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-display">
              A Technology Partner Dedicated to <span className="bg-gradient-to-r from-emerald-600 via-sky-400 to-blue-600 dark:from-emerald-400 dark:via-sky-400 dark:to-blue-500 bg-clip-text text-transparent">Innovation</span>
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              SVM IT Solutions builds high-performance web applications, cloud systems, and custom software with a focus on clarity, scale, and long-term security.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-medium border-t border-slate-200 dark:border-slate-800/80 pt-5">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>100% Transparency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-sky-400" />
                <span>Agile Engineering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-indigo-400" />
                <span>24/7 Support Included</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 opacity-20 blur-xl" />
            <img
              src={heroImage}
              width={1280}
              height={960}
              alt="SVM IT Solutions engineering and software development team dashboard"
              className="relative w-full rounded-3xl border border-slate-800 shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Who We Are" title="Engineering-Led, Business-Focused" />
          <p className="lead-text mt-6 max-w-3xl text-slate-600 dark:text-slate-400">
            We collaborate with startups, growing mid-market enterprises, and global brands to design, engineer, and deploy digital products. Every project starts with understanding your business goals and implementing scalable full-stack web solutions.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="card-surface p-7">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <TeamSection />

      <section className="section-y bg-slate-50 dark:bg-slate-900/50">
        <div className="container-page">
          <SectionHeading eyebrow="Why Clients Trust Us" title="Our Core Engineering Principles" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <article key={w.title} className="card-surface p-6">
                <Icon name={w.icon} className="size-6 text-emerald-500" />
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Partner with SVM IT Solutions" text="Tell us about your business goals and we will present a tailored tech strategy." primaryLabel="Get a Free Quote" secondaryLabel="Contact Us" />
    </>
  );
}

