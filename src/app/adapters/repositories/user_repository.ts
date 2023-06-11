import { PrismaClientValidationError } from '@prisma/client/runtime';
import prisma from '../../../client';
import { User } from '../../model/user';

export class UsersRepository {
  async create(user: User) {
    const result = await prisma.users.create({
      data: user,
    });
    
    this.disconnect();
    return result;
  }

  disconnect() {
    prisma.$disconnect();
  }
}