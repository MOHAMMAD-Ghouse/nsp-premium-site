import Image from "next/image";
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
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Why Choose Us"
            title="Care, convenience and quality — without the fuss."
            description="Everything we do is designed to make professional garment care feel effortless for Stoneleigh homes and workplaces."
          />
          <div className="relative hidden overflow-hidden rounded-[1.5rem] border border-gold/20 lg:block">
            <Image
              src="/images/shirts.jpg"
              alt="Crisply finished shirts ready for collection"
              width={1200}
              height={900}
              className="h-72 w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-6 font-display text-2xl text-cream">
              Finished with care. Delivered with ease.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-gold/20 bg-gradient-to-b from-charcoal to-ink/80 p-7 transition duration-500 hover:border-gold/45"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink/40 text-gold">
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
