import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { OrganosDisponiblesModule } from './organos-disponibles/organos-disponibles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GarantiaModule } from './garantia/garantia.module';
import { Proveedor } from './proveedor/entities/proveedor.entity';
import { Cliente } from './cliente/entities/cliente.entity';
import { OrganosDisponible } from './organos-disponibles/entities/organos-disponible.entity';
import { Garantia } from './garantia/entities/garantia.entity';



@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Proveedor, Cliente, OrganosDisponible, Garantia],
      synchronize: true,
    }),
    ProveedorModule, ClienteModule, OrganosDisponiblesModule, GarantiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
