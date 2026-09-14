import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/Forms";
import { InfoNotice, PageHero } from "@/components/site/Sections";
import { company } from "@/data/site";

const title = "Contact SVM IT Solutions — Talk to Our IT Team";
const description =
  "Contact SVM IT Solutions to discuss websites, mobile apps, custom software, ERP, CRM or digital marketing. Send an enquiry and our team will respond shortly.";

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

import { Sparkles } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone Support", value: company.phone },
    { icon: MessageCircle, label: "WhatsApp", value: company.whatsapp },
    { icon: Mail, label: "Email Support", value: company.email },
    { icon: MapPin, label: "Location", value: company.address },
    { icon: Clock, label: "Support Hours", value: company.hours },
  ];

  return (
    <>
      {/* Rich 2-Column Hero Section for Contact Page */}
      <section className="relative bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white pt-12 pb-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="container-page relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <MessageCircle className="size-3.5" />
              <span>Get in Touch with Our Engineering Team</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
              Let's Talk About Your Next Software Project
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Send us your project scope or schedule a call. Our tech leads will provide a detailed technical consultation, timeline, and proposal.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-emerald-400 flex items-center gap-2">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response Time: &lt; 2 Hours</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-sky-400 flex items-center gap-2">
                <Sparkles className="size-4" />
                <span>Free Initial Architecture Review</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img
              src={contactHero}
              alt="SVM IT Customer & Technical Support Desk"
              className="w-full rounded-3xl border border-slate-800 shadow-2xl object-cover max-h-[380px]"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50 dark:bg-slate-950/60">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">Direct Contact Info</h2>
            <ul className="space-y-4">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:border-emerald-500/40 transition-colors">
                  <d.icon className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{d.label}</p>
                    {d.label.includes("Phone") ? (
                      <a href={`tel:${d.value.replace(/\s+/g, "")}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors mt-0.5 block">
                        {d.value}
                      </a>
                    ) : d.label.includes("WhatsApp") ? (
                      <a href={`https://wa.me/${d.value.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors mt-0.5 block">
                        {d.value}
                      </a>
                    ) : d.label.includes("Email") ? (
                      <a href={`mailto:${d.value}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors mt-0.5 block">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">Send an Enquiry (Synced to Google Sheet)</h2>
            <LeadForm variant="contact" submitLabel="Submit Enquiry to Google Sheet" />
          </div>
        </div>
      </section>
    </>
  );
}

