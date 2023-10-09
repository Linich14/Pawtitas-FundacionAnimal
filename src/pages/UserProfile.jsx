import React, { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { Card, Form, Image, Button } from "react-bootstrap";
import "../components/css/UserProfile.css";
import MisMascotas from "./MisMascotas";

function PerfilUsuario(props) {
  const { nombre, rut, correoElectronico, númeroDeTeléfono, foto, biografía, mascotas } = props;
  const [datosUsuarioEditados, setDatosUsuarioEditados] = useState(null);

  const [formData, setFormData] = useState({
    nombre: nombre,
    correoElectronico: correoElectronico,
    númeroDeTeléfono: númeroDeTeléfono,
    biografía: biografía,
  });

  const mostrarSección = (sección) => {
    setSecciónActiva(sección);
  };
  const [secciónActiva, setSecciónActiva] = useState("perfil");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleUpload = (event) => {
    console.log(event.target.files[0]);
  };

  const handleCambiosUsuarioEditados = (event) => {
    const { name, value } = event.target;
    setDatosUsuarioEditados((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card className="imagen-fondo">
      <Card.Body>
        <NavBar />
        <div className="contenedor-perfil-usuario">
          <div className="perfil-usuario">
            <Form onSubmit={handleSubmit} className="formulario-usuario">
              <div className="avatar-usuario">
                <Image
                  src={foto}
                  roundedCircle
                  width="100"
                  height="100"
                  className="imagen-perfil"
                />
                <Button variant="primary" size="sm" className="ml-3">
                  Subir foto
                  <input type="file" onChange={handleUpload} hidden />
                </Button>
              </div>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={datosUsuarioEditados?.nombre ?? formData.nombre}
                  onChange={handleCambiosUsuarioEditados}
                />
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
                  value={datosUsuarioEditados?.correoElectronico ?? formData.correoElectronico}
                  onChange={handleCambiosUsuarioEditados}
                />
              </Form.Group>
              <Form.Group controlId="númeroDeTeléfono">
                <Form.Label>Número de Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="númeroDeTeléfono"
                  value={datosUsuarioEditados?.númeroDeTeléfono ?? formData.númeroDeTeléfono}
                  onChange={handleCambiosUsuarioEditados}
                />
              </Form.Group>
              <Form.Group controlId="biografía">
                <Form.Label>Biografía</Form.Label>
                <Form.Control
                  as="textarea"
                  name="biografía"
                  value={datosUsuarioEditados?.biografía ?? formData.biografía}
                  onChange={handleCambiosUsuarioEditados}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Guardar cambios
              </Button>
            </Form>
            <div className="contenedor-botones">
              <Button variant="primary" onClick={() => mostrarSección("mascotas")}>
                Mis Mascotas
              </Button>
              <Button variant="primary" onClick={() => mostrarSección("historial")}>
                Historial de Solicitudes
              </Button>
              <Button
                variant="primary"
                onClick={() => mostrarSección("solicitudesActivas")}
              >
                Solicitudes Activas
              </Button>
            </div>
            {secciónActiva === "mascotas" && <MisMascotas />}
            {secciónActiva === "historial" && <h5 className="titulos">Historial de Solicitudes</h5>}
            {secciónActiva === "solicitudesActivas" && <h5 className="titulos">Solicitudes Activas</h5>}
          </div>
        </div>
        <Footer/>
      </Card.Body>
    </Card>
  );
}

export default PerfilUsuario;
