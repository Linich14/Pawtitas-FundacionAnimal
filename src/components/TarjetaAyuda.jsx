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
      const solicitudDocRef = doc(db, 'SolicitudesAyuda', solicitudId);
      const solicitudDoc = await getDoc(solicitudDocRef);

      if (solicitudDoc.exists()) {
        setSolicitudData(solicitudDoc.data());
      } else {
        console.log("No se encontró ningún dato para este id: " + solicitudId);
      }

      // Obtener datos de las colecciónes
      const subcoleccionesRef = collection(solicitudDocRef, 'SolicitudesDeAyuda');
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
      const subcoleccionesRef = collection(db, 'SolicitudesAyuda', solicitudId, 'SolicitudesDeAyuda');
      const subcoleccionesQuery = await getDocs(subcoleccionesRef);
  
      //Guardamos los datos a SolicitudesAprobadas
      //iteramos en cada elemento   
      subcoleccionesQuery.forEach(async (doc) => {
        const data = doc.data();
        const datosGuardar = {
          usuarioID: data.usuarioID,
          usuarioEmail: data.usuarioEmail,
          
          animalNombre: data.Animal_Nombre,
        };
  
        // Agregar los datos a SolicitudesAprobadas
        const solicitudesAprobadasRef = collection(db, 'AnimalesAprobados');
        await addDoc(solicitudesAprobadasRef, datosGuardar);
      });
  
      // Después de eliminar todos los documentos de la subcolección, ahora eliminamos el documento principal 'SolicitudesAdopcion'
      const solicitudAdopcionRef = doc(db, 'SolicitudesAyuda', solicitudId);
      await deleteDoc(solicitudAdopcionRef);
  
    } catch (error) {
      console.error("Error", error);
    }
  };
  

  //Elimina el id de la coleccion
  const rechazarSolicitud = async (subcoleccionId) => {
    try {
      const subcoleccionRef = doc(db, 'SolicitudesAyuda', solicitudId, 'SolicitudesDeAyuda', subcoleccionId);
      await deleteDoc(subcoleccionRef);
    } catch (error) {
      console.error("Error ", error);
    }
  };

 
  return (
    <TarjetaSolicitud>
    {solicitudData && (
      <div>
        <h2 className="solicitudDe">Solicitud de Ayuda </h2>
        {subcoleccionesData.map((subcoleccion) => (
          <div className="tarjetaSoliContenido" key={subcoleccion.id}>
            <div className="tarjetaContenido">
              <p>Estado de salud: {subcoleccion.data.Animal_Estado_Salud}</p>
              <p>Sexo: {subcoleccion.data.Animal_Sexo}</p>
              <p>Edad: {subcoleccion.data.Animal_Edad}</p>
              <p>Ubicacion: {subcoleccion.data.Ubicacion}</p>
              <p>Datos: {subcoleccion.data.Animal_Datos}</p>
              <p>Datos: {subcoleccion.data.Animal_Datos}</p>
              <p>tipo: {subcoleccion.data.Animal_Tipo}</p>
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