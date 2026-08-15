import { createFileRoute } from "@tanstack/react-router";
import { CTASection, InfoNotice, PageHero, SectionHeading } from "@/components/site/Sections";

const title = "Case Studies — Project Deep Dives | KLTech Solutions";
const description =
  "Detailed KLTech Solutions case studies covering client requirements, challenges, strategy, solution, technologies and outcomes.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const structure = [
  "Project Overview",
  "Client Requirement",
  "Challenge",
  "Strategy",
  "Solution",
  "Technologies",
  "Development Process",
  "Screenshots",
  "Result",
  "Key Features",
  "Testimonial",
];

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="How we solve real business problems"
        text="Each case study walks through the requirement, the approach we took and what was delivered."
      />
      <section className="section-y">
        <div className="container-page space-y-10">
          <InfoNotice>
            <strong className="text-foreground">Case studies pending.</strong> Share project details and measurable
            outcomes and we will publish them in the structure below. We do not invent performance results.
          </InfoNotice>
          <div>
            <SectionHeading align="left" eyebrow="Template" title="Structure of every case study" />
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {structure.map((s, i) => (
                <li key={s} className="card-surface flex items-center gap-3 p-4">
                  <span className="font-display text-sm font-bold text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <CTASection title="Build something similar" primaryLabel="Get a Quote" secondaryLabel="Talk to an Expert" />
    </>
  );
}
