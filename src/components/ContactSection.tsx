
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-osmo-blue" />,
      title: "Indore Office",
      details: "Bicholi Hapsi Road, Bengali Square, Indore"
    },
    {
      icon: <Phone className="h-5 w-5 text-osmo-blue" />,
      title: "Phone",
      details: "+91-XXXXX"
    },
    {
      icon: <Mail className="h-5 w-5 text-osmo-blue" />,
      title: "Email",
      details: "info@osmohealth.in"
    }
  ];

  return (
    <section id="quotation" className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tell Us Your Requirement</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a personalized quotation for your clean technology needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your name" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Your phone number" 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Type
                  </label>
                  <Select>
                    <SelectTrigger id="product" className="w-full">
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="water">Water Purification</SelectItem>
                      <SelectItem value="solar">Solar Energy</SelectItem>
                      <SelectItem value="cleaning">Cleaning Technology</SelectItem>
                      <SelectItem value="pumps">Fluid Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Requirement
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your requirements" 
                  required 
                  className="w-full h-32"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-osmo-blue hover:bg-osmo-teal transition-colors w-full md:w-auto px-8 py-3"
              >
                Submit Request
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-50 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md animate-fade-in h-64 sm:h-80 md:h-96">
              {/* Replace with actual map embed in real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-osmo-blue opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
