
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, Sun, Wind, Activity, Thermometer } from 'lucide-react';

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("water-purifiers");

  const productCategories = [
    {
      id: "water-purifiers",
      title: "Water Purifiers",
      icon: <Droplet className="h-5 w-5" />,
      products: [
        {
          name: "RO Aqua Plus",
          description: "Advanced RO water purification system with TDS control",
          price: "₹15,999",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&h=300"
        },
        {
          name: "Alkaline Pro",
          description: "Hydrogen-rich alkaline water for better health",
          price: "₹22,499",
          image: "https://images.unsplash.com/photo-1583795311669-f5e996f885c5?auto=format&fit=crop&w=500&h=300"
        },
        {
          name: "Water Softener",
          description: "Whole-house water softening system",
          price: "₹34,999",
          image: "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&w=500&h=300"
        }
      ]
    },
    {
      id: "vacuum-cleaners",
      title: "Vacuum Cleaners",
      icon: <Wind className="h-5 w-5" />,
      products: [
        {
          name: "Forbes AutoClean",
          description: "Smart robotic vacuum with mapping technology",
          price: "₹24,999",
          image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=300"
        },
        {
          name: "HyperSuction Pro",
          description: "Powerful handheld vacuum for all surfaces",
          price: "₹12,499",
          image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&h=300"
        }
      ]
    },
    {
      id: "heat-pumps",
      title: "Heat Pumps",
      icon: <Thermometer className="h-5 w-5" />,
      products: [
        {
          name: "EcoHeat Geyser",
          description: "Energy-efficient water heater with smart controls",
          price: "₹29,999",
          image: "https://images.unsplash.com/photo-1543674892-7d64d45b99ad?auto=format&fit=crop&w=500&h=300"
        },
        {
          name: "ThermoPlus System",
          description: "Whole-house heating solution with air exchange",
          price: "₹79,999",
          image: "https://images.unsplash.com/photo-1613274554329-70f997b53b06?auto=format&fit=crop&w=500&h=300"
        }
      ]
    },
    {
      id: "fluid-solar",
      title: "Fluid Management & Solar",
      icon: <Activity className="h-5 w-5" />,
      products: [
        {
          name: "TurboFlow Pump",
          description: "High-pressure water transfer system",
          price: "₹18,499",
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=500&h=300"
        },
        {
          name: "SolarPower 2kW",
          description: "Complete rooftop solar system with installation",
          price: "₹1,25,000",
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&h=300"
        },
        {
          name: "SolarPower 5kW",
          description: "Industrial-grade solar installation with batteries",
          price: "₹3,50,000",
          image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=500&h=300"
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our complete range of clean technology solutions
          </p>
          
          {/* Centered Product Category Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs 
              defaultValue="water-purifiers" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-3xl"
            >
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-gray-100 p-1 rounded-xl">
                {productCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 py-2 px-3"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {productCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product, index) => (
                      <Card 
                        key={index} 
                        className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative h-48">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="pt-6 pb-2">
                          <div className="flex flex-col items-start">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-lg font-bold text-osmo-blue">{product.price}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-end pb-6">
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
