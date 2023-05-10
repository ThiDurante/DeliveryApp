export interface Sale {
  id: number;
  status: string;
  total_price: number;
  sale_date: string;
  delivery_address: string;
  delivery_number: string;
  seller_id: number;
  sales: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export interface UserData {
  id: number;
}
