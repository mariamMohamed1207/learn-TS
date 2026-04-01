import { OrderRepository } from "./OrderRepository.js";
import { OrderNotification } from "./OrderNotification.js";
import { OrderSalesService } from "./OrderSalesService.js";
interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}
let orderRepo = new OrderRepository();
let orderSales = new OrderSalesService();
let orderNotification = new OrderNotification();

class OrderService {
  async createOrder() {
    const order: Order = {
      id: 1,
      count: 1,
      price: 200,
      title: "Order 1",
    };
    const createdOrder = await orderRepo.saveDB(order);
    const total = await orderSales.calculate(createdOrder);
    await orderNotification.sendEmail(createdOrder, total);
  }
}
