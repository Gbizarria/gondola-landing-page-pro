
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sobre a GondolasPro</h2>
            <p className="text-lg text-gray-600 mb-4">
              Há mais de 15 anos no mercado, a GondolasPro se dedica a fornecer as melhores soluções em gôndolas 
              e expositores para supermercados, mercearias e lojas de varejo em todo o Brasil.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Nossa missão é transformar espaços comerciais com produtos de qualidade que aumentam a visibilidade 
              dos produtos e melhoram a experiência de compra dos consumidores.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Contamos com uma equipe especializada em projetos personalizados e instalação profissional, 
              garantindo a satisfação completa dos nossos clientes do início ao fim do processo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Equipe GondolasPro" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
