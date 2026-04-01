interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}

export class OrderSalesService {
  async calculate(order: Order) {
    let total: number;
    if (order.count >= 500) {
      total = order.count * order.price - order.count * order.price * 0.1;
    } else {
      total = order.count * order.price;
    }
    return total;
  }
}
