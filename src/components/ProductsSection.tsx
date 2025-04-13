
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
          name: "Aquaguard Blaze Insta RO+UV",
          description: "Taste Adjuster Hot & Ambient Copper Water Purifier",
          price: "₹24,999",
          mrp: "₹37,000",
          discount: "32% OFF",
          tags: ["RO+UV", "Active Copper", "Hot & Ambient", "Stainless Steel"],
          image: "https://images.unsplash.com/photo-1556913396-7a3c459ef68e?auto=format&fit=crop&w=500&h=300",
          bestseller: true,
          emi: "₹1,834/mo"
        },
        {
          name: "Aquaguard Marvel NXT RO+UV",
          description: "Taste Adjuster Alkaline Water Purifier",
          price: "₹10,999",
          mrp: "₹20,500",
          discount: "46% OFF",
          tags: ["RO+UV", "Alkaline Boost"],
          image: "https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&w=500&h=300",
          bestseller: false,
          emi: "₹1,834/mo"
        },
        {
          name: "Aquaguard Delight NXT RO+UV+UF",
          description: "Water Purifier with Mineral Guard",
          price: "₹9,499",
          mrp: "₹18,000", 
          discount: "47% OFF",
          tags: ["RO+UV+UF", "Mineral"],
          image: "https://images.unsplash.com/photo-1583795311669-f5e996f885c5?auto=format&fit=crop&w=500&h=300",
          bestseller: false,
          emi: "₹1,584/mo"
        }
      ]
    },
    {
      id: "vacuum-cleaners",
      title: "Vacuum Cleaners",
      icon: <Wind className="h-5 w-5" />,
      products: [
        {
          name: "Forbes AutoClean Pro",
          description: "Smart robotic vacuum with mapping technology",
          price: "₹24,999",
          mrp: "₹37,000",
          discount: "32% OFF",
          tags: ["Smart Navigation", "HEPA Filter"],
          image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&h=300",
          bestseller: false,
          emi: "₹2,084/mo"
        },
        {
          name: "HyperSuction Plus",
          description: "Powerful handheld vacuum for all surfaces",
          price: "₹12,499",
          mrp: "₹18,000",
          discount: "31% OFF",
          tags: ["Cordless", "Multi-Surface"],
          image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&h=300",
          bestseller: true,
          emi: "₹1,042/mo"
        }
      ]
    },
    {
      id: "heat-pumps",
      title: "Heat Pumps",
      icon: <Thermometer className="h-5 w-5" />,
      products: [
        {
          name: "EcoHeat Geyser Pro",
          description: "Energy-efficient water heater with smart controls",
          price: "₹29,999",
          mrp: "₹42,000",
          discount: "29% OFF",
          tags: ["Energy Efficient", "Smart Control"],
          image: "https://images.unsplash.com/photo-1543674892-7d64d45b99ad?auto=format&fit=crop&w=500&h=300",
          bestseller: true,
          emi: "₹2,499/mo"
        },
        {
          name: "ThermoPlus System X",
          description: "Whole-house heating solution with air exchange",
          price: "₹79,999",
          mrp: "₹120,000",
          discount: "33% OFF",
          tags: ["Whole House", "Air Exchange"],
          image: "https://images.unsplash.com/photo-1613274554329-70f997b53b06?auto=format&fit=crop&w=500&h=300",
          bestseller: false,
          emi: "₹6,667/mo"
        }
      ]
    },
    {
      id: "fluid-solar",
      title: "Fluid Management & Solar",
      icon: <Activity className="h-5 w-5" />,
      products: [
        {
          name: "TurboFlow Pump X200",
          description: "High-pressure water transfer system",
          price: "₹18,499",
          mrp: "₹28,000",
          discount: "34% OFF",
          tags: ["High Pressure", "Industrial Grade"],
          image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=500&h=300",
          bestseller: false,
          emi: "₹1,541/mo"
        },
        {
          name: "SolarPower 2kW System",
          description: "Complete rooftop solar system with installation",
          price: "₹1,25,000",
          mrp: "₹1,60,000",
          discount: "22% OFF",
          tags: ["Rooftop", "Complete System"],
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&h=300",
          bestseller: true,
          emi: "₹10,417/mo"
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Deals on Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our complete range of clean technology solutions at the best prices
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
                        className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className="relative">
                          {product.bestseller && (
                            <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                              BESTSELLER
                            </div>
                          )}
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <CardContent className="pt-6 pb-2">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {product.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className={`text-xs px-2 py-1 rounded ${
                                  i % 3 === 0 ? 'bg-green-100 text-green-700' : 
                                  i % 3 === 1 ? 'bg-yellow-100 text-yellow-700' : 
                                  'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-end gap-2 mb-2">
                            <span className="text-2xl font-bold text-osmo-blue">{product.price}</span>
                            <div className="flex flex-col">
                              <span className="text-sm text-gray-500 line-through">MRP {product.mrp}</span>
                              <span className="text-xs text-green-600 font-semibold">{product.discount}</span>
                            </div>
                          </div>
                          
                          <p className="text-xs text-green-700 font-medium bg-green-100 inline-block px-2 py-1 rounded">
                            HEALTHY LIVING MADE AFFORDABLE
                          </p>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start pb-6">
                          <p className="text-sm text-gray-600 mb-3">No-cost EMI from {product.emi}</p>
                          <Button 
                            className="bg-osmo-blue hover:bg-osmo-teal transition-colors w-full"
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
