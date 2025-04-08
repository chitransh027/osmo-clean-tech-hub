
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-osmo-blue" />,
      title: "Address",
      details: "123 Clean Tech Avenue, Sustainability Park, CA 94103"
    },
    {
      icon: <Phone className="h-5 w-5 text-osmo-blue" />,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-5 w-5 text-osmo-blue" />,
      title: "Email",
      details: "info@osmo-cleantech.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-osmo-blue" />,
      title: "Hours",
      details: "Monday-Friday: 9AM-5PM"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our clean technology solutions? Contact us today for a consultation and personalized quote.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  required 
                  className="w-full h-32"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-osmo-blue hover:bg-osmo-teal transition-colors px-8"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-50 p-2 rounded-full mr-3">
                        {item.icon}
                      </div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.details}</p>
                  </CardContent>
                </Card>
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
