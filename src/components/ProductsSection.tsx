
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Droplet, Sun, Wind, Activity } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      title: "Water Purification",
      description: "RO Systems, Alkaline/Hydrogen Water, Softeners",
      icon: <Droplet className="h-10 w-10 text-osmo-blue mb-4" />,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Solar & Heating",
      description: "Solar Panels, Heat Pumps, Geysers",
      icon: <Sun className="h-10 w-10 text-osmo-teal mb-4" />,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Cleaning Technology",
      description: "Vacuum Cleaners, Robotic Solutions (Eureka Forbes)",
      icon: <Wind className="h-10 w-10 text-osmo-green mb-4" />,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Fluid Management",
      description: "Pressure Pumps, Water Transfer & Circulation Systems",
      icon: <Activity className="h-10 w-10 text-osmo-blue mb-4" />,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=500&h=300"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of clean technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6 pb-2">
                <div className="flex flex-col items-center text-center">
                  {product.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button 
                  className="bg-osmo-blue hover:bg-osmo-teal transition-colors"
                  onClick={() => document.getElementById('quotation')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Get Quotation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
