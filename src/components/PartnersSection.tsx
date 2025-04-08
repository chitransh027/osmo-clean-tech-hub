
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'Eureka Forbes', logo: 'https://placehold.co/200x80?text=Eureka+Forbes' },
    { name: 'Ion Exchange Zero B', logo: 'https://placehold.co/200x80?text=Ion+Exchange' },
    { name: 'Havells', logo: 'https://placehold.co/200x80?text=Havells' },
    { name: 'Adani Solar', logo: 'https://placehold.co/200x80?text=Adani+Solar' },
    { name: 'KSB', logo: 'https://placehold.co/200x80?text=KSB' },
    { name: 'Grundfos', logo: 'https://placehold.co/200x80?text=Grundfos' },
    { name: 'CRI', logo: 'https://placehold.co/200x80?text=CRI' },
  ];

  return (
    <section className="py-16 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-slide whitespace-nowrap">
            {partners.concat(partners).map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center min-w-[150px] md:min-w-[200px] grayscale hover:grayscale-0 transition-all duration-200"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-auto max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
