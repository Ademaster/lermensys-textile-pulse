
import React from 'react';
import { Link } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    "Okea", "Magazord", "Senior", "Orgatex", "GFC Vendas", "Boleto.Cloud", "APS3"
  ];

  return (
    <section id="integrations" className="bg-slate-50 py-16">
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Link className="h-12 w-12 text-lermensys-darkblue" />
          </div>
          <h2 className="section-heading">Integração Perfeita com as Ferramentas que Você Já Usa</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            O ERP Lermensys integra-se com outros softwares, permitindo a transferência automatizada de dados, 
            eliminando a necessidade de movimentação manual.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-lermensys-darkblue">
                  {integration.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-lermensys-darkblue">{integration}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lermensys-gray">
            Nosso sistema é flexível e permite novas integrações conforme necessidade do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
