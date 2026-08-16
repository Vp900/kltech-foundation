export interface ClientProject {
  id: string;
  name: string;
  category: string;
  tech: string[];
  description: string;
  url: string;
  logoText: string;
  accentColor: string;
  featured?: boolean;
}

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: "notifynow",
    name: "NotifyNow Platform",
    category: "AI & CPaaS Cloud",
    tech: ["MERN", "AI", "CPaaS", "Queue Management", "WebSockets"],
    description:
      "High-volume CPaaS platform powering SMS, WhatsApp & RCS bulk messaging with real-time analytics and event processing.",
    url: "https://notifynow.in/",
    logoText: "NotifyNow",
    accentColor: "from-blue-600 to-indigo-600",
    featured: true,
  },
  {
    id: "ila-fashion",
    name: "Ila Fashion E-commerce",
    category: "E-Commerce & Retail",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Razorpay"],
    description:
      "High-converting apparel and fashion store featuring modern responsive product showcases and instant checkout.",
    url: "https://iva-fashion-1.onrender.com/",
    logoText: "Ila Fashion",
    accentColor: "from-pink-500 to-rose-600",
    featured: true,
  },
  {
    id: "pal-classes",
    name: "Pal Classes Education",
    category: "EdTech & Learning",
    tech: ["React", "Firebase", "Node.js", "Tailwind"],
    description:
      "Interactive education platform for coaching institutes, student test portals, and online course registration.",
    url: "https://palclasses.com/",
    logoText: "Pal Classes",
    accentColor: "from-emerald-500 to-teal-600",
    featured: true,
  },
  {
    id: "uvita-nutrition",
    name: "Uvita Nutrition",
    category: "Health & Wellness",
    tech: ["WordPress", "SEO", "Custom UI", "WooCommerce"],
    description:
      "Clean, modern nutritional supplement brand showcase with optimized page speed and seamless user journeys.",
    url: "https://uvitanutrition.com/",
    logoText: "Uvita",
    accentColor: "from-amber-500 to-orange-600",
    featured: true,
  },
  {
    id: "ila-homes",
    name: "Ila Homes Villa Booking",
    category: "Hospitality & Real Estate",
    tech: ["React", "Tailwind", "Booking Engine", "Maps API"],
    description:
      "Luxury villa stay and vacation rental platform with automated calendar booking and mobile-first photo galleries.",
    url: "https://ilahomes.com/",
    logoText: "Ila Homes",
    accentColor: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    id: "kem-cards",
    name: "Kem Cards Packaging",
    category: "Manufacturing & Print",
    tech: ["React", "Tailwind CSS", "SEO", "Custom Catalog"],
    description:
      "Premium playing cards printing and custom box packaging enterprise website showcasing luxury finish cards.",
    url: "https://kemcards.in/",
    logoText: "Kem Cards",
    accentColor: "from-purple-600 to-indigo-600",
    featured: true,
  },
  {
    id: "the-glamorholic",
    name: "The Glamorholic Media",
    category: "Digital News & Blog",
    tech: ["Next.js", "CMS", "SEO", "AdSense Integration"],
    description:
      "High-traffic daily lifestyle news portal and content hub built for ultra-fast load times and viral engagement.",
    url: "https://theglamorholic.com/",
    logoText: "Glamorholic",
    accentColor: "from-fuchsia-600 to-pink-600",
  },
  {
    id: "indet-concrete",
    name: "INDET Concrete Infra",
    category: "Industrial Construction",
    tech: ["Corporate Web", "React", "Tailwind", "B2B LeadGen"],
    description:
      "Heavy industrial concrete engineering corporate portal with project portfolio highlights and quotation inquiry.",
    url: "https://ind-etctpl.com/",
    logoText: "INDET",
    accentColor: "from-slate-700 to-slate-900",
  },
  {
    id: "deluxe-enterprises",
    name: "Deluxe Enterprises",
    category: "Manufacturing & Hardware",
    tech: ["E-Commerce", "React", "Inventory", "Node.js"],
    description:
      "Commercial product portal with product filtering, specification lookup, and B2B bulk sales inquiries.",
    url: "https://deluxenterprise.in/",
    logoText: "Deluxe",
    accentColor: "from-blue-700 to-cyan-700",
  },
  {
    id: "rcube-recycling",
    name: "RCube Recycling Systems",
    category: "Environmental & CleanTech",
    tech: ["Green Energy UI", "React", "Tailwind", "Service Portal"],
    description:
      "Sustainable electronic waste recycling and environmental compliance service platform with audit booking.",
    url: "https://rcuberecycling.com/",
    logoText: "RCube",
    accentColor: "from-green-600 to-emerald-700",
  },
  {
    id: "creative-honchos",
    name: "Creative Honchos Agency",
    category: "Creative & Digital Marketing",
    tech: ["Portfolio", "Framer Motion", "Next.js", "SEO"],
    description:
      "Full-service creative branding agency portfolio featuring dynamic interactive showcases and client case studies.",
    url: "https://creativehonchos.com/",
    logoText: "Honchos",
    accentColor: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "north-bombay-puja",
    name: "North Bombay Cultural Platform",
    category: "Event & Heritage",
    tech: ["Event Portal", "Live Stream API", "Gallery", "React"],
    description:
      "Iconic cultural event hub featuring schedule management, celebrity guest galleries, and live video streaming.",
    url: "https://northbombaydurgapuja.com/",
    logoText: "North Bombay",
    accentColor: "from-red-600 to-amber-600",
  },
  {
    id: "kamroons-production",
    name: "Kamroons Production House",
    category: "Film & Entertainment",
    tech: ["Media Streaming", "React", "Video Hero", "Tailwind"],
    description:
      "Film and video production house website featuring filmography showcase, trailer reels, and crew directory.",
    url: "https://kamroonsproduction.com/",
    logoText: "Kamroons",
    accentColor: "from-amber-600 to-red-700",
  },
  {
    id: "strivik-business",
    name: "Strivik Business Solutions",
    category: "Corporate & B2B Consulting",
    tech: ["B2B Consulting", "React", "Lead Analytics", "Tailwind"],
    description:
      "Management and enterprise advisory website with structured consulting modules and client onboarding tools.",
    url: "https://strivik.com/",
    logoText: "Strivik",
    accentColor: "from-sky-700 to-indigo-800",
  },
  {
    id: "basant-envelopes",
    name: "Basant Envelopes & Print Ltd",
    category: "Packaging & Industrial Print",
    tech: ["Industrial Web", "Catalog Viewer", "React", "Tailwind"],
    description:
      "Major envelope manufacturer and corporate printing enterprise showcase featuring product specification search.",
    url: "https://basantenvelopes.com/",
    logoText: "Basant Print",
    accentColor: "from-blue-600 to-teal-600",
  },
];
