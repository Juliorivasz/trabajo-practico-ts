import { Producto } from "../types/product";

export class ProductClass implements Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;

  constructor(id: number, nombre: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
