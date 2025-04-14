
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Início", href: "#hero" },
  { name: "Recursos", href: "#features" },
  { name: "Demonstração", href: "#screenshots" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Preços", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-sm py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/a0274bed-c502-47a7-855a-cc893a707598.png" 
              alt="Perto de Deus" 
              className="h-10 w-auto" 
            />
            <span className="font-cinzel text-xl font-bold ml-3 text-gold">Perto de Deus</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-cinzel px-3 py-2 text-dark-text hover:text-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="ml-4 border-gold text-gold hover:bg-gold hover:text-dark"
            >
              Login
            </Button>
            <Button
              className="ml-2 bg-gold text-dark hover:bg-gold-dark"
            >
              Registrar
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark-text hover:text-gold focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-cinzel px-3 py-2 text-dark-text hover:text-gold transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-gold/10">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Button>
                <Button
                  className="bg-gold text-dark hover:bg-gold-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Registrar
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
