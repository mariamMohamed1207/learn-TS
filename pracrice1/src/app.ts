import { addToCart, removeFromCart, printCart } from "./cart";
import { Category, type Product } from "./types";

import { buildReceipt, printReceipt } from "./rec";
import {
  getAllProducts,
  getProductByID,
  updateProduct,
  removeProduct,
  addProduct,
} from "./utils";

addToCart(8, 2);
addToCart(2, 1);
// addToCart(3, 1);
// printCart();

// removeFromCart(3);
printCart();
console.log("------------");
buildReceipt("credit");
printReceipt();

// console.log(getAllProducts());
// console.log(getProductByID(3));
// console.log(getProductByID(9));
// const updatedProduct = updateProduct(9, {
//   name: "Oat",
//   price: 7.85,
//   category: Category.Food,
//   inStock: true,
// });

// console.log(updatedProduct);

// const newProduct = addProduct({
//   id: 11,
//   name: "cherries",
//   price: 2.52,
//   category: Category.Food,
//   inStock: false,
// });
// console.log(getAllProducts());
