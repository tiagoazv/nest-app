import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule {}
