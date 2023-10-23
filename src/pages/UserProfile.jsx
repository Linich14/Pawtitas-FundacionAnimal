import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { UserAuth } from "../components/Autenticacion";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { doc, collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
import "../components/css/UserProfile.css";
import MisMascotas from "./MisMascotas";

function UserProfile(props) {
  const [secciónActiva, setSecciónActiva] = useState("perfil");
  const { user } = UserAuth();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      if (user) {
        const usuarioRef = collection(db, "Usuarios"); // Utiliza la colección "Usuarios"
        const snapshot = await getDocs(usuarioRef);
        snapshot.forEach((doc) => {
          if (doc.id === user.uid) {
            setUsuario(doc.data());
          }
        });
      }
    };

    obtenerUsuario();
  }, [user]);

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
                  src={usuario?.imagen}
                  alt="Imagen de Perfil"
                />
              </div>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={usuario?.Nombre} readOnly />
              </Form.Group>
              <Form.Group controlId="apellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={usuario?.Apellidos} readOnly />
              </Form.Group>
              <Form.Group controlId="rut">
                <Form.Label>RUT</Form.Label>
                <Form.Control type="text" value={usuario?.Rut} readOnly />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" value={usuario?.email} readOnly />
              </Form.Group>
            </Form>
            <div className="contenedor-botones-direcciones">
              <Button
                variant="primary"
                className="boton-mis-mascotas"
                onClick={() => mostrarSeccion("mascotas")}
              >
                Mis Mascotas
              </Button>
              <Button
                variant="primary"
                className="boton-historial-solicitudes"
                onClick={() => mostrarSeccion("historial")}
              >
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
            {secciónActiva === "mascotas" && <MisMascotas />}
            {secciónActiva === "historial" && (
              <h5 className="titulos">Historial de Solicitudes</h5>
            )}
            {secciónActiva === "solicitudesActivas" && (
              <h5 className="titulos">Solicitudes Activas</h5>
            )}
          </div>
        </div>
      </Card.Body>
      <Footer className="footer" />
    </Card>
  );
}

export default UserProfile;
