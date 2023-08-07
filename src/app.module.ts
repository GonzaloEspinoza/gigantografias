import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DisignModule } from './disign/disign.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gigantografidb'),
    DisignModule
    ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
