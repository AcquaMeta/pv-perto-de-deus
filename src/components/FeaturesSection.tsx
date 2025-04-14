
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Heart, BookMarked, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const features = [
  {
    id: 1,
    icon: <BookOpen className="h-8 w-8 text-spiritual-600" />,
    title: "Orações Guiadas",
    description:
      "Mais de 100 categorias de orações para cada momento da sua vida, com temporizadores e textos inspiradores.",
  },
  {
    id: 2,
    icon: <Users className="h-8 w-8 text-spiritual-600" />,
    title: "Jejum em Comunidade",
    description:
      "Conecte-se com outros fiéis e fortaleça sua disciplina espiritual juntos através de grupos e desafios.",
  },
  {
    id: 3,
    icon: <BookMarked className="h-8 w-8 text-spiritual-600" />,
    title: "Devocionais Diários",
    description:
      "Conteúdo exclusivo para alimentar sua alma todos os dias, com reflexões profundas e aplicações práticas.",
  },
  {
    id: 4,
    icon: <BookOpen className="h-8 w-8 text-spiritual-600" />,
    title: "Biblioteca Sagrada",
    description:
      "Acesso à Bíblia, livros cristãos e estudos teológicos em um só lugar para aprofundar sua fé.",
  },
  {
    id: 5,
    icon: <Clock className="h-8 w-8 text-spiritual-600" />,
    title: "Lembretes Personalizados",
    description:
      "Configure notificações para nunca esquecer seus momentos de oração e devoção diária.",
  },
  {
    id: 6,
    icon: <LineChart className="h-8 w-8 text-spiritual-600" />,
    title: "Acompanhamento Espiritual",
    description:
      "Registre seu progresso e veja sua jornada de fé evoluir com estatísticas e gráficos motivadores.",
  },
];

const FeaturesSection = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref: sectionRef, inView } = useInView({
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
      ref={sectionRef}
      id="features"
      className="py-20 px-6 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="spiritual" className="mb-4">Recursos Exclusivos</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Por que escolher o{" "}
              <span className="bg-gradient-to-r from-spiritual-600 to-divine-500 bg-clip-text text-transparent">
                Perto de Deus
              </span>
              ?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Nossa plataforma foi projetada para fortalecer seu relacionamento com Deus
              através de ferramentas poderosas e conteúdo inspirador.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all group"
                >
                  <div className="mb-6 inline-block p-3 bg-spiritual-50 rounded-lg group-hover:bg-spiritual-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
