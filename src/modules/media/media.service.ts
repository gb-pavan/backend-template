import { Injectable } from '@nestjs/common';
import { PrismaService } from '@modules/prisma/prisma.service';
import { UploadMediaDto } from './dto/upload-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async uploadMedia(data: UploadMediaDto) {
    return this.prisma.media.create({ data });
  }

  async getAllMedia() {
    return this.prisma.media.findMany();
  }

  async updateMedia(id: string, data: UpdateMediaDto) {
    return this.prisma.media.update({ where: { id }, data });
  }

  async deleteMedia(id: string) {
    return this.prisma.media.delete({ where: { id } });
  }
}
