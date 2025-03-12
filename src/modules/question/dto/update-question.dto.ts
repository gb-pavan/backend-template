import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateQuestionDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) // Ensures each item in the array is a string
    options?: string[];

    @IsOptional()
    @IsString()
    correctAns?: string;

    @IsOptional()
    @IsString()
    refId?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true }) // Ensures each item in the array is a string
    mediaIds?: string[];
}

  