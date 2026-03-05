import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private menuItemsService: MenuItemsService) {}

  @Get()
  getAll(@Query() query: any) {
    return this.menuItemsService.findAll(query);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.menuItemsService.findAll(query);
  }

  @Get('featured')
  featured() {
    return this.menuItemsService.findFeatured();
  }

  @Post()
  create(@Body() dto: CreateMenuItemDto) {
    return this.menuItemsService.create(dto);
  }
}
