
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import ProductCard from './ProductCard';
import { ProductCategory } from './types';

interface ProductCategoryContentProps {
  category: ProductCategory;
}

const ProductCategoryContent = ({ category }: ProductCategoryContentProps) => {
  return (
    <TabsContent key={category.id} value={category.id} className="mt-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </TabsContent>
  );
};

export default ProductCategoryContent;
