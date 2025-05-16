
import React from 'react';
import { FileText, BarChart, RefreshCw, Layers, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  const benefits = [
    {
      icon: <FileText className="h-10 w-10 text-lermensys-darkblue" />,
      title: "Controle Total da Produção",
      description: "Acompanhe cada etapa, identifique gargalos e otimize o fluxo produtivo em tempo real."
    },
    {
      icon: <BarChart className="h-10 w-10 text-lermensys-darkblue" />,
      title: "Gestão de Estoque Inteligente",
      description: "Evite faltas e excessos de materiais, reduza custos e elimine perdas desnecessárias."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-lermensys-darkblue" />,
      title: "Integração Completa",
      description: "Comercial, PCP, chão de fábrica, financeiro e expedição trabalhando em perfeita sintonia."
    },
    {
      icon: <Layers className="h-10 w-10 text-lermensys-darkblue" />,
      title: "Decisões Baseadas em Dados",
      description: "Relatórios e dashboards customizáveis para uma visão clara e estratégica do seu negócio."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-lermensys-darkblue" />,
      title: "Aumento da Produtividade",
      description: "Otimize recursos, reduza desperdícios e melhore suas margens de forma significativa."
    },
    {
      icon: <Shield className="h-10 w-10 text-lermensys-darkblue" />,
      title: "Qualidade Assegurada",
      description: "Rastreabilidade e controle de qualidade em todas as fases do processo produtivo."
    }
  ];

  return (
    <section id="solution" className="bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Lermensys: A Inteligência que sua Indústria Têxtil Precisa</h2>
          <p className="section-subheading max-w-4xl mx-auto">
            Um sistema de gestão ERP robusto e especializado, desenvolvido por quem entende os desafios da indústria têxtil e de confecção. 
            Integramos todos os seus setores, desde a entrada do pedido até a expedição, fornecendo informações precisas em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-lermensys-green rounded-xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-lermensys-darkblue">{benefit.title}</h3>
                  <p className="text-lermensys-gray">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-lermensys-darkblue to-slate-800 p-8 md:p-12 rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Indústria 4.0 integrada ao seu ERP
              </h3>
              <p className="text-white/80">
                APIs de integração com equipamentos industriais fornecem dados de produção em tempo real ao ERP Lermensys, 
                permitindo melhor tomada de decisões com informações centralizadas e atualizadas.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <a href="#contact" className="btn-primary whitespace-nowrap">
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
