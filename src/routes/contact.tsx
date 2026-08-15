import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/Forms";
import { InfoNotice, PageHero } from "@/components/site/Sections";
import { company } from "@/data/site";

const title = "Contact KLTech Solutions — Talk to Our IT Team";
const description =
  "Contact KLTech Solutions to discuss websites, mobile apps, custom software, ERP, CRM or digital marketing. Send an enquiry and our team will respond shortly.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: company.phone },
    { icon: MessageCircle, label: "WhatsApp", value: company.whatsapp },
    { icon: Mail, label: "Email", value: company.email },
    { icon: MapPin, label: "Office Address", value: company.address },
    { icon: Clock, label: "Business Hours", value: company.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        text="Send us your requirement and our team will get back to you with next steps."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-semibold">Contact information</h2>
            <ul className="space-y-4">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <d.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{d.label}</p>
                    <p className="text-sm text-muted-foreground">{d.value || "Pending client confirmation"}</p>
                  </div>
                </li>
              ))}
            </ul>
            <InfoNotice>
              Phone, WhatsApp, email, address, business hours, social links and the Google Map embed will go live as
              soon as you share the real details.
            </InfoNotice>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Send an enquiry</h2>
            <div className="mt-5">
              <LeadForm variant="contact" submitLabel="Send Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
