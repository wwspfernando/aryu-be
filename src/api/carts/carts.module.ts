import { Module } from '@nestjs/common';
import { CartsController } from './controllers/carts/carts.controller';
import { CartsService } from './services/carts/carts.service';

@Module({
  controllers: [CartsController],
  providers: [CartsService]
})
export class CartsModule {}
