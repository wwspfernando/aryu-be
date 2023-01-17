import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './api/users/user.module';
import { ProductsModule } from './api/products/product.module';
import { OrdersModule } from './api/orders/orders.module';
import { CartsModule } from './api/carts/carts.module';
import { MongooseModule } from '@nestjs/mongoose';

import * as config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.default.mongoURI),
    UsersModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
