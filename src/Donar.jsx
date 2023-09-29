import React from 'react';
import './components/css/Donar.css';
//import React from 'react';
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import { Link } from 'react-router-dom';
import icon3 from "../src/assets/icon3.png";
import icon4 from "../src/assets/icon4.png";


function Donar() {
  return (

<div className="App">
      <NavBar />
      <div className="seccion">
    
    <div class="div1dn"> 
        <img src={icon3} alt=""/>
        <p>Datos Cuenta Bancaria </p>
        <p>11.111.111-1</p>
        <p>Cuenta Rut</p>
        <p>Cuenta Vista</p>

        
    </div>

    <div class="div2dn"> 
        <img src={icon4} alt=""/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas?
        
        
        <button id="btn">Donar </button>

    </div>
    <div class="div3dn"> 
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, accusamus.
        <button id="btn">Cripto Wallet</button>

    </div>
    
</div>
    <Footer/>
    </div>




    
  );
}

export default Donar;
