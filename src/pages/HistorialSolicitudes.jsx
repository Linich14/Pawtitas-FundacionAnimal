import React, { useState, useEffect } from "react";
import { doc, collection, getDocs } from "@firebase/firestore"; // Importa funciones para interactuar con Firebase
import { db } from "../firebase"; // Importa la instancia de la base de datos de Firebase
import { UserAuth } from "../components/Autenticacion"; // Importa el componente para manejar la autenticación del usuario
import "../components/css/HistorialSolicitudes.css"; // Importa estilos CSS para el componente

function HistorialSolicitudes() {
  const { user } = UserAuth(); // Obtiene el usuario autenticado del contexto de autenticación
  const [solicitudes, setSolicitudes] = useState([]); // Define el estado para almacenar las solicitudes de adopción

  useEffect(() => {
    const obtenerSolicitudes = async () => {
      if (user) {
        const solicitudesRef = collection(db, "SolicitudesAdopcion"); // Accede a la colección "SolicitudesAdopcion" en Firebase
        const snapshot = await getDocs(solicitudesRef); // Obtiene un snapshot de las solicitudes

        const solicitudesArray = []; // Inicializa un array para almacenar las solicitudes del usuario

        snapshot.forEach((doc) => {
          const solicitud = doc.data(); // Obtiene los datos de la solicitud del documento
          if (solicitud.usuarioID === user.uid) {
            // Verifica si la solicitud pertenece al usuario actual
            solicitudesArray.push({
              id: doc.id, // Almacena el ID de la solicitud
              animalId: solicitud.animalId, // Almacena el ID de la mascota en adopción
              animalNombre: solicitud.animalNombre, // Almacena el nombre de la mascota
            });
          }
        });

        setSolicitudes(solicitudesArray); // Actualiza el estado con las solicitudes del usuario
      }
    };

    obtenerSolicitudes(); // Llama a la función para obtener las solicitudes cuando el componente se monta
  }, [user]); // Ejecuta el efecto cuando el usuario cambia

  return (
    <div>
      <h2 className="titulos">Historial de Solicitudes</h2>
      {solicitudes.map((solicitud) => (
        <div className="solicitud-container" key={solicitud.id}>
          <div className="solicitud-info">
            <strong>Solicitud ID:</strong> {solicitud.id} {/* Muestra el ID de la solicitud */}
          </div>
          <div className="solicitud-info">
            <strong>Mascota ID:</strong> {solicitud.animalId} {/* Muestra el ID de la mascota */}
          </div>
          <div className="solicitud-info">
            <strong>Nombre del Animal:</strong> {solicitud.animalNombre} {/* Muestra el nombre de la mascota */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistorialSolicitudes; 
