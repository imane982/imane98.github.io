Index.js
let nombre = "Imane";
let colorFavorito = "rosa";

function saludar(nombre, color) {
  console.log("¡Hola, " + nombre + "! Mi color favorito es el " + color + ".");
}

saludar(nombre, colorFavorito);

for (let i = 1; i <= 10; i++) {
  console.log("Número: " + i);
}

let nombres = ["Ana", "Carlos", "Sofía", "Pedro"];

function mostrarNombres(nombres) {
  console.log("Lista de nombres:");
  for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
  }
}

mostrarNombres(nombres);
