import { BUSINESS, whatsappUrl } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-16 text-cream sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(198,160,70,0.28), transparent 45%), radial-gradient(circle at 90% 20%, rgba(232,208,138,0.12), transparent 35%)",
        }}
        aria-hidden
      />
      <div className="relative container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
            Book a collection, drive up, or message us on WhatsApp.
          </h2>
          <p className="mt-4 text-cream/70">
            {BUSINESS.hours.weekdays}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase transition hover:brightness-110"
          >
            Book Now
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-gold uppercase transition hover:bg-gold/10"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
