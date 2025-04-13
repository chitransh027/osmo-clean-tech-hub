
import React, { useState } from 'react';
import ProductCategoryTabs from './ProductCategoryTabs';
import ProductCategoryContent from './ProductCategoryContent';
import { getProductCategories } from './productData';
import { Tabs } from "@/components/ui/tabs";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("water-purification");
  const productCategories = getProductCategories();

  return (
    <section id="products" className="py-20 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Deals on Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our complete range of clean technology solutions at the best prices
          </p>
          
          <div className="flex justify-center mb-12">
            <Tabs 
              defaultValue="water-purification" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <ProductCategoryTabs 
                categories={productCategories} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
              />
              
              {productCategories.map((category) => (
                <ProductCategoryContent key={category.id} category={category} />
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
