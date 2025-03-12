import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from '@modules/database/mongo.module';
import * as mongoose from 'mongoose';

@Module({
  imports: [MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    try {
      // This will wait for the connection to succeed or fail
      await mongoose.connect('mongodb://root:rootpassword@localhost:27017/');
      console.log('MongoDB successfully connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}
