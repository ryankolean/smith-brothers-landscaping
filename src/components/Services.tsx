import { Trees, Hammer, Flame, Droplet, Lightbulb, Building2 } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Hardscaping',
    description: 'Custom patios, walkways, retaining walls, and outdoor structures built with premium materials and expert craftsmanship.',
    features: ['Paver Patios', 'Retaining Walls', 'Natural Stone Walkways', 'Driveways']
  },
  {
    icon: Flame,
    title: 'Outdoor Living Spaces',
    description: 'Transform your backyard into an entertainment paradise with fire pits, outdoor kitchens, and custom pergolas.',
    features: ['Fire Pits & Fireplaces', 'Outdoor Kitchens', 'Pergolas & Pavilions', 'Seating Walls']
  },
  {
    icon: Trees,
    title: 'Landscape Design & Planting',
    description: 'Professional landscape designs with four-season interest featuring trees, shrubs, perennials, and garden beds.',
    features: ['Custom Landscape Plans', 'Tree & Shrub Installation', 'Garden Bed Design', 'Plant Selection']
  },
  {
    icon: Droplet,
    title: 'Water Features',
    description: 'Add tranquility and beauty with custom ponds, fountains, waterfalls, and stream installations.',
    features: ['Decorative Ponds', 'Waterfalls', 'Fountains', 'Stream Beds']
  },
  {
    icon: Lightbulb,
    title: 'Landscape Lighting',
    description: 'Enhance safety and showcase your landscape with professionally designed and installed lighting systems.',
    features: ['Path Lighting', 'Accent Lighting', 'Security Lighting', 'LED Systems']
  },
  {
    icon: Building2,
    title: 'Commercial Landscaping',
    description: 'Professional commercial landscape design and maintenance for businesses throughout Oakland County.',
    features: ['Business Complexes', 'Retail Centers', 'Office Parks', 'Apartment Communities']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Comprehensive Landscaping Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            From initial design to final installation, we bring your outdoor vision to life with expertise and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-emerald-800 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">{service.title}</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-stone-700">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-emerald-800 text-white px-12 py-6 rounded-2xl">
            <div className="text-left">
              <p className="text-emerald-200 text-sm font-semibold mb-1">Free Consultation</p>
              <p className="text-2xl font-bold">Ready to Start Your Project?</p>
            </div>
            <a
              href="tel:248-636-0203"
              className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
