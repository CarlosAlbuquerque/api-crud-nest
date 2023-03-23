import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('/products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async createUser(@Body() user: CreateProductDTO) {
    this.productRepository.create(user);
    return user;
  }

  @Get()
  async findAll() {
    return this.productRepository.listAll();
  }
}
