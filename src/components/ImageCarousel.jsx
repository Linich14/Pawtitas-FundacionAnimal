import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { id: 1, src: './assets/img1', alt: 'Img1' },
  { id: 2, src: './assets/img2', alt: 'Img2' },
  { id: 3, src: './assets/img3', alt: 'Img3' },
];

const ImageCarousel = () => {
  return (
    <Carousel>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
