import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './api/users/user.module';
import { ProductsModule } from './api/products/product.module';
import { OrdersModule } from './api/orders/orders.module';
import { CartsModule } from './api/carts/carts.module';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
