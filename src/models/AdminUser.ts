import { UserClass } from "./UserClass";

export class AdminUser extends UserClass {
  permisos: string[];
  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
    super(id, nombre, edad, email, activo);
    this.permisos = permisos;
  }

  mostrarInfo(): void {
    console.log(`Admin: `);
    console.log(`Id: ${this.id}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Email: ${this.email}`);
    console.log(`Activo: ${this.activo}`);
    console.log(`Permisos: ${this.permisos}`);
  }
}
