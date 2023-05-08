import { Model } from 'sequelize-typescript';
export declare class Sale extends Model {
    id: number;
    total_price: number;
    delivery_address: string;
    delivery_number: string;
    sale_date: Date;
    status: string;
    user_id: number;
    seller_id: number;
    sales: Sale[];
}
