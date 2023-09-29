import React from 'react';
import ReactDOM from 'react-dom/client';

import { Link } from 'react-router-dom';
import '../src/form_ayuda.css';


import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="App">
      
      
      <section className="form-section">
      <div className="form-container">
        <h2>Formulario de ayuda</h2>
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
          <label htmlFor="imagen" >Subír Imagen:</label>
          <input type="file" id="imagen" name="imagen" accept="image/*" required />
          <br />
          <button type="submit" id='enviar'>Enviar</button>
          <br />
          <div className='atrs'>
            <Link to="/">
            <button type="submit" id='atras'>Atrás</button>


            </Link>
          </div>
        </form>
        
      </div>
    </section>


    </div>
  </BrowserRouter>


  
);
