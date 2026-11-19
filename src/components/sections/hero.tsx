import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-0 items-end overflow-hidden bg-ink text-cream"
    >
      <Image
        src="/images/hero.jpg"
        alt="Professionally finished garments arranged with care"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent"
        aria-hidden
      />

      <div className="relative container-wide section-pad w-full pb-16 pt-36 md:pb-24 md:pt-44">
        <p className="reveal mb-5 text-[0.72rem] font-semibold tracking-[0.35em] text-gold uppercase">
          {BUSINESS.name}
        </p>
        <h1 className="reveal reveal-delay-1 max-w-4xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Exceptional Garment Care.
          <span className="mt-2 block text-gold-gradient">
            Effortless Convenience.
          </span>
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Professional Dry Cleaning &amp; Laundry Services. Cleaner Clothes.
          Fresher Looks. Quality You Can Trust.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-ink uppercase shadow-[0_12px_35px_rgba(198,160,70,0.35)] transition hover:brightness-110"
          >
            Book a Collection
          </a>
          <a
            href="#drive-up"
            className="inline-flex items-center justify-center rounded-full border border-gold/50 bg-cream/5 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-cream uppercase backdrop-blur-sm transition hover:border-gold hover:bg-gold/10"
          >
            Drive-Up &amp; Drop-Off
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] text-cream/90 uppercase transition hover:border-cream/50 hover:bg-cream/5"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
