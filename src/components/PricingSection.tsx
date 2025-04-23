
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Timer, Clock } from "lucide-react";

const PricingSection = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants for fade-in effects
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
      id="pricing"
      className="py-20 px-6 bg-dark/95 text-white"
    >
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center mb-8">
              <motion.div variants={itemVariants} className="mb-6">
                <Badge variant="discount" className="text-sm px-4 py-1">OFERTA POR TEMPO LIMITADO</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-gold"
              >
                <span className="text-gold-light">
                  Mais de 2 mil cristãos
                </span>{" "}
                já transformaram suas rotinas com o Perto de Deus
              </motion.h2>
            </div>

            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto p-2"
            >
              <div className="bg-gradient-to-r from-gold to-gold-dark p-[3px] rounded-2xl">
                <div className="bg-dark rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gold/10">
                    <div>
                      <h3 className="font-cinzel text-2xl md:text-3xl font-bold mb-2 text-gold">Acesso Vitalício - Oferta Única</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="discount" className="text-sm">APENAS HOJE</Badge>
                        <Timer className="text-gold h-5 w-5 animate-pulse" />
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-dark-text line-through text-lg mr-2">R$97,00</span>
                        <span className="text-4xl md:text-5xl font-bold text-gold">R$27,00</span>
                      </div>
                      <p className="font-lato text-dark-text mt-2">Pagamento único - Sem mensalidades</p>
                    </div>
                    <Button 
                      className="bg-gold hover:bg-gold-dark text-dark font-cinzel font-bold transition-all mt-6 md:mt-0 w-full md:w-auto px-8 py-6"
                    >
                      QUERO ME APROXIMAR DE DEUS
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-start">
                      <div className="mr-3 bg-gold/20 p-1 rounded-full">
                        <Check className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cinzel font-medium mb-1 text-gold-light">Acesso imediato</h4>
                        <p className="text-sm text-dark-text">Comece agora mesmo</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 bg-gold/20 p-1 rounded-full">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cinzel font-medium mb-1 text-gold-light">Oferta por tempo limitado</h4>
                        <p className="text-sm text-dark-text">Preço especial de lançamento</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 bg-gold/20 p-1 rounded-full">
                        <ShieldCheck className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cinzel font-medium mb-1 text-gold-light">Garantia de 30 dias</h4>
                        <p className="text-sm text-dark-text">Satisfação ou seu dinheiro de volta</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-6 border-t border-gold/10">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-gold" />
                      <span className="text-sm text-dark-text">Certificado SSL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-gold" />
                      <span className="text-sm text-dark-text">Pagamento Seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-gold" />
                      <span className="text-sm text-dark-text">Garantia de Reembolso</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gold hover:bg-gold-dark text-dark font-cinzel font-bold transition-all mt-8 px-8 py-6"
                  >
                    QUERO TRANSFORMAR MINHA VIDA ESPIRITUAL AGORA
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-dark-text">⚡ Oferta especial válida apenas por mais algumas horas!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
