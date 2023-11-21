import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { doc, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../components/Autenticacion";
import AñadirMisMascotas from "./AñadirMisMascotas";
import "../components/css/UserProfile.css";

// Función principal del componente MisMascotas
function MisMascotas() {
  // Obtiene la información del usuario autenticado
  const { user } = UserAuth();
  // Estados para almacenar la lista de mascotas, mostrar el formulario y la mascota seleccionada
  const [mascotas, setMascotas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  // Efecto que se ejecuta al montar o actualizar el componente para obtener las mascotas del usuario
  useEffect(() => {
    const obtenerMisMascotas = async () => {
      if (user) {
        const usuarioRef = doc(db, "Usuarios", user.uid);
        const misMascotasRef = collection(usuarioRef, "MisMascotas");
        const snapshot = await getDocs(misMascotasRef);
        const listaMascotas = [];
        // Recorre los documentos y construye la lista de mascotas
        snapshot.forEach((doc) => {
          listaMascotas.push({ id: doc.id, ...doc.data() });
        });
        // Actualiza el estado con la lista de mascotas
        setMascotas(listaMascotas);
      }
    };

    // Llama a la función para obtener las mascotas
    obtenerMisMascotas();
  }, [user]); // Se ejecuta cada vez que cambia el usuario

  // Función para manejar la adición de una nueva mascota
  const manejarAgregarMascota = async (nuevaMascota) => {
    try {
      if (user) {
        // Obtiene la referencia del usuario y de la colección "MisMascotas"
        const usuarioRef = doc(db, "Usuarios", user.uid);
        const misMascotasRef = collection(usuarioRef, "MisMascotas");
        // Añade la nueva mascota a la colección "MisMascotas"
        await addDoc(misMascotasRef, nuevaMascota);
        // Actualiza el estado con la nueva mascota
        setMascotas([...mascotas, nuevaMascota]);
        // Oculta el formulario después de agregar la mascota
        setMostrarFormulario(false);
        // Muestra un mensaje de éxito
        alert("Mascota añadida exitosamente.");
      }
    } catch (error) {
      console.error("Error al añadir la mascota:", error);
    }
  };

  // Función para cancelar y ocultar el formulario de agregar mascota
  const manejarCancelar = () => {
    setMostrarFormulario(false);
  };

  // Estructura del componente con la lista de mascotas y el formulario para agregar
  return (
    <div className="contenedor-mis-mascotas">
      <h5 className="titulos">Mis Mascotas</h5>
      {/* Muestra las miniaturas de las mascotas */}
      <div className="contenedor-mascotas">
        {mascotas &&
          mascotas.map((mascota) => (
            <div className="miniatura-mascota" key={mascota.id}>
              {/* Muestra la imagen de la mascota */}
              <img src={mascota.Animal_Imagen} alt={mascota.Animal_Imagen} className="imagen-miniatura-mascota" />
              {/* Detalles de la mascota seleccionada */}
              {mascotaSeleccionada && mascotaSeleccionada.id === mascota.id && (
                <div className="contenedor-detalles-mascota">
                  {/* Detalles de la mascota */}
                  <h2>{mascotaSeleccionada.Animal_Nombre}</h2>
                  <p>Tipo: {mascotaSeleccionada.Animal_Tipo}</p>
                  <p>Raza: {mascotaSeleccionada.Animal_Raza}</p>
                  <p>Sexo: {mascotaSeleccionada.Animal_Sexo}</p>
                  <p>Edad: {mascotaSeleccionada.Animal_Edad} {mascotaSeleccionada.unidad}</p>
                  <p>Datos del Animal: {mascotaSeleccionada.Animal_Datos}</p>
                  <p>Estado de Salud del Animal: {mascotaSeleccionada.Animal_Estado_Salud}</p>
                  {/* Botón para cerrar los detalles */}
                  <Button onClick={() => setMascotaSeleccionada(null)}>Cerrar Detalles</Button>
                </div>
              )}
              {/* Botón para ver detalles de la mascota */}
              <Button
                variant="info"
                className="boton-ver-detalles"
                onClick={() => setMascotaSeleccionada(mascota)}
              >
                Ver Detalles de {mascota.Animal_Nombre}
              </Button>
            </div>
          ))}
      </div>
      {/* Botón para agregar nueva mascota */}
      <Button className="boton-agregar-mascota" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        Agregar Mascota
      </Button>
      {/* Renderiza el formulario si mostrarFormulario es true */}
      {mostrarFormulario && <AñadirMisMascotas agregarMascota={manejarAgregarMascota} onCancel={manejarCancelar} />}
    </div>
  );
}

// Exporta el componente MisMascotas como componente predeterminado
export default MisMascotas;
