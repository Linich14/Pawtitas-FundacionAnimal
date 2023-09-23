import React from "react";

function PetDetail({ pet, onClose }) {
  return (
    <div className="pet-detail">
      <img src={pet.imageUrl} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>Raza: {pet.breed}</p>
      <p>Género: {pet.gender}</p>
      <p>Edad: {pet.age}</p>
      <p>Peso: {pet.weight}</p>
      <button onClick={onClose}>Volver</button>
    </div>
  );
}

export default PetDetail;
