
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "O Lermensys transformou nossa gestão de produção têxtil. Temos mais controle, menos desperdício e conseguimos aumentar nossa produtividade em 30% no primeiro ano.",
      name: "Carlos Silva",
      position: "Diretor Industrial",
      company: "Têxtil Moderna Ltda.",
      rating: 5
    },
    {
      id: 2,
      quote: "A integração entre setores que o sistema proporciona eliminou nossos problemas de comunicação interna. Agora temos dados precisos para tomar decisões estratégicas.",
      name: "Márcia Oliveira",
      position: "CEO",
      company: "Confecções Elegance",
      rating: 5
    },
    {
      id: 3,
      quote: "O suporte técnico da Lermensys é excepcional. Além de um sistema completo, contamos com uma equipe que entende as particularidades do nosso negócio.",
      name: "Roberto Almeida",
      position: "Gerente de TI",
      company: "Malhas Premium S.A.",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "Cliente 1", logo: "https://via.placeholder.com/150x80?text=Logo+1" },
    { name: "Cliente 2", logo: "https://via.placeholder.com/150x80?text=Logo+2" },
    { name: "Cliente 3", logo: "https://via.placeholder.com/150x80?text=Logo+3" },
    { name: "Cliente 4", logo: "https://via.placeholder.com/150x80?text=Logo+4" },
    { name: "Cliente 5", logo: "https://via.placeholder.com/150x80?text=Logo+5" },
    { name: "Cliente 6", logo: "https://via.placeholder.com/150x80?text=Logo+6" },
  ];

  return (
    <section id="testimonials" className="bg-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Star className="h-12 w-12 text-lermensys-darkblue" />
          </div>
          <h2 className="section-heading">Quem Confia, Recomenda</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Conheça a opinião de quem transformou seu negócio com nossa solução especializada para a indústria têxtil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-sm overflow-hidden card-hover">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-lermensys-darkblue">{testimonial.name}</p>
                  <p className="text-sm text-lermensys-gray">{testimonial.position}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold text-center text-lermensys-darkblue mb-10">
            Empresas que confiam no Lermensys
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  className="max-h-16 opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-slate-50 p-8 rounded-xl inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
              <div className="text-left">
                <p className="text-4xl font-bold text-lermensys-darkblue">25+</p>
                <p className="text-lermensys-gray">Anos de experiência</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-bold text-lermensys-darkblue">500+</p>
                <p className="text-lermensys-gray">Clientes satisfeitos</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-bold text-lermensys-darkblue">100%</p>
                <p className="text-lermensys-gray">Especializado em têxtil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
