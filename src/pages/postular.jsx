import React from 'react';
import '../components/css/postular.css';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer';
import postimg1 from '../assets/postimg1.jpg';
import postimg2 from '../assets/postimg2.jpg';

function Postular(){
  return(
    <div className="App">
    <NavBar />
    <div className="seccion">
          
          <div className="image-button">
            <img src={postimg1} alt="Imagen de fondo"/>
            <div className="button-text">Dar mascota en adopción</div>

          </div>


          <div className="image-button">
              <img src={postimg2} alt="Imagen de fondo"/>
              <div className="button-text">Ayudar a un animal cercano</div>
                
            </div>


      </div>

      <Footer />
    </div>
  );
}

export default Postular

