import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, ServiceCard } from "@/components/site/Sections";
import { services } from "@/data/site";

const title = "IT Services — Web, Mobile, Software & Cloud | KLTech Solutions";
const description =
  "Explore all KLTech Solutions services: web development, e-commerce, mobile apps, custom software, ERP, CRM, UI/UX, SEO, WordPress, Shopify, maintenance and cloud.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete IT services under one roof"
        text="Fifteen focused services covering everything from your first website to enterprise-grade business software."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} name={s.name} short={s.short} icon={s.icon} />
          ))}
        </div>
      </section>
      <CTASection title="Not sure which service you need?" primaryLabel="Get a Quote" secondaryLabel="Book a Consultation" />
    </>
  );
}
