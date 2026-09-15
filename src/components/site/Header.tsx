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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        open
          ? "border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
          : scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/95 dark:shadow-lg"
          : "border-b border-slate-200/40 bg-white/80 backdrop-blur-sm dark:border-white/5 dark:bg-slate-950/80",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3 md:h-[72px]">
        {/* Brand Logo & Name */}
        <Link to="/" className="shrink-0 flex items-center gap-2 sm:gap-2.5 group" aria-label="SVM IT Solutions home">
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:inline-flex" />
          <span className="font-display font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            SVM IT Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <ThemeToggle />
          <Button asChild size="lg" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-md">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Right Actions & Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-50 inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 active:scale-90 transition-transform touch-manipulation cursor-pointer"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5 text-emerald-500" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {open && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-2xl lg:hidden"
          style={{ height: "calc(100dvh - 4rem)" }}
        >
          <nav className="container-page flex flex-col gap-1.5 py-5 pb-32" aria-label="Mobile navigation">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3.5 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3.5 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden bg-slate-50/60 dark:bg-slate-900/40">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-200 cursor-pointer touch-manipulation"
              >
                <span>Services</span>
                <ChevronDown className={cn("size-4 text-slate-500 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-slate-200/60 dark:border-slate-800/60">
                  {serviceSlugs.map((slug) => {
                    const item = services.find((s) => s.slug === slug);
                    if (!item) return null;
                    return (
                      <Link
                        key={slug}
                        to="/services/$slug"
                        params={{ slug }}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-2.5 py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2.5 py-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden bg-slate-50/60 dark:bg-slate-900/40">
              <button
                type="button"
                onClick={() => setSolutionsOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-200 cursor-pointer touch-manipulation"
              >
                <span>Solutions</span>
                <ChevronDown className={cn("size-4 text-slate-500 transition-transform duration-200", solutionsOpen && "rotate-180")} />
              </button>
              {solutionsOpen && (
                <div className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-slate-200/60 dark:border-slate-800/60">
                  {solutionSlugs.map((slug) => {
                    const item = services.find((s) => s.slug === slug);
                    if (!item) return null;
                    return (
                      <Link
                        key={slug}
                        to="/services/$slug"
                        params={{ slug }}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-2.5 py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <Button asChild size="lg" className="mt-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-white shadow-md">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
