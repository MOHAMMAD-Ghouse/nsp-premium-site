import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="section-pad pt-32">
      <article className="container-narrow prose prose-neutral max-w-3xl">
        <p className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          This privacy notice explains how {BUSINESS.name} handles information
          you share when you contact us, request a booking, or use this website.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">
          Information we collect
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          When you enquire or request a booking, you may provide your name,
          telephone number, email address, collection address, postcode, service
          preferences and any special instructions. Messages sent through
          WhatsApp are handled within WhatsApp according to Meta&apos;s policies.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">
          How we use information
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          We use the details you provide to respond to enquiries, arrange
          collections or drop-offs, confirm service availability and deliver
          our dry cleaning and laundry services.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">
          Booking form handoff
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          The website booking and contact forms prepare a message for you to
          send via WhatsApp. They do not automatically store submissions in a
          separate database unless we later introduce a secure booking system.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">Contact</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          For privacy questions, contact {BUSINESS.name} at{" "}
          {BUSINESS.address.full}, telephone {BUSINESS.phone.display}, or mobile{" "}
          {BUSINESS.mobile.display}.
        </p>

        <p className="mt-10">
          <Link href="/#contact" className="text-gold hover:underline">
            Back to contact
          </Link>
        </p>
      </article>
    </div>
  );
}
