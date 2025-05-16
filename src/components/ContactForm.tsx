
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em breve.",
      variant: "default",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" name="name" placeholder="Seu nome" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input id="company" name="company" placeholder="Nome da empresa" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(00) 00000-0000" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Conte-nos sobre suas necessidades e como podemos ajudar sua empresa têxtil." 
          className="min-h-[120px]" 
        />
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="btn-primary px-10">
          SOLICITAR DEMONSTRAÇÃO
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
