
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-spiritual-700 to-divine-500 bg-clip-text text-transparent">
            Perto de Deus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="text-gray-700 hover:text-primary transition-colors">
            Recursos
          </Link>
          <Link to="/#testimonials" className="text-gray-700 hover:text-primary transition-colors">
            Depoimentos
          </Link>
          <Link to="/#pricing" className="text-gray-700 hover:text-primary transition-colors">
            Preços
          </Link>
          <Link to="/#faq" className="text-gray-700 hover:text-primary transition-colors">
            FAQ
          </Link>
          <Button className="bg-primary hover:bg-spiritual-700 transition-all">
            Comece Grátis <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-5 flex flex-col space-y-4">
          <Link 
            to="/#features" 
            className="text-gray-800 hover:text-primary transition-colors py-2 border-b"
            onClick={toggleMenu}
          >
            Recursos
          </Link>
          <Link 
            to="/#testimonials" 
            className="text-gray-800 hover:text-primary transition-colors py-2 border-b"
            onClick={toggleMenu}
          >
            Depoimentos
          </Link>
          <Link 
            to="/#pricing" 
            className="text-gray-800 hover:text-primary transition-colors py-2 border-b"
            onClick={toggleMenu}
          >
            Preços
          </Link>
          <Link 
            to="/#faq" 
            className="text-gray-800 hover:text-primary transition-colors py-2 border-b"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          <Button className="bg-primary hover:bg-spiritual-700 transition-all w-full">
            Comece Grátis <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
