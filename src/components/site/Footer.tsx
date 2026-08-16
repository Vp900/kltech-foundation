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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo showTagline={true} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            KL Tech Solutions delivers high-performance custom websites, enterprise web applications, mobile apps, ERP/CRM, and AI cloud solutions for businesses and global startups.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-slate-400">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-emerald-400">Location:</span> Mumbai & PAN India
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-emerald-400">Inquiries:</span> contact@kltechsolutions.com
            </p>
          </div>
        </div>

        <nav aria-label="Company">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="transition-colors hover:text-emerald-400">About Us</Link></li>
            <li><Link to="/portfolio" className="transition-colors hover:text-emerald-400">Our Work & Clients</Link></li>
            <li><Link to="/process" className="transition-colors hover:text-emerald-400">Our Process</Link></li>
            <li><Link to="/technologies" className="transition-colors hover:text-emerald-400">Technologies</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-emerald-400">Contact Us</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-emerald-400"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          <nav aria-label="Resources">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Resources</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/blog" className="transition-colors hover:text-emerald-400">Blog & Insights</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-emerald-400">FAQ</Link></li>
              <li><Link to="/case-studies" className="transition-colors hover:text-emerald-400">Case Studies</Link></li>
              <li><Link to="/pricing" className="transition-colors hover:text-emerald-400">Pricing Plans</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/privacy-policy" className="transition-colors hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-emerald-400">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy" className="transition-colors hover:text-emerald-400">Refund Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row text-slate-400">
          <p>© 2026 KL Tech Solutions. All Rights Reserved. INNOVATE • DEVELOP • DELIVER</p>
          <p className="text-emerald-400 font-medium">Built with Excellence</p>
        </div>
      </div>
    </footer>
  );
}

