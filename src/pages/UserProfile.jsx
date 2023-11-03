import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { UserAuth } from "../components/Autenticacion";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../firebase";
import "../components/css/UserProfile.css";
import MisMascotas from "./MisMascotas";
import {Link} from 'react-router-dom'

function PerfilUsuario(props) {
  const [seccionActiva, setSeccionActiva] = useState("perfil");
  const { user } = UserAuth();
  const [usuario, setUsuario] = useState(null);
  const [seccionEditando, setSeccionEditando] = useState(false);

  const [usuarioEditado, setUsuarioEditado] = useState({
    Nombre: "",
    Apellidos: "",
    email: "",
  });

  useEffect(() => {
    const obtenerUsuario = async () => {
      if (user) {
        const usuarioRef = doc(db, "Usuarios", user.uid);
        const snapshot = await getDoc(usuarioRef);
        if (snapshot.exists()) {
          setUsuario(snapshot.data());
        }
      }
    };

    obtenerUsuario();
  }, [user]);

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setUsuarioEditado({ ...usuarioEditado, [name]: value });
  };

  const guardarCambios = async () => {
    const usuarioRef = doc(db, "Usuarios", user.uid);
    const datosEditados = {}; 
    if (usuarioEditado.Nombre && usuarioEditado.Nombre !== usuario?.Nombre) {
      datosEditados.Nombre = usuarioEditado.Nombre;
    }
    if (usuarioEditado.Apellidos && usuarioEditado.Apellidos !== usuario?.Apellidos) {
      datosEditados.Apellidos = usuarioEditado.Apellidos;
    }
    if (usuarioEditado.email && usuarioEditado.email !== usuario?.email) {
      datosEditados.email = usuarioEditado.email;
    }

    if (Object.keys(datosEditados).length > 0) {
      await setDoc(usuarioRef, datosEditados, { merge: true });
      setUsuario({ ...usuario, ...datosEditados });
    }

    setSeccionEditando(false);
  };

  const alternarModoEdicion = () => {
    setSeccionEditando(!seccionEditando);
    if (seccionEditando) {
      setUsuarioEditado({
        Nombre: usuario?.Nombre || "",
        Apellidos: usuario?.Apellidos || "",
        email: usuario?.email || "",
      });
    }
  };

  const mostrarSeccion = (seccion) => {
    setSeccionActiva(seccion);
  };

  return (
    <Card className="imagen-fondo">
      <Card.Body>
        <NavBar />
        <div className="contenedor-perfil-usuario">
          <div className="perfil-usuario">
            <Form className="formulario-usuario">
              <div className="imagen-usuario perfil-redondo">
                <img src={usuario?.imagen} alt="Imagen de Perfil" />
              </div>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                {seccionEditando ? (
                  <Form.Control
                    type="text"
                    name="Nombre"
                    value={usuarioEditado.Nombre || usuario?.Nombre}
                    onChange={manejarCambioInput}
                  />
                ) : (
                  <Form.Control type="text" value={usuario?.Nombre} readOnly />
                )}
              </Form.Group>
              <Form.Group controlId="apellidos">
                <Form.Label>Apellidos</Form.Label>
                {seccionEditando ? (
                  <Form.Control
                    type="text"
                    name="Apellidos"
                    value={usuarioEditado.Apellidos || usuario?.Apellidos}
                    onChange={manejarCambioInput}
                  />
                ) : (
                  <Form.Control type="text" value={usuario?.Apellidos} readOnly />
                )}
              </Form.Group>
              <Form.Group controlId="rut">
                <Form.Label>RUT</Form.Label>
                <Form.Control type="text" value={usuario?.Rut} readOnly />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                {seccionEditando ? (
                  <Form.Control
                    type="email"
                    name="email"
                    value={usuarioEditado.email || usuario?.email}
                    onChange={manejarCambioInput}
                  />
                ) : (
                  <Form.Control type="email" value={usuario?.email} readOnly />
                )}
              </Form.Group>
              {seccionEditando && (
                <Button variant="primary" onClick={guardarCambios}>
                  Guardar Cambios
                </Button>
              )}
              <Button variant="primary" onClick={alternarModoEdicion}>
                {seccionEditando ? "Cancelar" : "Editar"}
              </Button>
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

              
              {usuario && usuario.permisos === 1 ? 
              <Link to='/Administracion'>
                <Button variant="primary" className="boton-solicitudes-activas">Panel de Administracion</Button>
              </Link> : ''}
            </div>
            {seccionActiva === "mascotas" && <MisMascotas />}
            {seccionActiva === "historial" && (
              <h5 className="titulos">Historial de Solicitudes</h5>
            )}
            {seccionActiva === "solicitudesActivas" && (
              <h5 className="titulos">Solicitudes Activas</h5>
            )}

          </div>
        </div>
      </Card.Body>
      <Footer className="footer" />
    </Card>
  );
}

export default PerfilUsuario;
