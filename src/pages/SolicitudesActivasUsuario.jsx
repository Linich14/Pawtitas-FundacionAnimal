import React, { useState, useEffect } from "react";
import { doc, collection, getDocs, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../components/Autenticacion";
import "../components/css/HistorialSolicitudes.css";

function SolicitudesActivasUsuario() {
  const { user } = UserAuth();
  const [solicitudes, setSolicitudes] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const verDetallesMascota = async (animalId) => {
    try {
      const animalRef = doc(db, "Animales", animalId);
      const animalDoc = await getDoc(animalRef);

      if (animalDoc.exists()) {
        const animalData = animalDoc.data();
        setSelectedAnimal(animalData);
        setShowDetailsModal(true);
      } else {
        console.log("La mascota no existe.");
      }
    } catch (error) {
      console.error("Error al obtener los detalles de la mascota:", error);
    }
  };

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

          setSolicitudes(solicitudesArray);
        } catch (error) {
          console.error("Error al obtener las solicitudes:", error);
        }
      }
    };

    obtenerSolicitudes();
  }, [user]);

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
                <strong>Solicitud ID:</strong> {solicitud.id}
              </div>
              <div className="solicitud-info">
                <strong>Nombre del Animal:</strong> {solicitud.animalNombre}
              </div>
              <div className="solicitud-info">
                <strong>Fecha de la Solicitud:</strong>{" "}
                {solicitud.fechaSolicitud.toLocaleDateString()}
              </div>
              <button variant="primary" onClick={() => verDetallesMascota(solicitud.animalId)}>
                Ver Detalles de Mascota
              </button>
            </div>
          ))}
        </div>
      )}
{showDetailsModal && (
        <div className="detalle-mascota-solicitud">
          <h2>Detalles de la Mascota</h2>
          {selectedAnimal && (
            <div>
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
          <button variant="primary" onClick={() => setShowDetailsModal(false)}>Cerrar Detalles</button>
        </div>
      )}
    </div>
  );
}

export default SolicitudesActivasUsuario;
