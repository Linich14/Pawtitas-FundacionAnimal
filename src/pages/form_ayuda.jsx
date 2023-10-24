

import React from 'react';
import '../components/css/form_ayuda_y_adop.css'
import { Link } from 'react-router-dom';

function Ayuda() {
  return (
    <div className="App">
      <section className="seccion_formulario">
        <div className="cont_formulario">
          <h2>Formulario de ayuda</h2>
          <form action="#" method="post" encType="multipart/form-data">
            {/* Campo para la ubicación */}
            <label htmlFor="ubicacion">Ubicación:</label>
            <input type="text" id="ubicacion" name="ubicacion" required />
            <br />
            
            {/* Campo para el tipo de animal */}
            <label htmlFor="tipoanimal">Tipo de Animal:</label>
            <input type="text" id="tipoanimal" name="tipoanimal" required />
            <br />
            
            {/* Campo para el estado del animal */}
            <label htmlFor="estadoanimal">Estado de Animal:</label>
            <br />
            <input type="text" id="estadoanimal" name="estadoanimal" required />
            <br />
            
            {/* Campo para subir una imagen */}
            <label htmlFor="imagen">Subir Imagen:</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" required />
            <br />
            
            {/* Botón para enviar el formulario */}
            <button type="submit" id='enviar'>Enviar</button>
            <br />
            
            <div className='atrs'>
              {/* Botón para volver atrás  */}
              <Link to="/ayuda">
                <button type="submit" id='atras'>Atrás</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Ayuda  ;