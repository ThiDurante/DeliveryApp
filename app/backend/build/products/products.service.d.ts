import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './model/product.model';
export declare class ProductsService {
    private productModel;
    constructor(productModel: typeof Product);
    create(createProductDto: CreateProductDto): string;
    findAll(): Promise<Product[]>;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
