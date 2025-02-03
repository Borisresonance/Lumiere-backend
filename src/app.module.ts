import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './modules/products/domain/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'myuser',
      password: process.env.DB_PASSWORD || 'mypassword',
      database: process.env.DB_NAME || 'ecommerce',
      entities: [Product],
      synchronize: true, // ⚠️ Use only in dev (auto-migrates DB)
    }),
  ],
})
export class AppModule {}
