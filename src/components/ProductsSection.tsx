import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gôndolas Centrais",
    description:
      "Ideais para corredores de supermercados, com design modular e alta capacidade de carga.",
    image:
      "https://www.eliteaco.com.br/wp-content/uploads/2022/07/GONDOLA_CENTRAL_AMBIENTE.jpeg",
  },
  {
    id: 2,
    name: "Gôndolas de Parede",
    description:
      "Maximize o espaço aproveitando as paredes. Perfeitas para lojas e mercados de todos os tamanhos.",
    image:
      "https://image.made-in-china.com/202f0j00OsDaGfMqECbN/Beverage-Supermarket-Steel-Display-Rack.jpg",
  },
  // {
  //   id: 3,
  //   name: "Checkouts e Caixas",
  //   description:
  //     "Soluções ergonômicas e funcionais para a área de pagamento do seu estabelecimento.",
  //   image:
  //     "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  {
    id: 4,
    name: "Expositores Especiais",
    description:
      "Destaque produtos promocionais com nossos expositores de ponta de gôndola e ilhas.",
    image:
      "https://promarket.ind.br/wp-content/uploads/2022/07/BARATAO-ATACADO-Mesa-central-produtos-especiais37.jpg",
  },
];

const ProductsSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="produtos" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma linha completa de gôndolas e expositores para
            supermercados, mercearias e lojas de varejo. Conheça nossas
            soluções:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                >
                  Solicitar Informações
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Não encontrou o que procura? Temos soluções personalizadas para o
            seu negócio.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8"
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
