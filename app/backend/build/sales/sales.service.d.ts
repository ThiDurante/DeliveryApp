import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './model/sale.model';
export declare class SalesService {
    private saleModel;
    constructor(saleModel: typeof Sale);
    create(createSaleDto: CreateSaleDto): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findOne(id: number): string;
    update(id: number, updateSaleDto: UpdateSaleDto): string;
    remove(id: number): string;
}
