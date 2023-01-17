import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import CartsSchema from 'src/db/schemas/carts.schema';
import { CartsController } from './controllers/carts/carts.controller';
import { CartsService } from './services/carts/carts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carts', schema: CartsSchema }]),
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
