import { IsNotEmpty, IsString } from 'class-validator';
import { IsArray, IsNumber } from 'class-validator/types/decorator/decorators';
import { ProductDto } from 'src/api/products/dto/product.dto/product.dto';

export class CartDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  products: ProductDto[];

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
