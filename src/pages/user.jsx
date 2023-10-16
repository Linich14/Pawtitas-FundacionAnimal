
//anteriormente era el componente de usuario pero ya no es estatico por lo que se mantiene dentro del codigo userprofile
// se mantiene mascotas momentaneamente
const usuario = {
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
