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
let SalesService = class SalesService {
    constructor(saleModel) {
        this.saleModel = saleModel;
    }
    create(createSaleDto) {
        return 'This action adds a new sale';
    }
    findAll() {
        return this.saleModel.findAll();
    }
    findOne(id) {
        return `This action returns a #${id} sale`;
    }
    update(id, updateSaleDto) {
        return `This action updates a #${id} sale`;
    }
    remove(id) {
        return `This action removes a #${id} sale`;
    }
};
SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(sale_model_1.Sale)),
    __metadata("design:paramtypes", [Object])
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map