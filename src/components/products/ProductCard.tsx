
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card 
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
  );
};

export default ProductCard;
