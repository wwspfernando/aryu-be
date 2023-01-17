import { Product } from './../../api/product/interfaces/product.interface';
import * as mongoose from 'mongoose';

const CartsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  products: {
    type: Array<Product>,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

CartsSchema.virtual('id').get(function () {
  // return this._id.toHexString();
  return this._id;
});

CartsSchema.set('toJSON', {
  virtuals: true,
});

CartsSchema.set('toObject', {
  virtuals: true,
});

export default CartsSchema;
