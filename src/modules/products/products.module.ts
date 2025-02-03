import { Module } from '@nestjs/common';
import { ProductService } from './application/product.service';
import { ProductController } from './infraestructure/product.controller';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductsModule {}
