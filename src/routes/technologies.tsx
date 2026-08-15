import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/site/Sections";
import { techStack } from "@/data/site";

const title = "Technology Stack — Frontend, Backend, Mobile & Cloud | KLTech Solutions";
const description =
  "The technologies KLTech Solutions works with: React, Next.js, Tailwind CSS, Node.js, Laravel, PostgreSQL, MongoDB, WordPress, Shopify, React Native, Flutter, AWS and Docker.";

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

function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A stack chosen for reliability, not hype"
        text="We pick technology per project based on requirements, budget and long-term maintainability."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <section key={group.category} className="card-surface p-7">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((t) => (
                  <li key={t} className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="container-page mt-10 text-center text-xs text-muted-foreground">
          Confirm this list matches the technologies KLTech Solutions genuinely supports — we will remove anything you
          do not offer.
        </p>
      </section>
      <CTASection title="Need advice on the right stack?" primaryLabel="Get a Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}
