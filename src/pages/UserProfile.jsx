// Importa los módulos y componentes necesarios desde las bibliotecas de React y otros archivos locales.
import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { UserAuth } from "../components/Autenticacion"; // Importa el componente de autenticación de usuario.
import NavBar from "../components/navbar"; // Importa el componente de barra de navegación.
import Footer from "../components/Footer"; // Importa el componente de pie de página.
import { doc, getDoc, setDoc } from "@firebase/firestore"; // Importa funciones de Firestore para acceder a documentos.
import { db } from "../firebase"; // Importa la instancia de la base de datos Firestore.
import "../components/css/UserProfile.css"; // Importa los estilos CSS para el perfil de usuario.
import MisMascotas from "./MisMascotas"; // Importa el componente MisMascotas para mostrar las mascotas del usuario.
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router para la navegación entre páginas.
import SolicitudesActivasUsuario from "./SolicitudesActivasUsuario";

// Define el componente funcional PerfilUsuario.
function PerfilUsuario(props) {
  // Utiliza el hook useState para gestionar el estado del componente.
  const [seccionActiva, setSeccionActiva] = useState('perfil'); // Estado para controlar la sección activa del perfil.
  const { user } = UserAuth(); // Obtiene el objeto de usuario actual utilizando el componente UserAuth.
  const [usuario, setUsuario] = useState(null); // Estado para almacenar los datos del usuario.
  const [seccionEditando, setSeccionEditando] = useState(false); // Estado para activar/desactivar el modo de edición.

  // Estado para almacenar los datos editados del usuario.
  const [usuarioEditado, setUsuarioEditado] = useState({
    Nombre: "",
    Apellidos: "",
    email: "",
  });

  // Utiliza el hook useEffect para realizar operaciones después de que el componente se haya montado.
  useEffect(() => {
    // Define una función asincrónica para obtener los datos del usuario de Firestore.
    const obtenerUsuario = async () => {
      // Comprueba si hay un usuario autenticado.
      if (user && user.uid) {
        // Accede al documento del usuario en la colección "Usuarios" utilizando su UID.
        const usuarioRef = doc(db, "Usuarios", user.uid);
        // Obtiene una instantánea del documento del usuario.
        const snapshot = await getDoc(usuarioRef);

        // Comprueba si el documento del usuario existe en Firestore.
        if (snapshot.exists()) {
          // Almacena los datos del usuario en el estado del componente.
          setUsuario(snapshot.data());
        }
      }
    };

    // Llama a la función obtenerUsuario para cargar los datos del usuario.
    obtenerUsuario();

    // La dependencia [user] asegura que esta función se ejecute cada vez que el usuario cambie.
  }, [user]);

  // Define una función para manejar los cambios en los campos de entrada del formulario de edición.
  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado de usuarioEditado con los cambios en los campos de entrada.
    setUsuarioEditado({ ...usuarioEditado, [name]: value });
  };

  // Define una función para guardar los cambios realizados en el perfil del usuario.
  const guardarCambios = async () => {
    // Accede al documento del usuario en Firestore utilizando su UID.
    const usuarioRef = doc(db, "Usuarios", user.uid);
    const datosEditados = {}; // Objeto para almacenar los datos editados.

    // Comprueba si los campos editados son diferentes a los datos existentes del usuario.
    if (usuarioEditado.Nombre && usuarioEditado.Nombre !== usuario?.Nombre) {
      datosEditados.Nombre = usuarioEditado.Nombre;
    }
    if (usuarioEditado.Apellidos && usuarioEditado.Apellidos !== usuario?.Apellidos) {
      datosEditados.Apellidos = usuarioEditado.Apellidos;
    }
    if (usuarioEditado.email && usuarioEditado.email !== usuario?.email) {
      datosEditados.email = usuarioEditado.email;
    }

    // Comprueba si hay datos editados para guardar en Firestore.
    if (Object.keys(datosEditados).length > 0) {
      // Actualiza el documento del usuario con los datos editados utilizando merge: true para conservar otros datos no editados.
      await setDoc(usuarioRef, datosEditados, { merge: true });
      // Actualiza el estado del usuario con los datos editados.
      setUsuario({ ...usuario, ...datosEditados });
    }

    // Desactiva el modo de edición después de guardar los cambios.
    setSeccionEditando(false);
  };

  // Define una función para alternar entre el modo de edición y el modo de visualización.
  const alternarModoEdicion = () => {
    // Cambia el estado de seccionEditando para activar o desactivar el modo de edición.
    setSeccionEditando(!seccionEditando);

    // Si se está entrando en modo de edición, copia los datos del usuario al estado de usuarioEditado.
    if (seccionEditando) {
      setUsuarioEditado({
        Nombre: usuario?.Nombre || "",
        Apellidos: usuario?.Apellidos || "",
        email: usuario?.email || "",
      });
    }
  };

  // Define una función para cambiar la sección activa en el perfil del usuario.
  const mostrarSeccion = (seccion) => {
    // Cambia el estado de seccionActiva para mostrar la sección deseada.
    setSeccionActiva(seccion);
  };

  // Retorna la estructura JSX del componente UserProfile con los elementos y comportamientos definidos.
  return (
    <Card className="imagen-fondo">
      <Card.Body>
        <NavBar /> 
        <div className="contenedor-perfil-usuario">
          <div className="perfil-usuario">
            <Form className="formulario-usuario">
              <div className="imagen-usuario perfil-redondo">
                {/* Muestra la imagen de perfil del usuario obtenida del estado del usuario. */}
                <img src={usuario?.imagen} alt="Imagen de Perfil" />
              </div>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                {/* Muestra el campo de entrada del nombre del usuario en modo de edición o modo de visualización. */}
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
                {/* Muestra el campo de entrada de apellidos del usuario en modo de edición o modo de visualización. */}
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
                {/* Muestra el campo de entrada de RUT del usuario en modo de visualización (solo lectura). */}
                <Form.Control type="text" value={usuario?.Rut} readOnly />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo Electrónico</Form.Label>
                {/* Muestra el campo de entrada de correo electrónico del usuario en modo de edición o modo de visualización. */}
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
              {/* Renderiza el botón para guardar los cambios en el perfil (modo de edición). */}
              {seccionEditando && (
                <Button variant="primary" onClick={guardarCambios}>
                  Guardar Cambios
                </Button>
              )}
              {/* Renderiza el botón para alternar entre modo de edición y modo de visualización. */}
              <Button variant="primary" onClick={alternarModoEdicion}>
                {seccionEditando ? "Cancelar" : "Editar"}
              </Button>
            </Form>
            {/* Renderiza los botones para mostrar diferentes secciones del perfil (Mis Mascotas, Historial de Solicitudes, etc.). */}
            <div className="contenedor-botones-direcciones">
              {/* Botón para mostrar la sección de Mis Mascotas. */}
              <Button
                variant="primary"
                className="boton-mis-mascotas"
                onClick={() => mostrarSeccion("mascotas")}
              >
                Mis Mascotas
              </Button>
              {/* Botón para mostrar la sección de Historial de Solicitudes. */}
              <Button
                variant="primary"
                className="boton-historial-solicitudes"
                onClick={() => mostrarSeccion("historial")}
              >
                Historial de Solicitudes
              </Button>
              {/* Botón para mostrar la sección de Solicitudes Activas (no implementada en este código). */}
              <Button
                variant="primary"
                className="boton-solicitudes-activas"
                onClick={() => mostrarSeccion("solicitudesActivas")}
              >
                Solicitudes Activas
              </Button>
              
              {/* Botón para mostrar el Panel de Administración si el usuario tiene permisos de administrador. */}
              {usuario && usuario.permisos === 1 ? 
              <Link to='/Administracion'>
                <Button variant="primary" className="boton-solicitudes-activas">Panel de Administracion</Button>
              </Link> : ''}
            </div>
            {/* Renderiza el componente MisMascotas si la sección activa es "mascotas". */}
            {seccionActiva === "mascotas" && <MisMascotas />}
            {/* Renderiza el componente HistorialSolicitudes si la sección activa es "historial". */}
            {seccionActiva === "historial" && (
              <h5 className="titulos">Historial de Solicitudes</h5>
            )}
            {/* Renderiza un título si la sección activa es "solicitudesActivas" (no implementada en este código). */}
            {seccionActiva === "solicitudesActivas" && <SolicitudesActivasUsuario/>}
          </div>
        </div>
      </Card.Body>
      <Footer className="footer" /> 
    </Card>
  );
}

export default PerfilUsuario; 