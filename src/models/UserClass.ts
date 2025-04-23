import { Usuario } from "../types/user";
export class UserClass implements Usuario {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;

  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
  }

  toggleActive(): void {
    this.activo = !this.activo;
    console.log("se cambio el estado del usuario");
  }
}
