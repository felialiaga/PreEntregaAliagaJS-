let carrito = document.getElementById("carrito");


const traerData = async () => {
    const response = await fetch("../db/data.json");
    const data = await response.json();

    let item = document.createElement("div");
    item.innerHTML = `
        <h2 class='productName">${data.name}</h2>
        <b class="productPrice">${data.price}</b>
        <img class="productImg" src="${data.img}">
    `;
}

traerData()