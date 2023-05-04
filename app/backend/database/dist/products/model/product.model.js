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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sale_model_1 = require("../../sales/model/sale.model");
const sales_products_model_1 = require("../../sales_products/entities/sales_products.model");
let Product = class Product extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "url_image", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => sale_model_1.Sale, () => sales_products_model_1.Sales_Products),
    __metadata("design:type", Array)
], Product.prototype, "sales", void 0);
Product = __decorate([
    sequelize_typescript_1.Table
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map