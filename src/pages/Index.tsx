import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

const Index = () => {
  useScrollRestoration();
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <ActivitiesSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
};

export default Index;