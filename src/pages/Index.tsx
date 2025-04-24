
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CuriositySection from "@/components/CuriositySection";
import AudienceSection from "@/components/AudienceSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Scroll to the hash on mount and when the hash changes
  useEffect(() => {
    // Function to handle hash navigation
    const handleHashNavigation = () => {
      const hash = location.hash;
      if (hash) {
        // Wait a bit for the DOM to be fully rendered
        setTimeout(() => {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // If no hash is present, scroll to top
        window.scrollTo(0, 0);
      }
    };

    handleHashNavigation();
  }, [location]);

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <TestimonialsSection />
        <BenefitsSection />
        <ScreenshotsSection />
        <CuriositySection />
        <AudienceSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
