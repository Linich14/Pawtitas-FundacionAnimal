import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../components/css/UserProfile.css";

function AñadirMisMascotas({ agregarMascota, onCancel }) {
  // Estado para almacenar los datos de la nueva mascota
  const [nuevaMascota, setNuevaMascota] = useState({
    nombre: "",
    raza: "",
    género: "",
    historia: "",
    edad: "",
    peso: "",
  });

  // Función para manejar la adición de una nueva mascota
  const manejarAgregarMascota = () => {
    // Verifica si todos los campos están completos antes de agregar la mascota
    if (nuevaMascota.nombre && nuevaMascota.raza && nuevaMascota.género && nuevaMascota.edad && nuevaMascota.peso && nuevaMascota.historia) {
      // Llama a la función de agregarMascota y reinicia el estado de nuevaMascota
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
      // Muestra una alerta si no todos los campos están completos
      alert("Por favor, complete todos los campos.");
    }
  };

  // Renderiza el formulario para agregar una nueva mascota con campos de entrada y botones de acción
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
      {/* Botón para cancelar la operación */}
      <Button variant="danger" onClick={onCancel}>
        Cancelar
      </Button>
      {/* Botón para agregar la nueva mascota */}
      <Button variant="success" onClick={manejarAgregarMascota}>
        Agregar Mascota
      </Button>
    </div>
  );
}

// Exporta el componente AñadirMisMascotas
export default AñadirMisMascotas;