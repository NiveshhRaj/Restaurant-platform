import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {

  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.menuCategory.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' }
    });
  }

  create(data: any) {
    return this.prisma.menuCategory.create({
      data: {
        name: data.name,
        slug: data.name.toLowerCase().replace(/\s+/g, "-"),
        displayOrder: data.displayOrder
      }
    });
  }

}