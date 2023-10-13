// Importa las funciones necesarias de las bibliotecas de React y react-bootstrap
import React, { useState } from "react";
import { Card, Form, Image, Button } from "react-bootstrap";

// Importa componentes personalizados
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import MisMascotas from "./MisMascotas";
import EditarUsuario from "./EditarUsuario";

// Importa estilos CSS específicos para este componente
import "../components/css/UserProfile.css";

// Declara el componente funcional PerfilUsuario que recibe 'props' como argumento
function PerfilUsuario(props) {
  // Extrae propiedades del objeto 'props' y las asigna a variables correspondientes
  const { nombre, rut, correoElectronico, númeroDeTeléfono, foto, biografía, mascotas } = props;

  // Declara estados y funciones para manejar cambios en el componente
  const [datosUsuarioEditados, setDatosUsuarioEditados] = useState({
    nombre: nombre,
    correoElectronico: correoElectronico,
    númeroDeTeléfono: númeroDeTeléfono,
    biografía: biografía,
  });

  const [secciónActiva, setSecciónActiva] = useState("perfil");
  const [modoEdicion, setModoEdicion] = useState(false);

  // Función para cambiar la sección activa en la página
  const mostrarSeccion = (sección) => {
    setSecciónActiva(sección);
    setModoEdicion(false); // Salir del modo de edición al cambiar de sección
  };

  // Función para manejar los cambios en los datos del usuario
  const manejarCambiosUsuario = (nuevosDatos) => {
    setDatosUsuarioEditados(nuevosDatos);
  };

  // Funciones para activar y cancelar el modo de edición del usuario
  const activarEdicion = () => {
    setModoEdicion(true);
  };

  const cancelarEdicion = () => {
    setModoEdicion(false);
  };

  // Estructura del componente de usuario con condicionales basados en el modo de edición y la sección activa
  return (
    <Card className="imagen-fondo">
      <Card.Body>
        <NavBar /> 
        <div className="contenedor-perfil-usuario">
          <div className="perfil-usuario">
            {modoEdicion ? (
              // Si está en modo edición, muestra el formulario de edición de usuario
              <EditarUsuario datosUsuario={datosUsuarioEditados} guardarCambios={manejarCambiosUsuario} cancelarEdicion={cancelarEdicion} />
            ) : (
              // Si no está en modo edición, muestra los detalles del usuario
              <Form className="formulario-usuario">
                <div className="avatar-usuario">
                  <Image src={foto} roundedCircle width="100" height="100" className="imagen-perfil" />{/*Llamma a la imagen desde user dandole formatos de tamaño */}
                </div>
                <Form.Group controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name="nombre" value={datosUsuarioEditados.nombre} readOnly={!modoEdicion} />
                </Form.Group>
                <Form.Group controlId="rut">
                  <Form.Label>RUT</Form.Label>
                  <Form.Control type="text" name="rut" value={rut} readOnly />
                </Form.Group>
                <Form.Group controlId="correoElectronico">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="correoElectronico"
                    value={datosUsuarioEditados.correoElectronico}
                    readOnly={!modoEdicion}
                  />
                </Form.Group>
                <Form.Group controlId="númeroDeTeléfono">
                  <Form.Label>Número de Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    name="númeroDeTeléfono"
                    value={datosUsuarioEditados.númeroDeTeléfono}
                    readOnly={!modoEdicion}
                  />
                </Form.Group>
                <Form.Group controlId="biografía">
                  <Form.Label>Biografía</Form.Label>
                  <Form.Control as="textarea" name="biografía" value={datosUsuarioEditados.biografía} readOnly={!modoEdicion} />
                </Form.Group>
                {modoEdicion ? (
                  <>
                  {/*Botones Para guardar o cancelar edicion */}
                    <Button variant="success" type="submit">
                      Guardar cambioss
                    </Button>
                    <Button variant="secondary" className="ml-2" onClick={cancelarEdicion}>
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" className="ml-2" onClick={activarEdicion}>
                    Editar Usuario
                  </Button>
                )}
              </Form>
            )}
            {/* Botones para cambiar la sección de la página */}
            <div className="contenedor-botones-direcciones">
              <Button variant="primary" className="boton-mis-mascotas" onClick={() => mostrarSeccion("mascotas")}>
                Mis Mascotas
              </Button>
              <Button variant="primary" className="boton-historial-solicitudes" onClick={() => mostrarSeccion("historial")}>
                Historial de Solicitudes
              </Button>
              <Button
                variant="primary"
                className="boton-solicitudes-activas"
                onClick={() => mostrarSeccion("solicitudesActivas")}
              >
                Solicitudes Activas
              </Button>
            </div>
            {/* Contenidos de las diferentes secciones Mis Mascotas, Historial de Solicitudes, Solicitudes Activas */}
            {secciónActiva === "mascotas" && <MisMascotas />}
            {secciónActiva === "historial" && <h5 className="titulos">Historial de Solicitudes</h5>}
            {secciónActiva === "solicitudesActivas" && <h5 className="titulos">Solicitudes Activas</h5>}
             {/* Estos contenidos se muestran según la sección activa */}
          </div>
        </div>
        <Footer /> 
      </Card.Body>
    </Card>
  );
}

export default PerfilUsuario; // Exporta el componente PerfilUsuario para su uso en otros archivos
