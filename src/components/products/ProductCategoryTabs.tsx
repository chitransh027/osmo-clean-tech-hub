
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCategory } from "./types";

interface ProductCategoryTabsProps {
  categories: ProductCategory[];
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const ProductCategoryTabs = ({ categories, activeTab, setActiveTab }: ProductCategoryTabsProps) => {
  return (
    <Tabs 
      defaultValue="water-purification" 
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-3xl"
    >
      <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-gray-100 p-1 rounded-xl">
        {categories.map((category) => (
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
      
      <div className="text-sm text-gray-600 mt-3">
        {categories.find(cat => cat.id === activeTab)?.description}
      </div>
    </Tabs>
  );
};

export default ProductCategoryTabs;
