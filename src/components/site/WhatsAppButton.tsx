import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { company, whatsappMessage } from "@/data/site";

/**
 * Floating WhatsApp button + mobile action bar.
 * Renders only when a real WhatsApp number has been supplied by the client.
 */
export function WhatsAppButton() {
  if (!company.whatsapp) return null;
  const href = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SVM IT Solutions on WhatsApp"
        className="fixed bottom-20 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-105 sm:bottom-6"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card sm:hidden">
        <a href={`tel:${company.phone}`} className="flex flex-col items-center gap-1 py-3 text-xs font-medium">
          <Phone className="size-4 text-primary" aria-hidden="true" /> Call
        </a>
        <a href={href} className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-medium">
          <MessageCircle className="size-4 text-primary" aria-hidden="true" /> WhatsApp
        </a>
        <Link to="/get-a-quote" className="flex flex-col items-center gap-1 py-3 text-xs font-medium">
          <FileText className="size-4 text-primary" aria-hidden="true" /> Get Quote
        </Link>
      </div>
    </>
  );
}
