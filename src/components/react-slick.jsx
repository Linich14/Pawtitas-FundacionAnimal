
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/react-slick.css';
import perro1 from '../assets/perro6.jpg'
import perro2 from '../assets/perro7.jpg'
import perro3 from '../assets/gato1.jpg'






const Carousel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
  };
  
    return (
      <div className="contcarrusel">
        <h1>animales rescatados</h1>
        <Slider {...settings}>
          <div >
          <h3>gaspar</h3>
          <div className="imagencr">
          <img src={perro1} alt="" />

          </div>
            <p>adoptado el 1 de septiembre </p>
       
          </div>
          <div>
            <h3>Mateo</h3>
            <div className="imagencr">
          <img src={perro2} alt="" />

          </div>
          <p>adoptado el 20 de septiembre</p>
          </div>

          <div>
            <h3>Juanito</h3>
            <div className="imagencr">
          <img src={perro3} alt="" />

          </div>
          <p>adoptada el 24 de septiembre</p>
          </div>

        </Slider>
      </div>
    );
  };
  
  export default Carousel;
  