
import React from 'react';
import { Award, Shield, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-osmo-blue" />,
      title: "Quality",
      description: "We deliver only the highest quality products that meet rigorous industry standards."
    },
    {
      icon: <Users className="h-10 w-10 text-osmo-blue" />,
      title: "Integrity",
      description: "We maintain transparent practices and honest relationships with all stakeholders."
    },
    {
      icon: <Target className="h-10 w-10 text-osmo-blue" />,
      title: "Innovation",
      description: "We continually evolve our solutions to incorporate cutting-edge advancements."
    },
    {
      icon: <Award className="h-10 w-10 text-osmo-blue" />,
      title: "Sustainability",
      description: "We prioritize environmental responsibility in everything we do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-osmo-green/10 rounded-full"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-osmo-blue/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=600" 
                alt="OSMO mission" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8 text-lg">
              At OSMO, we're dedicated to revolutionizing how people interact with water and energy resources. Our mission is to make sustainable living accessible to everyone through innovative clean technology solutions.
            </p>
            <p className="text-gray-600 mb-10">
              Founded in 2014, we've grown from a small team of engineers to a leading distributor of clean technology products across the country. We partner with top manufacturers to bring you the most efficient, reliable, and environmentally friendly solutions available.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="bg-blue-50 p-3 rounded-full mb-3">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
