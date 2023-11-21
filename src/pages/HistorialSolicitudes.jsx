// Importa React, useState y useEffect desde React
import React, { useState, useEffect } from "react";
// Importa funciones específicas de Firestore y la instancia de la base de datos
import { doc, collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
// Importa el componente UserAuth para manejar la autenticación
import { UserAuth } from "../components/Autenticacion";
// Importa la hoja de estilos CSS para HistorialSolicitudes
import "../components/css/HistorialSolicitudes.css";

// Función principal del componente HistorialSolicitudes
function HistorialSolicitudes() {
  // Obtiene la información del usuario autenticado
  const { user } = UserAuth();
  // Estado para almacenar la lista de solicitudes del historial
  const [solicitudes, setSolicitudes] = useState([]);

  // Efecto que se ejecuta al montar o actualizar el componente para obtener las solicitudes del historial
  useEffect(() => {
    const obtenerSolicitudes = async () => {
      if (user) {
        try {
          // Obtiene la referencia de la colección de solicitudes aprobadas
          const solicitudesRef = collection(db, "SolicitudesAprobadas");
          // Obtiene el snapshot de las solicitudes aprobadas
          const snapshot = await getDocs(solicitudesRef);

          const solicitudesArray = [];

          // Itera sobre las solicitudes aprobadas
          snapshot.forEach((doc) => {
            const solicitud = doc.data();
            // Verifica si la solicitud pertenece al usuario actual
            if (solicitud.usuarioID === user.uid) {
              // Agrega la solicitud al array de solicitudes
              solicitudesArray.push({
                id: doc.id,
                usuarioID: solicitud.usuarioID, // Agrega el ID del usuario
                solicitudID: solicitud.solicitudID, // Agrega el ID de la solicitud aprobada
                animalId: solicitud.animalId,
                animalNombre: solicitud.animalNombre,
              });
            }
          });

          // Actualiza el estado con la lista de solicitudes del historial
          setSolicitudes(solicitudesArray);
        } catch (error) {
          console.error("Error al obtener las solicitudes del historial:", error);
        }
      }
    };

    // Llama a la función para obtener las solicitudes del historial
    obtenerSolicitudes();
  }, [user]); // Se ejecuta cada vez que cambia el usuario

  // Estructura del componente con la lista de solicitudes del historial
  return (
    <div>
      <h2 className="titulos">Historial de Solicitudes</h2>
      <div className="solicitudes-container">
        {/* Mapea y muestra las solicitudes del historial */}
        {solicitudes.map((solicitud) => (
          <div className="solicitud-container" key={solicitud.id}>
            <div className="solicitud-info">
              {/* Muestra la información de la solicitud */}
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
