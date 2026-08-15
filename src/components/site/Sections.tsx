import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={cn("h2-display mt-4", tone === "dark" ? "text-ink-foreground" : "text-foreground")}>{title}</h2>
      {text ? (
        <p className={cn("lead-text mt-4", tone === "dark" ? "text-ink-soft" : "text-muted-foreground")}>{text}</p>
      ) : null}
    </div>
  );
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}

export function ServiceCard({
  slug,
  name,
  short,
  icon,
}: {
  slug: string;
  name: string;
  short: string;
  icon: string;
}) {
  return (
    <article className="card-surface group flex h-full flex-col p-6">
      <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
      <Link
        to="/services/$slug"
        params={{ slug }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        Learn More
        <Icons.ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function FeatureList({ items, columns = 2 }: { items: string[]; columns?: 2 | 3 }) {
  return (
    <ul className={cn("grid gap-3", columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
          <Icons.Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span className="text-sm text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
          <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CTASection({
  title = "Ready to start your project?",
  text = "Tell us what you want to build and we'll respond with a clear scope, timeline and quotation.",
  primaryLabel = "Get a Quote",
  secondaryLabel = "Talk to an Expert",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-y bg-ink" style={{ background: "var(--gradient-ink)" }}>
      <div className="container-page text-center">
        <h2 className="h2-display text-ink-foreground">{title}</h2>
        <p className="lead-text mx-auto mt-4 max-w-2xl text-ink-soft">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-lg">
            <Link to="/get-a-quote">
              {primaryLabel} <Icons.ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-lg border-white/25 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <Link to="/contact">{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink py-16 md:py-24" style={{ background: "var(--gradient-ink)" }}>
      <div className="container-page max-w-3xl">
        {eyebrow ? (
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="h1-display mt-4 text-ink-foreground">{title}</h1>
        {text ? <p className="lead-text mt-5 text-ink-soft">{text}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function InfoNotice({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-2xl items-start gap-3 rounded-xl border border-dashed border-primary/35 bg-primary/5 p-5 text-left">
      <Icons.Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
