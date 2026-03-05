import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    const reservationDate = new Date(data.date);

    if (isNaN(reservationDate.getTime())) {
      throw new Error('Invalid reservation date');
    }

    return this.prisma.reservation.create({
      data: {
        name: data.name,
        phone: data.phone,
        guests: Number(data.guests),
        date: reservationDate,
        message: data.message ?? null,
      },
    });
  }

  findAll() {
    return this.prisma.reservation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  updateStatus(id: number, status: string) {
    return this.prisma.reservation.update({
      where: { id },
      data: { status },
    });
  }
}
