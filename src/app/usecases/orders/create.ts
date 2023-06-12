import { OrderRepository } from "../../adapters/repositories/order_repository";
import { Order } from "../../model/order";

export class Create {
  constructor(
    public params: any,
    public order: typeof Order,
    public order_repository: OrderRepository,
  ) {
    this.params = params;
    this.order = order;
    this.order_repository = order_repository;
  }

  call() {
    const { value, userId } = this.params;
    const order = new this.order(value, userId);
    const result = this.order_repository.create(order);
    return result;
  }
}
