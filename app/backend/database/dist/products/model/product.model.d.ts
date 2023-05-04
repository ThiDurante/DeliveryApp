import { Model } from 'sequelize-typescript';
import { Sale } from 'src/sales/model/sale.model';
export declare class Product extends Model {
    id: number;
    name: string;
    price: number;
    url_image: string;
    sales: Sale[];
}
