import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateQuestionDto {
    @IsString()
    title!: string;

    @IsArray()
    options!: string[];

    @IsString()
    correctAns!: string;

    @IsOptional()
    @IsString()
    refId?: string;

    @IsOptional()
    @IsArray()
    mediaIds?: string[];
}
