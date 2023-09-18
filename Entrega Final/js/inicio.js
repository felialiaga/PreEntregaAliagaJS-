import { buyProduct } from "./carrito.js";

const productos = document.getElementById("productos");
const outstanding = document.getElementById("outstandingProducts");

export let availableProducts = JSON.parse(localStorage.getItem("products"));

document.addEventListener("DOMContentLoaded", () => {
    generateCardsProducts(availableProducts);
    outstandingProducts();
});

export const generateCardsProducts = products => {

    products.forEach( product => {

        const {name, price, id, img, categorie} = product;

        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h2 class="productName">${name}</h2>
            <b class="productPrice">$${price}</b>
            <img class="productImg" src="${img}">
            <button class="btnBuy" id="btn${id}">Buy</button>
        `;
        productos.append(div);

        const btnBuy = document.getElementById(`btn${id}`);
        btnBuy.addEventListener("click", () => buyProduct(id));
    });
};

const outstandingProducts = async () => {
    const response = await fetch("../db/data.json");
    const data = await response.json();

    data.forEach(product => {


        let div = document.createElement("div");
        div.className = "outstandingCard"
        div.innerHTML = `
            <img class="outstandingImg" src="${product.img}"> 
            <h2 class="outstandingName">${product.name}</h2>
        `
        outstanding.append(div);
    });
};