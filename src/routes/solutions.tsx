import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, ServiceCard } from "@/components/site/Sections";
import { services } from "@/data/site";

const title = "Business Solutions — ERP, CRM, Automation & Cloud | SVM IT Solutions";
const description =
  "Operational solutions from SVM IT Solutions: ERP systems, CRM platforms, business automation, cloud hosting and IT consulting.";

const solutionSlugs = ["erp-solutions", "crm-solutions", "business-automation", "cloud-hosting", "it-consulting"];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const items = solutionSlugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Systems that run your business"
        text="Beyond websites — the platforms your team uses every day to sell, serve and operate."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} name={s.name} short={s.short} icon={s.icon} />
          ))}
        </div>
      </section>
      <CTASection title="Modernise your operations" primaryLabel="Get a Quote" secondaryLabel="Book a Consultation" />
    </>
  );
}
