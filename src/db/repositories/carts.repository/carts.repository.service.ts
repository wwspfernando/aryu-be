import { Cart } from './../../../api/carts/interfaces/cart.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CartsRepositoryService {
  constructor(
    @InjectModel('Cart')
    private readonly cartModel: Model<Cart>,
  ) {}

  async findAll(): Promise<Cart[]> {
    return await this.cartModel.find();
  }

  async findOne(id: string): Promise<Cart> {
    return await this.cartModel.findOne({ _id: id });
  }

  async create(item: Cart): Promise<Cart> {
    const newItem = new this.cartModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Cart> {
    return await this.cartModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Cart): Promise<Cart> {
    return await this.cartModel.findByIdAndUpdate(id, item, {
      new: true,
    });
  }
}
