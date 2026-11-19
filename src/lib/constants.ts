export const BUSINESS = {
  name: "NEW STEAM & PRESS CO. LTD",
  shortName: "New Steam & Press",
  tagline: "Exceptional Garment Care. Effortless Convenience.",
  description:
    "Professional dry cleaning and laundry services in Stoneleigh, Surrey — cleaner clothes, fresher looks, quality you can trust.",
  address: {
    line1: "181 Vale Road",
    line2: "Stoneleigh",
    postcode: "KT19 0PJ",
    country: "United Kingdom",
    full: "181 Vale Road, Stoneleigh, KT19 0PJ, United Kingdom",
  },
  phone: {
    display: "020 8090 8232",
    href: "tel:+442080908232",
  },
  mobile: {
    display: "+44 7447 588177",
    href: "tel:+447447588177",
    whatsapp: "447447588177",
  },
  hours: {
    weekdays: "Monday – Saturday: 8:30 AM – 5:00 PM",
    note: "Please call ahead if you need to confirm availability outside these hours.",
  },
  maps: {
    embed:
      "https://maps.google.com/maps?q=181+Vale+Road,+Stoneleigh,+KT19+0PJ,+United+Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=181+Vale+Road,+Stoneleigh,+KT19+0PJ,+United+Kingdom",
    place:
      "https://www.google.com/maps/search/?api=1&query=181+Vale+Road,+Stoneleigh,+KT19+0PJ",
  },
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello New Steam & Press Co. Ltd, I would like to enquire about your dry cleaning and laundry services.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${BUSINESS.mobile.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#drive-up", label: "Drive-Up Drop-Off" },
  { href: "#collection", label: "Collection & Delivery" },
  { href: "#book", label: "Book Now" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description:
      "Professional care for suits, jackets, coats and delicate garments.",
    image: "/images/dry-cleaning.jpg",
    alt: "Tailored suit jacket ready for professional dry cleaning",
  },
  {
    id: "wedding-dress",
    title: "Wedding Dress Cleaning",
    description: "Specialist cleaning and care for wedding dresses.",
    image: "/images/wedding-dress.jpg",
    alt: "Elegant wedding dress prepared for specialist cleaning",
  },
  {
    id: "dinner-suits",
    title: "Dinner Suits",
    description: "Keep formalwear looking elegant and fresh.",
    image: "/images/dinner-suit.jpg",
    alt: "Dinner suit and formalwear on hangers",
  },
  {
    id: "laundry",
    title: "Laundry Service",
    description: "Fresh, clean and hygienic everyday laundry.",
    image: "/images/laundry.jpg",
    alt: "Freshly laundered folded clothes",
  },
  {
    id: "duvet",
    title: "Duvet Cleaning",
    description: "Professional care for feather and synthetic duvets.",
    image: "/images/duvet.jpg",
    alt: "Soft duvet and bedding ready for cleaning",
  },
  {
    id: "curtains",
    title: "Curtain Dry Cleaning",
    description: "Refresh and revive curtains.",
    image: "/images/curtains.jpg",
    alt: "Elegant curtains in a bright living space",
  },
  {
    id: "bedding",
    title: "Bedding",
    description: "Cleaning for sheets, pillowcases and bedding.",
    image: "/images/bedding.jpg",
    alt: "Clean white bedding and pillows",
  },
  {
    id: "tailoring",
    title: "Tailoring Services",
    description: "Alterations and repairs.",
    image: "/images/tailoring.jpg",
    alt: "Tailoring and garment alteration work",
  },
  {
    id: "shirts",
    title: "Shirt Service",
    description: "Crisp, clean and professionally finished shirts.",
    image: "/images/shirts.jpg",
    alt: "Crisp pressed shirts ready for collection",
  },
  {
    id: "service-wash",
    title: "Service Wash",
    description: "Professional washing for everyday garments.",
    image: "/images/service-wash.jpg",
    alt: "Everyday garments prepared for a service wash",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Choose Your Service",
    description:
      "Select dry cleaning, laundry, duvet care, shirts or another service that suits your garments.",
  },
  {
    step: "02",
    title: "Book Collection or Visit Us",
    description:
      "Request free pick-up and delivery where available, or drive up and drop off at our Stoneleigh shop.",
  },
  {
    step: "03",
    title: "We Professionally Clean Your Garments",
    description:
      "Our team takes careful care of each item so your clothes return fresh, pressed and ready to wear.",
  },
  {
    step: "04",
    title: "Collect or Arrange Delivery",
    description:
      "Collect from the shop at a time that suits you, or arrange convenient delivery of your finished garments.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Professional Garment Care",
    description:
      "Thoughtful cleaning for everyday laundry through to delicate and formal wear.",
  },
  {
    title: "Convenient Collection & Delivery",
    description:
      "Free pick-up and delivery subject to service-area availability and confirmation.",
  },
  {
    title: "Quality Cleaning",
    description:
      "Cleaner clothes and fresher looks, finished with a professional standard of care.",
  },
  {
    title: "Care for Delicate Garments",
    description:
      "Specialist attention for wedding dresses, suits, curtains and finer fabrics.",
  },
  {
    title: "Customer Convenience",
    description:
      "Book online, message on WhatsApp, call us, or drive up and drop off at the shop.",
  },
  {
    title: "Reliable Local Service",
    description:
      "A Stoneleigh garment-care team focused on clear communication and dependable service.",
  },
] as const;
