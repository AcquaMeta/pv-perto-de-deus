import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  {
    id: 1,
    title: "Pedidos de Oração",
    description: "Gerencie seus pedidos e horários de oração",
    image: "/lovable-uploads/ee819af0-99f3-43ac-81dd-12745b965bc9.png",
  },
  {
    id: 2,
    title: "Lista de Orações",
    description: "Acompanhe o status de suas orações",
    image: "/lovable-uploads/70a38272-76b1-480e-9578-795ea18b53f6.png",
  },
  {
    id: 3,
    title: "Cronômetro de Oração",
    description: "Registre seu tempo de oração",
    image: "/lovable-uploads/172a1c82-ed46-4300-8ce0-b22687b009c9.png",
  },
  {
    id: 4,
    title: "Novo Pedido",
    description: "Adicione novos pedidos de oração",
    image: "/lovable-uploads/6ef1bcc0-f5d7-4a19-8793-efdf29de7cad.png",
  },
];

const ScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      id="screenshots"
      className="py-20 px-6 bg-dark/95 text-white"
    >
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Demonstração do Produto</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Oração com{" "}
                <span className="text-gold-light">
                  Temporizador
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto"
              >
                Um espaço dedicado para suas orações, com ferramentas para gerenciar seus pedidos e acompanhar seu tempo de oração.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="relative mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {screenshots.map((screenshot) => (
                  <div 
                    key={screenshot.id} 
                    className="bg-dark/70 border border-gold/20 rounded-xl overflow-hidden shadow-lg hover:border-gold/50 transition-all"
                  >
                    <div className="p-6">
                      <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 border border-gold/30">
                        <img 
                          src={screenshot.image} 
                          alt={screenshot.title} 
                          className="w-full h-full object-contain bg-dark"
                        />
                      </div>
                      <h3 className="font-cinzel text-xl font-bold text-center mt-4 text-gold">{screenshot.title}</h3>
                      <p className="font-lato text-dark-text text-center mt-2">{screenshot.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ScreenshotsSection;
