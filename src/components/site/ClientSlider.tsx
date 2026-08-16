import { CLIENT_PROJECTS } from "@/data/clients";
import { ExternalLink, Building2, CheckCircle2 } from "lucide-react";

export function ClientSlider() {
  // Duplicate array to ensure smooth continuous marquee infinite scroll
  const marqueeItems = [...CLIENT_PROJECTS, ...CLIENT_PROJECTS];

  return (
    <section className="relative overflow-hidden py-16 bg-slate-900 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="container-page mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md mb-4">
          <Building2 className="size-3.5" />
          <span>Our Valued Clients & Projects</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
          Trusted by Industry Leaders & Fast-Growing Enterprises
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          From AI cloud platforms and luxury booking engines to heavy industrial manufacturing, explore our active client web ecosystems.
        </p>
      </div>

      {/* Infinite Marquee Track 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient edge masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {marqueeItems.map((client, idx) => (
            <a
              key={`${client.id}-${idx}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3.5 rounded-2xl border border-slate-800 bg-slate-800/60 backdrop-blur-xl px-5 py-3.5 shadow-xl transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:bg-slate-800 hover:shadow-emerald-500/10"
            >
              {/* Brand Logo Avatar */}
              <div
                className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${client.accentColor} font-display font-extrabold text-white text-base shadow-md group-hover:rotate-3 transition-transform`}
              >
                {client.logoText.slice(0, 2).toUpperCase()}
              </div>

              {/* Text info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-100 text-sm group-hover:text-emerald-400 transition-colors">
                    {client.name}
                  </span>
                  <ExternalLink className="size-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-slate-400">{client.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container-page mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs text-slate-400 font-medium">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-400" />
          <span>100% Active Uptime Client Links</span>
        </div>
        <div className="flex flex-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-400" />
          <span>15+ Custom Web Ecosystems</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-400" />
          <span>Enterprise Grade Architecture</span>
        </div>
      </div>
    </section>
  );
}
