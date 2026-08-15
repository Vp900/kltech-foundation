import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/site/Sections";
import { industries } from "@/data/site";

const title = "Industries We Serve — IT Solutions by Sector | KLTech Solutions";
const description =
  "KLTech Solutions builds technology for e-commerce, education, healthcare, real estate, manufacturing, retail, finance, logistics, hospitality, travel and startups.";

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

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology built around your industry"
        text="Every sector has its own workflows and constraints. We scope solutions around how your business actually operates."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {industries.map((i) => (
            <article key={i.name} className="card-surface p-7">
              <h2 className="font-display text-xl font-semibold">{i.name}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Challenge</dt>
                  <dd className="text-muted-foreground">{i.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Our approach</dt>
                  <dd className="text-muted-foreground">{i.solution}</dd>
                </div>
              </dl>
              <Link to="/get-a-quote" className="mt-5 inline-block text-sm font-semibold text-primary">
                Discuss a project →
              </Link>
            </article>
          ))}
        </div>
        <p className="container-page mt-10 text-center text-xs text-muted-foreground">
          Industry claims are stated as capability areas. Sector-specific case studies will be published once real
          project references are supplied.
        </p>
      </section>
      <CTASection title="Working in one of these industries?" primaryLabel="Get a Quote" secondaryLabel="Request a Callback" />
    </>
  );
}
