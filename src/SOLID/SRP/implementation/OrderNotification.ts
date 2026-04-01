export interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}
export class OrderNotification {
  async sendEmail(order: Order) {
    setTimeout(() => {
      console.log(`Email has been sent to order ${order.id}`);
    }, 1000);
  }
}
