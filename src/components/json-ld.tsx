import { BUSINESS } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: BUSINESS.name,
    description: BUSINESS.description,
    telephone: BUSINESS.phone.display,
    url: "https://newsteamandpress.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.line1,
      addressLocality: BUSINESS.address.line2,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "17:00",
    },
    areaServed: "Stoneleigh, Surrey",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
