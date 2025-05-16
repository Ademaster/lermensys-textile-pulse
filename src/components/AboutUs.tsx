
import React from 'react';
import { Info } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-lermensys-darkblue w-full h-64 md:h-96 rounded-xl"></div>
              <div className="absolute -top-4 -right-4 bg-lermensys-green p-4 rounded-lg">
                <Info className="h-8 w-8 text-lermensys-darkblue" />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-heading mb-6">Mais de 25 Anos de Experiência na Indústria Têxtil</h2>
            
            <p className="text-lermensys-gray mb-6">
              Desenvolvemos soluções em software para empresas de todas as regiões do Brasil, 
              focando nas necessidades e nos desafios da indústria que conhecemos muito bem.
            </p>
            
            <p className="text-lermensys-gray mb-6">
              O Lermensys unifica todos os setores da empresa, simplificando os processos e permitindo 
              acesso fácil e rápido à informações atualizadas de diferentes áreas como finanças, estoque, 
              vendas e produção.
            </p>
            
            <p className="text-lermensys-gray mb-6">
              Nossa missão é transformar a gestão das indústrias têxteis brasileiras, trazendo tecnologia 
              de ponta para aumentar a competitividade e o crescimento sustentável do setor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Falar com nossa equipe
              </a>
              <a href="#testimonials" className="btn-secondary">
                Ver depoimentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
