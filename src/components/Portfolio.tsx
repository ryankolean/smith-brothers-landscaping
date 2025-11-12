import { useState } from 'react';

const categories = ['All', 'Hardscaping', 'Planting', 'Patios', 'Retaining Walls', 'Water Features'];

const projects = [
  {
    id: 1,
    category: 'Patios',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Custom Paver Patio',
    description: 'Multi-level patio with built-in fire pit'
  },
  {
    id: 2,
    category: 'Hardscaping',
    image: 'https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Natural Stone Walkway',
    description: 'Flagstone path with garden borders'
  },
  {
    id: 3,
    category: 'Planting',
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Perennial Garden Design',
    description: 'Four-season interest landscape'
  },
  {
    id: 4,
    category: 'Retaining Walls',
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tiered Retaining Wall',
    description: 'Multi-level landscaping solution'
  },
  {
    id: 5,
    category: 'Water Features',
    image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Natural Waterfall Feature',
    description: 'Custom pond with cascading waterfall'
  },
  {
    id: 6,
    category: 'Patios',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Outdoor Living Room',
    description: 'Complete with kitchen and seating'
  },
  {
    id: 7,
    category: 'Hardscaping',
    image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Front Entrance Design',
    description: 'Welcoming pathway and plantings'
  },
  {
    id: 8,
    category: 'Planting',
    image: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Shade Garden Installation',
    description: 'Hostas, ferns, and native plants'
  },
  {
    id: 9,
    category: 'Patios',
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Poolside Retreat',
    description: 'Natural stone pool deck and patio'
  },
  {
    id: 10,
    category: 'Retaining Walls',
    image: 'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Boulder Retaining Wall',
    description: 'Natural stone terracing'
  },
  {
    id: 11,
    category: 'Hardscaping',
    image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Circular Driveway',
    description: 'Paver driveway with borders'
  },
  {
    id: 12,
    category: 'Water Features',
    image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Garden Fountain',
    description: 'Classic tiered fountain centerpiece'
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-stone-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our portfolio of award-winning landscape designs and installations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-800 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-emerald-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-emerald-100 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">Want to see more of our work?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-900 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
