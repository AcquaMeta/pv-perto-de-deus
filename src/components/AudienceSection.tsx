
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { HandHeart } from "lucide-react";

const audiences = [
  {
    title: "Para você que sente que está afastado de Deus, mas quer recomeçar",
    description: "Encontre um caminho acolhedor de volta à sua fé",
  },
  {
    title: "Para você que ama Jesus, mas tem dificuldade de manter uma rotina espiritual",
    description: "Desenvolva hábitos consistentes de forma prática e guiada",
  },
  {
    title: "Para você que quer crescer espiritualmente com direção e leveza",
    description: "Alcance novos níveis em sua jornada espiritual sem pressão",
  },
];

const AudienceSection = () => {
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
    <section ref={ref} id="audience" className="py-20 px-6 bg-dark/95">
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Para Quem É</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Este App Foi Feito{" "}
                <span className="text-gold-light">
                  Para Você
                </span>
              </motion.h2>
            </div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark/50 p-8 rounded-xl border border-gold/20 hover:border-gold/40 transition-all"
                >
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <HandHeart className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-3 text-gold">
                    {audience.title}
                  </h3>
                  <p className="font-lato text-sm text-dark-text">
                    {audience.description}
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

export default AudienceSection;
