import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/site/Sections";
import { processSteps } from "@/data/site";

const title = "Our Development Process — Discovery to Support | KLTech Solutions";
const description =
  "How KLTech Solutions delivers projects: discovery, planning, UI/UX design, development, testing, launch and ongoing support.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear, seven-step delivery process"
        text="You always know what stage your project is at, what's next and what we need from you."
      />
      <section className="section-y">
        <div className="container-page">
          <ol className="relative mx-auto max-w-3xl space-y-6 border-l border-border pl-8">
            {processSteps.map((p) => (
              <li key={p.step} className="relative">
                <span
                  className="absolute -left-[41px] top-1 grid size-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
                  aria-hidden="true"
                >
                  {p.step}
                </span>
                <div className="card-surface p-6">
                  <h2 className="font-display text-lg font-semibold">
                    Step {p.step} — {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection title="Start at step one" text="Book a discovery call and we'll map out your project." primaryLabel="Get a Quote" secondaryLabel="Book a Consultation" />
    </>
  );
}
