import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { UserAuth } from "../components/Autenticacion";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import MisMascotas from "./MisMascotas";
import "../components/css/UserProfile.css"; // Importa el archivo CSS

function UserProfile(props) {
  const [secciónActiva, setSecciónActiva] = React.useState("perfil");
  const { user} = UserAuth();
  const { email, Nombre, Apellidos, Rut, imagen } = user;

  if (!user) {
    return <div>No estás autenticado</div>;
  }


  const mostrarSeccion = (sección) => {
    setSecciónActiva(sección);
  };

  return (
    <Card className="imagen-fondo">
      <Card.Body>
        <NavBar />
        <div className="contenedor-perfil-usuario">
          <div className="perfil-usuario">
            <Form className="formulario-usuario">
              <div className="imagen-usuario">
                <img
                  src={user.imagen || "../assets/dwayne.jpg"} // Reemplaza '/ruta/a/imagen/default.png' con la ruta real de la imagen por defecto
                  alt="Imagen de Perfil"
                />
              </div>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={Nombre} readOnly />
              </Form.Group>
              <Form.Group controlId="apellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={Apellidos} readOnly />
              </Form.Group>
              <Form.Group controlId="rut">
                <Form.Label>RUT</Form.Label>
                <Form.Control type="text" value={Rut} readOnly />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" value={email} readOnly />
              </Form.Group>
            </Form>
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
              {/* Botones para cambiar la sección de la página */}
            </div>
            {/* Contenidos de las diferentes secciones Mis Mascotas, Historial de Solicitudes, Solicitudes Activas */}
            {secciónActiva === "mascotas" && <MisMascotas />}
            {secciónActiva === "historial" && <h5 className="titulos">Historial de Solicitudes</h5>}
            {secciónActiva === "solicitudesActivas" && <h5 className="titulos">Solicitudes Activas</h5>}
            {/* Estos contenidos se muestran según la sección activa */}
          </div>
        </div>
        
      </Card.Body>
      <Footer className="footer" />
    </Card>
  );
}

export default UserProfile; 