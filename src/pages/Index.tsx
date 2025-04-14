
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
