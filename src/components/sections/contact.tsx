import { MapPin, Phone, Smartphone, Clock, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { BUSINESS, whatsappUrl } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-cream-deep/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Visit us in Stoneleigh or get in touch today."
          description="Find directions, call the shop, message on WhatsApp, or send an enquiry."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-[1.35rem] border border-gold/25 bg-card p-6 pt-7 soft-shadow sm:p-7">
              <h3 className="font-display text-2xl text-ink">
                {BUSINESS.name}
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  <a
                    href={BUSINESS.maps.place}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink"
                  >
                    {BUSINESS.address.line1}
                    <br />
                    {BUSINESS.address.line2}, {BUSINESS.address.postcode}
                    <br />
                    {BUSINESS.address.country}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  <a href={BUSINESS.phone.href} className="hover:text-ink">
                    Telephone: {BUSINESS.phone.display}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Smartphone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  <div>
                    <a href={BUSINESS.mobile.href} className="block hover:text-ink">
                      Mobile: {BUSINESS.mobile.display}
                    </a>
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-gold hover:text-ink"
                    >
                      WhatsApp available
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  <span>{BUSINESS.hours.weekdays}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BUSINESS.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition hover:brightness-110"
                >
                  <Navigation className="size-4" aria-hidden />
                  Directions
                </a>
                <a
                  href={BUSINESS.phone.href}
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition hover:border-gold/50"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.35rem] border border-gold/25 soft-shadow">
              <iframe
                title="Google Map for New Steam & Press Co. Ltd, 181 Vale Road, Stoneleigh"
                src={BUSINESS.maps.embed}
                className="h-64 w-full border-0 grayscale-[15%] contrast-[1.04] sm:h-72 md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
