"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sale_model_1 = require("./model/sale.model");
const user_model_1 = require("../user/model/user.model");
const product_model_1 = require("../products/model/product.model");
const sales_products_model_1 = require("../sales_products/entities/sales_products.model");
let SalesService = class SalesService {
    constructor(saleModel) {
        this.saleModel = saleModel;
    }
    async create(createSaleDto) {
        createSaleDto.sale_date = new Date().toISOString();
        console.log(typeof createSaleDto);
        const sale = await this.saleModel.create(Object.assign({}, createSaleDto));
        const sale_product = createSaleDto.sales.map((product) => {
            return {
                sale_id: sale.id,
                product_id: product.id,
                quantity: product.quantity,
            };
        });
        await Promise.all(sale_product.map(async (product) => {
            await sales_products_model_1.Sales_Products.create({
                sale_id: sale.id,
                product_id: product.product_id,
                quantity: product.quantity,
            });
        }));
        return sale;
    }
    findAll() {
        return this.saleModel.findAll({ include: [user_model_1.User] });
    }
    findOne(id) {
        return this.saleModel.findOne({ where: { id }, include: [user_model_1.User, product_model_1.Product] });
    }
    findByUser(user_id) {
        return this.saleModel.findAll({
            where: { user_id },
            include: [user_model_1.User, product_model_1.Product],
        });
    }
    update(id, updateSaleDto) {
        return this.saleModel.update(updateSaleDto, { where: { id } });
    }
    delivered(id) {
        return this.saleModel.update({ status: 'Delivered' }, { where: { id } });
    }
    preparing(id) {
        return this.saleModel.update({ status: 'Preparing' }, { where: { id } });
    }
    delivering(id) {
        return this.saleModel.update({ status: 'Delivering' }, { where: { id } });
    }
    remove(id) {
        return this.saleModel.destroy({ where: { id } });
    }
};
SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(sale_model_1.Sale)),
    __metadata("design:paramtypes", [Object])
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map