import React from 'react';
import Flicking from '@egjs/react-flicking'; 
import '@egjs/react-flicking/dist/flicking.css'; 
import './css/flicking.css'; 
import perro1 from '../assets/perro6.webp';
import perro2 from '../assets/perro7.webp';
import perro3 from '../assets/gato1.webp';

function carrusel() {
  // Opciones de configuración para el carrusel
  const opciones = {
    align: "center",
    circular: true,
    duration: 500,
    infinite: true,
    gap: 20,
    defaultIndex: 0,
    bound: false,
  };

  // Función que se llama cuando se cambia de slide en el carrusel
  const cambiar = (e) => {
    console.log("Cambio de slide:", e.index);
  };

  return (
    <Flicking
      tag="div"
      className="my-flicking" // Clase  para el carrusel
      options={opciones} // Opciones de configuración del carrusel
      onChange={cambiar} // Función que maneja el cambio de slide
    >
      {/* Contenido de los slides del carrusel */}
      <div className='divcr'> 
        <h2>Gaspar</h2>
        <img src={perro1} alt="" className='imgcr' />
        <p>adoptado el 1 de septiembre</p>
      </div>

      <br />

      <div className='divcr'>
        <h2>Mateo</h2>
        <img src={perro2 } alt="" className='imgcr'/>
        <p>adoptado el 20 de septiembre</p>
      </div>
      <br />
      <div className='divcr'>
        <h2>Juanito</h2> 
        <img src={perro3 } alt="" className='imgcr'/>
        <p>adoptado el 24 de septiembre</p>
      </div>
    </Flicking>
  );
}

export default carrusel;
