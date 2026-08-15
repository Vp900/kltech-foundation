import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { budgetOptions, projectTypes, services, timelineOptions } from "@/data/site";

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
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
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
  "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function LeadForm({
  variant = "contact",
  submitLabel = "Send Enquiry",
}: {
  variant?: "contact" | "quote";
  submitLabel?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    // Lead delivery is not connected yet — enable Lovable Cloud to store leads
    // and send notification emails. Submitted data is kept in the form until then.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Thank you</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Your enquiry has been submitted successfully. Our team will contact you shortly.
        </p>
        <p className="mt-4 max-w-md text-xs text-muted-foreground">
          Note: lead storage and email notifications are not connected yet. Confirm your preferred setup and we will
          wire submissions to the backend.
        </p>
        <Button variant="outline" className="mt-6 rounded-lg" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" required error={errors.name}>
          <Input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <Input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
        </Field>
        <Field id="phone" label="Phone" required error={errors.phone}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <Input id="company" name="company" autoComplete="organization" />
        </Field>
        {variant === "quote" ? (
          <Field id="website" label="Current Website" error={errors.website}>
            <Input id="website" name="website" placeholder="https://" />
          </Field>
        ) : null}
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
            <option value="">Select a range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        {variant === "quote" ? (
          <>
            <Field id="timeline" label="Expected Timeline" error={errors.timeline}>
              <select id="timeline" name="timeline" className={selectClass} defaultValue="">
                <option value="">Select a timeline</option>
                {timelineOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="contactMethod" label="Preferred Contact Method" error={errors.contactMethod}>
              <select id="contactMethod" name="contactMethod" className={selectClass} defaultValue="">
                <option value="">Select</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </Field>
          </>
        ) : null}
      </div>

      <Field id="message" label="Project Description" required error={errors.message}>
        <Textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} />
      </Field>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          Something went wrong. Please try again or contact us directly.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full rounded-lg sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          submitLabel
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        We use your details only to respond to this enquiry. Fields marked * are required.
      </p>
    </form>
  );
}

export function ProjectBuilder() {
  const [type, setType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [desc, setDesc] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="card-surface p-10 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold">Request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your enquiry has been submitted successfully. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="card-surface p-6 md:p-8">
      <fieldset>
        <legend className="font-display text-lg font-semibold">What do you want to build?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {projectTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={
                type === t
                  ? "rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  : "rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              }
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="font-display text-lg font-semibold">Estimated budget</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {budgetOptions.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              aria-pressed={budget === b}
              className={
                budget === b
                  ? "rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  : "rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              }
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 space-y-2">
        <Label htmlFor="builder-desc" className="font-display text-lg font-semibold">
          Project description
        </Label>
        <Textarea
          id="builder-desc"
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Tell us about your business and what you need."
          maxLength={2000}
        />
      </div>

      <Button
        size="lg"
        className="mt-6 rounded-lg"
        disabled={!type || desc.trim().length < 10}
        onClick={() => setDone(true)}
      >
        Get My Free Consultation
      </Button>
      {!type || desc.trim().length < 10 ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Select what you want to build and add a short description to continue.
        </p>
      ) : null}
    </div>
  );
}
