import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './model/sale.model';
export declare class SalesService {
    private saleModel;
    constructor(saleModel: typeof Sale);
    create(createSaleDto: CreateSaleDto): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findOne(id: number): Promise<Sale>;
    findByUser(user_id: number): Promise<Sale[]>;
    update(id: number, updateSaleDto: UpdateSaleDto): Promise<[affectedCount: number]>;
    delivered(id: number): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
