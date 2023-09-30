import React from 'react';
import '../components/css/Donar.css';

import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";


function Donar() {
  return (

<div className="App">
      <NavBar />
      <div className="seccion">
    
    <div className="div1"> 
        <img src={icon3} alt=""/>
        <p>Datos Cuenta Bancaria </p>
        <p>11.111.111-1</p>
        <p>Cuenta Rut</p>
        <p>Cuenta Vista</p>

        
    </div>

    <div className="div2"> 
        <img src={icon4} alt=""/>
        para donar a traves de paypal seleccione Donar        
        
        <button id="btn">Donar </button>

    </div>
    <div className="div3"> 
    Nueva forma para donar, aceptamos cripto
          <button id="btn">Cripto Wallet</button>

    </div>
    
</div>
    <Footer/>
    </div>




    
  );
}

export default Donar;
