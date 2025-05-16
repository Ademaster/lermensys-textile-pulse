
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LERMENSYS</h3>
            <p className="text-slate-300 mb-4">
              Soluções de gestão especializada para a indústria têxtil e de confecção.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-lermensys-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-lermensys-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-lermensys-red transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#modules" className="text-slate-300 hover:text-white transition-colors">Confecção</a></li>
              <li><a href="#modules" className="text-slate-300 hover:text-white transition-colors">Fiação</a></li>
              <li><a href="#modules" className="text-slate-300 hover:text-white transition-colors">Tinturaria</a></li>
              <li><a href="#modules" className="text-slate-300 hover:text-white transition-colors">Malharia</a></li>
              <li><a href="#modules" className="text-slate-300 hover:text-white transition-colors">Tecelagem</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-lermensys-red">•</span>
                <span className="text-slate-300">Rua Blumenau, 178 - Centro<br />Jaraguá do Sul - SC, 89251-060</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lermensys-red">•</span>
                <a href="tel:4733300700" className="text-slate-300 hover:text-white transition-colors">(47) 3330-0700</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lermensys-red">•</span>
                <a href="mailto:contato@lermensys.com.br" className="text-slate-300 hover:text-white transition-colors">contato@lermensys.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Lermensys. Todos os direitos reservados.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Desenvolvido com tecnologia avançada para a indústria têxtil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
