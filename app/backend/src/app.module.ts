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
// import { Sales_Products } from './sales_products/entities/sales_products.model';

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
      models: [User, Sale, Product],
      define: {
        timestamps: false,
      },
    }),
    UserModule,
    ProductsModule,
    SalesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
