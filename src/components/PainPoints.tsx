
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PainPoints = () => {
  const painPoints = [
    {
      id: 1,
      title: "Falta de controle da produção em tempo real",
      description: "Dificuldade em monitorar o andamento da produção e tomar decisões rápidas."
    },
    {
      id: 2,
      title: "Gestão de estoques ineficiente",
      description: "Problemas com controle de matéria-prima e produtos acabados, gerando perdas e atrasos."
    },
    {
      id: 3,
      title: "Processos desconectados",
      description: "Comercial, produção e financeiro trabalhando sem integração, causando retrabalho."
    },
    {
      id: 4,
      title: "Perdas por retrabalho e falhas",
      description: "Falta de controle de qualidade em todas as etapas da produção têxtil."
    },
    {
      id: 5,
      title: "Custos e margens de lucro imprecisos",
      description: "Dificuldade em calcular custos reais e definir preços adequados."
    },
    {
      id: 6,
      title: "Atrasos nas entregas",
      description: "Incapacidade de cumprir prazos, gerando insatisfação de clientes."
    },
  ];

  return (
    <section id="pain-points" className="bg-slate-50 py-20">
      <div className="container-section">
        <h2 className="section-heading text-center">Sua empresa têxtil enfrenta estes desafios?</h2>
        <p className="section-subheading text-center max-w-3xl mx-auto">
          Problemas comuns que afetam a produtividade e lucratividade da sua indústria têxtil e de confecção.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {painPoints.map((point) => (
            <Card key={point.id} className="border border-gray-200 overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-lermensys-green p-2 text-lermensys-darkblue mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-lermensys-darkblue">{point.title}</h3>
                    <p className="text-lermensys-gray">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-lermensys-darkblue mb-6">
            Se você se identificou com alguns destes problemas, você não está sozinho. E nós temos a solução.
          </p>
          <a 
            href="#solution" 
            className="btn-primary inline-block"
          >
            Conheça a solução
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
