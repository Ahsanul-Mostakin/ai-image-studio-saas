import { HomeHeroSection } from "@/components/HomeHeroSection";
import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { GridBackground } from "@/components/GridBackground";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection />
      <GridBackground />
      <PricingSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
