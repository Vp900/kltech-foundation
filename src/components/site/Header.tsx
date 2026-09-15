import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const solutionSlugs = ["erp-solutions", "crm-solutions", "business-automation", "cloud-hosting", "it-consulting"];
const serviceSlugs = [
  "web-development",
  "ecommerce-development",
  "mobile-app-development",
  "software-development",
  "ui-ux-design",
  "seo",
  "wordpress-development",
  "shopify-development",
];

const primaryLinks = [
  { to: "/portfolio", label: "Our Work" },
  { to: "/technologies", label: "Technologies" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

function DropdownNav({ label, slugs }: { label: string; slugs: string[] }) {
  const items = slugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  return (
    <div className="group relative">
      <button
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white cursor-pointer"
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="size-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul className="mt-2 rounded-xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/services"
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-emerald-600 transition-colors hover:bg-slate-100 dark:text-emerald-400 dark:hover:bg-slate-800"
            >
              View all services →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95 dark:shadow-lg"
          : "border-b border-slate-200/40 bg-white/80 backdrop-blur-sm dark:border-white/5 dark:bg-slate-950/80",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Link to="/" className="shrink-0" aria-label="SVM IT Solutions home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            activeProps={{ className: "text-emerald-600 dark:text-emerald-400 font-semibold" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            activeProps={{ className: "text-emerald-600 dark:text-emerald-400 font-semibold" }}
          >
            About Us
          </Link>
          <DropdownNav label="Services" slugs={serviceSlugs} />
          <DropdownNav label="Solutions" slugs={solutionSlugs} />
          {primaryLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              activeProps={{ className: "text-emerald-600 dark:text-emerald-400 font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <ThemeToggle />
          <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-md">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-50 overflow-y-auto bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-6" aria-label="Mobile navigation">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/solutions", label: "Solutions" },
              { to: "/portfolio", label: "Our Work & Clients" },
              { to: "/technologies", label: "Technologies" },
              { to: "/industries", label: "Industries" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-white/5 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}

    </header>
  );
}
