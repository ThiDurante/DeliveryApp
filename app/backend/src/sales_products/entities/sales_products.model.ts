import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/products/model/product.model';
import { Sale } from 'src/sales/model/sale.model';

@Table
export class Sales_Products extends Model {
  @ForeignKey(() => Sale)
  @Column
  sale_id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @Column
  quantity: number;
}
