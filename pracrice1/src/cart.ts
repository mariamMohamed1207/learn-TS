import { products } from "./database";
import { Category, type CartItem, type Product } from "./types";

let Cart: CartItem[] = [];

export function addToCart(id: number, quantity: number = 1) {
  const item = products.find((product) => product.id === id);
  const existingItem = Cart.find((item) => item.product.id === id);
  if (!item) {
    console.log("No Product Found");
    return;
  }

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    Cart.push({
      product: item,
      quantity: quantity,
      discount: 0.3,
    });
  }
}
// const trial = addToCart(2);
// const triall = addToCart(8);

export function printCart() {
  if (Cart.length >= 1) {
    console.log("Cart:");
    Cart.forEach((item) => {
      const DiscountedPrice = item.product.price * (1 - item.discount);
      console.log(
        `Product: ${item.product.name} -- Quantity: ${item.quantity} -- Price after discount: ${DiscountedPrice}`,
      );
    });
  } else {
    console.log("No Products yet!");
  }
}

// printCart();
export function removeFromCart(id: number): boolean {
  const x = Cart.findIndex((item) => item.product.id === id);
  if (x !== -1) {
    Cart.splice(x, 1);
    return true;
  } else {
    return false;
  }
}
// removeFromCart(2);
// printCart();
export function finalizedCart(): CartItem[] {
  return Cart;
}
