
import { Droplet, Sun, Wind, Activity } from 'lucide-react';
import { ProductCategory } from './types';
import React from 'react';

// Need to use createElement for the icons since this is a .ts file
export const getProductCategories = (): ProductCategory[] => [
  {
    id: "water-purification",
    title: "Water Purification",
    icon: React.createElement(Droplet, { className: "h-5 w-5" }),
    description: "RO Systems, Alkaline/Hydrogen Water, Softeners",
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
    id: "solar-heating",
    title: "Solar & Heating",
    icon: React.createElement(Sun, { className: "h-5 w-5" }),
    description: "Solar Panels, Heat Pumps, Geysers",
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
  },
  {
    id: "cleaning-tech",
    title: "Cleaning Technology",
    icon: React.createElement(Wind, { className: "h-5 w-5" }),
    description: "Vacuum Cleaners, Robotic Solutions (Eureka Forbes)",
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
    id: "fluid-management",
    title: "Fluid Management",
    icon: React.createElement(Activity, { className: "h-5 w-5" }),
    description: "Pressure Pumps, Water Transfer & Circulation Systems",
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
        name: "CircuFlow Pro",
        description: "Advanced water circulation system for large properties",
        price: "₹32,500",
        mrp: "₹45,000",
        discount: "28% OFF",
        tags: ["High Efficiency", "Smart Control"],
        image: "https://images.unsplash.com/photo-1613274554329-70f997b53b06?auto=format&fit=crop&w=500&h=300",
        bestseller: true,
        emi: "₹2,708/mo"
      }
    ]
  }
];
