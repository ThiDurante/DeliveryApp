import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from './model/sale.model';

@Module({
  imports: [SequelizeModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SalesService],
  exports: [SalesService, SequelizeModule],
})
export class SalesModule {}
