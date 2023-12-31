import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DisignModule } from './disign/disign.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';



@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
   }),
    MongooseModule.forRoot('mongodb://localhost:27017/gigantografiadb'),
    DisignModule,
    UserModule
    ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
