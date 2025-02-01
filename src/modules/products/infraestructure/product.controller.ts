import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProductUseCase } from '../application/use-cases/create-product.use-case';
import { ProductRepository } from '../domain/product.repository';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly productRepo: ProductRepository,
  ) {}

  @Get()
  async getAll() {
    return this.productRepo.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.productRepo.findById(id);
  }

  @Post()
  async create(@Body() body: { name: string; price: number; description?: string }) {
    return this.createProductUseCase.execute(body);
  }
}
