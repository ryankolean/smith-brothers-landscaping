import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you provide landscape design services?',
    answer: 'Yes! We offer comprehensive landscape design services. Our process begins with a free consultation where we discuss your vision, budget, and goals. We then create detailed landscape plans with 3D renderings, material selections, and plant choices specifically tailored to your property.'
  },
  {
    question: 'What is your design and installation process?',
    answer: 'Our process includes six steps: Initial Consultation, Site Analysis, Design Concept, Design Approval, Professional Installation, and Final Walkthrough. This ensures we understand your needs, create the perfect design, and deliver flawless execution from start to finish.'
  },
  {
    question: 'Do you handle large commercial projects?',
    answer: 'Absolutely! We have extensive experience with commercial landscaping projects including business complexes, retail centers, office parks, and apartment communities throughout Oakland County. Our team can handle projects of any size while maintaining the same attention to detail.'
  },
  {
    question: 'How long does a typical landscaping project take?',
    answer: 'Project timelines vary based on scope and complexity. Small projects like garden bed installations may take 1-2 days, while comprehensive landscape renovations with hardscaping can take 2-4 weeks. We provide detailed timelines during the consultation phase.'
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes, we stand behind our work with comprehensive workmanship warranties. Our warranties cover installation quality and we also offer plant guarantees. Specific warranty details are provided with your project proposal.'
  },
  {
    question: 'What types of materials do you use?',
    answer: 'We use only premium materials from trusted suppliers. This includes high-quality pavers, natural stone, landscape boulders, professional-grade plants from reputable nurseries, and commercial lighting systems. We never compromise on material quality.'
  },
  {
    question: 'Can you work within my budget?',
    answer: 'Yes! We work with a variety of budgets and can create phased approaches for larger projects. During the consultation, we discuss your budget and design a solution that maximizes value while achieving your landscape goals. We also offer financing options.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. Smith Brothers Landscaping is fully licensed, bonded, and insured. This protects both you and our team throughout the entire project. We can provide proof of insurance upon request.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-stone-600">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-xl overflow-hidden border border-emerald-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-emerald-100/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-emerald-900 pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`text-emerald-800 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-emerald-800 rounded-2xl p-8 text-white">
          <p className="text-xl mb-4">Still have questions?</p>
          <p className="text-emerald-100 mb-6">We're here to help! Give us a call or send us a message.</p>
          <a
            href="tel:248-636-0203"
            className="inline-block bg-white text-emerald-800 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
          >
            Call (248) 636-0203
          </a>
        </div>
      </div>
    </section>
  );
}
