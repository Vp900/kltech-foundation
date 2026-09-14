import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Phone,
  Mail,
  X,
  Sparkles,
  Send,
  CheckCircle2,
  FileText,
  Clock,
  ChevronRight,
  Headphones,
} from "lucide-react";
import { company, whatsappMessage } from "@/data/site";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";
import { Button } from "@/components/ui/button";

export function QuickContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"quick" | "message">("quick");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const cleanPhone = company.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:${company.phone.replace(/\s+/g, "")}`;
  const mailUrl = `mailto:${company.email}?subject=${encodeURIComponent("IT Services Inquiry - SVM IT Solutions")}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contact) return;
    setLoading(true);
    try {
      await submitLeadToGoogleSheet({
        fullName: formData.name || "Quick Widget User",
        email: formData.contact.includes("@") ? formData.contact : "not-provided",
        phone: !formData.contact.includes("@") ? formData.contact : "",
        service: "Quick Message Floating Widget",
        budget: "Flexible",
        message: formData.message || "Requested quick contact via floating widget",
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", contact: "", message: "" });
        setIsOpen(false);
      }, 3500);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button (Desktop + Mobile) */}
      <div className="fixed bottom-20 right-5 z-40 sm:bottom-7 sm:right-7">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Quick Support & Contact Widget"
            className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 p-3.5 text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/35 cursor-pointer"
          >
            {/* Live pulsing online indicator */}
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-emerald-100 border-2 border-emerald-600" />
            </span>

            <MessageCircle className="size-6 transition-transform group-hover:rotate-6" aria-hidden="true" />
            <span className="hidden pr-2 text-xs font-bold sm:inline-block tracking-wide">
              Quick Connect
            </span>
          </button>
        )}

        {/* Modal / Popup Quick Hub */}
        {isOpen && (
          <div className="relative w-[340px] sm:w-[380px] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 text-slate-800 dark:text-white">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3.5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-md">
                    <Headphones className="size-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white leading-tight">
                    SVM IT Solutions
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      Engineers Online • Avg reply &lt; 5m
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid size-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close widget"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-3.5 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("quick")}
                className={`py-1.5 rounded-lg transition-all ${
                  activeTab === "quick"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Direct Connect
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("message")}
                className={`py-1.5 rounded-lg transition-all ${
                  activeTab === "message"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Instant Message
              </button>
            </div>

            {activeTab === "quick" ? (
              <div className="mt-4 space-y-2.5">
                {/* WhatsApp Direct Option */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-xl bg-[#25D366] text-white shadow-sm">
                      <MessageCircle className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        WhatsApp Chat
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Direct chat on +91 94537 75009
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
                </a>

                {/* Direct Phone Call */}
                <a
                  href={callUrl}
                  className="flex items-center justify-between p-3 rounded-2xl border border-sky-500/20 bg-sky-50/50 dark:bg-sky-950/20 hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-xl bg-sky-500 text-white shadow-sm">
                      <Phone className="size-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        Call Our Tech Leads
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        +91 94537 75009 (24/7 Available)
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-500 transition-all" />
                </a>

                {/* Direct Email Support */}
                <a
                  href={mailUrl}
                  className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-xl bg-slate-700 text-white shadow-sm">
                      <Mail className="size-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        Email Support Desk
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      svmitsolutions26@gmail.com
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-white transition-all" />
                </a>
              </div>
            ) : (
              <div className="mt-4">
                {submitted ? (
                  <div className="p-6 text-center">
                    <CheckCircle2 className="size-10 text-emerald-500 mx-auto" />
                    <h4 className="mt-2 text-sm font-bold text-slate-900 dark:text-white">Message Received!</h4>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      SVM IT Solutions team aapko 5 minutes ke andar WhatsApp/Call par reach out karegi.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vikas Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Phone Number or Email *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+91 94537 75009 or email"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Project Requirement
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Bataiye aapko website, app, ERP ya software me kya chahiye..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 font-bold text-white shadow-md hover:from-emerald-600 hover:to-teal-700 text-xs py-2 h-auto"
                    >
                      {loading ? "Sending..." : "Send Instant Request"}
                      <Send className="size-3.5 ml-1.5" />
                    </Button>
                  </form>
                )}
              </div>
            )}

            {/* Bottom Info Footnote */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="size-3 text-emerald-500" />
                Direct 24/7 IT Support
              </span>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Full Contact Page →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Action Bar for Mobile Screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md sm:hidden text-slate-700 dark:text-slate-300 shadow-lg">
        <a
          href={callUrl}
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold hover:text-emerald-500 transition-colors"
        >
          <Phone className="size-4 text-emerald-500" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-slate-200 dark:border-slate-800 py-2.5 text-[11px] font-semibold hover:text-emerald-500 transition-colors"
        >
          <MessageCircle className="size-4 text-[#25D366]" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/get-a-quote"
          className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold hover:text-emerald-500 transition-colors"
        >
          <FileText className="size-4 text-sky-500" aria-hidden="true" />
          Get Quote
        </Link>
      </div>
    </>
  );
}
