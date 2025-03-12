import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:rootpassword@localhost:27017/', {
      dbName: 'testdb',
      authSource: 'admin',
    }),
  ],
})
export class MongoModule {}
