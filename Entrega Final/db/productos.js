export const products = [
    {
        id: 1,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer1.jpeg",
        categorie: "t-shirts"
    },
    {
        id: 2,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer2.jpeg",
        categorie: "t-shirts"
    },
    {
        id: 3,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer3.jpeg",
        categorie: ""
    },
    {
        id: 4,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer12.jpeg",
        categorie: ""
    },
    {
        id: 5,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer14.jpeg",
        categorie: ""
    },
    {
        id: 6,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer18.jpeg",
        categorie: ""
    },
    {
        id: 7,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer21.jpeg",
        categorie: ""
    },
    {
        id: 8,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer26.jpeg",
        categorie: ""
    },
    {
        id: 9,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer36.jpeg",
        categorie: ""
    },
    {
        id: 10,
        name: "Prenda de mujer",
        price: 34000,
        img: "../images/mujer/mujer40.jpeg",
        categorie: ""
    }
];

JSON.parse(localStorage.getItem("products")) || localStorage.setItem("products", JSON.stringify(products)); 
