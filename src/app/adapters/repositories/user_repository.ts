import prisma from '../../../client';
import { User } from '../../model/user';

export class UsersRepository {
  async create(user: User) {
    const result = await prisma.user.create({
      data: user,
    });
    
    this.disconnect();
    return result;
  }

  disconnect() {
    prisma.$disconnect();
  }
}