import {
  Server,
  ShieldCheck,
  Zap,
  Activity,
  GitBranch,
  Lock,
  Headphones,
} from "lucide-react";

export function InfrastructureTicker() {
  const metrics = [
    {
      icon: Activity,
      label: "System SLA Uptime",
      value: "99.99% Guaranteed",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Zap,
      label: "Avg. Incident Response",
      value: "< 15 Mins",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Server,
      label: "Cloud Architecture",
      value: "AWS • Docker • K8s",
      color: "text-sky-500",
      bg: "bg-sky-500/10",
    },
    {
      icon: Lock,
      label: "Enterprise Security",
      value: "End-to-End SSL & RBAC",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      icon: GitBranch,
      label: "Continuous Delivery",
      value: "Automated CI/CD Pipelines",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Headphones,
      label: "Technical Support",
      value: "24/7 Dedicated Ops",
      color: "text-teal-500",
      bg: "bg-teal-500/10",
    },
  ];

  return (
    <section className="py-6 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/40">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {metrics.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800/60 shadow-xs hover:border-emerald-500/40 transition-colors"
              >
                <div className={`grid size-9 place-items-center rounded-xl ${m.bg} ${m.color} shrink-0`}>
                  <IconComp className="size-4.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider truncate">
                    {m.label}
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate mt-0.5">
                    {m.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
