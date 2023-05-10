import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: CreateSaleDto): Promise<import("./model/sale.model").Sale>;
    findAll(): Promise<import("./model/sale.model").Sale[]>;
    findByUser(user_id: string): Promise<import("./model/sale.model").Sale[]>;
    findOne(id: string): Promise<import("./model/sale.model").Sale>;
    update(id: string, updateSaleDto: UpdateSaleDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
