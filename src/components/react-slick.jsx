
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import perro1 from '../assets/perro2.jpg'






const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="carousel-container">
        <h1>animales rescatados</h1>
        <Slider {...settings}>
          <div >
          <h3>Slide 2</h3>
            <p>Contenido del primer slide.</p>
       
          </div>
          <div>
            <h3>Slide 2</h3>
            <p>Contenido del segundo slide.</p>
          </div>

          <div>
            <h3>Slide 3</h3>
            <p>Contenido del segundo slide.</p>
          </div>

        </Slider>
      </div>
    );
  };
  
  export default Carousel;
  