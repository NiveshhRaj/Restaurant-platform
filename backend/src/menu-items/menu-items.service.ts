import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuItemsService {

  constructor(private prisma: PrismaService) {}

//   async findAll(query: any) {

//   const page = Number(query.page) || 1;
//   const limit = Number(query.limit) || 12;

//   const skip = (page - 1) * limit;

//   const where = {
//     isDeleted: false,
//     ...(query.search && {
//       OR: [
//         { name: { contains: query.search, mode: 'insensitive' } },
//         { description: { contains: query.search, mode: 'insensitive' } }
//       ]
//     })
//   };

  

//   const items = await this.prisma.menuItem.findMany({
//     where,
//     skip,
//     take: limit,
//     include: { category: true }
//   });

//   const total = await this.prisma.menuItem.count({ where });

//   return {
//     success: true,
//     data: items,
//     meta: {
//       page,
//       limit,
//       total,
//       totalPages: Math.ceil(total / limit)
//     }
//   };

// }

async findAll(query: any) {

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 12;
  const skip = (page - 1) * limit;

  const where: any = {
    isDeleted: false
  };

  // 🔎 Search filter
  if (query.search) {
    where.OR = [
      { name: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } }
    ];
  }

  // ⭐ Category filter
  if (query.categoryId) {
    where.categoryId = Number(query.categoryId);
  }

  const items = await this.prisma.menuItem.findMany({
    where,
    skip,
    take: limit,
    include: { category: true }
  });

  const total = await this.prisma.menuItem.count({ where });

  return {
    success: true,
    data: items,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
}

  findFeatured() {
    return this.prisma.menuItem.findMany({
      where: {
        isFeatured: true,
        isDeleted: false
      },
      take: 6
    });
  }

  create(data: any) {
    return this.prisma.menuItem.create({
      data: {
        categoryId: data.categoryId,
        name: data.name,
        slug: data.name.toLowerCase().replace(/\s+/g, "-"),
        description: data.description,
        price: data.price
      }
    });
  }

}