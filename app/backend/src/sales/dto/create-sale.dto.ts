import { Product } from 'src/products/model/product.model';

export class CreateSaleDto {
  id: number;
  user_id: number;
  seller_id: number;
  total_price: number;
  delivery_address: string;
  delivery_number: string;
  sale_date: Date;
  status: string;
  sales: Product[];
}
