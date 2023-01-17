import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { UsersRepositoryService } from './db/repositories/users.repository/users.repository.service';
import { CartsRepositoryService } from './db/repositories/carts.repository/carts.repository.service';
import { OrdersRepositoryService } from './db/repositories/orders.repository/orders.repository.service';
import { ProductsRepositoryService } from './db/repositories/products.repository/products.repository.service';

@Module({
  imports: [UserModule, ProductModule, OrdersModule, CartsModule],
  controllers: [AppController],
  providers: [AppService, UsersRepositoryService, CartsRepositoryService, OrdersRepositoryService, ProductsRepositoryService],
})
export class AppModule {}
