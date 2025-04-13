
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Oriental University",
      role: "Educational Institution",
      content: "Flawless solar installation & water systems for our campus.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=300&h=200"
    },
    {
      name: "Green Valley Society",
      role: "Residential Society Manager",
      content: "High-quality systems and excellent support.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=300&h=200"
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // Use case images
  const useCaseImages = [
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=300&h=200",
    "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=300&h=200",
    "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=300&h=200",
    "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=300&h=200"
  ];

  return (
    <section id="testimonials" className="py-20 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hear It from Our Clients</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow animate-fade-in" 
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            {useCaseImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-md animate-fade-in" 
                style={{animationDelay: `${(index + 2) * 100}ms`}}
              >
                <img 
                  src={image} 
                  alt={`Case study ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
