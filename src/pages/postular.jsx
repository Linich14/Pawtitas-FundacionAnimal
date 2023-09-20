import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/postular.css';
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import postimg1 from './assets/postimg1.jpg';
import postimg2 from './assets/postimg2.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
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
  </BrowserRouter>


  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
