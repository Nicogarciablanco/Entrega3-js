const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const buscaIdPizza = document.querySelector("form")
const input = document.querySelector("input")
const renderPizza = document.querySelector(".renderpizzas")

const pizzaTemplate = (product) => {
  const {nombre, imagen, precio} = pizzas;

  return `
            <h3>${nombre}</h3>
            <img src="${imagen}" alt="">
            <p>${precio}</p>
    `;
}






const mostrarPizzas = (e, product) => {
  e.preventDefault()
  const value = input.value; 
  
  const pizza = pizzas.find(product => product.id === Number(value));

  if(!pizza){
    
    renderPizza.innerHTML = `<h1 class="errorpizza"> Pizza no encontrada </h1>`
  }

  renderPizza.innerHTML = pizzaTemplate(product);
};

buscaIdPizza.addEventListener("submit", (e) => mostrarPizzas(e));


