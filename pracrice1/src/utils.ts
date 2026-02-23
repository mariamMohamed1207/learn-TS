import { products } from "./database";
import { Category, type Product } from "./types";

export function addProduct(productData: Product) {
  products.push(productData);
}

export function getAllProducts(): Product[] {
  return products;
}

// console.log(getAllProducts());
export function getProductByID(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
// console.log(getProductByID(8));
export function removeProduct(id: number): boolean {
  const x = products.findIndex(function (product) {
    return product.id === id;
  });
  if (x != -1) {
    products.splice(x, 1);
    return true;
  }
  return false;
}
export function updateProduct(
  id: number,
  newData: Partial<Product>,
): Product | undefined {
  const x = products.findIndex(function (product) {
    return product.id === id;
  });
  if (x != -1) {
    return (products[x] = newData as Product);
  }
  return undefined;
}
// const updateddd = updateProduct(9, {
//   name: "Berries",
//   price: 2.33 ,
//   category: Category.Food,
//   inStock: true,
// });

// console.log(updateddd);

// console.log(getAllProducts());
