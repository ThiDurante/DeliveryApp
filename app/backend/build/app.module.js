"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_module_1 = require("./user/user.module");
const products_module_1 = require("./products/products.module");
const sales_module_1 = require("./sales/sales.module");
const user_model_1 = require("./user/model/user.model");
const sale_model_1 = require("./sales/model/sale.model");
const product_model_1 = require("./products/model/product.model");
const sales_products_module_1 = require("./sales_products/entities/sales_products.module");
const sales_products_model_1 = require("./sales_products/entities/sales_products.model");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'delivery_app',
                synchronize: true,
                autoLoadModels: true,
                models: [user_model_1.User, sale_model_1.Sale, product_model_1.Product, sales_products_model_1.Sales_Products],
                define: {
                    timestamps: false,
                },
            }),
            user_module_1.UserModule,
            products_module_1.ProductsModule,
            sales_module_1.SalesModule,
            sales_products_module_1.Sales_ProductsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map