import { Link } from "@tanstack/react-router";
import { company } from "@/data/site";
import { Logo } from "./Logo";

const serviceLinks = [
  { slug: "web-development", label: "Web Development" },
  { slug: "ecommerce-development", label: "E-Commerce" },
  { slug: "mobile-app-development", label: "Mobile Apps" },
  { slug: "software-development", label: "Custom Software" },
  { slug: "erp-solutions", label: "ERP & CRM" },
  { slug: "ui-ux-design", label: "UI/UX" },
  { slug: "seo", label: "SEO" },
  { slug: "wordpress-development", label: "WordPress" },
  { slug: "shopify-development", label: "Shopify" },
  { slug: "website-maintenance", label: "Maintenance" },
];

export function Footer() {
  const socials = Object.entries(company.social).filter(([, url]) => url);

  return (
    <footer className="bg-ink text-ink-soft">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{company.description}</p>
          <p className="mt-4 text-xs text-ink-soft/70">
            Contact details pending client confirmation — phone, WhatsApp, email and office address will appear here
            once supplied.
          </p>
        </div>

        <nav aria-label="Company">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-foreground">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="transition-colors hover:text-ink-foreground">About Us</Link></li>
            <li><Link to="/portfolio" className="transition-colors hover:text-ink-foreground">Our Work</Link></li>
            <li><Link to="/process" className="transition-colors hover:text-ink-foreground">Our Process</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-ink-foreground">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-foreground">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-ink-foreground"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          <nav aria-label="Resources">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-foreground">Resources</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/blog" className="transition-colors hover:text-ink-foreground">Blog</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-ink-foreground">FAQ</Link></li>
              <li><Link to="/case-studies" className="transition-colors hover:text-ink-foreground">Case Studies</Link></li>
              <li><Link to="/pricing" className="transition-colors hover:text-ink-foreground">Pricing</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-foreground">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/privacy-policy" className="transition-colors hover:text-ink-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-ink-foreground">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy" className="transition-colors hover:text-ink-foreground">Refund Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© 2026 KLTech Solutions. All Rights Reserved.</p>
          {socials.length > 0 ? (
            <ul className="flex gap-4">
              {socials.map(([k, url]) => (
                <li key={k}>
                  <a href={url} className="capitalize transition-colors hover:text-ink-foreground">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-ink-soft/60">Social profiles pending client confirmation.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
