import { finalizedCart, printCart } from "./cart";
import type { Reciept, PaymentMethod } from "./types";

let receipt: Reciept;

export function buildReceipt(payment: PaymentMethod): Reciept {
  const cartItems = finalizedCart();
  let Total = 0;
  cartItems.forEach((item) => {
    const priceAfterDiscount = item.product.price * (1 - item.discount);
    Total += priceAfterDiscount * item.quantity;
  });

  receipt = {
    items: cartItems,
    total: Total,
    payment: payment,
    status: "pending",
  };

  return receipt;
}
export function printReceipt() {
  console.log("---Receipt---");
  receipt.items.forEach((item) => {
    const priceAfterDiscount = item.product.price * (1 - item.discount);
    //  console.log(
    //   `Receipt: --- ${printCart}
    //   }`,
    // );
    console.log(
      `Product: ${item.product.name} -- Qaantity: ${item.quantity} -- Price: ${
        priceAfterDiscount * item.quantity
      }`,
    );
  });
  console.log(
    `.Total: ${receipt.total} -- Payment: ${receipt.payment} -- status: ${receipt.status} --Date ${receipt.data}`,
  );
}
