
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Droplet, Sun, Wind, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Water Purification",
      description: "Advanced filtration systems that remove contaminants, providing clean and safe drinking water for homes and businesses.",
      icon: <Droplet className="h-10 w-10 text-osmo-blue" />,
      color: "bg-blue-50",
      borderColor: "border-osmo-blue"
    },
    {
      title: "Solar Energy",
      description: "Efficient solar panel setups designed to harness renewable energy and reduce dependence on traditional power sources.",
      icon: <Sun className="h-10 w-10 text-osmo-green" />,
      color: "bg-green-50",
      borderColor: "border-osmo-green"
    },
    {
      title: "Fluid Management",
      description: "Innovative technologies for effective control and distribution of water and other fluids across residential and industrial settings.",
      icon: <Wind className="h-10 w-10 text-osmo-teal" />,
      color: "bg-teal-50",
      borderColor: "border-osmo-teal"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Clean Tech Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            OSMO offers a comprehensive range of sustainable technologies designed to optimize resource usage and promote environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className={`border-t-4 ${solution.borderColor} hover:shadow-lg transition-shadow animate-fade-in`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardHeader className={`${solution.color} rounded-t-md`}>
                <div className="flex justify-center mb-3">
                  {solution.icon}
                </div>
                <CardTitle className="text-center">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-600 text-base">
                  {solution.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-osmo-blue hover:bg-blue-50">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
