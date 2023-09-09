const carrito = document.getElementById("carrito");
const productos = document.getElementById("productos");

const newProduct = document.getElementById("newProduct");
const newProducts = document.getElementById("newProducts");



class Productos{
    constructor(name, price, img){
        this.name = name;
        this.price = price;
        this.img = img;
    }
}


const traerData = async () => {
    const response = await fetch("../db/data.json");
    const data = await response.json();
    
    data.forEach(item => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h2 class="productName">${item.name}</h2>
            <b class="productPrice">${cantidad}</b>
            <img class="productImg" src="${item.img}">
            <button id="menos">-</button>
            <button id="agregar">Agregar</button>
            <button id="mas">+</button>
        `;
        productos.append(div);
    });
    
}



newProduct.addEventListener("click", () => {
    let item = document.createElement("div");
    item.className = "cuestionario";
    item.innerHTML = `
        <input id="productName" type="text" placeholder="Name">
        <input id="productPrice" type="number" placeholder="Price">
        <input id="productImg" type="text" placeholder="Image">
        <button id="create">create</button>
    `;
    newProducts.append(item);

    const create = document.getElementById("create");

    create.addEventListener("click", () => {
        const name = document.getElementById("productName");
        const price = document.getElementById("productPrice");
        const img = document.getElementById("productImg");


        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h2 class="productName">${name.value}</h2>
            <b class="productPrice">${price.value}</b>
            <img class="productImg" src="${img.value}">
            <button id="menos">-</button>
            <button id="agregar">Agregar</button>
            <button id="mas">+</button>
        `;
        productos.append(div);


        //añadirlo al json
        //reiniciar pagina
        
    });
});

traerData();


const menos = document.getElementById("menos");
const agregar = document.getElementById("agregar");
const mas = document.getElementById("mas");

let cantidad = 0;

menos.addEventListener("click", () => {
    cantidad = cantidad - 1;
});

mas.addEventListener("click", () => {
    cantidad = cantidad + 1;
});

traerData();


// if(email === "felialiagaa@gmail.com"){
//     //crear new product
//     //crear creador de aviso
//     //crear sin stock
// }