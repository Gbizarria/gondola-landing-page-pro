
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Soluções em Gôndolas para o seu Negócio
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Maximize o espaço e as vendas do seu mercado com nossas gôndolas de alta qualidade, 
            design moderno e durabilidade superior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('produtos')} 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg py-6 px-8"
            >
              Nossos Produtos
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8"
            >
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
