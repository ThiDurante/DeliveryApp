import {
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';
import { Sale } from 'src/sales/model/sale.model';
import { Sales_Products } from 'src/sales_products/entities/sales_products.model';

@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column
  url_image: string;

  // @ManyToMany(() => Sale, () => Product)
  // sales: Sale[];

  @BelongsToMany(() => Sale, () => Sales_Products)
  sales: Sale[];
}
