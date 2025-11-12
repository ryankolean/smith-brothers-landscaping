import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-900">Smith Brothers</h1>
              <p className="text-xs text-stone-600">Landscaping</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-stone-700 hover:text-emerald-800 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-stone-700 hover:text-emerald-800 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-emerald-800 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-emerald-800 transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:248-636-0203"
              className="hidden md:flex items-center space-x-2 bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">(248) 636-0203</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-stone-700 hover:text-emerald-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-stone-700 hover:text-emerald-800 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-stone-700 hover:text-emerald-800 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-stone-700 hover:text-emerald-800 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-stone-700 hover:text-emerald-800 transition-colors"
            >
              Contact
            </button>
            <a
              href="tel:248-636-0203"
              className="flex items-center justify-center space-x-2 bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">(248) 636-0203</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
