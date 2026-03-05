import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {

  constructor(private service: ReservationsService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/:status')
  updateStatus(@Param('id') id: string, @Param('status') status: string) {
    return this.service.updateStatus(Number(id), status);
  }

}