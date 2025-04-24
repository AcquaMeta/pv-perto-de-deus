
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Sinta Deus mais perto todos os dias",
    description: "Desenvolva uma conexão mais profunda e significativa com Deus através de práticas diárias",
  },
  {
    title: "Pratique o jejum com estrutura e constância",
    description: "Calendários e guias personalizados para fortalecer sua disciplina espiritual",
  },
  {
    title: "Tenha direção espiritual sem depender de terceiros",
    description: "Recursos e orientações práticas para seu crescimento pessoal na fé",
  },
  {
    title: "Construa uma rotina de fé em poucos minutos por dia",
    description: "Práticas rápidas e eficientes que se encaixam em qualquer agenda",
  },
  {
    title: "Rompa com a inconstância e recomece com força",
    description: "Ferramentas e suporte para manter sua vida espiritual ativa e vibrante",
  },
];

const BenefitsSection = () => {
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
    <section ref={ref} id="benefits" className="py-20 px-6 bg-dark/95">
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Benefícios Transformadores</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                O Que o Perto de Deus Vai{" "}
                <span className="text-gold-light">
                  Fazer Por Você
                </span>
              </motion.h2>
            </div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 bg-dark/50 p-6 rounded-xl border border-gold/20 hover:border-gold/40 transition-all"
                >
                  <div className="bg-gold/10 rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold mb-2 text-gold">
                      {benefit.title}
                    </h3>
                    <p className="font-lato text-sm text-dark-text">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
