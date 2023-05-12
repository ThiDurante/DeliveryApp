import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Put('/delivered/:id')
  delivered(@Param('id') id: string) {
    return this.salesService.delivered(+id);
  }

  @Put('/preparing/:id')
  preparing(@Param('id') id: string) {
    return this.salesService.preparing(+id);
  }

  @Put('/delivering/:id')
  delivering(@Param('id') id: string) {
    return this.salesService.delivering(+id);
  }

  @Get('user/:user_id')
  findByUser(@Param('user_id') user_id: string) {
    return this.salesService.findByUser(+user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }
}
