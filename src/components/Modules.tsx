
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from 'lucide-react';

const Modules = () => {
  const [activeTab, setActiveTab] = useState("confeccao");

  const modules = {
    confeccao: {
      title: "Gestão Visual para Confecção",
      description: "Controle completo da produção de vestuário, desde o desenvolvimento da peça até a expedição do produto acabado.",
      features: [
        "Controle de novas coleções",
        "Grade de frequência (cor e tamanho)",
        "Gerenciamento de facções",
        "Controle de qualidade e produtividade"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    fiacao: {
      title: "Sistema Integrado para Fiação",
      description: "Controle preciso da transformação de fibras em fios, com monitoramento de produtividade e qualidade.",
      features: [
        "Controle de lotes de fio",
        "Gestão de matéria-prima",
        "Monitoramento de máquinas",
        "Planejamento de produção"
      ],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    tinturaria: {
      title: "Controle para Tinturaria",
      description: "Gerenciamento completo dos processos de tingimento e acabamento, com foco em qualidade e repetibilidade.",
      features: [
        "Controle de receitas de cores",
        "Gestão de produtos químicos",
        "Rastreabilidade de lotes",
        "Monitoramento de processos"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    malharia: {
      title: "Solução para Malharia",
      description: "Gestão eficiente da produção de malhas, com controle de qualidade e produtividade por máquina.",
      features: [
        "Programação de máquinas",
        "Controle de rendimento",
        "Gestão de paradas",
        "Rastreabilidade de produção"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    tecelagem: {
      title: "Sistema para Tecelagem",
      description: "Controle total do processo de tecelagem, com monitoramento em tempo real e gestão de eficiência.",
      features: [
        "Controle de tecidos",
        "Gestão de urdume e trama",
        "Monitoramento de teares",
        "Análise de eficiência"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  };

  return (
    <section id="modules" className="bg-slate-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Layers className="h-12 w-12 text-lermensys-darkblue" />
          </div>
          <h2 className="section-heading">Do Fio ao Produto Acabado: Um Sistema Pensado para Você</h2>
          <p className="section-subheading max-w-4xl mx-auto">
            Soluções sob medida para cada etapa da sua cadeia têxtil, com funcionalidades específicas para cada setor.
          </p>
        </div>

        <Tabs defaultValue="confeccao" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="mb-8">
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent">
              <TabsTrigger 
                value="confeccao"
                className="data-[state=active]:bg-lermensys-darkblue data-[state=active]:text-white px-8 py-3 rounded-md"
              >
                Confecção
              </TabsTrigger>
              <TabsTrigger 
                value="fiacao" 
                className="data-[state=active]:bg-lermensys-darkblue data-[state=active]:text-white px-8 py-3 rounded-md"
              >
                Fiação
              </TabsTrigger>
              <TabsTrigger 
                value="tinturaria" 
                className="data-[state=active]:bg-lermensys-darkblue data-[state=active]:text-white px-8 py-3 rounded-md"
              >
                Tinturaria
              </TabsTrigger>
              <TabsTrigger 
                value="malharia" 
                className="data-[state=active]:bg-lermensys-darkblue data-[state=active]:text-white px-8 py-3 rounded-md"
              >
                Malharia
              </TabsTrigger>
              <TabsTrigger 
                value="tecelagem" 
                className="data-[state=active]:bg-lermensys-darkblue data-[state=active]:text-white px-8 py-3 rounded-md"
              >
                Tecelagem
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(modules).map(([key, module]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 order-2 lg:order-1 p-8">
                      <h3 className="text-2xl font-bold text-lermensys-darkblue mb-4">{module.title}</h3>
                      <p className="text-lermensys-gray mb-6">{module.description}</p>
                      
                      <ul className="space-y-3">
                        {module.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="rounded-full bg-lermensys-green p-1 text-lermensys-darkblue">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <a href="#contact" className="btn-primary">
                          Solicitar demonstração
                        </a>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 order-1 lg:order-2 h-64 lg:h-auto">
                      <div 
                        className="w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${module.image})` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-lermensys-darkblue mb-4">
            Unifica todos os setores da empresa, simplificando os processos
          </p>
          <p className="text-md text-lermensys-gray max-w-3xl mx-auto">
            O Lermensys permite acesso fácil e rápido à informações atualizadas de diferentes áreas da empresa, 
            como finanças, estoque, vendas e produção.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modules;
