import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question-dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async create(@Body() data: CreateQuestionDto) {
    return this.questionService.createQuestion(data);
  }

  @Get()
  async findAll() {
    return this.questionService.getQuestions();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateQuestionDto) {
    return this.questionService.updateQuestion(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.questionService.deleteQuestion(id);
  }
}
