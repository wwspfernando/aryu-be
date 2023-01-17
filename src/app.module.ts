import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [UserModule, ProductModule, OrdersModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
