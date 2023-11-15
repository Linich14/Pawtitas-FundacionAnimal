import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { doc, getDoc, deleteDoc, collection, getDocs, addDoc } from '@firebase/firestore';
import styled from "styled-components";

const VerificarSolicitud = ({ solicitudId }) => {
  const [solicitudData, setSolicitudData] = useState(null);
  const [subcoleccionesData, setSubcoleccionesData] = useState([]);
  
  useEffect(() => {
    const obtenerDatosSolicitud = async () => {
      // Obtener datos de la solicitud
      const solicitudDocRef = doc(db, 'SolicitudesAdopcion', solicitudId);
      const solicitudDoc = await getDoc(solicitudDocRef);

      if (solicitudDoc.exists()) {
        setSolicitudData(solicitudDoc.data());
      } else {
        console.log("No se encontró ningún dato para este id: " + solicitudId);
      }

      // Obtener datos de las colecciónes
      const subcoleccionesRef = collection(solicitudDocRef, 'solicitudesDelAnimal');
      const subcoleccionesQuery = await getDocs(subcoleccionesRef);

      //reccore cada documento y regresa un array con los ids de cada coleccion
      const subcoleccionesData = subcoleccionesQuery.docs.map(doc => ({ id: doc.id, data: doc.data() }));
      setSubcoleccionesData(subcoleccionesData);

    };

    obtenerDatosSolicitud();
  }, [solicitudId]);


  //Elimina el id de solicitudesAdopcion y guarda datos en datosGuardar los cuales se envian a la tabla
  //Solicitudes aprobadas
  const aceptarSolicitud = async () => {
    try {
      //llamamos a los datos de las colecciones de cada solicitud
      const subcoleccionesRef = collection(db, 'SolicitudesAdopcion', solicitudId, 'solicitudesDelAnimal');
      const subcoleccionesQuery = await getDocs(subcoleccionesRef);
  
      //Guardamos los datos a SolicitudesAprobadas
      //iteramos en cada elemento   
      subcoleccionesQuery.forEach(async (doc) => {
        const data = doc.data();
        const datosGuardar = {
          usuarioID: data.usuarioID,
          usuarioEmail: data.usuarioEmail,
          animalId: data.animalId,
          animalNombre: data.animalNombre,
        };
  
        // Agregar los datos a SolicitudesAprobadas
        const solicitudesAprobadasRef = collection(db, 'SolicitudesAprobadas');
        await addDoc(solicitudesAprobadasRef, datosGuardar);
      });
  
      // Después de eliminar todos los documentos de la subcolección, ahora eliminamos el documento principal 'SolicitudesAdopcion'
      const solicitudAdopcionRef = doc(db, 'SolicitudesAdopcion', solicitudId);
      await deleteDoc(solicitudAdopcionRef);
  
    } catch (error) {
      console.error("Error", error);
    }
  };
  

  //Elimina el id de la coleccion
  const rechazarSolicitud = async (subcoleccionId) => {
    try {
      const subcoleccionRef = doc(db, 'SolicitudesAdopcion', solicitudId, 'solicitudesDelAnimal', subcoleccionId);
      await deleteDoc(subcoleccionRef);
    } catch (error) {
      console.error("Error ", error);
    }
  };


  return (
    <TarjetaSolicitud>
    {solicitudData && (
      <div>
        <h2 className="solicitudDe">Solicitudes para {solicitudData.animalNombre}</h2>
        {subcoleccionesData.map((subcoleccion) => (
          <div className="tarjetaSoliContenido" key={subcoleccion.id}>
            <div className="tarjetaContenido">
              <p>Solicitado por: {subcoleccion.data.usuarioEmail}</p>
              <p>Id de solicitud: {subcoleccion.id}</p>
              <div className="botonesSolicitud">
                <button onClick={() => rechazarSolicitud(subcoleccion.id)}>Rechazar Solicitud</button>
                <button onClick={aceptarSolicitud}>Aceptar Solicitud</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </TarjetaSolicitud>
  );
};

export default VerificarSolicitud;

const TarjetaSolicitud = styled.div `
  font-size:20px;
  color:black;

  .solicitudDe{
    display:flex;
    align-items:center;
    color:#F2E3C9;
  }

  .tarjetaSoliContenido{
    display:flex;
    justify-content:center;
    align-items:center;
  }


  .tarjetaContenido{
    background-color:#F2E3C9;
    border-radius:.5rem;  
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:1rem;
    width:100vh;
  }
  
  p,h2{
    margin: 2px;
    font-size:20px;
    padding-inline:3px;
  }

  .botonesSolicitud{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .botonesSolicitud button{
    margin-inline:1rem;
  }
`;