
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Library, 
  LineChart, 
  Heart 
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Orações Guiadas",
    description: "Mais de 100 categorias de orações para cada momento da sua vida",
    icon: Heart,
    color: "text-gold",
  },
  {
    id: 2,
    title: "Jejum em Comunidade",
    description: "Conecte-se com outros fiéis e fortaleça sua disciplina espiritual juntos",
    icon: Clock,
    color: "text-gold",
  },
  {
    id: 3,
    title: "Devocionais Diários",
    description: "Conteúdo exclusivo para alimentar sua alma todos os dias",
    icon: BookOpen,
    color: "text-gold",
  },
  {
    id: 4,
    title: "Biblioteca Sagrada",
    description: "Acesso à Bíblia, livros cristãos e estudos teológicos",
    icon: Library,
    color: "text-gold",
  },
  {
    id: 5,
    title: "Acompanhamento Espiritual",
    description: "Registre seu progresso e veja sua jornada de fé evoluir",
    icon: LineChart,
    color: "text-gold",
  },
  {
    id: 6,
    title: "Comunidade de Fé",
    description: "Conecte-se com irmãos em Cristo e cresçam juntos na fé",
    icon: Users,
    color: "text-gold",
  },
];

const FeaturesSection = () => {
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
      id="features"
      className="py-20 px-6 bg-dark text-white"
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
                <Badge variant="gold" className="mb-4">Por Que Escolher Perto de Deus?</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Funcionalidades Inspiradas para sua{" "}
                <span className="text-gold-light">
                  Jornada de Fé
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto"
              >
                Descubra como o aplicativo Perto de Deus pode transformar sua vida
                espiritual com recursos poderosos e intuitivos.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className="bg-dark/50 border border-gold/20 p-6 rounded-xl hover:border-gold/50 transition-all"
                >
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold mb-2 text-gold">{feature.title}</h3>
                  <p className="font-lato text-dark-text">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
