import { Cart } from './../../interfaces/cart.interface';
import { Injectable } from '@nestjs/common';
import { CartsRepositoryService } from 'src/db/repositories/carts.repository/carts.repository.service';
import { Product } from 'src/api/products/interfaces/product.interface';

@Injectable()
export class CartsService {
  constructor(private readonly cartsRepository: CartsRepositoryService) {}

  findAll(): Promise<Cart[]> {
    return this.cartsRepository.findAll();
  }

  async findOne(id: string): Promise<Cart> {
    return this.cartsRepository.findOne(id);
  }

  async findByUserId(id: string): Promise<Cart> {
    return this.cartsRepository.findByUserId(id);
  }

  async create(Cart: Cart): Promise<Cart> {
    Cart.isOrdered = false;
    return this.cartsRepository.create(Cart);
  }

  async delete(id: string): Promise<Cart> {
    return this.cartsRepository.delete(id);
  }

  async update(cartId: string, cart: Product[]): Promise<Cart> {
    return this.cartsRepository.update(cartId, cart);
  }
}
