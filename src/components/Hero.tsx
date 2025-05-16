
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-lermensys-darkblue to-slate-800 text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme sua Produção Têxtil: Mais Controle, Menos Desperdício
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Conheça o Lermensys, o sistema de gestão completo que integra todos os seus processos, otimiza decisões e impulsiona seus resultados na indústria têxtil e de confecção.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button className="btn-primary text-base px-8 py-6 w-full sm:w-auto" asChild>
                <a href="#contact">AGENDAR DEMONSTRAÇÃO GRATUITA</a>
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-5 rounded-lg w-full sm:w-auto" asChild>
                <a href="#solution">Saiba mais</a>
              </Button>
            </div>
            
            <div className="hidden lg:flex items-center gap-2 text-sm opacity-80">
              <span>Mais de 25 anos de experiência</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>Confiança de +500 empresas do setor</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
              <h3 className="text-xl font-medium mb-4">Quer falar com um especialista?</h3>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <Input 
                  type="tel" 
                  placeholder="Digite seu telefone" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-lermensys-red hover:bg-red-600 whitespace-nowrap">
                  Nós ligamos!
                </Button>
              </div>
              
              <p className="text-sm opacity-70">
                Receba uma ligação da nossa equipe em horário comercial
              </p>
              
              <div className="mt-6 bg-white/5 rounded-lg p-4">
                <div className="text-sm flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-lermensys-red rounded-full p-1 mt-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p>Demonstração personalizada para sua empresa têxtil</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-lermensys-red rounded-full p-1 mt-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p>Entenda como otimizar seus processos específicos</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-lermensys-red rounded-full p-1 mt-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p>Sem compromisso ou cobranças</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#pain-points" className="text-white/70 hover:text-white transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
