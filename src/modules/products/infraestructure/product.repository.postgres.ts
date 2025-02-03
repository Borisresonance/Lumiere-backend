import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from '../domain/product.entity';
import { ProductRepository } from '../domain/product.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductPostgresRepository implements ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<Product | null> {
    return this.repo.findOne({ where: { id } });
  }

  create(data: Partial<Product>): Product {
    return this.repo.create(data); // ✅ Accepts Partial<Product>
  }

  async save(product: Product): Promise<Product> {
    return await this.repo.save(product);
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    await this.repo.update(id, product);
    return this.findById(id) as Promise<Product>; // ✅ Ensure product is returned
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
