
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-xl font-bold text-primary">GONDOLAS<span className="text-secondary">PRO</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('produtos')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('beneficios')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('clientes')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Clientes
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            Contato
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-fade-in">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('clientes')}
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              Clientes
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              Sobre
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
