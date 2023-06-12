import { Request, Response } from 'express';
import { Create } from '../../usecases/orders/create';
import { OrderRepository } from '../repositories/order_repository';
import { Order } from '../../model/order';

class OrderController {
  async create(request: Request, response: Response) {
    const order_repository = new OrderRepository();
    const result = await new Create(request.body, Order, order_repository).call();

    return response.status(200).json(result);
  }
}

export default OrderController;
