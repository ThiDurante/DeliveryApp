export interface Sale {
  id: number;
  status: string;
  total_price: number;
  sale_date: string;
  delivery_address: string;
  delivery_number: string;
  seller_id: number;
}

export interface UserData {
  id: number;
}
