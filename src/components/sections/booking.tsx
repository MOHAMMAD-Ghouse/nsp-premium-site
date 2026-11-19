import { SectionHeading } from "@/components/section-heading";
import { BookingForm } from "@/components/booking-form";

export function BookingSection() {
  return (
    <section id="book" className="section-pad">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Book Now"
            title="Request a collection or drop-off."
            description="Share a few details and continue on WhatsApp so we can confirm your booking. Free pick-up and delivery are subject to service-area availability."
          />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Prefer to speak with someone? Call{" "}
              <a
                href="tel:+442080908232"
                className="font-medium text-ink underline decoration-gold/50 underline-offset-4 hover:text-gold"
              >
                020 8090 8232
              </a>{" "}
              or message us on WhatsApp.
            </p>
            <p>
              Opening hours: Monday – Saturday, 8:30 AM – 5:00 PM.
            </p>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
