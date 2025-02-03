import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // 👈 Marks it as a TypeORM entity
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true })
  description?: string;
}
