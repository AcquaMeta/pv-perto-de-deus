
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "O aplicativo funciona offline?",
    answer: "Sim! Todas as orações, devocionais e a Bíblia podem ser acessados sem internet após o primeiro download do conteúdo.",
  },
  {
    id: 2,
    question: "Posso usar em mais de um dispositivo?",
    answer: "Com certeza! Seu acesso sincroniza automaticamente entre celular, tablet e computador.",
  },
  {
    id: 3,
    question: "Como funciona o jejum compartilhado?",
    answer: "Você cria um grupo, convida amigos e todos recebem lembretes e apoio mútuo durante o período de jejum.",
  },
  {
    id: 4,
    question: "O que inclui o plano premium?",
    answer: "O plano premium inclui acesso ilimitado a todas as categorias de oração, devocionais exclusivos diários, rastreamento detalhado de progresso espiritual e conteúdo novo toda semana.",
  },
  {
    id: 5,
    question: "Como funciona a garantia?",
    answer: "Experimente por 30 dias com nossa Garantia de Fé. Se não sentir seu relacionamento com Deus se fortalecer, devolvemos seu dinheiro sem questionamentos.",
  },
  {
    id: 6,
    question: "Existe uma comunidade para os usuários?",
    answer: "Sim! Além da funcionalidade de jejum compartilhado, temos grupos de oração e estudos bíblicos onde você pode interagir com outros fiéis.",
  },
];

const FAQSection = () => {
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
    <section ref={ref} id="faq" className="py-20 px-6 bg-dark text-white">
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="gold" className="mb-4">Perguntas Frequentes</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Dúvidas{" "}
                <span className="text-gold-light">Comuns</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto"
              >
                Encontre respostas para as perguntas mais frequentes sobre o aplicativo Perto de Deus e como ele pode transformar sua jornada espiritual.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <motion.div key={faq.id} variants={itemVariants}>
                    <AccordionItem 
                      value={`item-${faq.id}`}
                      className="bg-dark/50 border border-gold/20 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left font-cinzel font-medium text-lg text-gold hover:text-gold-light">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 font-lato text-dark-text">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
