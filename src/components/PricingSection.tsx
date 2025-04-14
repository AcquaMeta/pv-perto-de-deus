
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
      className="py-20 px-6 bg-white"
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
                <Badge variant="spiritual" className="mb-4">Oferta Especial</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Invista na sua{" "}
                <span className="bg-gradient-to-r from-spiritual-600 to-divine-500 bg-clip-text text-transparent">
                  Jornada Espiritual
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Escolha o plano perfeito para você e comece sua transformação espiritual hoje mesmo.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="max-w-4xl mx-auto p-2"
            >
              <div className="bg-gradient-to-r from-spiritual-400 to-divine-500 p-[3px] rounded-2xl">
                <div className="bg-white rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-100">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Pacote Anual com 50% de Desconto</h3>
                      <Badge variant="discount" className="text-sm mb-4">OFERTA LIMITADA</Badge>
                      <div className="flex items-baseline">
                        <span className="text-gray-400 line-through text-lg mr-2">R$119,40</span>
                        <span className="text-3xl md:text-4xl font-bold text-spiritual-700">R$59,70</span>
                        <span className="text-gray-600 ml-1">/ano</span>
                      </div>
                      <p className="text-gray-600 mt-2">Equivalente a R$4,97/mês - você economiza R$59,70</p>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-spiritual-700 transition-all text-lg mt-6 md:mt-0 w-full md:w-auto px-8 py-6"
                    >
                      QUERO ME APROXIMAR DE DEUS
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start">
                      <div className="mr-3 bg-green-100 p-1 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">7 dias grátis para testar</h4>
                        <p className="text-sm text-gray-600">Sem compromisso inicial</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 bg-green-100 p-1 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Cancelamento a qualquer momento</h4>
                        <p className="text-sm text-gray-600">Sem taxas ou multas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 bg-green-100 p-1 rounded-full">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Atualizações gratuitas para sempre</h4>
                        <p className="text-sm text-gray-600">Acesso a novos recursos</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 bg-green-100 rounded-full">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Garantia Incondicional de 30 dias</h3>
                        <p className="text-gray-600">
                          Experimente por 30 dias com nossa Garantia de Fé. Se não sentir seu relacionamento com Deus se fortalecer, devolvemos seu dinheiro sem questionamentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">Oferta especial válida apenas para os próximos 50 novos usuários!</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
