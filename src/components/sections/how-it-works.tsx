import {
  ClipboardList,
  CalendarCheck2,
  Sparkles,
  PackageCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { HOW_IT_WORKS } from "@/lib/constants";

const icons = [ClipboardList, CalendarCheck2, Sparkles, PackageCheck];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How It Works"
          title="Four simple steps to fresher clothes."
          description="A clear process from booking to collection or delivery — designed around your convenience."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                key={item.step}
                className="group relative overflow-hidden rounded-[1.35rem] border border-gold/20 bg-card/80 p-7 soft-shadow transition duration-500 hover:-translate-y-1 hover:border-gold/50"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition group-hover:bg-gold/20"
                  aria-hidden
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold transition group-hover:scale-105">
                  <Icon className="size-5" aria-hidden />
                </div>
                <p className="mt-6 text-[0.68rem] tracking-[0.28em] text-gold uppercase">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
