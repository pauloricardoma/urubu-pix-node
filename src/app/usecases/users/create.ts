import { UsersRepository } from "../../adapters/repositories/user_repository";
import { User } from "../../model/user";

export class Create {
  constructor(
    public params: any,
    public user: typeof User,
    public user_repository: UsersRepository,
  ) {
    this.params = params;
    this.user = user;
    this.user_repository = user_repository;
  }

  call() {
    const { name } = this.params;
    const user = new this.user(name);
    const result = this.user_repository.create(user);
    return result;
  }
}