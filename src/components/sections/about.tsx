import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-[1.5rem] soft-shadow">
          <Image
            src="/images/about.jpg"
            alt="Professionally tailored garments representing careful dry cleaning"
            width={1400}
            height={933}
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
            <p className="font-display text-2xl text-cream">
              Stoneleigh garment care, finished with care.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Luxury care for the clothes you rely on."
            description={`${BUSINESS.shortName} provides professional dry cleaning and laundry services for homes and workplaces across Stoneleigh and the surrounding area.`}
          />
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              From everyday shirts and service washes to suits, wedding dresses,
              duvets and curtains, we focus on careful cleaning, thoughtful
              finishing and a simple customer experience.
            </p>
            <p>
              Choose free collection and delivery where available, drive up to
              drop off your garments at our Vale Road premises, or get in touch
              by phone and WhatsApp — whichever fits your day best.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold/25 bg-card/70 p-5">
              <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
                Location
              </p>
              <p className="mt-2 font-display text-xl text-ink">
                181 Vale Road, Stoneleigh
              </p>
            </div>
            <div className="rounded-2xl border border-gold/25 bg-card/70 p-5">
              <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
                Opening Hours
              </p>
              <p className="mt-2 font-display text-xl text-ink">
                Mon–Sat, 8:30–5:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
