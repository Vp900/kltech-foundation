import { createFileRoute } from "@tanstack/react-router";
import { CTASection, InfoNotice, PageHero } from "@/components/site/Sections";
import { blogPosts } from "@/data/site";

const title = "Resources & Blog — Business Technology Insights | KLTech Solutions";
const description =
  "Practical articles on web development, e-commerce, SEO, mobile apps, software and business automation from the KLTech Solutions team.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights for business technology decisions"
        text="Straightforward guides to help you scope, budget and choose technology."
      />
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <article key={p.slug} className="card-surface flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</p>
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-5 text-xs font-medium text-muted-foreground">Article coming soon</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <InfoNotice>
              These are planned article topics. Confirm the list and we will write and publish the full posts with
              individual SEO-friendly URLs.
            </InfoNotice>
          </div>
        </div>
      </section>
      <CTASection title="Talk to our experts" primaryLabel="Get a Quote" secondaryLabel="Contact Us" />
    </>
  );
}
