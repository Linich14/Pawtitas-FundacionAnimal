import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../components/css/UserProfile.css";

function AñadirMisMascotas({ agregarMascota, onCancel }) {
  const [nuevaMascota, setNuevaMascota] = useState({
    nombre: "",
    raza: "",
    género: "",
    historia: "",
    edad: "",
    peso: "",
  });

  const manejarAgregarMascota = () => {
    if (nuevaMascota.nombre && nuevaMascota.raza && nuevaMascota.género) {
      agregarMascota(nuevaMascota);
      setNuevaMascota({
        nombre: "",
        raza: "",
        género: "",
        historia: "",
        edad: "",
        peso: "",
      });
    } else {
      
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="formulario-agregar-mascota">
      <h4>Agregar Nueva Mascota</h4>
      <input
        type="text"
        placeholder="Nombre"
        value={nuevaMascota.nombre}
        onChange={(e) => setNuevaMascota({ ...nuevaMascota, nombre: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Raza"
        value={nuevaMascota.raza}
        onChange={(e) => setNuevaMascota({ ...nuevaMascota, raza: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Género"
        value={nuevaMascota.género}
        onChange={(e) => setNuevaMascota({ ...nuevaMascota, género: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Historia"
        value={nuevaMascota.historia}
        onChange={(e) => setNuevaMascota({ ...nuevaMascota, historia: e.target.value })}
      />
      <input
        type="text"
        placeholder="Edad"
        value={nuevaMascota.edad}
        onChange={(e) => setNuevaMascota({ ...nuevaMascota, edad: e.target.value })}
      />
      <input
        type="text"
        placeholder="Peso"
        value={nuevaMascota.peso}
        onChange={(e) => setNuevaMascota({ ...nuevaMascota, peso: e.target.value })}
      />
      <Button variant="danger" onClick={onCancel}>
        Cancelar
      </Button>
      <Button variant="success" onClick={manejarAgregarMascota}>
        Agregar Mascota
      </Button>
    </div>
  );
}

export default AñadirMisMascotas;
