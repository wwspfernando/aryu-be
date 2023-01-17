import { CartsRepositoryService } from './../../db/repositories/carts.repository/carts.repository.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import CartsSchema from 'src/db/schemas/carts.schema';
import { CartsController } from './controllers/carts/carts.controller';
import { CartsService } from './services/carts/carts.service';
import { ProductsModule } from '../products/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carts', schema: CartsSchema }]),
    ProductsModule,
  ],
  controllers: [CartsController],
  providers: [CartsService, CartsRepositoryService],
  exports: [CartsService],
})
export class CartsModule {}
