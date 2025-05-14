
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GONDOLAS<span className="text-secondary">PRO</span></h3>
            <p className="text-gray-400 mb-4">
              Soluções completas em expositores para supermercados, mercearias e lojas de varejo.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('beneficios')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gôndolas Centrais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gôndolas de Parede
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Checkouts e Caixas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Expositores Especiais
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">Av. das Indústrias, 1500</p>
              <p className="mb-2">São Paulo - SP, 04050-000</p>
              <p className="mb-2">Telefone: (11) 5555-5555</p>
              <p className="mb-2">E-mail: contato@gondolaspro.com.br</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} GondolasPro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
