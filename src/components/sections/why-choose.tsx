import {
  BadgeCheck,
  Truck,
  ShieldCheck,
  HeartHandshake,
  Clock3,
  Sparkle,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { WHY_CHOOSE } from "@/lib/constants";

const icons = [
  BadgeCheck,
  Truck,
  ShieldCheck,
  HeartHandshake,
  Clock3,
  Sparkle,
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-pad bg-ink text-cream">
      <div className="container-wide">
        <SectionHeading
          tone="dark"
          eyebrow="Why Choose Us"
          title="Care, convenience and quality — without the fuss."
          description="Everything we do is designed to make professional garment care feel effortless."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-gold/20 bg-charcoal/80 p-7 transition duration-500 hover:border-gold/45 hover:bg-charcoal"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-2xl text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
