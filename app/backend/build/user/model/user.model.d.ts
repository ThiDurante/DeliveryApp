import { Model } from 'sequelize-typescript';
import { Sale } from 'src/sales/model/sale.model';
export declare class User extends Model {
    id: number;
    email: string;
    name: string;
    password: string;
    role: string;
    sales: Sale[];
}
