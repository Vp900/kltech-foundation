import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Search,
  Code2,
  Cpu,
  Layers,
  Phone,
  MessageCircle,
  FileText,
  X,
} from "lucide-react";
import { services, company } from "@/data/site";
import { CLIENT_PROJECTS } from "@/data/clients";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Close on ESC / Ctrl+K ────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // ── Prevent body scroll when open ───────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) setSearch("");
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  const cleanPhone = company.phone.replace(/\D/g, "");

  const handleSelect = useCallback((action: () => void) => {
    close();
    action();
  }, [close]);

  // ── Memoised filtered results (no recompute unless search changes) ──
  const q = search.toLowerCase().trim();

  const filteredServices = useMemo(
    () =>
      services.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.short.toLowerCase().includes(q)
      ),
    [q]
  );

  const filteredProjects = useMemo(
    () =>
      CLIENT_PROJECTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      ),
    [q]
  );

  const techList = useMemo(
    () =>
      [
        { name: "React & Next.js", desc: "Modern Frontend Framework" },
        { name: "Node.js & Express", desc: "High Concurrency Backend" },
        { name: "Python & Django", desc: "AI, ML & Enterprise API" },
        { name: "Java & Spring Boot", desc: "Enterprise Scalable Architecture" },
        { name: "PostgreSQL & MongoDB", desc: "Relational & NoSQL Databases" },
        { name: "Docker, Kubernetes & AWS", desc: "DevOps & Cloud Infra" },
      ].filter((t) => t.name.toLowerCase().includes(q)),
    [q]
  );

  return (
    <>
      {/* ── Desktop trigger button ─────────────────────────────── */}
      <button
        type="button"
        onClick={open}
        aria-label="Search services and tech stack"
        className="hidden md:inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:border-emerald-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
      >
        <Search className="size-3.5 text-emerald-500" />
        <span>Search...</span>
        <kbd className="pointer-events-none ml-1 inline-flex h-4 items-center rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-1.5 font-mono text-[10px] font-semibold text-slate-500 dark:text-slate-400">
          ⌘K
        </kbd>
      </button>

      {/* ── Mobile trigger icon ────────────────────────────────── */}
      <button
        type="button"
        onClick={open}
        aria-label="Search"
        className="md:hidden inline-flex size-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors cursor-pointer"
      >
        <Search className="size-4" />
      </button>

      {/* ── Modal ─────────────────────────────────────────────── */}
      {isOpen && (
        /* Backdrop */
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-slate-950/60 backdrop-blur-sm"
          onMouseDown={close}
        >
          {/* Panel — stopPropagation so clicks inside don't close */}
          <div
            className="w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 px-4 py-3">
              <Search className="size-4.5 shrink-0 text-emerald-500" />
              <input
                ref={inputRef}
                autoFocus
                type="text"
                placeholder="Search services, tech, clients…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
              <kbd
                onClick={close}
                className="cursor-pointer rounded border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[55vh] overflow-y-auto overscroll-contain p-2 space-y-3">

              {/* Quick actions — always visible */}
              <div>
                <p className="px-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Quick Actions
                </p>
                <div className="space-y-0.5">
                  <button
                    type="button"
                    onClick={() => handleSelect(() => window.open(`https://wa.me/${cleanPhone}`, "_blank"))}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 transition-colors text-left cursor-pointer"
                  >
                    <MessageCircle className="size-4 shrink-0 text-[#25D366]" />
                    <span className="flex-1">WhatsApp Chat</span>
                    <span className="text-[10px] text-slate-400">+91 94537 75009</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect(() => { window.location.href = `tel:${company.phone.replace(/\s+/g, "")}`; })}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-950/30 hover:text-sky-600 transition-colors text-left cursor-pointer"
                  >
                    <Phone className="size-4 shrink-0 text-sky-500" />
                    <span className="flex-1">Call Us</span>
                    <span className="text-[10px] text-slate-400">24/7 Available</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect(() => navigate({ to: "/get-a-quote" }))}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 transition-colors text-left cursor-pointer"
                  >
                    <FileText className="size-4 shrink-0 text-emerald-500" />
                    <span className="flex-1">Get Free Quote</span>
                    <span className="text-[10px] text-slate-400">Proposal</span>
                  </button>
                </div>
              </div>

              {/* Services */}
              {filteredServices.length > 0 && (
                <div>
                  <p className="px-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    IT Services ({filteredServices.length})
                  </p>
                  <div className="space-y-0.5">
                    {filteredServices.slice(0, 6).map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => handleSelect(() => navigate({ to: "/services/$slug", params: { slug: s.slug } }))}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer"
                      >
                        <Code2 className="size-4 shrink-0 text-emerald-500" />
                        <span className="flex-1 font-medium">{s.name}</span>
                        <span className="text-[11px] text-slate-400 line-clamp-1 max-w-[180px]">{s.short}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {techList.length > 0 && (
                <div>
                  <p className="px-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Technologies
                  </p>
                  <div className="space-y-0.5">
                    {techList.map((t) => (
                      <button
                        key={t.name}
                        type="button"
                        onClick={() => handleSelect(() => navigate({ to: "/technologies" }))}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer"
                      >
                        <Cpu className="size-4 shrink-0 text-sky-500" />
                        <span className="flex-1 font-medium">{t.name}</span>
                        <span className="text-[11px] text-slate-400">{t.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <p className="px-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Client Projects
                  </p>
                  <div className="space-y-0.5">
                    {filteredProjects.slice(0, 4).map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => handleSelect(() => navigate({ to: "/portfolio" }))}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer"
                      >
                        <Layers className="size-4 shrink-0 text-emerald-500" />
                        <span className="flex-1 font-medium">{p.name}</span>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400">{p.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty state */}
              {q && filteredServices.length === 0 && techList.length === 0 && filteredProjects.length === 0 && (
                <div className="py-8 text-center text-sm text-slate-400">
                  No results for <span className="font-semibold text-slate-600 dark:text-slate-300">"{search}"</span>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 px-4 py-2 text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-950/50">
              <span>SVM IT Solutions Smart Search</span>
              <span><kbd className="font-mono">↑↓</kbd> navigate · <kbd className="font-mono">ESC</kbd> close · <kbd className="font-mono">⌘K</kbd> open</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
