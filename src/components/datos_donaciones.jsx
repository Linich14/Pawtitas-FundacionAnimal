
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import './css/datos_donaciones.css'

async function fetchDocumentData() {
  const colecciónRef = collection(db, "Donaciones");
  const consulta = await getDocs(colecciónRef);

  const datos = [];
  consulta.forEach((documento) => {
    datos.push(documento.data());
  });

  return datos;
}

function TuComponente() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const documentos = await fetchDocumentData();
      if (documentos) {
        setDatos(documentos);
      }
    }

    fetchData();
  }, []);

  return (
    
<div className="tabla-container">
<div className="tabla_donaciones_">
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
      
            <th>Nombre</th>
          </tr>
          
          {datos.map((documento, index) => (
            <tr key={index}>
              <td>{documento.Cantidad}</td>
              
              <td>{documento.Nombre}</td>

            </tr>
            
            
          ))}
        </thead>
        

       
      </table>
    </div>
</div>
  );
}

export default TuComponente;
