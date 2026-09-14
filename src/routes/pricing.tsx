import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection, InfoNotice, PageHero } from "@/components/site/Sections";

const title = "Pricing — Request a Custom Quote | SVM IT Solutions";
const description =
  "SVM IT Solutions pricing is scoped per project. Share your requirement and receive a written custom quotation with clear inclusions.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Starter", text: "For small business websites that need a professional presence quickly." },
  { name: "Business", text: "For growing businesses needing more pages, integrations and marketing support." },
  { name: "Custom", text: "For complex software, ERP, CRM and custom applications scoped to your operations." },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent, scope-based pricing"
        text="Every project is priced on its actual scope — no hidden line items after signing."
      />
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <article key={t.name} className="card-surface flex flex-col p-8">
                <h2 className="font-display text-xl font-semibold">{t.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <p className="mt-6 font-display text-2xl font-bold text-primary">Get a Custom Quote</p>
                <Button asChild className="mt-6 rounded-lg">
                  <Link to="/get-a-quote">Request pricing</Link>
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <InfoNotice>
              <strong className="text-foreground">Package prices pending.</strong> Confirm your actual packages, prices,
              inclusions and exclusions and we will publish them here. No prices have been invented.
            </InfoNotice>
          </div>
        </div>
      </section>
      <CTASection title="Get an accurate price for your project" primaryLabel="Get a Quote" secondaryLabel="Contact Us" />
    </>
  );
}
