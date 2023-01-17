import { Product } from './../../product/interfaces/product.interface';
export interface Cart {
  id: string;
  userId: string;
  products: Product[];
  total: number;
}
