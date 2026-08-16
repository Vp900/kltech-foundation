import { useState } from "react";
import { Code2, Server, Database, Wrench, Layers, Cpu } from "lucide-react";

export interface TechItem {
  name: string;
  category: "languages" | "frameworks" | "databases" | "devops" | "tools";
  level: string;
  iconBg: string;
  iconText: string;
  description: string;
}

export const TECH_ITEMS: TechItem[] = [
  // Languages & Core
  {
    name: "Java",
    category: "languages",
    level: "Enterprise",
    iconBg: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    iconText: "JAVA",
    description: "Robust back-end microservices, Spring Boot applications, and high-concurrency systems.",
  },
  {
    name: "Python",
    category: "languages",
    level: "Core & AI",
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    iconText: "PY",
    description: "Data processing, automation scripts, AI model integration, and rapid backend APIs.",
  },
  {
    name: "TypeScript",
    category: "languages",
    level: "Type-Safe",
    iconBg: "bg-sky-500/10 text-sky-500 border-sky-500/20",
    iconText: "TS",
    description: "End-to-end type safety for large scale front-end and Node.js backend projects.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    level: "Core Web",
    iconBg: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    iconText: "JS",
    description: "Modern asynchronous web engineering, dynamic DOM, and lightweight server runtimes.",
  },

  // Frameworks
  {
    name: "Django",
    category: "frameworks",
    level: "Backend API",
    iconBg: "bg-emerald-600/10 text-emerald-600 border-emerald-600/20",
    iconText: "DJ",
    description: "Secure, batteries-included Python framework for scalable REST APIs & administrative systems.",
  },
  {
    name: "React.js",
    category: "frameworks",
    level: "Frontend UI",
    iconBg: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    iconText: "REACT",
    description: "Component-driven single page web applications with lightning fast virtual DOM rendering.",
  },
  {
    name: "Angular",
    category: "frameworks",
    level: "Enterprise Web",
    iconBg: "bg-red-500/10 text-red-500 border-red-500/20",
    iconText: "NG",
    description: "Full-fledged Google framework for enterprise dashboards, complex forms, and modular apps.",
  },
  {
    name: "Next.js",
    category: "frameworks",
    level: "Full Stack SSR",
    iconBg: "bg-slate-900/10 text-slate-900 dark:text-white dark:bg-white/10 border-slate-400/20",
    iconText: "NEXT",
    description: "Server-side rendering, static site generation, and SEO optimized React web applications.",
  },
  {
    name: "Node.js & Express",
    category: "frameworks",
    level: "Runtime API",
    iconBg: "bg-green-600/10 text-green-600 border-green-600/20",
    iconText: "NODE",
    description: "Non-blocking event-driven backend services handling thousands of simultaneous connections.",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "databases",
    level: "Relational",
    iconBg: "bg-blue-600/10 text-blue-600 border-blue-600/20",
    iconText: "PG",
    description: "ACID compliant relational database engine with JSONB support for complex datasets.",
  },
  {
    name: "MongoDB",
    category: "databases",
    level: "NoSQL",
    iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    iconText: "MONGO",
    description: "Flexible document store for rapid prototyping, real-time messaging, and unstructured data.",
  },
  {
    name: "Redis",
    category: "databases",
    level: "In-Memory Cache",
    iconBg: "bg-red-600/10 text-red-600 border-red-600/20",
    iconText: "REDIS",
    description: "Ultra-fast session storage, rate limiting, and pub/sub message queuing.",
  },

  // DevOps & Cloud
  {
    name: "Docker & Containers",
    category: "devops",
    level: "Containerization",
    iconBg: "bg-sky-600/10 text-sky-600 border-sky-600/20",
    iconText: "DOCKER",
    description: "Isolated app containers guaranteeing identical execution across development and production.",
  },
  {
    name: "AWS Cloud",
    category: "devops",
    level: "Infrastructure",
    iconBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    iconText: "AWS",
    description: "EC2, S3, Lambda, CloudFront, RDS for automated scaling, CDN delivery, and high availability.",
  },
  {
    name: "CI/CD & Jenkins",
    category: "devops",
    level: "Automation",
    iconBg: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    iconText: "JENKINS",
    description: "Automated test pipelines, zero-downtime deployments, and continuous integration flows.",
  },

  // Software & Development Tools
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Version Control",
    iconBg: "bg-slate-800/10 text-slate-800 dark:text-slate-200 border-slate-700/20",
    iconText: "GIT",
    description: "Distributed code management, pull request code reviews, and automated release tags.",
  },
  {
    name: "VS Code & IDEs",
    category: "tools",
    level: "Development IDE",
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    iconText: "VSCODE",
    description: "Modern code editor configured with ESLint, Prettier, and debugging tools.",
  },
  {
    name: "Postman & Swagger",
    category: "tools",
    level: "API Testing",
    iconBg: "bg-orange-600/10 text-orange-600 border-orange-600/20",
    iconText: "POSTMAN",
    description: "Comprehensive REST/GraphQL API testing, contract validation, and interactive documentation.",
  },
  {
    name: "Tailwind CSS",
    category: "frameworks",
    level: "Styling UI",
    iconBg: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    iconText: "TAILWIND",
    description: "Utility-first CSS framework for rapid custom interface design and responsive layouts.",
  },
  {
    name: "GraphQL & REST",
    category: "tools",
    level: "API Layer",
    iconBg: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    iconText: "GQL",
    description: "Declarative data fetching APIs with precise payload optimization and schemas.",
  },
  {
    name: "Figma & UI Design",
    category: "tools",
    level: "Design & UX",
    iconBg: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    iconText: "FIGMA",
    description: "Interactive wireframes, high-fidelity UI prototypes, design systems, and component libraries.",
  },
  {
    name: "Kubernetes & K8s",
    category: "devops",
    level: "Orchestration",
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    iconText: "K8S",
    description: "Automated container deployment, horizontal scaling, and microservices management.",
  },
  {
    name: "Nginx & Web Server",
    category: "devops",
    level: "Reverse Proxy",
    iconBg: "bg-emerald-600/10 text-emerald-600 border-emerald-600/20",
    iconText: "NGINX",
    description: "High-performance reverse proxy, load balancing, SSL termination, and static asset caching.",
  },
  {
    name: "MySQL Database",
    category: "databases",
    level: "Relational",
    iconBg: "bg-sky-600/10 text-sky-600 border-sky-600/20",
    iconText: "MYSQL",
    description: "Dependable relational database engine for high-traffic web applications and e-commerce platforms.",
  },
];

export function TechStack({ showTitle = true }: { showTitle?: boolean }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "languages", label: "Languages", icon: Code2 },
    { id: "frameworks", label: "Frameworks & Web", icon: Server },
    { id: "databases", label: "Databases & Cache", icon: Database },
    { id: "devops", label: "Cloud & DevOps", icon: Cpu },
    { id: "tools", label: "Software & Tools", icon: Wrench },
  ];

  const filteredItems =
    activeTab === "all"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="py-12 bg-background relative">
      <div className="container-page">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2">
              <Cpu className="size-3.5" />
              <span>Full Stack Engineering & Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
              Enterprise Technologies & Software Stack
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Modern battle-tested programming languages, frameworks, cloud services, and software development tools.
            </p>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105"
                    : "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="size-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                {/* Badge Icon */}
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl border font-mono font-extrabold text-xs tracking-wider shadow-sm ${item.iconBg}`}
                >
                  {item.iconText}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold font-display text-base text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.level}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
