import Image from "next/image";
import { Car, MapPinned, PhoneCall, Shirt } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS } from "@/lib/constants";

const steps = [
  {
    icon: Car,
    title: "Drive up to the shop",
    text: "Pull up conveniently at our Vale Road premises in Stoneleigh.",
  },
  {
    icon: Shirt,
    title: "Drop off your garments",
    text: "Hand your clothes to our team with any special care notes.",
  },
  {
    icon: MapPinned,
    title: "Leave the rest to us",
    text: "We clean and finish your items — collect later or arrange delivery.",
  },
];

export function DriveUpSection() {
  return (
    <section id="drive-up" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Drive-Up & Drop-Off"
          title="Drive Up. Drop Off. We'll Take Care of the Rest."
          description="Visit us by car for convenient drive-up garment drop-off. Leave your laundry and dry cleaning with our team and get on with your day."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[1.5rem] soft-shadow">
            <Image
              src="/images/drive-up.jpg"
              alt="Customer being assisted at a professional service counter for garment drop-off"
              width={1400}
              height={934}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <ol className="space-y-5">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-gold/20 bg-card/80 p-5 transition hover:border-gold/45"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                    <step.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              This is a convenient drive-up garment drop-off service at our
              shop — please call before visiting if you would like to confirm
              timing or discuss a larger order.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase transition hover:brightness-110"
              >
                Get Directions
              </a>
              <a
                href={BUSINESS.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-card px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-ink uppercase transition hover:border-gold/50"
              >
                <PhoneCall className="size-4 text-gold" aria-hidden />
                Call Before Visiting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
