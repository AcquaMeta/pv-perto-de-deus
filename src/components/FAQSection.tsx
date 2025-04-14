
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O aplicativo funciona offline?",
    answer:
      "Sim! Todas as orações, devocionais e a Bíblia podem ser acessados sem internet. Basta baixar o conteúdo previamente quando estiver conectado à internet.",
  },
  {
    question: "Posso usar em mais de um dispositivo?",
    answer:
      "Com certeza! Seu acesso sincroniza automaticamente entre celular, tablet e computador. Basta fazer login com a mesma conta em todos os dispositivos.",
  },
  {
    question: "Como funciona o jejum compartilhado?",
    answer:
      "Você cria um grupo, convida amigos e todos recebem lembretes e apoio mútuo durante o período de jejum. O app permite definir metas, trocar mensagens de encorajamento e acompanhar o progresso de todos os participantes.",
  },
  {
    question: "Qual a frequência de atualização dos devocionais?",
    answer:
      "Novos devocionais são adicionados diariamente ao aplicativo. Temos uma equipe de teólogos e escritores cristãos que preparam conteúdo relevante e bíblico para cada dia.",
  },
  {
    question: "Como posso cancelar minha assinatura?",
    answer:
      "Você pode cancelar sua assinatura a qualquer momento através da tela de configurações do aplicativo ou entrando em contato com nosso suporte. Não há taxas de cancelamento ou período mínimo de permanência.",
  },
  {
    question: "O aplicativo é seguro para meus dados pessoais?",
    answer:
      "Absolutamente! Valorizamos sua privacidade e segurança. Utilizamos criptografia de ponta a ponta para proteger seus dados pessoais e não compartilhamos suas informações com terceiros sem sua permissão expressa.",
  },
];

const FAQSection = () => {
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
      id="faq"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="container mx-auto">
        {isClient && (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <Badge variant="spiritual" className="mb-4">Perguntas Frequentes</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Tire suas{" "}
                <span className="bg-gradient-to-r from-spiritual-600 to-divine-500 bg-clip-text text-transparent">
                  Dúvidas
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Encontre respostas para as perguntas mais comuns sobre o aplicativo Perto de Deus.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-medium py-4 hover:text-spiritual-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <p className="text-gray-600">
                Ainda tem dúvidas? Entre em contato com nosso suporte{" "}
                <a href="mailto:suporte@pertodedeus.com" className="text-spiritual-600 hover:underline">
                  suporte@pertodedeus.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
