
import React from 'react';
import { Award, CheckCircle, Users, Zap } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Award className="w-12 h-12 text-osmo-blue" />,
      title: "15+ Years of Clean-Tech Expertise",
      description: "Industry-leading experience in water and energy solutions."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-osmo-blue" />,
      title: "Official Distributor of Global Brands",
      description: "Authorized partner of renowned clean technology manufacturers."
    },
    {
      icon: <Zap className="w-12 h-12 text-osmo-blue" />,
      title: "Customized Energy & Water Solutions",
      description: "Tailored systems designed for your specific needs."
    },
    {
      icon: <Users className="w-12 h-12 text-osmo-blue" />,
      title: "Reliable Service with Personal Consultation",
      description: "Dedicated support team for installation and maintenance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Thousands Trust OSMO</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your one-stop solution for water, energy, and clean-living technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
