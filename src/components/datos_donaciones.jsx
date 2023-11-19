
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
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
  const [totalCantidad, setTotalCantidad] = useState(0); 
  
  useEffect(() => {
    async function fetchData() {
      const documentos = await fetchDocumentData();
      if (documentos) {
        setDatos(documentos);
        
        const total = documentos.reduce((total, documento) => total + documento.Cantidad, 0);
        setTotalCantidad(total);
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
            <th><h2>Ultimas Donaciones Recibidas:</h2></th>
      

          </tr>
          
          {datos.map((documento, index) => (
            <tr key={index}>
              <td>{documento.Cantidad}</td>
              

     

            </tr>
            
            
          ))}
        </thead>
        

       
      </table>
    </div>
    
    <p>Total de la Fundacion: {Number(totalCantidad)}</p> 

</div>
  );
}

export default TuComponente;
