import { Column, Table, Model, HasMany, Default } from 'sequelize-typescript';
import { Sale } from 'src/sales/model/sale.model';

@Table
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, allowNull: false })
  name: string;

  @Column
  password: string;

  @Default('customer')
  @Column
  role: string;

  @HasMany(() => Sale)
  sales: Sale[];
}
