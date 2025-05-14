
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    position: "Gerente",
    company: "Supermercado Boa Compra",
    quote: "As gôndolas da GondolasPro transformaram completamente o visual do nosso mercado. A qualidade é excepcional e o fluxo de clientes melhorou significativamente."
  },
  {
    id: 2,
    name: "Mariana Oliveira",
    position: "Proprietária",
    company: "Mercearia Oliveira",
    quote: "Como um pequeno negócio, precisávamos de soluções que otimizassem nosso espaço. As gôndolas de parede foram perfeitas e o atendimento foi exemplar."
  },
  {
    id: 3,
    name: "Roberto Santos",
    position: "Diretor Comercial",
    company: "Rede Compre Bem",
    quote: "Equipamos todas as nossas 12 lojas com as gôndolas da GondolasPro. A padronização, qualidade e o suporte pós-venda são diferenciais que nos fazem recomendar sem hesitar."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="clientes" className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o nosso melhor cartão de visitas. 
            Confira alguns depoimentos de quem já transformou seu negócio com nossas soluções:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className={`bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-colors duration-300 animate-fade-in animate-delay-${index * 100}`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 italic opacity-90">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.position}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
