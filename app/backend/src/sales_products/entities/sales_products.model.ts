import { Column, Table } from 'sequelize-typescript';

@Table
export class Sales_Products {
  @Column
  quantity: number;
}
