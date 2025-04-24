
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const MethodologySection = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <section ref={ref} id="methodology" className="py-20 px-6 bg-dark text-white">
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="gold" className="mb-4">Nossa História</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
            >
              De Uma Busca Pessoal a Uma{" "}
              <span className="text-gold-light">
                Solução para Milhares
              </span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-6 mb-12 text-left">
              <p className="font-lato text-lg text-dark-text">
                Como muitos cristãos, eu também enfrentava dificuldades em manter minha constância 
                espiritual. Mesmo frequentando a igreja, sentia que algo estava faltando - aquela 
                conexão diária e profunda com Deus.
              </p>
              
              <p className="font-lato text-lg text-dark-text">
                Após anos de tentativas e erros, desenvolvi uma estrutura prática que transformou 
                minha vida espiritual. Esta estrutura evoluiu e se tornou o Perto de Deus - um 
                aplicativo que já ajudou milhares de cristãos a se reconectarem com sua fé.
              </p>
              
              <p className="font-lato text-lg text-dark-text">
                Hoje, compartilho com você esta mesma metodologia que revolucionou minha vida e a 
                de tantos outros irmãos em Cristo.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-dark font-cinzel font-bold transition-all text-lg px-8 py-6"
              >
                Quero Seguir Este Caminho <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MethodologySection;
