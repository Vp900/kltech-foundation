import { createFileRoute } from "@tanstack/react-router";
import { CTASection, Icon, InfoNotice, PageHero, SectionHeading } from "@/components/site/Sections";
import { whyChooseUs } from "@/data/site";

const title = "About KLTech Solutions — Our Mission, Vision & Expertise";
const description =
  "Learn about KLTech Solutions: who we are, our mission and vision, how we work and the technology expertise we bring to every project.";

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
    text: "Make dependable, well-built technology accessible to businesses of every size — with clear scope, honest timelines and no jargon.",
  },
  {
    title: "Our Vision",
    text: "Become a long-term technology partner that businesses return to as they grow, not a one-off vendor.",
  },
  {
    title: "Our Values",
    text: "Transparency, quality-first engineering, honest communication and accountability after launch.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A technology partner, not just a vendor"
        text="KLTech Solutions builds websites, applications and business software with a focus on clarity, quality and long-term maintainability."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Who we are" title="Engineering-led, business-focused" />
          <p className="lead-text mt-6 max-w-3xl text-muted-foreground">
            We work with businesses, startups, organizations and individuals to plan, design, build and support digital
            products. Every engagement starts with understanding your operations, then choosing the simplest technology
            that solves the problem well.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="card-surface p-7">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Why clients trust us" title="How we work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <article key={w.title} className="card-surface p-6">
                <Icon name={w.icon} className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page space-y-8">
          <SectionHeading eyebrow="Our team" title="The people behind KLTech" />
          <InfoNotice>
            <strong className="text-foreground">Team profiles pending.</strong> Share real names, photographs,
            designations, short bios and LinkedIn links and we will publish the team section. No placeholder people are
            shown.
          </InfoNotice>
          <InfoNotice>
            <strong className="text-foreground">Certifications & partnerships pending.</strong> Only genuine
            certifications, partnerships and registration details will be published.
          </InfoNotice>
        </div>
      </section>

      <CTASection title="Work with us" text="Tell us about your business and we'll suggest a practical way forward." primaryLabel="Get a Quote" secondaryLabel="Contact Us" />
    </>
  );
}
