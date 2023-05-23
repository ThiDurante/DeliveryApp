import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Sale } from './model/sale.model';
import { User } from 'src/user/model/user.model';
import { Product } from 'src/products/model/product.model';
import { Sales_Products } from 'src/sales_products/entities/sales_products.model';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale) private saleModel: typeof Sale) {}
  async create(createSaleDto: CreateSaleDto) {
    createSaleDto.sale_date = new Date().toISOString();
    const sale = await this.saleModel.create({
      ...createSaleDto,
    });
    const sale_product = createSaleDto.sales.map((product: any) => {
      return {
        sale_id: sale.id,
        product_id: product.id,
        quantity: product.quantity,
      };
    });
    await Promise.all(
      sale_product.map(async (product) => {
        await Sales_Products.create({
          sale_id: sale.id,
          product_id: product.product_id,
          quantity: product.quantity,
        });
      }),
    );
    return sale;
  }

  findAll() {
    return this.saleModel.findAll({ include: [User] });
  }

  findOne(id: number) {
    return this.saleModel.findOne({ where: { id }, include: [User, Product] });
  }

  findByUser(user_id: number) {
    return this.saleModel.findAll({
      where: { user_id },
      include: [User, Product],
    });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.saleModel.update(updateSaleDto, { where: { id } });
  }

  delivered(id: number) {
    return this.saleModel.update({ status: 'Delivered' }, { where: { id } });
  }
  preparing(id: number) {
    return this.saleModel.update({ status: 'Preparing' }, { where: { id } });
  }
  delivering(id: number) {
    return this.saleModel.update({ status: 'Delivering' }, { where: { id } });
  }

  remove(id: number) {
    return this.saleModel.destroy({ where: { id } });
  }
}
