import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProduct";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd) => {
  return cartProducts.some((curElem) => curElem.id == currProd.id);
});

console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((currProd) => {
    const { category, id, image, name, stock, price } = currProd;

    let productClone = document.importNode(templateContainer.content, true);

    const lsActualData = fetchQuantityFromCartLS(id,price);

    productClone.querySelector(".cards").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
    productClone.querySelector(".productPrice").textContent = `₹${lsActualData.price.toFixed(2)}`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id , price , stock);
      });

    productClone.querySelector(".remove-to-cart-button").addEventListener("click",() => removeProdFromCart(id));

    cartElement.appendChild(productClone);
  });
};

showCartProduct();

updateCartProductTotal();