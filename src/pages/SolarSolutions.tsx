
import React, { useState } from 'react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

// Solar Services Page
const SolarSolutionsPage = () => {
  const [formData, setFormData] = useState({
    roofArea: '',
    monthlyBill: '',
    location: ''
  });
  
  const [savings, setSavings] = useState<{
    systemSize: string;
    estimatedSavings: string;
    paybackPeriod: string;
  } | null>(null);

  const handleCalculatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSavings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple calculation logic (would be more sophisticated in real application)
    const roofArea = parseFloat(formData.roofArea);
    const monthlyBill = parseFloat(formData.monthlyBill);
    
    if (isNaN(roofArea) || isNaN(monthlyBill)) return;
    
    // Mock calculation logic
    const systemSize = (roofArea * 0.1).toFixed(1);
    const yearlySavings = (monthlyBill * 0.7 * 12).toFixed();
    const paybackYears = (roofArea * 65 / (monthlyBill * 0.7 * 12)).toFixed(1);
    
    setSavings({
      systemSize: `${systemSize} kW`,
      estimatedSavings: `₹${yearlySavings}/year`,
      paybackPeriod: `${paybackYears} years`
    });
  };

  // Case studies data
  const caseStudies = [
    {
      title: "Residential Rooftop - Bangalore",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80",
      description: "5kW system generating 7,300 kWh annually, saving ₹84,000/year",
      client: "Family Home"
    },
    {
      title: "Commercial Installation - Chennai",
      image: "https://images.unsplash.com/photo-1627913363993-95768927f119?auto=format&fit=crop&w=600&q=80",
      description: "75kW system for manufacturing plant, reducing carbon footprint by 90 tons/year",
      client: "Industrial Manufacturing"
    },
    {
      title: "Solar Farm - Maharashtra",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      description: "2MW installation powering 1,500 homes with clean renewable energy",
      client: "Rural Municipality"
    }
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-700 to-sky-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" 
            alt="Solar panels on rooftop" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Custom Solar Installations for Homes, Businesses & Estates
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sky-100">
              Save money, cut carbon, and power your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 h-auto"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
              >
                Calculate Your Savings
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 px-6 py-6 h-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Request a Consultation <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Go Solar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Go Solar?</h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-center text-gray-700 mb-10">
              Solar power offers significant long-term savings on electricity bills while reducing your carbon footprint. 
              With decreasing installation costs and increasing energy prices, there's never been a better time to invest in solar.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Strong ROI</h3>
                <p className="text-sm text-gray-600">15-20% return on investment over system lifetime</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Net-Zero Ready</h3>
                <p className="text-sm text-gray-600">Meet sustainability goals and reduce emissions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Energy Independence</h3>
                <p className="text-sm text-gray-600">Protection from rising utility costs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Govt. Incentives</h3>
                <p className="text-sm text-gray-600">Subsidies and tax benefits available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Interactive Savings Calculator</h2>
            <p className="text-center text-gray-600 mb-8">Estimate your potential savings with solar energy</p>
            
            <Card className="p-6 shadow-lg">
              <form onSubmit={calculateSavings} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="roofArea">Roof Area (sqm)</Label>
                    <Input 
                      id="roofArea" 
                      name="roofArea" 
                      type="number" 
                      placeholder="e.g., 100"
                      value={formData.roofArea}
                      onChange={handleCalculatorChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlyBill">Monthly Bill (₹)</Label>
                    <Input 
                      id="monthlyBill" 
                      name="monthlyBill" 
                      type="number" 
                      placeholder="e.g., 5000"
                      value={formData.monthlyBill}
                      onChange={handleCalculatorChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      name="location" 
                      type="text" 
                      placeholder="e.g., Mumbai"
                      value={formData.location}
                      onChange={handleCalculatorChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button type="submit" className="bg-osmo-teal hover:bg-osmo-teal/90 w-full md:w-auto">
                    Calculate Savings
                  </Button>
                </div>
              </form>
              
              {savings && (
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 text-center">Your Estimated Savings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">System Size</p>
                      <p className="text-xl font-bold text-amber-600">{savings.systemSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Est. Annual Savings</p>
                      <p className="text-xl font-bold text-green-600">{savings.estimatedSavings}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Payback Period</p>
                      <p className="text-xl font-bold text-blue-600">{savings.paybackPeriod}</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="text-osmo-blue border-osmo-blue hover:bg-osmo-blue/10">
                      Download Your Free Report
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
      
      {/* Offerings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Offerings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80" 
                  alt="Residential Rooftops" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Residential Rooftops</h3>
                <p className="text-sm text-gray-600 mb-4">
                  End-to-end design, financing, and installation for homes of all sizes.
                </p>
                <p className="text-xs text-gray-500">Partner: Tata Power Solar</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=600&q=80" 
                  alt="Commercial & Industrial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Commercial & Industrial</h3>
                <p className="text-sm text-gray-600 mb-4">
                  High-efficiency modules, PPA options, and O&M services.
                </p>
                <p className="text-xs text-gray-500">Partner: Vikram Solar</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=600&q=80" 
                  alt="Corporate PPAs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Corporate PPAs</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Off-site power agreements for large energy buyers.
                </p>
                <p className="text-xs text-gray-500">Partner: ReNew Power</p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553603227-2358aeed35be?auto=format&fit=crop&w=600&q=80" 
                  alt="Solar Pumps & EV Charging" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">Solar Pumps & EV Charging</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Integrated water pumps and vehicle charging solutions.
                </p>
                <p className="text-xs text-gray-500">Partner: Tata Power Solar</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology & Brands</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-10 mb-12">
              <div className="text-center">
                <div className="h-20 w-40 bg-white shadow rounded flex items-center justify-center p-4 mb-3">
                  <span className="text-xl font-bold text-gray-700">Vikram Solar</span>
                </div>
                <p className="text-sm text-gray-600">Mono-PERC Modules</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-40 bg-white shadow rounded flex items-center justify-center p-4 mb-3">
                  <span className="text-xl font-bold text-gray-700">Tata Power</span>
                </div>
                <p className="text-sm text-gray-600">Bifacial Panels</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-40 bg-white shadow rounded flex items-center justify-center p-4 mb-3">
                  <span className="text-xl font-bold text-gray-700">ReNew</span>
                </div>
                <p className="text-sm text-gray-600">Smart Inverters</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-40 bg-white shadow rounded flex items-center justify-center p-4 mb-3">
                  <span className="text-xl font-bold text-gray-700">Waaree</span>
                </div>
                <p className="text-sm text-gray-600">Mounting Systems</p>
              </div>
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-xl font-semibold mb-4">Industry-Leading Warranties</h3>
              <div className="inline-flex gap-8">
                <div>
                  <span className="text-2xl font-bold text-amber-500 block">25 Years</span>
                  <span className="text-sm text-gray-600">Module Performance</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-amber-500 block">10 Years</span>
                  <span className="text-sm text-gray-600">Inverter Warranty</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600">
              We work exclusively with Tier-1 bankable brands to ensure reliability, performance, and long-term value for our clients.
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Case Studies & Gallery</h2>
          
          <div className="max-w-5xl mx-auto relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {caseStudies.map((study, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden h-full">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold mb-2">{study.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{study.description}</p>
                        <p className="text-xs text-gray-500">{study.client}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2" />
              </div>
            </Carousel>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-osmo-blue mb-2">25+ MW</p>
                <p className="text-gray-600">Total Capacity Installed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-osmo-green mb-2">15,000+</p>
                <p className="text-gray-600">Tons CO₂ Mitigated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-osmo-teal mb-2">500+</p>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Installation Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { title: "Site Survey", icon: "📏" },
                  { title: "Design", icon: "✏️" },
                  { title: "Permits", icon: "📋" },
                  { title: "Installation", icon: "🔧" },
                  { title: "Commissioning", icon: "✅" }
                ].map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-osmo-blue text-2xl relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">Step {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our proven installation process ensures quality workmanship and minimal disruption to your home or business.
                Partner: Waaree Solar Panels
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Support & Network</h2>
                <p className="mb-6 text-gray-600">
                  With service centers across India, we provide prompt technical support and maintenance for all our installations.
                  Partner: Waaree Solar Panels
                </p>
                <div className="mb-8">
                  <h3 className="font-semibold mb-2">24×7 Monitoring & Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Our advanced monitoring systems track system performance in real-time, allowing us to proactively address issues before they impact your energy production.
                  </p>
                </div>
                <Button className="bg-osmo-blue hover:bg-osmo-blue/90">View Support Plans</Button>
              </div>
              
              <div className="h-64 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <p className="text-gray-400">Map of service centers across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Request a Consultation</h2>
            
            <Card className="p-6 shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <select 
                      id="projectType" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    placeholder="Additional details about your project..."
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-osmo-green hover:bg-osmo-green/90">
                    Submit Request
                  </Button>
                </div>
              </form>
              <div className="text-xs text-gray-500 mt-4 text-center">
                Your information will be kept confidential and only used to contact you about our solar solutions.
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolarSolutionsPage;
