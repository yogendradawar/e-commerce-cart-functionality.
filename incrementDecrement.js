import { getCartProductFromLS } from "./getCartProduct";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event , id , price , stock) => {

    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();
    let existingProduct = localCartProducts.find((curProd) => curProd.id == id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    }
    else{
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity == stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }


    if((event.target.className === "cartDecrement")){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    
    let updateCart = {id,quantity,price:localStoragePrice};

    updateCart = localCartProducts.map((currProd) => {return currProd.id === id ? updateCart : currProd});

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    updateCartProductTotal();
}