import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for ${BUSINESS.name}.`,
};

export default function TermsPage() {
  return (
    <div className="section-pad pt-32">
      <article className="container-narrow max-w-3xl">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          These terms provide general guidance for customers using the services
          of {BUSINESS.name}. By requesting a booking or leaving garments with
          us, you agree to discuss and confirm service details with our team.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">Services</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          We offer professional dry cleaning, laundry, duvet and bedding care,
          curtain cleaning, shirt finishing, wedding dress cleaning, dinner-suit
          care, service washes and tailoring/alterations. Availability of
          specific services should be confirmed when booking.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">
          Collection &amp; delivery
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Free pick-up and delivery is advertised subject to service-area
          availability and confirmation. Booking requests are not confirmed
          until our team accepts them by phone or WhatsApp.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">
          Drive-up drop-off
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Customers may visit our premises for convenient drive-up garment
          drop-off. This website does not claim a dedicated drive-through lane
          or reserved parking bay. Please call before visiting for larger orders
          or timing questions.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">Website bookings</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Online forms on this website prepare an enquiry or WhatsApp handoff.
          They do not create a guaranteed appointment until confirmed by the
          business.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">Contact</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {BUSINESS.name}, {BUSINESS.address.full}. Telephone{" "}
          {BUSINESS.phone.display}. Mobile {BUSINESS.mobile.display}.
        </p>

        <p className="mt-10">
          <a href="/#home" className="text-gold hover:underline">
            Return home
          </a>
        </p>
      </article>
    </div>
  );
}
