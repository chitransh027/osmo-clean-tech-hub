
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce utility bills with energy-efficient systems that optimize resource usage and minimize waste."
    },
    {
      title: "Environmental Impact",
      description: "Lower your carbon footprint with sustainable solutions that conserve natural resources and reduce pollution."
    },
    {
      title: "Health & Safety",
      description: "Enjoy cleaner water and improved indoor air quality for healthier living and working environments."
    },
    {
      title: "Customized Solutions",
      description: "Get technologies tailored to your specific needs, whether residential, commercial, or institutional."
    },
    {
      title: "Long-term Reliability",
      description: "Invest in durable systems built to last, with comprehensive maintenance support."
    },
    {
      title: "Smart Integration",
      description: "Control and monitor your systems remotely with advanced IoT connectivity and automation features."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose OSMO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our innovative clean technology solutions deliver measurable benefits for your home, business, and the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex animate-fade-in" 
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex-shrink-0 mr-4">
                <CheckCircle2 className="h-6 w-6 text-osmo-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-osmo-blue to-osmo-teal rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your resource management?</h3>
                <p className="mb-6 text-blue-50">
                  Join thousands of satisfied customers who have already made the switch to OSMO's sustainable solutions.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-osmo-blue px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                </a>
              </div>
              <div className="md:w-1/2 bg-blue-800 flex items-center justify-center p-10">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="bg-white/10 backdrop-blur p-4 rounded text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-blue-100 text-sm">Customer Satisfaction</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded text-center">
                    <div className="text-3xl font-bold text-white">5000+</div>
                    <div className="text-blue-100 text-sm">Installations</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded text-center">
                    <div className="text-3xl font-bold text-white">30%</div>
                    <div className="text-blue-100 text-sm">Average Energy Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded text-center">
                    <div className="text-3xl font-bold text-white">10+</div>
                    <div className="text-blue-100 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
