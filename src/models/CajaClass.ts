import { Caja } from "../types/caja";

export class CajaClass<T> implements Caja<T> {
  contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  mostrarInfo(): void {
    console.log(`El contenido de la caja es: ${this.contenido}`);
  }
}
