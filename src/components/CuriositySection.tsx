
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const bulletPoints = [
  "O erro que 97% dos cristãos cometem ao acordar e como corrigi-lo com uma oração de 3 minutos",
  "O que Jesus fazia em silêncio que pode curar sua ansiedade (em menos de 5 min por dia)",
  "O ciclo invisível que sabota sua vida espiritual — e como quebrar isso",
  "A técnica antiga de oração que transforma completamente sua conexão com Deus",
  "Por que muitos devotos ainda se sentem vazios (e como resolver isso)",
  "O segredo bíblico para manter a paz em meio ao caos do dia a dia",
  "Como 3 minutos podem mudar completamente seu dia espiritual",
  "A prática esquecida que os primeiros cristãos usavam para fortalecer sua fé",
  "O método simples para ouvir a voz de Deus mais claramente",
  "Como transformar tarefas cotidianas em momentos de conexão espiritual",
];

const CuriositySection = () => {
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
    <section ref={ref} id="curiosity" className="py-20 px-6 bg-dark text-white">
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Descubra No App</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Revelações que Vão{" "}
                <span className="text-gold-light">
                  Transformar Sua Vida Espiritual
                </span>
              </motion.h2>
            </div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 bg-dark/50 p-6 rounded-xl border border-gold/20"
                >
                  <Star className="h-5 w-5 text-gold shrink-0 mt-1" />
                  <p className="font-lato text-dark-text">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CuriositySection;
