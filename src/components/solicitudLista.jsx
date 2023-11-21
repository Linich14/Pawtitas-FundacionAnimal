import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { collection, query, getDocs } from '@firebase/firestore';
import VerificarSolicitud from "./tarjetaSolicitud";

const SolicitudLista = () => {
  const [solicitudIds, setSolicitudIds] = useState([]);

  useEffect(() => {
    const solicitudesRef = collection(db, 'SolicitudesAdopcion');
    const consulta = query(solicitudesRef);

    getDocs(consulta).then((querySnapshot) => {
      const ids = [];
      querySnapshot.forEach((doc) => {
        ids.push(doc.id);
      });
      setSolicitudIds(ids);
    });
  }, []);

  return (
    <div>
      {solicitudIds.map((solicitudId) => (
        <VerificarSolicitud
          key={solicitudId}
          solicitudId={solicitudId}
        />
      ))}
    </div>
  );
};

export default SolicitudLista;