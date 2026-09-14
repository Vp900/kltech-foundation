import { createFileRoute } from "@tanstack/react-router";
import { CTASection, FAQAccordion, PageHero } from "@/components/site/Sections";
import { generalFaqs } from "@/data/site";

const title = "FAQ — Costs, Timelines & Support | SVM IT Solutions";
const description =
  "Answers to common questions about website cost, development timelines, hosting, SEO, payment gateways, maintenance, ERP, CRM and post-launch support.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" text="Straight answers about how we work, price and support projects." />
      <section className="section-y">
        <div className="container-page">
          <FAQAccordion items={generalFaqs} />
        </div>
      </section>
      <CTASection title="Still have a question?" primaryLabel="Get a Quote" secondaryLabel="Contact Us" />
    </>
  );
}
