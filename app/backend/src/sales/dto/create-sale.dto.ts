export class CreateSaleDto {
  id: number;
  user_id: number;
  selled_id: number;
  delivery_address: string;
  delivery_number: number;
  sale_date: Date;
  status: string;
}
