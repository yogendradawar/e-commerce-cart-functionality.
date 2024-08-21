import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event,id,stock) =>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    // console.log(currentProdElem);

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;

    let price = currentProdElem.querySelector(".productPrice").innerText;

    price = price.replace("₹","");

    let existingProd = arrLocalStorageProduct.find((currProd) => currProd.id === id);

    if(existingProd && quantity > 1){

            quantity = Number(existingProd.quantity) + Number(quantity);
            if(quantity >= stock){
                quantity = stock;
                price = Number(Number(quantity) * price);
            }
            else{
            price = Number(Number(quantity) * price);
            }
       
        // price = Number(Number(quantity) * price);

        let updateCart = {id,quantity,price};

        updateCart = arrLocalStorageProduct.map((currProd) => {return currProd.id === id ? updateCart : currProd});

        localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

        showToast("add",id);
    }

    if(existingProd){
        return false;
    }

        
        price = Number(quantity * price);
        quantity = Number(quantity);

        
    arrLocalStorageProduct.push({id , quantity , price});
    localStorage.setItem("cartProductLS" , JSON.stringify(arrLocalStorageProduct));


    updateCartValue(arrLocalStorageProduct);

    showToast("add",id);
};