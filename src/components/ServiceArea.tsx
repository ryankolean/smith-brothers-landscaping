import { MapPin } from 'lucide-react';

const cities = [
  'Waterford',
  'Clarkston',
  'White Lake',
  'Bloomfield Hills',
  'Auburn Hills',
  'Pontiac',
  'West Bloomfield',
  'Commerce Township',
  'Highland',
  'Lake Orion',
  'Rochester Hills',
  'Troy'
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Service Area
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Proudly serving Waterford and surrounding Oakland County communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="text-emerald-800" size={32} />
                <h3 className="text-2xl font-bold text-emerald-900">Cities We Serve</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white rounded-lg p-3 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-stone-700 font-medium">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-600 mt-6 text-sm">
                Don't see your city? <a href="tel:248-636-0203" className="text-emerald-800 font-semibold hover:underline">Call us</a> to confirm we service your area.
              </p>
            </div>

            <div className="mt-8 bg-emerald-800 text-white rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4">Visit Our Office</h4>
              <div className="space-y-3 text-emerald-100">
                <p className="text-lg">
                  <span className="font-semibold text-white">Smith Brothers Landscaping</span>
                </p>
                <p>4146 Island Park Drive</p>
                <p>Waterford, MI 48329</p>
                <a href="tel:248-636-0203" className="block text-xl font-bold text-white hover:text-emerald-200 transition-colors mt-4">
                  (248) 636-0203
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.1234567890!2d-83.3951234!3d42.6518123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM5JzA2LjUiTiA4M8KwMjMnNDIuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smith Brothers Landscaping Location"
              ></iframe>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-emerald-800" size={24} />
                <div>
                  <p className="font-bold text-emerald-900">Waterford, MI</p>
                  <p className="text-xs text-stone-600">Our Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
