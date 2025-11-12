import { Award, Shield, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Designs',
    description: 'Recognized for excellence in landscape design and installation'
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your protection'
  },
  {
    icon: Users,
    title: 'Certified Professionals',
    description: 'Team of certified landscape professionals with decades of experience'
  }
];

const whyChoose = [
  'Expert Design Consultation',
  'Premium Quality Materials',
  'Professional Installation',
  'Project Management',
  'Workmanship Warranty',
  'Four-Season Interest',
  'Commercial Experience',
  'Financing Available'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Family Owned Since 1985
            </h2>
            <p className="text-xl text-stone-600 mb-6 leading-relaxed">
              For nearly four decades, Smith Brothers Landscaping has been transforming outdoor spaces throughout Oakland County. What started as a small family operation has grown into one of the region's most trusted landscape design and installation companies.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Our multi-generational team brings together traditional craftsmanship with modern design techniques. We take pride in every project, treating each property as if it were our own. From residential gardens to commercial complexes, we deliver exceptional results backed by our comprehensive warranty.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-emerald-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="font-bold text-emerald-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-stone-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-emerald-100">
              <h3 className="text-3xl font-bold text-emerald-900 mb-6">Why Choose Smith Brothers?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChoose.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-emerald-100">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-emerald-800 mb-2">38+</div>
                    <div className="text-sm text-stone-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-800 mb-2">2,500+</div>
                    <div className="text-sm text-stone-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-emerald-800 mb-2">100%</div>
                    <div className="text-sm text-stone-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-emerald-50 rounded-xl p-6">
                <p className="text-stone-700 italic text-center">
                  "We use only premium materials and employ certified landscape professionals to ensure every project meets the highest standards of quality and craftsmanship."
                </p>
                <p className="text-emerald-800 font-semibold text-center mt-4">
                  — The Smith Brothers Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
