import { IsString, IsOptional } from 'class-validator';

export class UpdateMediaDto {
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  type?: string; // "image", "video", "pdf"

  @IsOptional()
  @IsString()
  questionId?: string;
}
