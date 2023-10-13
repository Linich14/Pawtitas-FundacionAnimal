import React from "react";

function DetallesMascota({ mascota }) {
  // Verifica si mascota e imágenes están definidas antes de acceder a sus propiedades
  // Usa el operador de encadenamiento opcional para evitar errores si mascota o imágenes son nulas o indefinidas
  const primeraImagen = mascota?.imágenes?.[0];

  // Renderiza los detalles de la mascota, incluyendo su imagen, nombre, raza, género, edad, peso e historia
  return (
    <div className="detalles-mascota">
      {/* Muestra la primera imagen de la mascota si está disponible */}
      <img src={primeraImagen} alt={mascota?.nombre} />

      {/* Muestra el nombre de la mascota */}
      <h2>{mascota?.nombre}</h2>

      {/* Muestra la raza de la mascota */}
      <p>Raza: {mascota?.raza}</p>

      {/* Muestra el género de la mascota */}
      <p>Género: {mascota?.genero}</p>

      {/* Muestra la edad de la mascota */}
      <p>Edad: {mascota?.edad}</p>

      {/* Muestra el peso de la mascota */}
      <p>Peso: {mascota?.peso}</p>

      {/* Muestra la historia de la mascota */}
      <p>Historia: {mascota?.historia}</p>
    </div>
  );
}

// Exporta el componente DetallesMascota
export default DetallesMascota;
