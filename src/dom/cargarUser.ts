import { usersList } from "../helpers/usersList";
import { Usuario } from "../types/user";

export const cargarUsuario = (usuario: Usuario) => {
  const item = document.createElement("li");
  item.innerHTML = `
    <strong>Nombre:</strong> ${usuario?.nombre} <br />
    <strong>Email:</strong> ${usuario?.email}
  `;
  return item;
};

export const renderUser = () => {
  const root = document.getElementById("app");

  if (root?.querySelector("ul")) {
    return;
  }

  if (root) {
    const lista = document.createElement("ul");

    usersList.forEach((user) => {
      const renderUser = cargarUsuario(user);
      lista.appendChild(renderUser);
    });

    root.appendChild(lista);
  }
};
