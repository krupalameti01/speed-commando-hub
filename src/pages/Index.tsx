import { HeroSection } from "@/components/hero-section"
import { RacesSection } from "@/components/races-section"
import { StatsSection } from "@/components/stats-section"

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <RacesSection />
    </main>
  );
};

export default Index;
