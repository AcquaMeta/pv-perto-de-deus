
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Oferta Especial</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Invista na sua{" "}
                <span className="text-gold-light">
                  Jornada Espiritual
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto"
              >
                Escolha o plano perfeito para você e comece sua transformação espiritual hoje mesmo.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto p-2"
            >
              <div className="bg-gradient-to-r from-gold to-gold-dark p-[3px] rounded-2xl">
                <div className="bg-dark rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gold/10">
                    <div>
                      <h3 className="font-cinzel text-2xl md:text-3xl font-bold mb-2 text-gold">Pacote Anual com 50% de Desconto</h3>
                      <Badge variant="discount" className="text-sm mb-4">OFERTA LIMITADA</Badge>
                      <div className="flex items-baseline">
                        <span className="text-dark-text line-through text-lg mr-2">R$119,40</span>
                        <span className="text-3xl md:text-4xl font-bold text-gold">R$59,70</span>
                        <span className="text-dark-text ml-1">/ano</span>
                      </div>
                      <p className="font-lato text-dark-text mt-2">Equivalente a R$4,97/mês - você economiza R$59,70</p>
                    </div>
                    <Button 
                      className="bg-gold hover:bg-gold-dark text-dark font-cinzel font-bold transition-all mt-6 md:mt-0 w-full md:w-auto px-8 py-6"
                    >
                      QUERO ME APROXIMAR DE DEUS
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start">
                      <div className="mr-3 bg-gold/20 p-1 rounded-full">
                        <Check className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cinzel font-medium mb-1 text-gold-light">7 dias grátis para testar</h4>
                        <p className="text-sm text-dark-text">Sem compromisso inicial</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 bg-gold/20 p-1 rounded-full">
                        <Check className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cinzel font-medium mb-1 text-gold-light">Cancelamento a qualquer momento</h4>
                        <p className="text-sm text-dark-text">Sem taxas ou multas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 bg-gold/20 p-1 rounded-full">
                        <Check className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-cinzel font-medium mb-1 text-gold-light">Atualizações gratuitas para sempre</h4>
                        <p className="text-sm text-dark-text">Acesso a novos recursos</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-dark/50 border border-gold/20 rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-gold/20 rounded-full">
                        <Check className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-cinzel font-bold text-lg mb-1 text-gold">Garantia Incondicional de 30 dias</h3>
                        <p className="font-lato text-dark-text">
                          Experimente por 30 dias com nossa Garantia de Fé. Se não sentir seu relacionamento com Deus se fortalecer, devolvemos seu dinheiro sem questionamentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-dark-text">Oferta especial válida apenas para os próximos 50 novos usuários!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
