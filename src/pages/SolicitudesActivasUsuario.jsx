
import React, { useState, useEffect } from "react";
import { doc, collection, getDocs, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../components/Autenticacion";
import "../components/css/HistorialSolicitudes.css";

// Función principal del componente SolicitudesActivasUsuario
function SolicitudesActivasUsuario() {
  // Obtiene la información del usuario autenticado
  const { user } = UserAuth();
  // Estados para almacenar la lista de solicitudes, la mascota seleccionada y mostrar el modal de detalles
  const [solicitudes, setSolicitudes] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Función para ver los detalles de una mascota
  const verDetallesMascota = async (animalId) => {
    try {
      const animalRef = doc(db, "Animales", animalId);
      const animalDoc = await getDoc(animalRef);

      if (animalDoc.exists()) {
        const animalData = animalDoc.data();
        // Actualiza el estado con los detalles de la mascota y muestra el modal
        setSelectedAnimal(animalData);
        setShowDetailsModal(true);
      } else {
        console.log("La mascota no existe.");
      }
    } catch (error) {
      console.error("Error al obtener los detalles de la mascota:", error);
    }
  };

  // Efecto que se ejecuta al montar o actualizar el componente para obtener las solicitudes del usuario
  useEffect(() => {
    const obtenerSolicitudes = async () => {
      if (user) {
        try {
          const solicitudesRef = collection(db, "SolicitudesAdopcion");
          const snapshot = await getDocs(solicitudesRef);

          const solicitudesArray = [];

          for (const doc of snapshot.docs) {
            const solicitudesAnimalRef = collection(doc.ref, "solicitudesDelAnimal");
            const solicitudesAnimalSnapshot = await getDocs(solicitudesAnimalRef);

            solicitudesAnimalSnapshot.forEach((solicitud) => {
              const solicitudData = solicitud.data();

              if (solicitudData.usuarioID === user.uid) {
                // Agrega la solicitud a la lista de solicitudes
                solicitudesArray.push({
                  id: solicitud.id,
                  animalId: solicitudData.animalId,
                  animalNombre: solicitudData.animalNombre,
                  fechaSolicitud: solicitudData.fechaSolicitud.toDate(),
                  usuarioEmail: solicitudData.usuarioEmail,
                  usuarioID: solicitudData.usuarioID,
                });
              }
            });
          }

          // Actualiza el estado con la lista de solicitudes
          setSolicitudes(solicitudesArray);
        } catch (error) {
          console.error("Error al obtener las solicitudes:", error);
        }
      }
    };

    // Llama a la función para obtener las solicitudes
    obtenerSolicitudes();
  }, [user]); // Se ejecuta cada vez que cambia el usuario

  // Estructura del componente con la lista de solicitudes y el modal de detalles
  return (
    <div>
      <h2 className="titulos">Solicitudes Activas</h2>
      {solicitudes.length === 0 ? (
        <div>Cargando solicitudes...</div>
      ) : (
        <div className="solicitudes-container">
          {solicitudes.map((solicitud) => (
            <div className="solicitud-container" key={solicitud.id}>
              <div className="solicitud-info">
                {/* Muestra la información de la solicitud */}
                <strong>Solicitud ID:</strong> {solicitud.id}
              </div>
              <div className="solicitud-info">
                <strong>Nombre del Animal:</strong> {solicitud.animalNombre}
              </div>
              <div className="solicitud-info">
                <strong>Fecha de la Solicitud:</strong>{" "}
                {solicitud.fechaSolicitud.toLocaleDateString()}
              </div>
              {/* Botón para ver detalles de la mascota */}
              <button variant="primary" onClick={() => verDetallesMascota(solicitud.animalId)}>
                Ver Detalles de Mascota
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Muestra el modal de detalles si showDetailsModal es true */}
      {showDetailsModal && (
        <div className="detalle-mascota-solicitud">
          <h2>Detalles de la Mascota</h2>
          {selectedAnimal && (
            <div>
              {/* Muestra los detalles de la mascota */}
              <p>
                <strong>Nombre del Animal:</strong> {selectedAnimal.Animal_Nombre}
              </p>
              <p>
                <strong>Datos del Animal:</strong> {selectedAnimal.Animal_Datos}
              </p>
              <p>
                <strong>Edad del Animal:</strong> {selectedAnimal.Animal_Edad}
              </p>
              <p>
                <strong>Estado de Salud del Animal:</strong>
                {selectedAnimal.Animal_Estado_Salud}
              </p>
              <p>
                <strong>Raza del Animal:</strong> {selectedAnimal.Animal_Raza}
              </p>
              <p>
                <strong>Sexo del Animal:</strong> {selectedAnimal.Animal_Sexo}
              </p>
              <p>
                <strong>Tipo de Animal:</strong> {selectedAnimal.Animal_Tipo}
              </p>
              <p>
                <strong>Unidad:</strong> {selectedAnimal.unidad}
              </p>
            </div>
          )}
          {/* Botón para cerrar los detalles */}
          <button variant="primary" onClick={() => setShowDetailsModal(false)}>Cerrar Detalles</button>
        </div>
      )}
    </div>
  );
}


export default SolicitudesActivasUsuario;
