
import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import ContactForm from './ContactForm';

const CallToAction = () => {
  return (
    <section id="contact" className="bg-lermensys-darkblue text-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4">
            <Phone className="h-10 w-10" />
            <CalendarCheck className="h-10 w-10" />
          </div>
          <h2 className="section-heading text-white">Pronto para Potencializar sua Gestão Têxtil?</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Garanta o planejamento e a execução eficiente dos processos produtivos, evitando desperdícios e atrasos. 
            Agende uma demonstração personalizada e veja na prática como o Lermensys pode revolucionar seu negócio.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-lermensys-darkblue mb-6">Entre em contato</h3>
              <ContactForm />
            </div>
            
            <div className="bg-slate-50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl font-bold text-lermensys-darkblue mb-6">Por que agendar uma demonstração?</h3>
              
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="rounded-full bg-lermensys-green p-2 text-lermensys-darkblue h-fit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lermensys-darkblue">Apresentação personalizada</h4>
                    <p className="text-lermensys-gray">Demonstração adaptada às necessidades específicas da sua empresa têxtil.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="rounded-full bg-lermensys-green p-2 text-lermensys-darkblue h-fit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lermensys-darkblue">Consultoria especializada</h4>
                    <p className="text-lermensys-gray">Análise detalhada de como o Lermensys pode otimizar seus processos específicos.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="rounded-full bg-lermensys-green p-2 text-lermensys-darkblue h-fit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lermensys-darkblue">Plano de implementação</h4>
                    <p className="text-lermensys-gray">Proposta clara com cronograma e estratégia de implantação para sua empresa.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="rounded-full bg-lermensys-green p-2 text-lermensys-darkblue h-fit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lermensys-darkblue">Sem compromisso</h4>
                    <p className="text-lermensys-gray">Conheça nossa solução sem qualquer obrigação ou pressão comercial.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-lermensys-green/50 rounded-lg">
                <p className="text-center font-medium text-lermensys-darkblue">
                  Prefere falar por telefone? Ligue agora: <br/>
                  <a href="tel:4733300700" className="text-xl font-semibold underline hover:text-lermensys-red transition-colors">
                    (47) 3330-0700
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
