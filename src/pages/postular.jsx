import React from 'react';
import '../components/css/postular.css';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer';
import postimg1 from '../assets/postimg1.jpg';
import postimg2 from '../assets/postimg2.jpg';

function Adopcion(){
  return(
    <div className="App">
    <NavBar />
    <div class="seccion">
          
          <div class="image-button">
            <img src={postimg1} alt="Imagen de fondo"/>
            <div class="button-text">Dar mascota en adopción</div>

          </div>


          <div class="image-button">
              <img src={postimg2} alt="Imagen de fondo"/>
              <div class="button-text">Ayudar a un animal cercano</div>
                
            </div>


      </div>

      <Footer />
    </div>
  );
}

export default Adopcion

