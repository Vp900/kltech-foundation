import { createFileRoute } from "@tanstack/react-router";
import { InfoNotice, PageHero } from "@/components/site/Sections";

const title = "Refund & Cancellation Policy | KLTech Solutions";
const description = "How cancellations, milestones and refunds are handled on KLTech Solutions projects.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Refund & Cancellation Policy" text="Last updated: pending client review." />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <InfoNotice>
            Draft policy prepared for review. Confirm your actual milestone, cancellation and refund terms before this
            page is published.
          </InfoNotice>
          <h2 className="font-display text-xl font-semibold text-foreground">Milestone-based billing</h2>
          <p>Projects are billed against agreed milestones. Work completed and approved up to the cancellation date is payable.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Cancellation</h2>
          <p>Either party may cancel a project in writing. Any advance covering work not yet started is refundable, subject to the signed agreement.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Non-refundable items</h2>
          <p>Third-party costs already incurred on your behalf — domains, hosting, licences, paid plugins and ad spend — are non-refundable.</p>
        </div>
      </section>
    </>
  ),
});
