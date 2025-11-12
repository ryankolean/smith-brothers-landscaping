import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    location: 'Waterford, MI',
    rating: 5,
    text: 'Smith Brothers transformed our backyard into an absolute paradise. The paver patio and fire pit are stunning, and the design exceeded our expectations. Their attention to detail is remarkable!'
  },
  {
    name: 'Michael Thompson',
    location: 'Clarkston, MI',
    rating: 5,
    text: 'We hired Smith Brothers for a complete landscape renovation. From the initial design to the final installation, everything was professional and on time. The retaining walls and plantings look incredible!'
  },
  {
    name: 'Sarah Johnson',
    location: 'White Lake, MI',
    rating: 5,
    text: 'The team did an amazing job on our front yard landscaping. The natural stone walkway and garden beds have dramatically improved our curb appeal. Highly recommend their services!'
  },
  {
    name: 'David Chen',
    location: 'Bloomfield Hills, MI',
    rating: 5,
    text: 'Outstanding work on our commercial property. The landscape design is both beautiful and low-maintenance. Smith Brothers delivered exactly what we needed for our business.'
  },
  {
    name: 'Lisa Anderson',
    location: 'Auburn Hills, MI',
    rating: 5,
    text: 'From consultation to completion, the entire experience was excellent. Our water feature is the centerpiece of our garden, and the craftsmanship is top-notch. Worth every penny!'
  },
  {
    name: 'Robert Williams',
    location: 'Waterford, MI',
    rating: 5,
    text: 'We have worked with Smith Brothers on multiple projects over the years. Their consistency, professionalism, and quality workmanship keep us coming back. True experts in their field!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t border-emerald-100 pt-4">
                <p className="font-bold text-emerald-900">{testimonial.name}</p>
                <p className="text-sm text-stone-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-lg border border-emerald-100">
            <div className="text-left">
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-2xl font-bold text-emerald-900">5.0 Average Rating</p>
              <p className="text-stone-600">Based on 150+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
