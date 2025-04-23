/* 
  1. Se pueden declarar multiples interfaces con el mismo nombre y ts las fusionara a diferencia de Type que causa un error.
  2. Para heredar las Interfaces usan extends, Type usa &, es decir sintaxis diferentes.
  3. La Interfaz solo se define como forma de objeto, Type es flexible permite uniones, intersecciones, tipos primitivos, etc.
  4. La Interfaz no puede contener tipos computados, Type si lo permite.
*/

export interface Usuario {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
}

export type UsuarioType = {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
};
