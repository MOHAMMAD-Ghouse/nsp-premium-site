import { AboutSection } from "@/components/sections/about";
import { BookingSection } from "@/components/sections/booking";
import { CollectionSection } from "@/components/sections/collection";
import { ContactSection } from "@/components/sections/contact";
import { DriveUpSection } from "@/components/sections/drive-up";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseSection } from "@/components/sections/why-choose";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DriveUpSection />
      <CollectionSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <BookingSection />
      <ContactSection />
    </>
  );
}
