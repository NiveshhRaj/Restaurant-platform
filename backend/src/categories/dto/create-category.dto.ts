import { IsInt, IsString, Min } from 'class-validator';

export class CreateCategoryDto {

  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  displayOrder: number;

}