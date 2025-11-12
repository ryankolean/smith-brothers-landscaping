import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitMessage('Thank you! We will contact you within 24 hours to schedule your free design consultation.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Get Your Free Design Consultation
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Contact us today to schedule your complimentary consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a href="tel:248-636-0203" className="flex items-start space-x-4 hover:bg-emerald-50 p-4 rounded-lg transition-colors">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900 mb-1">Phone</p>
                    <p className="text-xl text-emerald-800 font-bold">(248) 636-0203</p>
                    <p className="text-sm text-stone-600">Click to call</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900 mb-1">Email</p>
                    <p className="text-emerald-800">info@smithbroslandscaping.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900 mb-1">Address</p>
                    <p className="text-stone-700">4146 Island Park Drive</p>
                    <p className="text-stone-700">Waterford, MI 48329</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-emerald-800" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900 mb-2">Business Hours</p>
                    <div className="text-stone-700 space-y-1 text-sm">
                      <p><span className="font-medium">Mon - Fri:</span> 7:00 AM - 6:00 PM</p>
                      <p><span className="font-medium">Saturday:</span> 8:00 AM - 4:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Free design consultation & estimate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Licensed, bonded & insured</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>38+ years of experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Premium materials & craftsmanship</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Comprehensive warranties</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Request Free Consultation</h3>

              {submitMessage && (
                <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4">
                  {submitMessage}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-stone-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-stone-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    placeholder="(248) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-stone-700 font-semibold mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                  >
                    <option value="">Select a project type</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="hardscaping">Hardscaping (Patios, Walkways)</option>
                    <option value="outdoor-living">Outdoor Living Spaces</option>
                    <option value="planting">Planting & Gardens</option>
                    <option value="water-features">Water Features</option>
                    <option value="lighting">Landscape Lighting</option>
                    <option value="commercial">Commercial Landscaping</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-stone-700 font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 resize-none"
                    placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-800 text-white py-4 rounded-lg font-bold hover:bg-emerald-900 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Request Free Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-stone-600 text-center">
                  By submitting this form, you agree to be contacted by Smith Brothers Landscaping regarding your project.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
