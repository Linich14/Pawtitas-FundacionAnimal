import React from 'react';
import '../components/css/Donar.css';

import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";




function Donar() {
  return (

<div className="App">
      <NavBar />


      <div className="seccion_donar">

     
    
    <div className="div1_donar"> 
        <img src={icon3} alt=""/>
        <p>Datos Cuenta Bancaria </p>
        <p>11.111.111-1</p>
        <p>Cuenta Rut</p>
        <p>Cuenta Vista</p>

        

        
    </div>

    <div className="div2_donar"> 
        <img src={icon4} alt=""/>
        <p> Para donar a traves de paypal 
          seleccione Donar</p>        
        <button id="btn_donar">Donar </button>


    </div>
    <div className="div3_donar"> 
    <p>Nueva forma para donar, aceptamos cripto</p>
    
          <button id="btn_donar">Cripto Wallet</button>

    </div>
    
</div>
    <Footer/>
    </div>




    
  );
}

export default Donar;
