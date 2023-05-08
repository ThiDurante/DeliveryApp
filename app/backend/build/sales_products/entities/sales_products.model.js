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
exports.Sales_Products = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("../../products/model/product.model");
const sale_model_1 = require("../../sales/model/sale.model");
let Sales_Products = class Sales_Products extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => sale_model_1.Sale),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Sales_Products.prototype, "sale_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_model_1.Product),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Sales_Products.prototype, "product_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Sales_Products.prototype, "quantity", void 0);
Sales_Products = __decorate([
    sequelize_typescript_1.Table
], Sales_Products);
exports.Sales_Products = Sales_Products;
//# sourceMappingURL=sales_products.model.js.map