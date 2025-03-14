import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { PrismaService } from '@modules/prisma/prisma.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, PrismaService],
  exports: [QuestionService],
})
export class QuestionModule {}
