import * as mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

ProductsSchema.virtual('id').get(function () {
  // return this._id.toHexString();
  return this._id;
});

ProductsSchema.set('toJSON', {
  virtuals: true,
});

ProductsSchema.set('toObject', {
  virtuals: true,
});

export default ProductsSchema;
