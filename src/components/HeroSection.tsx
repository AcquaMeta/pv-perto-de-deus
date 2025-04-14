
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants for elements
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
      ref={sectionRef} 
      id="hero" 
      className="pt-32 pb-20 px-6 bg-gradient-to-b from-dark to-dark/95 text-white overflow-hidden"
    >
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col items-center max-w-6xl mx-auto text-center"
          >
            <div className="w-full max-w-4xl">
              <motion.h1 
                variants={itemVariants}
                className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gold-light leading-tight"
              >
                Transforme Sua Vida Espiritual com o Perto de Deus
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="font-lato text-xl md:text-2xl text-dark-text mb-8 leading-relaxed"
              >
                O aplicativo que une tecnologia e fé para te aproximar de Deus todos os dias, com orações guiadas, devocionais poderosos, jejum compartilhado e muito mais!
              </motion.h2>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-dark font-cinzel font-medium transition-all text-lg px-8 py-6">
                  Comece sua jornada <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-dark/50 font-cinzel transition-all text-lg">
                  Ver demonstração
                </Button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-gold/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-gold">
                        {i === 4 ? '+' : ''}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-dark-text">
                  Já são <span className="font-bold text-gold">127.854</span> vidas transformadas através do Perto de Deus!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
