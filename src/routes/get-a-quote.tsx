import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/Forms";
import { InfoNotice, PageHero } from "@/components/site/Sections";

const title = "Get a Quote — Request a Project Quotation | SVM IT Solutions";
const description =
  "Request a detailed quotation from SVM IT Solutions. Share your service requirement, budget and timeline and receive a clear scope and price.";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-a-quote" },
    ],
    links: [{ rel: "canonical", href: "/get-a-quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Request a project quotation"
        text="Tell us what you need. We reply with a written scope, timeline and price — no obligation."
      />
      <section className="section-y">
        <div className="container-page mx-auto max-w-3xl space-y-8">
          <LeadForm variant="quote" submitLabel="Request My Quote" />
          <InfoNotice>
            File attachments, lead storage, admin notifications and WhatsApp follow-up are ready to be enabled — confirm
            your preferred email address and WhatsApp number and we will connect the backend.
          </InfoNotice>
        </div>
      </section>
    </>
  );
}
