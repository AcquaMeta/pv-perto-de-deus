
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
            className="flex flex-col md:flex-row items-center max-w-6xl mx-auto"
          >
            <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Aplicativo Cristão</Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gold-light leading-tight"
              >
                Transforme Sua Vida Espiritual com o Aplicativo Perto de Deus
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="font-lato text-xl md:text-2xl text-dark-text mb-8 leading-relaxed"
              >
                O aplicativo que une tecnologia e fé para te aproximar de Deus todos os dias, com orações guiadas, devocionais poderosos, jejum compartilhado e muito mais!
              </motion.h2>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-dark font-cinzel font-medium transition-all text-lg px-8 py-6">
                  Comece sua jornada <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-dark/50 font-cinzel transition-all text-lg">
                  Ver demonstração
                </Button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-8 flex items-center">
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
            
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 rounded-xl overflow-hidden relative"
            >
              <div className="bg-gradient-to-br from-gold to-gold-dark rounded-xl p-[3px]">
                <div className="bg-dark rounded-lg p-2">
                  <img 
                    src="/lovable-uploads/a0274bed-c502-47a7-855a-cc893a707598.png" 
                    alt="Logo Perto de Deus" 
                    className="w-48 h-auto mx-auto mb-6"
                  />
                  <div className="bg-dark/80 rounded-lg p-4">
                    <ul className="flex flex-col space-y-4">
                      <li className="flex items-center space-x-3 text-gold hover:text-gold-light transition-all">
                        <span className="inline-block w-6">🏠</span>
                        <span className="font-cinzel">Início</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gold hover:text-gold-light transition-all">
                        <span className="inline-block w-6">🙏</span>
                        <span className="font-cinzel">Oração</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gold hover:text-gold-light transition-all">
                        <span className="inline-block w-6">⏱️</span>
                        <span className="font-cinzel">Jejum</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gold hover:text-gold-light transition-all">
                        <span className="inline-block w-6">📖</span>
                        <span className="font-cinzel">Devocionais</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gold hover:text-gold-light transition-all">
                        <span className="inline-block w-6">📚</span>
                        <span className="font-cinzel">Biblioteca</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gold hover:text-gold-light transition-all">
                        <span className="inline-block w-6">📅</span>
                        <span className="font-cinzel">Agenda</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full filter blur-2xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full filter blur-2xl opacity-70"></div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
