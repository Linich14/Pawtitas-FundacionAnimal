// Importa las funciones necesarias de las bibliotecas de React y react-bootstrap
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Declara el componente funcional EditarUsuario que recibe 'datosUsuario', 'guardarCambios' y 'cancelarEdicion' como argumentos
function EditarUsuario({ datosUsuario, guardarCambios, cancelarEdicion }) {
  // Declara el estado 'formularioDatos' y la función 'setFormularioDatos' usando el gancho useState
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: datosUsuario.nombre,
    correoElectronico: datosUsuario.correoElectronico,
    númeroDeTeléfono: datosUsuario.númeroDeTeléfono,
    biografía: datosUsuario.biografía,
  });

  // Función para manejar los cambios en los campos del formulario
  const manejarCambioInput = (event) => {
    const { name, value } = event.target;
    setFormularioDatos((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const manejarEnvioFormulario = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    guardarCambios(formularioDatos); // Llama a la función 'guardarCambios' con los datos del formulario
    cancelarEdicion(); // Llama a la función 'cancelarEdicion' para cambiar el modo de edición a false
  };

  // Estructura del componente de formulario de edición de usuario
  return (
    <div className="formulario-usuario">
      {/* Formulario con campos para editar el nombre, correo, número de teléfono y biografía del usuario */}
      <Form onSubmit={manejarEnvioFormulario}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          {/* Campo para el nombre del usuario */}
          <Form.Control type="text" name="nombre" value={formularioDatos.nombre} onChange={manejarCambioInput} />
        </Form.Group>
        <Form.Group controlId="correoElectronico">
          <Form.Label>Correo Electrónico</Form.Label>
          {/* Campo para el correo electrónico del usuario */}
          <Form.Control type="email" name="correoElectronico" value={formularioDatos.correoElectronico} onChange={manejarCambioInput} />
        </Form.Group>
        <Form.Group controlId="númeroDeTeléfono">
          <Form.Label>Número de Teléfono</Form.Label>
          {/* Campo para el número de teléfono del usuario */}
          <Form.Control type="tel" name="númeroDeTeléfono" value={formularioDatos.númeroDeTeléfono} onChange={manejarCambioInput} />
        </Form.Group>
        <Form.Group controlId="biografía">
          <Form.Label>Biografía</Form.Label>
          {/* Campo de texto grande para la biografía del usuario */}
          <Form.Control as="textarea" name="biografía" value={formularioDatos.biografía} onChange={manejarCambioInput} />
        </Form.Group>
        {/* Botón para guardar los cambios realizados en el formulario */}
        <Button variant="success" type="submit">
          Guardar cambios
        </Button>
        {/* Botón para cancelar la edición y salir del modo de edición */}
        <Button variant="secondary" className="ml-2" onClick={cancelarEdicion}>
          Cancelar
        </Button>
      </Form>
    </div>
  );
}

export default EditarUsuario; // Exporta el componente EditarUsuario para su uso en otros archivos
