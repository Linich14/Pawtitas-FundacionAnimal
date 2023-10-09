import React from "react";

function DetallesMascota({ mascota}) {
  return (
    <div className="detalles-mascota">
      <img src={mascota.imágenes[0]} alt={mascota.nombre} />
      <h2>{mascota.nombre}</h2>
      <p>Raza: {mascota.raza}</p>
      <p>Género: {mascota.genero}</p>
      <p>Edad: {mascota.edad}</p>
      <p>Peso: {mascota.peso}</p>
      <p>Historia: {mascota.historia}</p>
    </div>
  );
}

export default DetallesMascota;
