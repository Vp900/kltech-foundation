import { createFileRoute } from "@tanstack/react-router";
import { InfoNotice, PageHero } from "@/components/site/Sections";

const title = "Terms & Conditions | SVM IT Solutions";
const description = "The terms governing use of the SVM IT Solutions website and the delivery of our services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" text="Last updated: pending client review." />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <InfoNotice>
            Draft terms prepared for review. These must be reviewed and customized for SVM IT Solutions&apos; actual
            contracts and jurisdiction before publication.
          </InfoNotice>
          <h2 className="font-display text-xl font-semibold text-foreground">Use of this website</h2>
          <p>Content on this website is provided for general information. Availability of specific services is confirmed in writing during the quotation stage.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Quotations and scope</h2>
          <p>Quotations are valid for the period stated in the written proposal and cover only the scope described there. Changes to scope may affect price and timeline.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Intellectual property</h2>
          <p>Ownership of deliverables transfers as defined in the project agreement, typically on completion of payment. Third-party licences remain with their owners.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Liability</h2>
          <p>Our liability is limited as set out in the signed project agreement. We do not guarantee specific search rankings, revenue or business outcomes.</p>
        </div>
      </section>
    </>
  ),
});
