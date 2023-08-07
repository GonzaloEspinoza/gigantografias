import { Module } from '@nestjs/common';
import { DisignService } from './disign.service';
import { DisignController } from './disign.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Disign, DisignSchema } from './entities/disign.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Disign.name,
        schema:DisignSchema,
      }
    ])
  ],
  controllers: [DisignController],
  providers: [DisignService]
 
})
export class DisignModule {}
