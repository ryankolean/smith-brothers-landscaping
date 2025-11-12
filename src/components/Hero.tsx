import { Phone, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1179863/pexels-photo-1179863.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-emerald-900/70 to-stone-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 mt-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block mb-6">
            <span className="bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/50">
              Licensed & Insured • Family Owned Since 1985
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Landscape Excellence
            <span className="block text-emerald-400 mt-2">Since 1985</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
            Professional landscape design, hardscaping, and outdoor living spaces
            <span className="block mt-2">serving Waterford and Oakland County, Michigan</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Schedule Design Consultation
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              View Our Services
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <a
              href="tel:248-636-0203"
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <Phone size={24} />
              <span className="font-semibold">(248) 636-0203</span>
            </a>
            <span className="hidden sm:inline text-emerald-400">•</span>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <Mail size={24} />
              <span>Get Free Estimate</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
