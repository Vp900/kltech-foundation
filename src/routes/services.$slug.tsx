import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CTASection,
  FAQAccordion,
  FeatureList,
  InfoNotice,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { getService, processSteps } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — KLTech Solutions" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.service.title} | KLTech Solutions`;
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
            provider: { "@type": "Organization", name: "KLTech Solutions" },
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} text={service.intro}>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-lg">
            <Link to="/get-a-quote">
              {service.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-lg border-white/25 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="What we build" title={`${service.name} deliverables`} />
          <div className="mt-8">
            <FeatureList items={service.whatWeBuild} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Features" title="What's included" />
          <div className="mt-8">
            <FeatureList items={service.features} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Technologies" title="Technologies we use for this service" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <li key={t} className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Process" title="How this project runs" />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.step} className="card-surface p-5">
                <span className="font-display text-2xl font-bold text-primary/25">{p.step}</span>
                <h3 className="mt-1 font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Portfolio" title="Relevant work" />
          <div className="mt-8">
            <InfoNotice>
              Project examples for this service will be added once real screenshots and client permissions are
              provided.
            </InfoNotice>
          </div>
        </div>
      </section>

      {service.faqs.length > 0 ? (
        <section className="section-y bg-surface">
          <div className="container-page">
            <SectionHeading eyebrow="FAQ" title={`${service.name} questions`} />
            <div className="mt-10">
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </section>
      ) : null}

      <CTASection title={service.cta} primaryLabel="Get a Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}
