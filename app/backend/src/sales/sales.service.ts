import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Sale } from './model/sale.model';

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
    return this.saleModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
