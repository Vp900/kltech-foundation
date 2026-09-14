import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, FileSpreadsheet, Mail, MapPin, Clock, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { budgetOptions, projectTypes, services, timelineOptions, company } from "@/data/site";
import { submitToGoogleSheet } from "@/lib/googleSheets";

const phoneRule = z
  .string()
  .trim()
  .min(7, { message: "Enter a valid phone number" })
  .max(20, { message: "Phone number is too long" })
  .regex(/^[+0-9()\-\s]+$/, { message: "Phone number contains invalid characters" });

const baseSchema = z.object({
  name: z.string().trim().min(2, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
  phone: phoneRule,
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(60).optional(),
  timeline: z.string().trim().max(60).optional(),
  website: z.string().trim().max(255).optional(),
  contactMethod: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, { message: "Please describe your requirement (min 10 characters)" }).max(2000),
});

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "company"
  | "service"
  | "budget"
  | "timeline"
  | "website"
  | "contactMethod"
  | "message";

type Errors = { [K in FieldName]?: string | undefined };

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-semibold">
        {label} {required ? <span className="text-destructive">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const selectClass =
  "flex h-10 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

// Thank You Modal Popup Component
export function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-md rounded-3xl border border-emerald-500/30 bg-slate-900 p-8 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 grid size-8 place-items-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
        >
          <X className="size-4" />
        </button>

        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-5">
          <CheckCircle2 className="size-10" />
        </div>

        <h3 className="text-2xl font-extrabold font-display text-white">Thank You!</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          Aapka form successfully submit ho gaya hai aur data **Google Sheet** par capture kar liya gaya hai!
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-400">
          <FileSpreadsheet className="size-4" />
          <span>Synced to Google Sheet Database</span>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
          SVM IT Solutions engineering team aapko 2 hours me contact karegi.
        </div>

        <Button onClick={onClose} className="mt-6 w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white">
          Close Window
        </Button>
      </div>
    </div>
  );
}

export function LeadForm({
  variant = "contact",
  submitLabel = "Send Enquiry",
}: {
  variant?: "contact" | "quote";
  submitLabel?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const parsed = baseSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as FieldName] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("loading");

    await submitToGoogleSheet({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company ?? undefined,
      service: parsed.data.service ?? undefined,
      budget: parsed.data.budget ?? undefined,
      message: parsed.data.message,
    });

    setStatus("success");
    setShowModal(true);
  }

  return (
    <>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <form onSubmit={onSubmit} noValidate className="card-surface space-y-4 p-6 md:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label="Full Name" required error={errors.name}>
            <Input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} className="rounded-xl text-xs" />
          </Field>
          <Field id="email" label="Email Address" required error={errors.email}>
            <Input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} className="rounded-xl text-xs" />
          </Field>
          <Field id="phone" label="Phone / WhatsApp" required error={errors.phone}>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} className="rounded-xl text-xs" />
          </Field>
          <Field id="company" label="Company / Organization" error={errors.company}>
            <Input id="company" name="company" autoComplete="organization" className="rounded-xl text-xs" />
          </Field>
          <Field id="service" label="Service Required" error={errors.service}>
            <select id="service" name="service" className={selectClass} defaultValue="">
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>
          <Field id="budget" label="Estimated Budget" error={errors.budget}>
            <select id="budget" name="budget" className={selectClass} defaultValue="">
              <option value="">Select range</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field id="message" label="Project Description" required error={errors.message}>
          <Textarea id="message" name="message" rows={4} aria-invalid={!!errors.message} className="rounded-xl text-xs" placeholder="Tell us about your business goals and requirements..." />
        </Field>

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/20"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" /> Submitting to Google Sheet…
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </form>
    </>
  );
}

import heroImage from "@/assets/hero-dashboard.jpg";

// Full-Width Glassmorphism Interactive Scope Builder Component
export function ProjectBuilder() {
  const [type, setType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [showModal, setShowModal] = useState(false);

  async function handleBuilderSubmit() {
    if (!type || desc.trim().length < 10) return;
    setStatus("loading");
    await submitToGoogleSheet({
      name: name || "Project Builder Lead",
      email: email || "pending@client.com",
      phone: phone || "",
      service: type,
      budget: budget,
      message: desc,
    });
    setStatus("done");
    setShowModal(true);
  }

  return (
    <>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* LEFT COLUMN: Dedicated IT Support & Engineer Consultation Image Card */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl min-h-[440px] flex flex-col justify-end group">
          <img
            src={heroImage}
            alt="SVM IT Solutions Technical Support & Engineering"
            className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 z-10" />

          <div className="relative z-20 p-6 sm:p-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
              <Sparkles className="size-3.5" />
              <span>Direct Engineer Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white leading-snug">
              Need Engineering & IT Advice?
            </h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed font-medium">
              Get direct assistance from our senior tech stack engineers in Lucknow & PAN India.
            </p>

            <div className="mt-6 pt-4 border-t border-white/20 space-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="font-bold text-white">svmitsolutions26@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">Lucknow & PAN India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Support Hours:</span>
                <span className="font-bold text-emerald-400">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Builder Form Card */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
          <fieldset>
            <legend className="font-display text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 text-[11px] font-bold">1</span>
              Select What You Want to Build
            </legend>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  aria-pressed={type === t}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    type === t
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-display text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 text-[11px] font-bold">2</span>
              Estimated Budget Range
            </legend>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  aria-pressed={budget === b}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    budget === b
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="space-y-3">
            <legend className="font-display text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 text-[11px] font-bold">3</span>
              Your Contact & Requirements
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl text-xs"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl text-xs"
              />
              <Input
                type="tel"
                placeholder="Phone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl text-xs"
              />
            </div>
            <Textarea
              id="builder-desc"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tell us about your business goals and key required features..."
              maxLength={2000}
              className="rounded-xl text-xs"
            />
          </div>

          <Button
            size="lg"
            className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 font-extrabold text-white shadow-lg shadow-emerald-500/20 py-5 text-xs sm:text-sm"
            disabled={!type || desc.trim().length < 10 || status === "loading"}
            onClick={handleBuilderSubmit}
          >
            {status === "loading" ? <Loader2 className="size-4 animate-spin mr-2" /> : null}
            Get Free Architectural Proposal & Estimate
          </Button>
        </div>
      </div>
    </>
  );
}
