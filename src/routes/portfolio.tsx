import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection, InfoNotice, PageHero } from "@/components/site/Sections";

const title = "Our Work — Portfolio of Websites, Apps & Software | KLTech Solutions";
const description =
  "Browse the KLTech Solutions portfolio of websites, e-commerce stores, web applications, mobile apps and custom software projects.";

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

const filters = ["All", "Websites", "E-Commerce", "Web Apps", "Mobile Apps", "Software"];

/** Real projects only. Populate once client supplies screenshots and permissions. */
const projects: {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
}[] = [];

function PortfolioPage() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects we've delivered"
        text="Filter by project type to see the work most relevant to your requirement."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio filters">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={
                  active === f
                    ? "rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                    : "rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                }
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10">
            {visible.length === 0 ? (
              <InfoNotice>
                <strong className="text-foreground">Projects pending.</strong> To publish this portfolio we need, for
                every project: project name, client name (if permitted), category, description, technologies,
                screenshots, live URL and case-study details. Nothing is invented here.
              </InfoNotice>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((p) => (
                  <article key={p.name} className="card-surface overflow-hidden">
                    <img src={p.image} alt={`${p.name} project screenshot`} loading="lazy" className="w-full" />
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</p>
                      <h2 className="mt-2 font-display text-lg font-semibold">{p.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection title="Discuss a similar project" primaryLabel="Get a Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}
