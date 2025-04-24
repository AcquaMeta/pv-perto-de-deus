
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  {
    id: 1,
    title: "Oração com Temporizador",
    description: "Defina tempos para suas orações e receba sugestões personalizadas",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Agenda Espiritual",
    description: "Organize sua rotina de devocionais e orações com lembretes",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Comunidade de Jejum",
    description: "Participe de desafios de jejum com outros fiéis",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Biblioteca Premium",
    description: "Acesse conteúdo exclusivo para crescimento espiritual",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Perfil de Progresso",
    description: "Acompanhe seu crescimento espiritual com estatísticas",
    image: "/placeholder.svg",
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
                Veja o Aplicativo{" "}
                <span className="text-gold-light">
                  em Ação
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto"
              >
                Conheça as principais funcionalidades que transformarão sua vida espiritual
                e te aproximarão de Deus todos os dias.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="relative mt-16">
              {/* Video Placeholder */}
              <div className="aspect-video max-w-3xl mx-auto bg-dark border border-gold/30 rounded-xl overflow-hidden shadow-lg mb-12 flex items-center justify-center">
                <div className="text-gold">Vídeo de demonstração do aplicativo</div>
              </div>

              {/* Screenshots Carousel */}
              <div className="mt-16">
                <div className="relative">
                  <div className="flex overflow-hidden mx-auto rounded-xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {screenshots.map((screenshot) => (
                        <div 
                          key={screenshot.id} 
                          className="min-w-full px-4"
                        >
                          <div className="bg-dark/70 border border-gold/20 rounded-xl overflow-hidden shadow-lg">
                            <div className="p-6">
                              <div className="aspect-[9/16] max-w-xs mx-auto bg-dark border border-gold/30 rounded-lg overflow-hidden mb-4">
                                <img 
                                  src={screenshot.image} 
                                  alt={screenshot.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h3 className="font-cinzel text-xl font-bold text-center mt-4 text-gold">{screenshot.title}</h3>
                              <p className="font-lato text-dark-text text-center">{screenshot.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark/80 hover:bg-dark border-gold/30 text-gold"
                    onClick={prevSlide}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline" 
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark/80 hover:bg-dark border-gold/30 text-gold"
                    onClick={nextSlide}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      className={`h-2 rounded-full transition-all ${
                        i === currentIndex ? "w-8 bg-gold" : "w-2 bg-gold/30"
                      }`}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ScreenshotsSection;
