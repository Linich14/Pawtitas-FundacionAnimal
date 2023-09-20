import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/form_ayuda.css';
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="App">
      <NavBar />
      
      <section className="form-section">
      <div className="form-container">
        <h2>Completa el formulario</h2>
        <form action="#" method="post" encType="multipart/form-data">
          <label htmlFor="ubicacion">Ubicación:</label>
          <input type="text" id="ubicacion" name="ubicacion" required />
          <br />
          <label htmlFor="tipoanimal">Tipo de Animal:</label>
          <input type="text" id="tipoanimal" name="tipoanimal" required />
          <br />
          <label htmlFor="estadoanimal">Estado de Animal:</label>
          <br />
          <input type="text" id="estadoanimal" name="estadoanimal" required />
          <br />
          <label htmlFor="imagen">Subir Imagen:</label>
          <input type="file" id="imagen" name="imagen" accept="image/*" required />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>

    <Footer />
    </div>
  </BrowserRouter>


  
);
