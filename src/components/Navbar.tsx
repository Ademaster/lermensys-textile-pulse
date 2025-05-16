
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Soluções", href: "#solution" },
    { name: "Módulos", href: "#modules" },
    { name: "Clientes", href: "#testimonials" },
    { name: "Sobre", href: "#about" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-section flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-bold text-lermensys-darkblue">
            LERMENSYS
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lermensys-darkblue hover:text-lermensys-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <Button className="bg-transparent hover:bg-transparent border-none text-lermensys-darkblue hover:text-lermensys-red flex items-center gap-2">
            <Phone size={16} />
            <span>(47) 3330-0700</span>
          </Button>
          
          <Button className="btn-primary">
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-lermensys-darkblue p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-4">
            <div className="container-section flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lermensys-darkblue hover:text-lermensys-red transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <Button className="bg-transparent hover:bg-transparent border-none text-lermensys-darkblue hover:text-lermensys-red flex items-center gap-2 justify-center py-2">
                <Phone size={16} />
                <span>(47) 3330-0700</span>
              </Button>
              
              <Button className="btn-primary w-full">
                Solicitar Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
