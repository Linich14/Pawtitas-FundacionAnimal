import React from 'react';
import '../components/css/postular.css';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import postimg1 from '../assets/postimg1.webp';
import postimg2 from '../assets/postimg2.webp';

function Postular(){
  return(
    <div className="App">
    <NavBar />
    <div class="seccionps">
          
          <div className="image-button">
            

            <Link to="/Form_ayuda">
            <img src={postimg1} alt="Imagen de fondo"/>
            <div className="button-text">Dar mascota en adopción</div>
            
      </Link>

          </div>



          
          <div className="image-button">
          <Link to="/Form_adop">
              <img src={postimg2} alt="Imagen de fondo"/>
              <div className="button-text">Ayudar a un animal cercano</div>
              </Link>
            </div>

          
      </div>

      <Footer />
    </div>
  );
}

export default Postular

