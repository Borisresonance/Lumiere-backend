import { ProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.entity';

export class CreateProductUseCase {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute(data: { name: string; price: number; description?: string }): Promise<Product> {
    const product = new Product(Date.now().toString(), data.name, data.price, data.description);
    return this.productRepo.create(product);
  }
}