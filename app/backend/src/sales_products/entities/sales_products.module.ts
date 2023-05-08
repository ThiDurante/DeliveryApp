import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sales_Products } from './sales_products.model';

@Module({
  imports: [SequelizeModule.forFeature([Sales_Products])],
  exports: [SequelizeModule],
})
export class Sales_ProductsModule {}
