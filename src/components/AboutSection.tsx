
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, HandHeart } from "lucide-react";

const AboutSection = () => {
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

  const features = [
    {
      icon: BookOpen,
      title: "Devocionais Personalizados",
      description: "Conteúdo adaptado ao seu momento espiritual",
    },
    {
      icon: Users,
      title: "Jejum Guiado",
      description: "Calendários e práticas estruturadas de jejum",
    },
    {
      icon: HandHeart,
      title: "Orações Práticas",
      description: "Guias de oração para cada situação",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-dark/95">
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">O Que é o Perto de Deus?</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Uma Nova Forma de{" "}
                <span className="text-gold-light">
                  Vivenciar Sua Fé
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto mb-12"
              >
                O Perto de Deus foi criado para ajudar cristãos a se reconectarem com Deus 
                através de práticas guiadas, devocionais personalizados e ferramentas 
                espirituais modernas. Diferente de outras soluções religiosas genéricas, 
                nosso app é prático, direto e com linguagem acessível.
              </motion.p>
            </div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark/50 p-8 rounded-xl border border-gold/20 hover:border-gold/40 transition-all text-center"
                >
                  <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold mb-3 text-gold">
                    {feature.title}
                  </h3>
                  <p className="font-lato text-dark-text">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
