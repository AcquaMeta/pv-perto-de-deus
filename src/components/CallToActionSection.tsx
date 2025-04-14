
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CallToActionSection = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
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
      id="cta" 
      className="py-20 px-6 bg-gradient-to-b from-dark/90 to-dark"
    >
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gold"
            >
              Sua Vida Espiritual Merece Esta{" "}
              <span className="text-gold-light">
                Transformação!
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="font-lato text-lg md:text-xl text-dark-text mb-10 max-w-3xl mx-auto"
            >
              Milhares de cristãos já encontraram em "Perto de Deus" o aliado perfeito 
              para sua jornada de fé. O que está esperando?
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-dark font-cinzel font-bold transition-all text-lg px-8 py-6"
              >
                INICIAR MINHA JORNADA AGORA <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8 flex justify-center space-x-6">
              <div className="text-dark-text text-sm">Pagamentos seguros</div>
              <div className="text-dark-text text-sm">Privacidade garantida</div>
              <div className="text-dark-text text-sm">Certificado SSL</div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CallToActionSection;
