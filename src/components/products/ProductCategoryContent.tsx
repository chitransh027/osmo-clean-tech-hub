
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import ProductCard from './ProductCard';
import { ProductCategory } from './types';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductCategoryContentProps {
  category: ProductCategory;
}

const ProductCategoryContent = ({ category }: ProductCategoryContentProps) => {
  return (
    <TabsContent key={category.id} value={category.id} className="mt-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {category.products.map((product, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-12 top-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2" />
        </div>
      </Carousel>

      {/* Mobile scrollable version */}
      <div className="block md:hidden mt-4">
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex space-x-4 pb-4 px-1">
            {category.products.map((product, index) => (
              <div key={index} className="w-[280px] shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default ProductCategoryContent;
