import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from 'src/events/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: Coffee.name, 
        schema: CoffeeSchema 
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ])
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
