import { MessageSquare, MapPin, Pencil, CheckCircle, Hammer, Star } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Initial Consultation',
    description: 'We meet with you to discuss your vision, budget, and project goals. This is where we learn about your lifestyle and preferences.'
  },
  {
    icon: MapPin,
    number: '02',
    title: 'Site Analysis',
    description: 'Our team evaluates your property, including soil conditions, drainage, sun exposure, and existing features to inform the design.'
  },
  {
    icon: Pencil,
    number: '03',
    title: 'Design Concept',
    description: 'We create a detailed landscape plan with 3D renderings, material selections, and plant choices tailored to your property.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Design Approval',
    description: 'Review the design with us, make any desired changes, and approve the final plan before we begin installation.'
  },
  {
    icon: Hammer,
    number: '05',
    title: 'Professional Installation',
    description: 'Our certified team brings your design to life with expert craftsmanship, premium materials, and attention to every detail.'
  },
  {
    icon: Star,
    number: '06',
    title: 'Final Walkthrough',
    description: 'We conduct a thorough final inspection with you, ensuring everything meets our high standards and your expectations.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Our Design Process
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            From concept to completion, we guide you through every step with transparency and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-emerald-50 to-stone-50 rounded-2xl p-8 border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-emerald-800" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-emerald-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's start with a free design consultation to discuss your project and create a custom plan for your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:248-636-0203"
              className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
            >
              Call (248) 636-0203
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-600 transition-colors border-2 border-white/20"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
