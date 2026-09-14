import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  DollarSign,
  Cpu,
  Layers,
  ShieldCheck,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, whatsappMessage } from "@/data/site";
import { submitLeadToGoogleSheet } from "@/lib/googleSheets";

interface ServiceType {
  id: string;
  name: string;
  basePrice: number;
  baseWeeks: number;
  recommendedStack: string;
}

const SERVICE_TYPES: ServiceType[] = [
  {
    id: "web-app",
    name: "Custom Web App / SaaS",
    basePrice: 45000,
    baseWeeks: 3,
    recommendedStack: "React / Next.js + Node.js + PostgreSQL",
  },
  {
    id: "mobile-app",
    name: "Mobile App (iOS & Android)",
    basePrice: 65000,
    baseWeeks: 5,
    recommendedStack: "React Native / Flutter + Cloud Backend",
  },
  {
    id: "erp-crm",
    name: "Enterprise ERP / CRM",
    basePrice: 85000,
    baseWeeks: 6,
    recommendedStack: "Python / Django + React + Redis + Docker",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    basePrice: 35000,
    baseWeeks: 2,
    recommendedStack: "Next.js Storefront / Shopify / WooCommerce",
  },
  {
    id: "cloud-devops",
    name: "Cloud Infra & DevOps",
    basePrice: 40000,
    baseWeeks: 2,
    recommendedStack: "AWS / Docker / Kubernetes / CI/CD",
  },
];

const SCALES = [
  { id: "mvp", name: "Startup MVP", multiplier: 1.0, desc: "Fast time-to-market with core features" },
  { id: "growth", name: "Growing Business", multiplier: 1.5, desc: "Robust architecture with multi-role access" },
  { id: "enterprise", name: "Enterprise Scale", multiplier: 2.2, desc: "High concurrency, 99.99% SLA & custom integrations" },
];

const FEATURES = [
  { id: "auth", name: "Role-Based Auth (RBAC)", cost: 8000, weeks: 0.5 },
  { id: "payments", name: "Payment Gateway & Invoicing", cost: 10000, weeks: 0.5 },
  { id: "ai", name: "AI & LLM Integration (OpenAI / Claude)", cost: 25000, weeks: 1.5 },
  { id: "realtime", name: "Realtime Chat / WebSockets", cost: 15000, weeks: 1 },
  { id: "analytics", name: "Executive Analytics Dashboard", cost: 12000, weeks: 0.5 },
  { id: "devops", name: "Dockerized CI/CD & Cloud Deploy", cost: 10000, weeks: 0.5 },
];

