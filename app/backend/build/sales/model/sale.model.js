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
exports.Sale = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("../../products/model/product.model");
const sales_products_model_1 = require("../../sales_products/entities/sales_products.model");
const user_model_1 = require("../../user/model/user.model");
let Sale = class Sale extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Sale.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Sale.prototype, "total_price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Sale.prototype, "delivery_address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Sale.prototype, "delivery_number", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Sale.prototype, "sale_date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Sale.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Sale.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Sale.prototype, "seller_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User, 'user_id'),
    __metadata("design:type", user_model_1.User)
], Sale.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => product_model_1.Product, () => sales_products_model_1.Sales_Products),
    __metadata("design:type", Array)
], Sale.prototype, "sales", void 0);
Sale = __decorate([
    sequelize_typescript_1.Table
], Sale);
exports.Sale = Sale;
//# sourceMappingURL=sale.model.js.map