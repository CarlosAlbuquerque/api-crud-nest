import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async create(product) {
    this.products.push(product);
    console.log(this.products);
  }

  async listAll() {
    return this.products;
  }
}