export function ProjectCostEstimator() {
  const [selectedService, setSelectedService] = useState<ServiceType>(SERVICE_TYPES[0]);
  const [selectedScale, setSelectedScale] = useState(SCALES[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "analytics"]);
  const [clientContact, setClientContact] = useState("");
  const [clientName, setClientName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const featureCost = selectedFeatures.reduce((acc, fId) => {
    const feat = FEATURES.find((f) => f.id === fId);
    return acc + (feat ? feat.cost : 0);
  }, 0);

  const featureWeeks = selectedFeatures.reduce((acc, fId) => {
    const feat = FEATURES.find((f) => f.id === fId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const totalMinPrice = Math.round((selectedService.basePrice * selectedScale.multiplier + featureCost) * 0.95);
  const totalMaxPrice = Math.round((selectedService.basePrice * selectedScale.multiplier + featureCost) * 1.25);
  const totalWeeks = Math.max(2, Math.round(selectedService.baseWeeks * (selectedScale.multiplier * 0.8) + featureWeeks));

  const cleanPhone = company.phone.replace(/\D/g, "");
  const specSummary = `SVM IT Solutions Estimate:
- Project: ${selectedService.name} (${selectedScale.name})
- Est. Budget: ₹${totalMinPrice.toLocaleString()} - ₹${totalMaxPrice.toLocaleString()}
- Est. Timeline: ~${totalWeeks} Weeks
- Tech Stack: ${selectedService.recommendedStack}`;

  const handleSendScope = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientContact) return;
    setLoading(true);
    try {
      await submitLeadToGoogleSheet({
        fullName: clientName || "Project Estimator Lead",
        email: clientContact.includes("@") ? clientContact : "phone-only",
        phone: !clientContact.includes("@") ? clientContact : "",
        service: `${selectedService.name} (${selectedScale.name})`,
        budget: `₹${totalMinPrice.toLocaleString()} - ₹${totalMaxPrice.toLocaleString()}`,
        message: specSummary,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 size-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            <Calculator className="size-3.5" />
            <span>Interactive Scope &amp; Budget Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
            Estimate Your Software Project
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Select your technology requirement to get transparent budget ranges and deployment timelines.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 px-4 py-2 rounded-xl">
          <ShieldCheck className="size-4" />
          <span>No Obligation • 100% Free Consultation</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Project Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              1. Choose Project Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICE_TYPES.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 ring-1 ring-emerald-500"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      {service.name}
                      {isSelected && <CheckCircle2 className="size-4 text-emerald-500" />}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      From ₹{service.basePrice.toLocaleString()} • ~{service.baseWeeks} wks
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Scale / Complexity */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              2. Target Scale &amp; Architecture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SCALES.map((scale) => {
                const isSelected = selectedScale.id === scale.id;
                return (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => setSelectedScale(scale)}
                    className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 ring-1 ring-emerald-500"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      {scale.name}
                      {isSelected && <CheckCircle2 className="size-4 text-emerald-500" />}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {scale.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Add-on Features */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
              3. Select Required Architecture Modules
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FEATURES.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      isChecked
                        ? "border-emerald-500/60 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-900 dark:text-white"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className="font-medium flex items-center gap-2">
                      <span className={`size-3.5 rounded flex items-center justify-center border ${isChecked ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-400"}`}>
                        {isChecked && "✓"}
                      </span>
                      {feat.name}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      +₹{feat.cost.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Estimation Card */}
        <div className="lg:col-span-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 p-6 sm:p-7 space-y-6 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Live Estimated Scope
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <Sparkles className="size-3" /> Real-time Calculation
            </span>
          </div>

          {/* Budget Range Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Estimated Investment Range</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600 dark:text-emerald-400 mt-1">
              ₹{totalMinPrice.toLocaleString()} - ₹{totalMaxPrice.toLocaleString()}
            </h3>
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="size-3.5 text-sky-500" />
                Est. Delivery: ~{totalWeeks} Weeks
              </span>
              <span className="font-medium text-emerald-600 dark:text-emerald-400">
                100% Milestone Based
              </span>
            </div>
          </div>

          {/* Tech Stack Recommendation */}
          <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
            <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Cpu className="size-3.5 text-emerald-500" />
              Recommended Tech Stack:
            </p>
            <p className="font-mono text-[11px] bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              {selectedService.recommendedStack}
            </p>
          </div>

          {/* Submit or WhatsApp Action */}
          {submitted ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-xs space-y-2">
              <CheckCircle2 className="size-8 text-emerald-500 mx-auto" />
              <p className="font-bold text-slate-900 dark:text-white text-sm">Specification Received!</p>
              <p className="text-slate-600 dark:text-slate-400">
                Our Senior Tech Stack Lead will review your estimated scope and connect within 2 hours.
              </p>
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(specSummary)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
              >
                <MessageCircle className="size-3.5" /> Also send to WhatsApp →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSendScope} className="space-y-3 pt-2">
              <div>
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Phone Number / WhatsApp (+91 94537 75009) *"
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 font-bold text-white shadow-lg shadow-emerald-500/20 hover:from-emerald-600 hover:to-teal-700 text-xs py-2.5 h-auto"
                >
                  {loading ? "Submitting Scope..." : "Request Detailed Architecture Proposal"}
                  <Send className="size-3.5 ml-1.5" />
                </Button>

                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(specSummary)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="size-3.5 text-[#25D366]" />
                  Chat This Scope on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
