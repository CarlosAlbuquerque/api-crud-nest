import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CaracteristicsProductDTO {
  @IsString()
  @IsNotEmpty({ message: 'Registration name cannot be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Feature description cannot be empty' })
  description: string;
}

export class ImgProductDTO {
  @IsUrl({}, { message: 'Invalid image URL' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Image description will not be null' })
  description: string;
}

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty({ message: 'userId name cannot be empty' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Product name cannot be empty' })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'The value must be greater than zero' })
  amount: number;

  @IsNumber()
  @Min(0, { message: 'Invalid minimum quantity' })
  quantity: number;

  @IsString()
  @IsNotEmpty({ message: 'Product description cannot be empty' })
  @MaxLength(1000, {
    message: 'Description cannot be longer than 1000 characters',
  })
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CaracteristicsProductDTO)
  caracteristics: CaracteristicsProductDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImgProductDTO)
  images: ImgProductDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Product category cannot be empty' })
  category: string;
}
