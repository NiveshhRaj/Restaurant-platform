import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMenuItemDto {

  @IsInt()
  categoryId: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

}