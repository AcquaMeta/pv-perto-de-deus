
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Library, 
  Activity, 
  Calendar, 
  User,
  Settings,
  FileText,
  Bell
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Jornada Espiritual Personalizada",
    description: "Dashboard personalizado com versículo diário e desafio espiritual",
    icon: Activity,
    color: "text-gold",
  },
  {
    id: 2,
    title: "Jejum em Comunidade",
    description: "Acompanhamento de jejum com timer e orientações espirituais",
    icon: Clock,
    color: "text-gold",
  },
  {
    id: 3,
    title: "Devocionais Diários",
    description: "Planos de leitura e conteúdo devocional exclusivo",
    icon: BookOpen,
    color: "text-gold",
  },
  {
    id: 4,
    title: "Biblioteca Sagrada",
    description: "Recursos espirituais, e-books e dicas diárias",
    icon: Library,
    color: "text-gold",
  },
  {
    id: 5,
    title: "Agenda Espiritual",
    description: "Acompanhamento de eventos e práticas espirituais",
    icon: Calendar,
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

            {/* Módulos do Aplicativo */}
            <div className="mt-24">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <Badge variant="gold" className="mb-4">Módulos Completos</Badge>
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold">
                  Tudo que você precisa para sua <span className="text-gold-light">jornada espiritual</span>
                </h2>
                <p className="font-lato text-lg text-dark-text max-w-2xl mx-auto">
                  O Perto de Deus oferece módulos completos para apoiar cada aspecto do seu crescimento na fé.
                </p>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
              >
                {/* Dashboard */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Activity className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Dashboard</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Boas-vindas personalizadas
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Rastreador de progresso espiritual
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Versículo bíblico diário
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Desafio espiritual diário
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo de Oração */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Oração</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Gerenciamento de pedidos de oração
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Temporizador de oração
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Registro e acompanhamento
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Filtro por categorias
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo de Jejum */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Jejum</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Acompanhamento de jejum
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Temporizador de jejum
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Orientação espiritual
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Histórico de jejuns concluídos
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo Devocionais */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Devocionais</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Planos de leitura
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Conteúdo devocional diário
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Acompanhamento de progresso
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Novos planos de leitura
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo Biblioteca */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Library className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Biblioteca</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Recursos espirituais
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Dicas diárias
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      E-books
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Filtragem e busca de recursos
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo Agenda */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Agenda</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Acompanhamento de eventos espirituais
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Gerenciamento de tarefas
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Lista de verificação para práticas
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo Perfil */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Perfil</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Avatar bíblico personalizado
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Estatísticas espirituais
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Conquistas e visualização de jornada
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Conexão com amigos
                    </li>
                  </ul>
                </motion.div>

                {/* Módulo Configurações */}
                <motion.div variants={itemVariants} className="bg-dark/50 border border-gold/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Settings className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-gold">Configurações</h3>
                  </div>
                  <ul className="space-y-2 font-lato text-dark-text pl-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Personalização de tema
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Configurações de acessibilidade
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      Configurações de segurança
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
