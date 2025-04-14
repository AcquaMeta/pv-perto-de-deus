
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Ana C.",
    age: "34 anos",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "O Perto de Deus mudou minha rotina espiritual! Agora consigo manter constância na minha vida de oração e já vi milagres acontecerem!",
  },
  {
    id: 2,
    name: "Marcos R.",
    age: "28 anos",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Nunca consegui completar um jejum antes. Com o recurso de jejum compartilhado, finalmente consegui e foi transformador!",
  },
  {
    id: 3,
    name: "Luciana M.",
    age: "42 anos",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Os devocionais diários são profundos e práticos! Minha manhã começa com muito mais propósito desde que instalei o app.",
  },
  {
    id: 4,
    name: "João P.",
    age: "31 anos",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "A função de lembretes me ajudou a manter a disciplina. Nunca estive tão próximo de Deus quanto agora!",
  },
];

const TestimonialsSection = () => {
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
      id="testimonials"
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
                <Badge variant="gold" className="mb-4">Depoimentos Reais</Badge>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-gold"
              >
                Vidas{" "}
                <span className="text-gold-light">
                  Transformadas
                </span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="font-lato text-lg text-dark-text max-w-2xl mx-auto"
              >
                Descubra como o aplicativo Perto de Deus tem ajudado milhares de pessoas a
                aprofundarem sua fé e relacionamento com Deus.
              </motion.p>
            </div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="bg-dark/50 p-8 rounded-xl border border-gold/20 hover:border-gold/40 transition-all"
                >
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-gold/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gold/10 text-gold">
                        {testimonial.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-cinzel font-bold text-gold">{testimonial.name}</h3>
                      <p className="text-sm text-dark-text">{testimonial.age}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-gold fill-gold"
                        />
                      ))}
                  </div>

                  <p className="font-lato text-dark-text italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
