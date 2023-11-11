import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { doc, getDoc, deleteDoc } from '@firebase/firestore';

const VerificarSolicitud = ({ solicitudId }) => {
  const [solicitudData, setSolicitudData] = useState(null);

  useEffect(() => {
    const solicitudDocRef = doc(db, 'SolicitudesAdopcion', solicitudId);

    getDoc(solicitudDocRef).then((doc) => {
      if (doc.exists()) {
        setSolicitudData(doc.data());
      } else {
        console.log("No se encontró ningún dato para este id: " + solicitudId);
      }
    });
  }, [solicitudId]);

  const AceptarSolicitud = async () => {
    try {
      const solicitudDocRef = doc(db, 'SolicitudesAdopcion', solicitudId);
      await deleteDoc(solicitudDocRef);
        console.log("Solicitud eliminada");
    } catch (error) {
        console.error("Error al eliminar la solicitud", error);
    }
  };

  return (
    <div>
      {solicitudData && (
        <div>
          <p>{solicitudData.animalId}</p>
          <p>{solicitudData.animalNombre}</p>
          <p>{solicitudData.fechaSolicitud}</p>
          
          <button >rechazar  Solicitud</button>
          <button onClick={AceptarSolicitud}>Aceptar olicutud</button>
        </div>
      )}
    </div>
  );
};

export default VerificarSolicitud;
