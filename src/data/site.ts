/**
 * Central content/data layer for the KLTech Solutions website.
 *
 * IMPORTANT: Every value marked with `PLACEHOLDER` must be replaced with real
 * company-supplied information before launch. No statistics, testimonials,
 * clients, awards or pricing are invented here.
 */

export const company = {
  name: "KLTech Solutions",
  tagline: "Build Better. Grow Faster with Technology.",
  description:
    "KLTech Solutions helps businesses build high-performance websites, web applications, mobile apps and custom software solutions.",
  // PLACEHOLDER — awaiting real contact details from the client
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  hours: "",
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
    github: "",
  },
};

export const whatsappMessage =
  "Hello KLTech Solutions, I am interested in your IT services.";

export type ServiceDetail = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  featured?: boolean;
  title: string;
  intro: string;
  cta: string;
  whatWeBuild: string[];
  features: string[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "Business websites, portals and web applications.",
    icon: "Code2",
    featured: true,
    title: "Web Development Services",
    intro:
      "We design and build fast, secure and SEO-friendly websites, portals and web applications tailored to your business goals.",
    cta: "Start Your Web Project",
    whatWeBuild: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Web Portals",
      "Custom Web Applications",
      "SaaS Applications",
      "Admin Dashboards",
      "API-based Applications",
    ],
    features: [
      "Responsive design",
      "SEO-friendly structure",
      "Secure architecture",
      "Fast performance",
      "CMS integration",
      "API integration",
      "Analytics",
      "Admin panels",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "MySQL"],
    faqs: [
      {
        q: "How long does a website take to build?",
        a: "Timelines depend on scope. A focused business website is typically faster than a custom web application; we confirm an exact timeline after the discovery stage.",
      },
      {
        q: "Will the website be mobile responsive?",
        a: "Yes. Every website we build is designed mobile-first and tested across desktop, tablet and mobile widths.",
      },
      {
        q: "Can you integrate our existing systems?",
        a: "Yes. We integrate third-party APIs, CRMs, payment gateways and internal systems where technically supported.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    short: "Shopify, WooCommerce and custom e-commerce platforms.",
    icon: "ShoppingCart",
    featured: true,
    title: "E-Commerce Development",
    intro:
      "Online stores built for conversion — from Shopify and WooCommerce storefronts to fully custom commerce platforms.",
    cta: "Build My Online Store",
    whatWeBuild: [
      "Shopify Stores",
      "WooCommerce Stores",
      "Custom E-Commerce Platforms",
      "Product Management",
      "Shopping Cart",
      "Checkout Experience",
      "Order Management",
      "Customer Accounts",
    ],
    features: [
      "Payment gateway integration",
      "Shipping integration",
      "Inventory management",
      "Coupons and discounts",
      "Analytics and reporting",
      "Performance optimization",
      "Secure checkout",
      "Store migration",
    ],
    technologies: ["Shopify", "WooCommerce", "WordPress", "React", "Next.js", "Node.js", "MySQL", "MongoDB"],
    faqs: [
      {
        q: "Shopify or WooCommerce — which is better?",
        a: "It depends on your catalogue, budget and operations. We recommend a platform after understanding your products, order volume and integrations.",
      },
      {
        q: "Can you integrate payment gateways?",
        a: "Yes, we integrate supported payment gateways available for your region and business type.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    short: "Android, iOS and cross-platform applications.",
    icon: "Smartphone",
    featured: true,
    title: "Mobile App Development",
    intro:
      "Native and cross-platform mobile applications with clean interfaces, solid APIs and dependable performance.",
    cta: "Discuss My App Idea",
    whatWeBuild: [
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps",
      "React Native Apps",
      "Flutter Apps",
      "Admin Dashboards for Apps",
    ],
    features: [
      "API integration",
      "Push notifications",
      "Authentication",
      "Payment integration",
      "Offline-friendly patterns",
      "Analytics",
    ],
    technologies: ["React Native", "Flutter", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    faqs: [
      {
        q: "Do you build for both Android and iOS?",
        a: "Yes. Cross-platform frameworks let us ship both from one codebase where that suits the product.",
      },
      {
        q: "Do you help with app store submission?",
        a: "Yes, we support the release process and post-launch updates.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Custom Software Development",
    short: "Business-specific software and automation.",
    icon: "Boxes",
    featured: true,
    title: "Custom Software Development",
    intro:
      "Software built around how your business actually works — not the other way round. Every module can be customized to your requirements.",
    cta: "Discuss My Software Requirement",
    whatWeBuild: [
      "Business Management Software",
      "Billing Software",
      "Inventory Management",
      "HR Management",
      "CRM",
      "ERP",
      "School Management",
      "Hospital Management",
      "Restaurant Management",
      "Custom Dashboards",
      "Business Automation",
    ],
    features: [
      "Role-based access",
      "Custom workflows",
      "Reports and exports",
      "Third-party integrations",
      "Secure authentication",
      "Scalable architecture",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Laravel", "PHP", "PostgreSQL", "MySQL"],
    faqs: [
      {
        q: "Can the software be customized to our process?",
        a: "Yes. Custom software is scoped module by module around your existing workflows.",
      },
    ],
  },
  {
    slug: "erp-solutions",
    name: "ERP Solutions",
    short: "Business management systems with connected modules.",
    icon: "Network",
    title: "ERP Solutions",
    intro:
      "Connected ERP modules that bring sales, purchase, inventory and accounts into one reliable system.",
    cta: "Talk to an ERP Expert",
    whatWeBuild: ["Sales", "Purchase", "Inventory", "Accounts", "Employees", "Reports", "Dashboard", "Notifications"],
    features: [
      "Module-based rollout",
      "Role permissions",
      "Real-time dashboards",
      "Data exports",
      "Audit-friendly records",
      "Training and handover",
    ],
    technologies: ["React", "Node.js", "Laravel", "PostgreSQL", "MySQL"],
    faqs: [
      {
        q: "Can we start with only a few modules?",
        a: "Yes. ERP rollouts usually start with the highest-impact modules and expand later.",
      },
    ],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    short: "Lead, customer and sales pipeline management.",
    icon: "Users",
    title: "CRM Solutions",
    intro: "Track leads, follow-ups and sales pipelines in one place, with reporting your team will actually use.",
    cta: "Get a CRM Demo Discussion",
    whatWeBuild: ["Leads", "Customers", "Follow-ups", "Sales Pipeline", "Tasks", "Reports", "Notifications", "Customer History"],
    features: [
      "Pipeline stages",
      "Activity timeline",
      "Task reminders",
      "Team performance reports",
      "Import and export",
      "Role-based access",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    faqs: [
      {
        q: "Can the CRM be integrated with our website forms?",
        a: "Yes. Website enquiries can be captured directly as leads.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Modern interfaces and user experiences.",
    icon: "PenTool",
    featured: true,
    title: "UI/UX Design",
    intro: "Interface design grounded in real user flows, clear hierarchy and a reusable design system.",
    cta: "Discuss a Design Project",
    whatWeBuild: ["Wireframes", "User Flows", "Website UI", "Mobile UI", "Dashboard UI", "Design Systems", "Prototypes", "Responsive Design"],
    features: [
      "Research-led structure",
      "Consistent component library",
      "Accessible contrast and states",
      "Interactive prototypes",
      "Developer-ready handoff",
      "Design QA during build",
    ],
    technologies: ["Figma", "Tailwind CSS", "React"],
    faqs: [
      { q: "Do you provide design without development?", a: "Yes, design can be delivered as a standalone engagement." },
    ],
  },
  {
    slug: "seo",
    name: "SEO Services",
    short: "Technical, on-page and local search optimization.",
    icon: "Search",
    featured: true,
    title: "SEO Services",
    intro:
      "Structured, technically sound SEO work. We improve findability and site health — we do not promise guaranteed rankings.",
    cta: "Request an SEO Discussion",
    whatWeBuild: ["Technical SEO", "On-page SEO", "Keyword Research", "Local SEO", "Google Business Profile", "Content Strategy"],
    features: [
      "Site health audit",
      "Metadata and schema",
      "Internal linking",
      "Core Web Vitals work",
      "Search Console setup",
      "Reporting",
    ],
    technologies: ["Google Search Console", "Google Analytics", "Schema.org"],
    faqs: [
      {
        q: "Can you guarantee first page rankings?",
        a: "No. No agency can honestly guarantee rankings. We focus on technical quality, content and measurable improvements.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Paid, social and conversion-focused growth.",
    icon: "Megaphone",
    title: "Digital Marketing",
    intro: "Campaigns and analytics that connect marketing spend to enquiries and revenue.",
    cta: "Plan a Campaign",
    whatWeBuild: ["Google Ads", "Meta Ads", "Social Media", "Content Strategy", "Analytics", "Conversion Optimization"],
    features: [
      "Campaign structure",
      "Audience targeting",
      "Landing page optimization",
      "Conversion tracking",
      "A/B testing",
      "Monthly reporting",
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics"],
    faqs: [{ q: "Is ad spend included?", a: "No, advertising budget is billed separately by the ad platform." }],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    short: "Custom WordPress websites and WooCommerce stores.",
    icon: "LayoutTemplate",
    title: "WordPress Development",
    intro: "Fast, secure and easy-to-manage WordPress websites — customized, not just installed.",
    cta: "Start a WordPress Project",
    whatWeBuild: ["Business Websites", "WordPress Customization", "Elementor Builds", "WooCommerce", "Theme Customization", "Plugin Integration"],
    features: ["Performance optimization", "Security hardening", "Migration", "Maintenance", "Backups", "Editor training"],
    technologies: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
    faqs: [{ q: "Can you redesign our existing WordPress site?", a: "Yes, including migration and content transfer." }],
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    short: "Shopify stores, themes and custom sections.",
    icon: "Store",
    title: "Shopify Development",
    intro: "Shopify storefronts customized for your brand, catalogue and checkout experience.",
    cta: "Launch My Shopify Store",
    whatWeBuild: ["Shopify Store Development", "Theme Customization", "Product Setup", "Custom Sections", "Store Migration"],
    features: ["Payment integration", "App integration", "Performance optimization", "Collection structure", "Conversion improvements", "Handover training"],
    technologies: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
    faqs: [{ q: "Can you migrate from WooCommerce to Shopify?", a: "Yes, including products, customers and order history where exportable." }],
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    short: "Updates, monitoring and technical support.",
    icon: "Wrench",
    title: "Website Maintenance & Support",
    intro: "Ongoing care so your website stays secure, fast and up to date after launch.",
    cta: "Request a Support Plan",
    whatWeBuild: ["Bug Fixing", "Security Updates", "Backups", "Performance Optimization", "Content Updates", "Server Monitoring", "Technical Support"],
    features: ["Scheduled updates", "Uptime monitoring", "Restore points", "Priority fixes", "Monthly reports", "Direct support channel"],
    technologies: ["WordPress", "Node.js", "Docker", "AWS"],
    faqs: [{ q: "Do you maintain websites you did not build?", a: "Yes, after a technical audit of the existing codebase." }],
  },
  {
    slug: "cloud-hosting",
    name: "Cloud & Hosting",
    short: "Deployment, hosting and infrastructure support.",
    icon: "Cloud",
    featured: true,
    title: "Cloud, Hosting & Deployment",
    intro: "Reliable deployment and hosting setups sized to your traffic and budget.",
    cta: "Discuss Hosting Requirements",
    whatWeBuild: ["Deployment Pipelines", "Cloud Hosting Setup", "Domain & DNS", "SSL Configuration", "Backups", "Monitoring"],
    features: ["CI/CD setup", "Environment management", "Scaling guidance", "Cost optimization", "Migration support", "Incident response"],
    technologies: ["AWS", "Docker", "GitHub", "Vercel", "Netlify", "Render"],
    faqs: [{ q: "Do you provide domain and hosting?", a: "We help you purchase and configure domain and hosting, or work with your existing providers." }],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    short: "Automate repetitive operational work.",
    icon: "Workflow",
    title: "Business Automation",
    intro: "Replace manual, repetitive processes with dependable automated workflows.",
    cta: "Automate My Process",
    whatWeBuild: ["Workflow Automation", "Report Automation", "Data Sync Between Systems", "Notification Systems", "Document Generation"],
    features: ["Process mapping", "Integration with existing tools", "Error handling and alerts", "Audit logs", "Scheduled jobs", "Staff training"],
    technologies: ["Node.js", "PostgreSQL", "REST APIs", "Docker"],
    faqs: [{ q: "Can you automate with our current software?", a: "Where your tools expose APIs or exports, yes." }],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    short: "Technology guidance for business decisions.",
    icon: "Lightbulb",
    title: "IT Consulting",
    intro: "Practical advice on technology choices, architecture and roadmaps — before you spend the budget.",
    cta: "Book a Consultation",
    whatWeBuild: ["Technology Selection", "Architecture Review", "Digital Roadmaps", "Vendor Evaluation", "Security Review", "Scalability Planning"],
    features: ["Requirement workshops", "Written recommendations", "Cost/benefit comparison", "Risk assessment", "Phased delivery plan", "Follow-up support"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    faqs: [{ q: "Do you consult without building the project?", a: "Yes, consulting is available as a standalone engagement." }],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const industries = [
  { name: "E-Commerce", problem: "Fragmented storefronts and manual order handling.", solution: "Unified commerce platforms with automated order and inventory flows." },
  { name: "Education", problem: "Disconnected admissions, attendance and fee records.", solution: "School and institute management systems with parent and staff portals." },
  { name: "Healthcare", problem: "Paper-based patient records and appointment chaos.", solution: "Appointment, records and billing systems with role-based access." },
  { name: "Real Estate", problem: "Listings scattered across portals with weak lead capture.", solution: "Property portals with search, enquiry routing and CRM integration." },
  { name: "Manufacturing", problem: "Production and stock data tracked in spreadsheets.", solution: "ERP modules for purchase, inventory, production and reporting." },
  { name: "Retail", problem: "Offline and online stock counts drifting apart.", solution: "Billing and inventory systems synced with the online store." },
  { name: "Finance", problem: "Manual reconciliation and compliance-heavy reporting.", solution: "Secure dashboards, audit trails and automated report generation." },
  { name: "Logistics", problem: "No live visibility on shipments and delivery status.", solution: "Tracking dashboards, driver apps and customer notifications." },
  { name: "Hospitality", problem: "Bookings handled over calls and messages.", solution: "Booking engines, restaurant management and review workflows." },
  { name: "Travel", problem: "Enquiries lost between platforms and inboxes.", solution: "Package websites with itinerary builders and enquiry pipelines." },
  { name: "Startups", problem: "Need to validate and ship quickly on a tight budget.", solution: "MVP-first development with a scalable architecture from day one." },
  { name: "Professional Services", problem: "Weak online presence and no lead tracking.", solution: "Conversion-focused websites connected to a CRM." },
];

export const techStack = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
  { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "CMS", items: ["WordPress", "Shopify", "WooCommerce"] },
  { category: "Mobile", items: ["React Native", "Flutter"] },
  { category: "Cloud / DevOps", items: ["Git", "GitHub", "Docker", "AWS", "Netlify", "Vercel", "Render"] },
];

export const processSteps = [
  { step: "01", title: "Discovery", text: "Understand requirements, users and business goals." },
  { step: "02", title: "Planning", text: "Define scope, features, technology and timeline." },
  { step: "03", title: "UI/UX Design", text: "Create the user interface and experience." },
  { step: "04", title: "Development", text: "Build frontend, backend and integrations." },
  { step: "05", title: "Testing", text: "Verify functionality, security, responsiveness and performance." },
  { step: "06", title: "Launch", text: "Deploy the final project to production." },
  { step: "07", title: "Support", text: "Provide maintenance and technical support." },
];

export const whyChooseUs = [
  { title: "Business-Focused Solutions", text: "Technology designed around business requirements.", icon: "Target" },
  { title: "Transparent Process", text: "Clear milestones and project communication.", icon: "Eye" },
  { title: "Modern Technology", text: "Suitable modern and reliable technologies.", icon: "Cpu" },
  { title: "Scalable Solutions", text: "Systems designed to grow with the business.", icon: "TrendingUp" },
  { title: "Dedicated Support", text: "Technical support after launch.", icon: "LifeBuoy" },
  { title: "Quality-Focused Development", text: "Proper testing, responsive design and performance optimization.", icon: "ShieldCheck" },
];

export const generalFaqs = [
  { q: "How much does a website cost?", a: "Cost depends on pages, features and integrations. Share your requirement and we send a written quotation with a fixed scope." },
  { q: "How long does development take?", a: "Timelines are confirmed after discovery. Simpler websites move faster than custom software or ERP projects." },
  { q: "Do you provide domain and hosting?", a: "We help you purchase and configure domain and hosting, or work with your existing providers." },
  { q: "Will the website be mobile responsive?", a: "Yes. Every project is built mobile-first and tested across common screen sizes." },
  { q: "Do you provide SEO?", a: "Yes — technical SEO, on-page SEO and local SEO. We do not promise guaranteed rankings." },
  { q: "Can you integrate payment gateways?", a: "Yes, using gateways supported in your region and for your business type." },
  { q: "Do you provide maintenance?", a: "Yes, maintenance and support plans are available after launch." },
  { q: "Can you redesign an existing website?", a: "Yes, including migration of existing content." },
  { q: "Can you build custom software?", a: "Yes, custom business software is one of our core services." },
  { q: "Do you provide ERP/CRM solutions?", a: "Yes, delivered module by module based on your workflows." },
  { q: "Can you integrate third-party APIs?", a: "Yes, wherever the third-party service provides a supported API." },
  { q: "Do you provide post-launch support?", a: "Yes, support is available after handover under a maintenance plan." },
];

export const budgetOptions = ["₹10K–₹25K", "₹25K–₹50K", "₹50K–₹1L", "₹1L–₹5L", "₹5L+", "Not Sure"];

export const projectTypes = [
  "Business Website",
  "E-Commerce Store",
  "Mobile App",
  "Custom Software",
  "ERP",
  "CRM",
  "Website Redesign",
  "SEO / Digital Marketing",
  "Other",
];

export const timelineOptions = ["ASAP", "1–2 months", "3–6 months", "Flexible"];

export const blogPosts = [
  { slug: "business-website-cost-india", title: "How Much Does a Business Website Cost in India?", category: "Business Technology", excerpt: "What actually drives website cost — pages, features, integrations and ongoing support." },
  { slug: "website-vs-web-application", title: "Website vs Web Application: What Does Your Business Need?", category: "Web Development", excerpt: "A practical comparison to help you scope the right build." },
  { slug: "shopify-vs-woocommerce", title: "Shopify vs WooCommerce: Choosing Your E-Commerce Platform", category: "E-Commerce", excerpt: "Catalogue size, operations and budget decide the answer more than features do." },
  { slug: "choose-right-technology", title: "How to Choose the Right Technology for Your Business", category: "Software", excerpt: "A framework for evaluating stacks without chasing hype." },
  { slug: "mobile-friendly-websites", title: "Why Businesses Need Mobile-Friendly Websites", category: "Web Development", excerpt: "Mobile-first is not a design trend — it is where your traffic already is." },
  { slug: "benefits-of-business-automation", title: "Benefits of Business Automation", category: "Business Technology", excerpt: "Where automation pays back fastest in small and mid-sized businesses." },
];
