import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  FAQAccordion,
  Icon,
  InfoNotice,
  SectionHeading,
  ServiceCard,
} from "@/components/site/Sections";
import { ProjectBuilder } from "@/components/site/Forms";
import {
  featuredServices,
  generalFaqs,
  industries,
  processSteps,
  services,
  techStack,
  whyChooseUs,
} from "@/data/site";

const title = "KLTech Solutions — IT Services, Software & Web Development Company";
const description =
  "KLTech Solutions builds high-performance websites, web applications, mobile apps, ERP, CRM and custom software for businesses, startups and organizations.";

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
          name: "KLTech Solutions",
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
      <section className="relative overflow-hidden bg-ink" style={{ background: "var(--gradient-ink)" }}>
        <div
          className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--cyan), transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Star className="size-3.5" aria-hidden="true" /> Technology & IT Solutions
            </span>
            <h1 className="h1-display mt-5 text-ink-foreground">Build Better. Grow Faster with Technology.</h1>
            <p className="lead-text mt-6 max-w-xl text-ink-soft">
              KLTech Solutions helps businesses build high-performance websites, web applications, mobile apps and
              custom software solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-lg">
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg border-white/25 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="reveal">
            <img
              src={heroImage}
              width={1280}
              height={960}
              alt="Laptop showing an analytics dashboard next to a mobile app interface built by KLTech Solutions"
              className="w-full rounded-2xl border border-white/10 shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      {/* Trust / statistics — real numbers pending client confirmation */}
      <section className="border-b border-border bg-surface py-12">
        <div className="container-page">
          <InfoNotice>
            <strong className="text-foreground">Statistics section reserved.</strong> Projects delivered, happy clients,
            industries served and support hours will be published here once you confirm the real figures. We have not
            invented any numbers.
          </InfoNotice>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Complete IT Solutions for Your Business"
            text="From websites and mobile apps to ERP, CRM and business automation — delivered by one accountable team."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} name={s.name} short={s.short} icon={s.icon} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link to="/services">View all 15 services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Solutions"
            title="Featured business solutions"
            text="Systems that run day-to-day operations, not just marketing pages."
            align="left"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["erp-solutions", "crm-solutions", "business-automation"].map((slug) => {
              const s = services.find((x) => x.slug === slug)!;
              return (
                <article key={slug} className="card-surface p-7">
                  <Icon name={s.icon} className="size-6 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Explore solution <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Industries" title="Industries we work with" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 12).map((i) => (
              <li key={i.name} className="card-surface p-5">
                <h3 className="font-display text-base font-semibold">{i.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{i.solution}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-lg">
              <Link to="/industries">See industry details</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y bg-ink" style={{ background: "var(--gradient-ink)" }}>
        <div className="container-page">
          <SectionHeading eyebrow="Why KLTech" title="Why businesses choose KLTech Solutions" tone="dark" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <article key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon name={w.icon} className="size-6 text-cyan" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Technologies" title="A modern, dependable technology stack" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group) => (
              <div key={group.category} className="card-surface p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((t) => (
                    <li key={t} className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Our Work" title="Portfolio & case studies" />
          <div className="mt-10">
            <InfoNotice>
              <strong className="text-foreground">Portfolio pending.</strong> Real project screenshots, names,
              categories, technologies and live links will be published once you share them. We do not publish sample
              or fabricated projects.
            </InfoNotice>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="rounded-lg">
              <Link to="/portfolio">Go to portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Process" title="How we deliver projects" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.step} className="card-surface p-6">
                <span className="font-display text-3xl font-bold text-primary/25">{p.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Testimonials" title="What clients say" />
          <div className="mt-10">
            <InfoNotice>
              <strong className="text-foreground">Testimonials pending.</strong> Only genuine client reviews will be
              published here. Share names, companies, designations and review text when ready.
            </InfoNotice>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Project Builder"
            title="Tell us what you want to build"
            text="Answer three quick questions and we will come back with a tailored consultation."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <ProjectBuilder />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <FAQAccordion items={generalFaqs.slice(0, 6)} />
          </div>
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-sm font-semibold text-primary">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build something that grows your business"
        text="Share your requirement and receive a clear scope, timeline and quotation."
        primaryLabel="Get a Quote"
        secondaryLabel="Talk to an Expert"
      />
    </>
  );
}
