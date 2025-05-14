
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Durabilidade Superior",
    description: "Nossas gôndolas são fabricadas com materiais de alta qualidade que garantem anos de uso intenso sem perder a funcionalidade.",
  },
  {
    id: 2,
    title: "Design Modular",
    description: "Sistemas que permitem fácil adaptação e reconfiguração conforme as necessidades do seu negócio evoluem.",
  },
  {
    id: 3,
    title: "Otimização de Espaço",
    description: "Maximize a área de vendas com soluções que aproveitam cada centímetro do seu estabelecimento.",
  },
  {
    id: 4,
    title: "Estética Moderna",
    description: "Design contemporâneo que valoriza seus produtos e melhora a experiência de compra dos clientes.",
  },
  {
    id: 5,
    title: "Fácil Instalação",
    description: "Sistemas projetados para montagem rápida e simples, minimizando o tempo de instalação.",
  },
  {
    id: 6,
    title: "Assistência Técnica",
    description: "Suporte contínuo pós-venda e manutenção preventiva para garantir a longevidade do seu investimento.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Por Que Escolher Nossas Gôndolas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossas soluções em gôndolas e expositores oferecem muito mais do que simples prateleiras.
            Conheça os diferenciais que fazem nossos produtos se destacarem no mercado:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`flex p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in animate-delay-${index * 100}`}
            >
              <div className="mr-4 text-secondary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
