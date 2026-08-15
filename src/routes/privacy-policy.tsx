import { createFileRoute } from "@tanstack/react-router";
import { InfoNotice, PageHero } from "@/components/site/Sections";

const title = "Privacy Policy | KLTech Solutions";
const description = "How KLTech Solutions collects, uses and protects personal information submitted through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Last updated: pending client review." />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <InfoNotice>
            This is draft policy text prepared for review. It is not legal advice and must be reviewed and customized
            for KLTech Solutions&apos; actual business, jurisdiction and data practices before publication.
          </InfoNotice>
          <h2 className="font-display text-xl font-semibold text-foreground">Information we collect</h2>
          <p>We collect the details you submit through our contact and quotation forms: name, email address, phone number, company name, service interest, budget range and your project description.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">How we use it</h2>
          <p>Your information is used solely to respond to your enquiry, prepare a quotation and communicate about your project. We do not sell personal data.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Analytics and cookies</h2>
          <p>If analytics are enabled, aggregated usage data may be collected to improve the website. Cookie controls will be provided where required by applicable law.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Data retention and security</h2>
          <p>Enquiry records are retained only as long as needed for business and legal purposes, and are protected with reasonable technical and organizational measures.</p>
          <h2 className="font-display text-xl font-semibold text-foreground">Your rights</h2>
          <p>You may request access to, correction of, or deletion of the personal data you have submitted by contacting us.</p>
        </div>
      </section>
    </>
  ),
});
