import { Model } from 'sequelize-typescript';
import { Product } from 'src/products/model/product.model';
import { User } from 'src/user/model/user.model';
export declare class Sale extends Model {
    id: number;
    total_price: number;
    delivery_address: string;
    delivery_number: string;
    sale_date: Date;
    status: string;
    seller_id: number;
    user: User;
    sales: Product[];
}
