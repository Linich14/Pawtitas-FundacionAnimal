
import React from 'react';
import '../components/css/donar_fund.css';
import NavBar from './navbar.jsx';
import Footer from './Footer';
import { Link } from 'react-router-dom';


import {collection, addDoc} from "firebase/firestore";
import { db } from '../firebase';

class Donar_fund extends Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          cantidad: '', // El valor del input
          mensajeError: '', // Mensaje de error
        };
      }
    
      handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ cantidad: value, mensajeError: '' }); // Reiniciar el mensaje de error
    
        if (value < 1000) {
          this.setState({ mensajeError: 'El mínimo es 1000' });
        } else if (value.length > 9) {
          this.setState({ mensajeError: 'El máximo son 9 dígitos' });
        }
      };
    

  render() {
    return (
        <div className="App">
        <NavBar />
        <div className="donar_fund">
            holass
            <div className="Donar_fund_cont">
                <h2> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, dolores?</h2>
    
    
    
                <div className="donaciones_fn">
      
                  <br />
    
                  <button id="cantidad" value="10.000">$10.000 </button>
                  
                  <br />
    
                  <button id="cantidad" value="15.000" >$15.000 </button>
                  <br />
    
                  <button id="cantidad" value="25.000" >$25.000 </button>
                  <br />
    
                  <input 
                  type="number"
                  id="otra_cantidad"
                  name="otra_cantidad"
                  placeholder="Otra cantidad" 
                  value={this.state.cantidad}
                  onChange={this.handleInputChange}
                     
                     />
    
                  <br /><br />
    
    
                </div>
    
                <div className='botones_DF'>
              <Link to="/Donar">
                  <button type="submit" id='atras'>Atrás</button>
                </Link>
                <button id="continuar_DF" value="50" >continuar </button>
    
                </div>
              
    
    
       
    
            </div>
              
    
    
    
    
              
    
    
              
          </div>
    
          <Footer />
        </div>
    );
  }
}

export default Donar_fund;









--------------------------------------------------------------------------------------------------------------------------------



import React from 'react';
import '../components/css/donar_fund.css';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import postimg1 from '../assets/postimg1.webp';
import postimg2 from '../assets/postimg2.webp';

function Donar_fund(){
  
  return(
    <div className="App">
    <NavBar />
    <div className="donar_fund">
        holass
        <div className="Donar_fund_cont">
            <h2> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, dolores?</h2>



            <div className="donaciones_fn">
  
              <br />

              <button id="cantidad" value="10.000">$10.000 </button>
              
              <br />

              <button id="cantidad" value="15.000" >$15.000 </button>
              <br />

              <button id="cantidad" value="25.000" >$25.000 </button>
              <br />

              <input type="number" id="otra_cantidad" name="otra_cantidad" placeholder="Otra cantidad"  />

              <br /><br />


            </div>

            <div className='botones_DF'>
            <Link to="/Donar">
                <button type="submit" id='atras'>Atrás</button>
              </Link>
            <button id="continuar_DF" value="50" >continuar </button>

            </div>
          


   

        </div>
          




          


          
      </div>

      <Footer />
    </div>
  );
}

export default Donar_fund

-----------------------------------------------------------


import { React, useState, useEffect } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from '../firebase';


async function fetchDocumentData() {
    const documentRef = doc(db, "Donaciones");
    const consulta = await getDocs(documentRef);

    const documentos = [];
    consulta.forEach((documento) => {
      documentos.push(documento.data());
    });
  
    return documentos;
  }
function TuComponente() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const documentData = await fetchDocumentData();
      if (documentData) {
        setData(documentData);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Cantidad</th>
    
      <th>Nombre</th>
      
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>{data.Cantidad}</td>

      <td>{data.Nombre}</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default TuComponente;










--------BUENO-------------------------


import { React, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';


async function fetchDocumentData() {
    const documentRef = doc(db, "Donaciones", "4K3ffyVeXboxp83M755X");
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      return documentSnapshot.data(); 
      
    } else {
      console.error("El documento no existe");
      return null;
    }
  }
function TuComponente() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const documentData = await fetchDocumentData();
      if (documentData) {
        setData(documentData);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Cantidad</th>
    
      <th>Nombre</th>
      
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>{data.Cantidad}</td>

      <td>{data.Nombre}</td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default TuComponente;





BUENNO2



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
    <div className="tabla_donaciones_">
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
      
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((documento, index) => (
            <tr key={index}>
              <td>{documento.Cantidad}</td>
              <br />
              <td>{documento.Nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TuComponente;






























