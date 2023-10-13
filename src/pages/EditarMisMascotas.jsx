import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "../components/css/UserProfile.css";

function EditarMisMascotas({ mascotaSeleccionada, manejarEditarMascota }) {
  // Estado para almacenar los datos de la mascota editada
  const [datosMascotaEditados, setDatosMascotaEditados] = useState({});

  // Efecto para actualizar los datos de la mascota editada cuando cambia la mascota seleccionada
  useEffect(() => {
    setDatosMascotaEditados(mascotaSeleccionada);
  }, [mascotaSeleccionada]);

  // Función para manejar los cambios en la mascota editada
  const manejarCambioMascotaEditada = (evento) => {
    const { name, value } = evento.target;
    setDatosMascotaEditados((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
  };

  // Función para guardar la mascota editada
  const guardarMascotaEditada = () => {
    // Verifica si el índice de la mascota seleccionada no es nulo y si hay datos de la mascota editada
    if (mascotaSeleccionada.index !== null && datosMascotaEditados) {
      // Llama a la función de manejarEditarMascota con el índice de la mascota y los datos editados
      manejarEditarMascota(mascotaSeleccionada.index, datosMascotaEditados);
    }
  };

  // Renderiza el formulario para editar una mascota con campos de entrada y un botón para guardar los cambios
  return (
    <div className="formulario-editar-mascota">
      <h4>Editar Mascota</h4>
      <Form>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={datosMascotaEditados.nombre || ""}
            onChange={manejarCambioMascotaEditada}
          />
        </Form.Group>
        <Form.Group controlId="raza">
          <Form.Label>Raza</Form.Label>
          <Form.Control
            type="text"
            name="raza"
            value={datosMascotaEditados.raza}
            onChange={manejarCambioMascotaEditada}
          />
        </Form.Group>
        <Form.Group controlId="genero">
          <Form.Label>Género</Form.Label>
          <Form.Control
            type="text"
            name="genero"
            value={datosMascotaEditados.genero}
            onChange={manejarCambioMascotaEditada}
          />
        </Form.Group>
        <Form.Group controlId="historia">
          <Form.Label>Historia</Form.Label>
          <Form.Control
            as="textarea"
            name="historia"
            value={datosMascotaEditados.historia}
            onChange={manejarCambioMascotaEditada}
          />
        </Form.Group>
        <Form.Group controlId="edad">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="text"
            name="edad"
            value={datosMascotaEditados.edad}
            onChange={manejarCambioMascotaEditada}
          />
        </Form.Group>
        <Form.Group controlId="peso">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            type="text"
            name="peso"
            value={datosMascotaEditados.peso}
            onChange={manejarCambioMascotaEditada}
          />
        </Form.Group>
        {/* Botón para guardar los cambios en la mascota */}
        <Button variant="success" onClick={guardarMascotaEditada}>
          Guardar
        </Button>
      </Form>
    </div>
  );
}

// Exporta el componente EditarMisMascotas
export default EditarMisMascotas;
