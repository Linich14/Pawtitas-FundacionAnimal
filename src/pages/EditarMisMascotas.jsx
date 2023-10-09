import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "../components/css/UserProfile.css";

function EditarMisMascotas({ mascotaSeleccionada, manejarEditarMascota }) {
  const [datosMascotaEditados, setDatosMascotaEditados] = useState({});

  useEffect(() => {
    setDatosMascotaEditados(mascotaSeleccionada);
  }, [mascotaSeleccionada]);

  const manejarCambioMascotaEditada = (evento) => {
    const { name, value } = evento.target;
    setDatosMascotaEditados((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
  };

  const guardarMascotaEditada = () => {
    if (mascotaSeleccionada.index !== null && datosMascotaEditados) {
      manejarEditarMascota(mascotaSeleccionada.index, datosMascotaEditados);
    }
  };

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
        <Button variant="success" onClick={guardarMascotaEditada}>
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default EditarMisMascotas;
