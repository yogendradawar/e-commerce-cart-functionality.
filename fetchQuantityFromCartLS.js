import { getCartProductFromLS } from "./getCartProduct"

export const fetchQuantityFromCartLS = (id,price) => {
    let cardProducts = getCartProductFromLS();

    let existingProduct = cardProducts.find((curProd) => curProd.id == id);

    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity,price};
}