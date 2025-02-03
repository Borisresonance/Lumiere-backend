import { ProductRepository } from '../../domain/product.repository';
import { Product } from '../../domain/product.entity';

export class CreateProductUseCase {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute(data: {
    name: string;
    price: number;
    description?: string;
  }): Promise<Product> {
    try {
      // ✅ Now create() accepts partial data, and id is handled by TypeORM
      const product = this.productRepo.create(data);

      // ✅ Ensure save() is awaited properly
      return await this.productRepo.save(product);
    } catch (error: unknown) {
      let errorMessage = 'Error creating product';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error('Error creating product: ' + errorMessage);
    }
  }
}
