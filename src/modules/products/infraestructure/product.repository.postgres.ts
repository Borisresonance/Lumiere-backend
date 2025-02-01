import { Injectable } from '@nestjs/common';
import { Product } from '../domain/product.entity';
import { ProductRepository } from '../domain/product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  async create(product: Product): Promise<Product> {
    return this.repo.save(product);
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    await this.repo.update(id, product);
    return this.repo.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
