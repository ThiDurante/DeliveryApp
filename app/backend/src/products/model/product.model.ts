import {
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { Sale } from 'src/sales/model/sale.model';
import { ManyToMany } from 'typeorm';

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

  @ManyToMany(() => Sale, () => Product)
  sales: Sale[];
}
