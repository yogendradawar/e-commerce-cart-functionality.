const cartValue = document.querySelector(".cart-btn");

export const updateCartValue = (cardProducts) => {
    return cartValue.innerHTML =  `<i class="fa-solid fa-cart-shopping"> ${cardProducts.length} </i>`
}