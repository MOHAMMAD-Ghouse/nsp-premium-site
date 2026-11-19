import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { BUSINESS, SERVICES, whatsappUrl } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-ink text-cream">
      <div className="container-wide section-pad !scroll-mt-0 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="space-y-5 lg:col-span-1">
          <BrandMark tone="dark" />
          <p className="max-w-sm text-sm leading-relaxed text-cream/70">
            {BUSINESS.description} Visit us in Stoneleigh or book a convenient
            collection.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gold transition hover:text-gold-soft"
          >
            <MessageCircle className="size-4" aria-hidden />
            Message us on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="font-display text-xl text-gold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a
                  href={`#services`}
                  className="transition hover:text-gold"
                >
                  {service.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="text-gold hover:text-gold-soft">
                View all services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-gold">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a
                href={BUSINESS.maps.place}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line2}, {BUSINESS.address.postcode}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <div className="space-y-1">
                <a href={BUSINESS.phone.href} className="block hover:text-gold">
                  {BUSINESS.phone.display}
                </a>
                <a href={BUSINESS.mobile.href} className="block hover:text-gold">
                  {BUSINESS.mobile.display}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>{BUSINESS.hours.weekdays}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-gold">Visit</h3>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            Convenient drive-up garment drop-off at our Vale Road premises.
          </p>
          <a
            href={BUSINESS.maps.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase transition hover:brightness-110"
          >
            Google Maps Directions
          </a>
          <div className="mt-8 flex flex-wrap gap-4 text-xs tracking-[0.12em] text-cream/55 uppercase">
            <a href="/privacy" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-5 py-6 text-center text-xs tracking-[0.08em] text-cream/45 sm:px-8">
        © 2026 {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
