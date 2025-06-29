'use client';

import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Orçamento', href: '#orcamento' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-200/50">
      {/* Contact Bar */}
      <div className="bg-gray-900 text-white py-3">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <a 
              href="tel:+556130341042" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <Phone size={16} />
              <span className="font-medium">(61) 3034-1042</span>
            </a>
            <a 
              href="https://wa.me/5561981331104" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-all duration-200"
            >
              <MessageCircle size={16} />
              <span className="font-medium">(61) 98133-1104</span>
            </a>
            <a 
              href="mailto:contato@interpretando.com.br" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-200"
            >
              <Mail size={16} />
              <span className="font-medium">contato@interpretando.com.br</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="block hover:scale-105 transition-transform duration-200">
              <img 
                src="/images/logo.png" 
                alt="Interpretando - Tradução Profissional" 
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#orcamento')}
              className="ml-4 btn-primary text-sm"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6">
            <div className="card p-6 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleNavClick('#orcamento')}
                  className="btn-primary w-full"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 