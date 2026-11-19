import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-5 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-[1.03] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-7 sm:bottom-7 sm:size-auto sm:gap-2 sm:px-4 sm:py-3 sm:text-sm sm:font-semibold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="sr-only sm:not-sr-only sm:inline">WhatsApp</span>
    </a>
  );
}
