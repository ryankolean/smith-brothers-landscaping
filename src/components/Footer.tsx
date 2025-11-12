import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Smith Brothers</h3>
                <p className="text-sm text-emerald-300">Landscaping</p>
              </div>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Professional landscape design and installation serving Oakland County since 1985.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-emerald-200 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Landscape Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hardscaping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Outdoor Living Spaces</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Planting & Gardens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water Features</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Landscaping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-emerald-200 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:248-636-0203" className="hover:text-white transition-colors">
                  (248) 636-0203
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@smithbroslandscaping.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>4146 Island Park Drive<br />Waterford, MI 48329</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-emerald-200 text-sm">
              <li className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>7AM - 6PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>8AM - 4PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 bg-emerald-800 rounded-lg p-4">
              <p className="text-xs font-semibold mb-2">Credentials</p>
              <div className="space-y-1 text-xs text-emerald-200">
                <p>Licensed & Insured</p>
                <p>Certified Landscape Professionals</p>
                <p>Family Owned Since 1985</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-emerald-300 text-sm">
            <p>&copy; {currentYear} Smith Brothers Landscaping. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Serving Waterford, MI and Oakland County</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
