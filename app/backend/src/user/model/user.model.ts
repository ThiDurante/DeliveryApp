import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import { Sale } from 'src/sales/model/sale.model';

@Table
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  name: string;

  @Column
  password: string;

  @Column
  role: string;

  @HasMany(() => Sale)
  sales: Sale[];
}
