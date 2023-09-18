
import { availableProducts } from "./inicio.js";

JSON.parse(sessionStorage.getItem("cart")) === null && sessionStorage.setItem("cart", JSON.stringify([]));


document.addEventListener("DOMContentLoaded", () => {
    drawCart();
})

const btnCart = document.getElementById("btnCart");
let cart = JSON.parse(sessionStorage.getItem("cart"));
const cartList = document.getElementById("items");
const cartFoot = document.getElementById("totals");
const tableCart = document.getElementById("carrito");


btnCart.addEventListener("click", () => {
    drawCart();
    
    if(tableCart.style.display === "block"){
        tableCart.style.display = "none";
    }else{
        tableCart.style.display = "block";
    }
});


export const buyProduct = (idProduct) => {
    
    const product = availableProducts.find(product => product.id === idProduct);

    const {name, price, img, id, categorie} = product;

    const cartProduct = cart.find((product) => product.id === idProduct);


    if(cartProduct === undefined) {
        const newProductCart = {
            id: id,
            name: name,
            price: price,
            img: img,
            categorie: categorie,
            quantity: 1
        };

        cart.push(newProductCart);

        sessionStorage.setItem("cart", JSON.stringify(cart))
    }else{ 
        const indexCartProduct = cart.findIndex((product) => product.id === idProduct);

        cart[indexCartProduct].quantity++;
        cart[indexCartProduct].price = price * cart[indexCartProduct].quantity;

        sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    cart = JSON.parse(sessionStorage.getItem("cart"));

    swal("Added product!", `You added: ${name}`, "success");

    drawCart();
}

const drawCart = () => {

    cartList.innerHTML = "";

    cart.forEach(product => {

        const {name, price, img, id, quantity} = product;

        let body = document.createElement("tr");

        body.className = "cartProduct";

        body.innerHTML = `
            <th><img id="cartProductImage" src="${img}"></th>
            <td>${name}</td>
            <td>${quantity}</td>
            <td>${price / quantity}</td>
            <td>${price}</td>
            <td>
                <button id="-${id}">-</button>
                <button id="+${id}">+</button>
            </td>
        `;

        cartList.append(body);

        const btnMore = document.getElementById(`+${id}`);
        const btnLess = document.getElementById(`-${id}`);

        btnMore.addEventListener("click", () => {
            addQuantity(id);
        });

        btnLess.addEventListener("click", () => {
            restQuantity(id);
        });
    });

    drawFoot();
}

const drawFoot = () => {
    if (cart.length > 0){
        cartFoot.innerHTML = "";

        let footer = document.createElement("tr");

        footer.innerHTML = `
            <th><b>Totals:</b></th>
            <td></td>
            <td>${generateTotals().totalQuantity}</td>
            <td></td>
            <td>${generateTotals().totalCost}</td>
        `;

        cartFoot.append(footer);
    }else{
        cartFoot.innerHTML = "<h3>Any product on the cart</h3>"
    };
};

const generateTotals = () => {
    const totalCost = cart.reduce((total, {price}) => total + price, 0);
    const totalQuantity = cart.reduce((total, {quantity}) => total + quantity, 0);

    return{
        totalCost: totalCost,
        totalQuantity: totalQuantity
    }
}

const addQuantity = (id) => {
    const indexCartProduct = cart.findIndex((product) => product.id === id);
    const price = cart[indexCartProduct].price / cart[indexCartProduct].quantity;

    cart[indexCartProduct].quantity++;
    cart[indexCartProduct].price = price * cart[indexCartProduct].quantity;

    sessionStorage.setItem("cart", JSON.stringify(cart));

    drawCart();

}

const restQuantity = (id) => {
    const indexCartProduct = cart.findIndex((product) => product.id === id);
    const price = cart[indexCartProduct].price / cart[indexCartProduct].quantity;

    cart[indexCartProduct].quantity--;
    cart[indexCartProduct].price = price * cart[indexCartProduct].quantity;

    if(cart[indexCartProduct].quantity === 0){
        cart.splice(indexCartProduct, 1);
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    
    drawCart();

}