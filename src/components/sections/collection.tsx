import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { whatsappUrl } from "@/lib/constants";

const points = [
  "Request a collection at a time that suits you",
  "Choose a preferred collection date",
  "Share your collection address and contact number",
  "Select the services you need",
  "Add special instructions for delicate items",
  "Submit your booking request for confirmation",
];

export function CollectionSection() {
  return (
    <section id="collection" className="section-pad bg-cream-deep/50">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Collection & Delivery"
            title="Your Laundry, Collected and Delivered."
            description="Enjoy free pick-up and delivery, subject to service-area availability and confirmation."
          />

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-ink/80 sm:text-base">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-gold"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase transition hover:brightness-110"
            >
              Request a Collection
            </a>
            <a
              href={whatsappUrl(
                "Hello New Steam & Press Co. Ltd, I would like to book free collection and delivery for my dry cleaning / laundry.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-card px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase transition hover:border-gold/50"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] soft-shadow">
          <Image
            src="/images/collection.jpg"
            alt="Neatly arranged garments ready for collection and delivery"
            width={1400}
            height={933}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-5 bottom-5 right-5 rounded-2xl border border-gold/30 bg-ink/85 p-5 text-cream backdrop-blur-sm">
            <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
              Free Pick-Up &amp; Delivery
            </p>
            <p className="mt-2 font-display text-2xl">
              Subject to service-area availability and confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
