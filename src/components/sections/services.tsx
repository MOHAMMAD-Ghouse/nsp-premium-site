import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { SERVICES, BUSINESS } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-charcoal text-cream">
      <div className="container-wide">
        <SectionHeading
          tone="dark"
          eyebrow="Our Services"
          title="Premium care for every garment."
          description="Explore our professional dry cleaning and laundry services. Enquire by phone, WhatsApp or our booking form."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-[1.35rem] border border-gold/15 bg-ink/50 soft-shadow transition duration-500 hover:-translate-y-1 hover:border-gold/40"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="font-display text-2xl text-cream">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/65">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="#contact"
                    className="inline-flex rounded-full bg-gold-gradient px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-ink uppercase transition hover:brightness-110"
                  >
                    Enquire
                  </a>
                  <a
                    href={BUSINESS.phone.href}
                    className="inline-flex rounded-full border border-gold/35 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.16em] text-gold uppercase transition hover:bg-gold/10"
                  >
                    Call
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
