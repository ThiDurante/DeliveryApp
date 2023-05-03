import { Column, ForeignKey, Table, Model } from 'sequelize-typescript';
import { Product } from 'src/products/model/product.model';
import { User } from 'src/user/model/user.model';
import { ManyToMany } from 'typeorm';

@Table
export class Sale extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  total_price: number;

  @Column
  delivery_address: string;

  @Column
  delivery_number: string;

  @Column
  sale_date: Date;

  @Column
  status: string;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => User)
  @Column
  seller_id: number;

  @ManyToMany(() => Product, () => Sale)
  products: Product[];
}
