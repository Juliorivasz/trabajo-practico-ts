import { renderUser } from "./dom/cargarUser";
import { usersList } from "./helpers/usersList";
import { AdminUser } from "./models/AdminUser";
import { CajaClass } from "./models/CajaClass";
import { UserClass } from "./models/UserClass";
import "./style.css";
import { Producto } from "./types/product";

// muestra los usuarios activos y lo muestra en consola
const userActive = usersList.filter((user) => user.activo);
console.log(userActive);

// instancia de dos usuarios y muestra en la consola
const user1 = new UserClass(1, "Ramon", 29, "ramon@gmail.com", true);
const user2 = new UserClass(2, "Pablo", 38, "Pablo@gmail.com", true);

console.log(user1, user2);

// instancia de un administrador
const admin1 = new AdminUser(1, "Carlos", 22, "carlos@gmail.com", true, ["crear, modificar, eliminar"]);
admin1.mostrarInfo();

// creacion de un array de productos
const productos: Producto[] = [
  { id: 1, nombre: "Papel", precio: 10, stock: 100 },
  { id: 2, nombre: "Lapiz", precio: 3, stock: 50 },
  { id: 3, nombre: "borrador", precio: 5, stock: 0 },
];

productos.map((producto, i) => {
  console.log(`Producto ${i + 1}: ${producto.nombre}`);
});

const productosConStock = productos.filter((producto) => producto.stock > 0);
console.log(productosConStock);

const productoOrdenAscendente = productos.sort((a, b) => a.precio - b.precio);
console.log(`Productos ordenados de menor a mayor:`);
console.log(productoOrdenAscendente);

// nuevo producto
const nuevoProducto = {
  id: 4,
  nombre: "Marcador",
  precio: 15,
  stock: 239,
};

// agrega el nuevo producto al array
productos.push(nuevoProducto);
console.log(productos);

// eliminar ultimo producto
productos.pop();

function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// arreglo de numeros
const numbers = [18, 12, 43, 23];
getRandomItem(numbers);

// arreglo de string
const words = ["telefono", "notebook", "tablet"];
getRandomItem(words);

// arreglo de objetos
const personas = [
  { nombre: "samu", edad: 18 },
  { nombre: "carlos", edad: 21 },
  { nombre: "luca", edad: 15 },
];
getRandomItem(personas);

// Prueba una interfaz generica
const CajaNombre = new CajaClass<string>("juan pablo");
CajaNombre.mostrarInfo();

// promesas y async/await
const obtenerDatos = (): Promise<{ nombre: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datos = [{ nombre: "Rodrigo" }, { nombre: "Laura" }, { nombre: "Paul" }];
      resolve(datos);
    }, 3000);
  });
};

const mostrarDatos = async () => {
  console.log("buscando datos...");

  const datos = await obtenerDatos();
  console.log(datos);
};

mostrarDatos();

// consumo de una api
const obtenerPersonas = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const personas = await response.json();
  console.log(personas);
};

obtenerPersonas();

const root = document.getElementById("app");

const botonCargarUser = document.createElement("button");
botonCargarUser.innerHTML = "Cargar usuarios";

botonCargarUser.addEventListener("click", renderUser);
root?.appendChild(botonCargarUser);
