import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Sale } from './model/sale.model';
import { User } from 'src/user/model/user.model';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale) private saleModel: typeof Sale) {}
  create(createSaleDto: CreateSaleDto) {
    console.log(createSaleDto);

    return this.saleModel.create({
      ...createSaleDto,
    });
  }

  findAll() {
    return this.saleModel.findAll({ include: [User] });
  }

  findOne(id: number) {
    return this.saleModel.findOne({ where: { id }, include: [User] });
  }

  findByUser(user_id: number) {
    return this.saleModel.findAll({ where: { user_id }, include: [User] });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.saleModel.update(updateSaleDto, { where: { id } });
  }

  remove(id: number) {
    return this.saleModel.destroy({ where: { id } });
  }
}
