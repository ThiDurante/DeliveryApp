import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  selled_id: number;

  @Column()
  total_price: number;

  @Column()
  delivery_address: string;

  @Column()
  delivery_number: number;

  @Column()
  sale_date: Date;

  @Column()
  status: string;
}
