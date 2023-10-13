import React from "react";
//componentes con los datos del usuario y las mascotas.
const usuario = {
  nombre: "Juan Pérez",
  rut: "12345678-9",
  correoElectronico: "juan@example.com",
  númeroDeTeléfono: "+56987654321",
  foto: "/public/assets/dwayne.jpg",
  biografía: "Soy un amante de los animales",
  mascotas: [
    {
      nombre: "Mascota 1",
      raza: "Raza 1",
      genero: "Macho",
      historia: "Historia de la mascota 1",
      imágenes: [
        "/src/assets/mascota1.jpg",
      ],
      edad: 2,
      peso: "5 kg",
    },
    {
      nombre: "Mascota 2",
      raza: "Raza 2",
      genero: "Hembra",
      historia: "Historia de la mascota 2",
      imágenes: [
        "/src/assets/mascota2.jpg",
      ],
      edad: 3,
      peso: "4 kg",
    },
  ],
};

export default usuario;
