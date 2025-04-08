
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Installing OSMO's water purification system was one of the best decisions we've made. The water quality is incredible, and we've seen a significant decrease in our utility bills.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "Their solar energy solution has completely transformed how our business consumes power. The installation was smooth, and the ongoing support has been excellent.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "School Administrator",
      content: "OSMO provided our school with an efficient fluid management system that has helped us conserve water and reduce costs. Their team was professional and knowledgeable.",
      rating: 4
    },
    {
      name: "David Williams",
      role: "Property Manager",
      content: "We've equipped multiple properties with OSMO's technologies, and the feedback from tenants has been overwhelmingly positive. Clean water and reduced energy costs make for happy residents.",
      rating: 5
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

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how OSMO's clean technology solutions have made a difference for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-osmo-blue hover:text-osmo-teal transition-colors"
          >
            Join our satisfied customers
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
