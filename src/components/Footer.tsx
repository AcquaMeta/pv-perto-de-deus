import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark/95 text-dark-text pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/82170de5-fa4b-4db4-8aaf-39cd13cdcb0e.png"
                alt="Perto de Deus"
                className="h-10 w-auto"
              />
              <span className="font-cinzel text-xl font-bold ml-3 text-gold">Perto de Deus</span>
            </div>
            <p className="font-lato">
              Unindo tecnologia e fé para aproximar você de Deus todos os dias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-text hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-text hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-dark-text hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-text hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="font-lato hover:text-gold transition-colors">Início</a>
              </li>
              <li>
                <a href="#features" className="font-lato hover:text-gold transition-colors">Recursos</a>
              </li>
              <li>
                <a href="#pricing" className="font-lato hover:text-gold transition-colors">Preços</a>
              </li>
              <li>
                <a href="#testimonials" className="font-lato hover:text-gold transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#faq" className="font-lato hover:text-gold transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-lato hover:text-gold transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="font-lato hover:text-gold transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="font-lato hover:text-gold transition-colors">Política de Reembolso</a>
              </li>
              <li>
                <a href="#" className="font-lato hover:text-gold transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cinzel text-lg font-bold text-gold mb-4">Entre em Contato</h3>
            <ul className="space-y-3">
              <li className="font-lato">contato@pertodedeus.com</li>
              <li className="font-lato">Central de Ajuda</li>
              <li className="font-lato">Suporte ao Cliente</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold/10 mt-12 pt-8 text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <span className="text-dark-text text-sm">Pagamentos seguros</span>
            <span className="text-dark-text text-sm">|</span>
            <span className="text-dark-text text-sm">Privacidade garantida</span>
            <span className="text-dark-text text-sm">|</span>
            <span className="text-dark-text text-sm">Certificado SSL</span>
          </div>
          <p className="text-dark-text text-xs">
            &copy; {new Date().getFullYear()} Perto de Deus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
