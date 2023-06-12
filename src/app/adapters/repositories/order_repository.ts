import prisma from '../../../client';
import { Order } from '../../model/order';

export class OrderRepository {
  async create(order: Order) {
    const result = await prisma.order.create({
      data: order,

    });

    this.disconnect();
    return result;
  }

  disconnect() {
    prisma.$disconnect();
  }
}
