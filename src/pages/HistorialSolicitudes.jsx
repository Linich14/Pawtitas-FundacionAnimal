import React, { useState, useEffect } from "react";
import { doc, collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../components/Autenticacion";
import "../components/css/HistorialSolicitudes.css";

function HistorialSolicitudes() {
  const { user } = UserAuth();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const obtenerSolicitudes = async () => {
      if (user) {
        const solicitudesRef = collection(db, "SolicitudesAprobadas");
        const snapshot = await getDocs(solicitudesRef);

        const solicitudesArray = [];

        snapshot.forEach((doc) => {
          const solicitud = doc.data();
          if (solicitud.usuarioID === user.uid) {
            solicitudesArray.push({
              id: doc.id,
              usuarioID: solicitud.usuarioID, // Agrega el ID del usuario
              solicitudID: solicitud.solicitudID, // Agrega el ID de la solicitud aprobada
              animalId: solicitud.animalId,
              animalNombre: solicitud.animalNombre,
            });
          }
        });

        setSolicitudes(solicitudesArray);
      }
    };

    obtenerSolicitudes();
  }, [user]);

  return (
    <div>
      <h2 className="titulos">Historial de Solicitudes</h2>
      <div className="solicitudes-container">
      {solicitudes.map((solicitud) => (
        <div className="solicitud-container" key={solicitud.id}>
          <div className="solicitud-info">
            <strong>Solicitud ID:</strong> {solicitud.id}
          </div>
          <div className="solicitud-info">
            <strong>Usuario ID:</strong> {solicitud.usuarioID}
          </div>
          <div className="solicitud-info">
            <strong>Solicitud Aprobada ID:</strong> {solicitud.solicitudID}
          </div>
          <div className="solicitud-info">
            <strong>Mascota ID:</strong> {solicitud.animalId}
          </div>
          <div className="solicitud-info">
            <strong>Nombre del Animal:</strong> {solicitud.animalNombre}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default HistorialSolicitudes;
