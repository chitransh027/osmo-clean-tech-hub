
import { ReactNode } from 'react';

export interface Product {
  name: string;
  description: string;
  price: string;
  mrp: string;
  discount: string;
  tags: string[];
  image: string;
  bestseller: boolean;
  emi: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  products: Product[];
}
