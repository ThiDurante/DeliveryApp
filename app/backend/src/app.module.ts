import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { User } from './user/model/user.model';
import { Sale } from './sales/model/sale.model';
import { Product } from './products/model/product.model';
import { Sales_ProductsModule } from './sales_products/entities/sales_products.module';
import { Sales_Products } from './sales_products/entities/sales_products.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'delivery_app',
      synchronize: true,
      autoLoadModels: true,
      models: [User, Sale, Product, Sales_Products],
      define: {
        timestamps: false,
      },
    }),
    UserModule,
    ProductsModule,
    SalesModule,
    Sales_ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
