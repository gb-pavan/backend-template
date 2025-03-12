import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MediaService } from './media.service';
import { UploadMediaDto } from './dto/upload-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async upload(@Body() data: UploadMediaDto) {
    return this.mediaService.uploadMedia(data);
  }

  @Get()
  async findAll() {
    return this.mediaService.getAllMedia();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateMediaDto) {
    return this.mediaService.updateMedia(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.mediaService.deleteMedia(id);
  }
}
