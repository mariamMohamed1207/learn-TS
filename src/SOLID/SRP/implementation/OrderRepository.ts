interface Order {
  id: number;
  title: string;
  price: number;
  count: number;
}
export class OrderRepository {
  async saveDB(order: Order) {
    setTimeout(() => {
      console.log(`Order:${order} is saved to DB`);
    }, 500);
    return order;
  }
  async findOne() {
    setTimeout(() => {
      console.log("find one order");
    }, 500);
  }
  async findAll() {
    setTimeout(() => {
      console.log("find all orders");
    }, 500);
  }
  async Update() {
    setTimeout(() => {
      console.log("Order has been updated");
    }, 500);
  }
  async Delete() {
    setTimeout(() => {
      console.log("Order has been deleted");
    }, 500);
  }
}
