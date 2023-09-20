import React from "react";
import Card_preguntas from "./Card_preguntas";

import image1 from "../assets/img3.png";
import image2 from '../assets/img1.jpg'
import image3 from '../assets/img2.jpg'

const cards_preguntas = [
  {
    id: 1,
    title: "Pregunta frecuente 1",
    image: image1,
    text:'Amo a mi nueva mascota'
  },
  {
    id: 2,
    title: "Pregunta frecuente 2",
    image: image2,
    text:'las opiniones son muy importantes para todos.'
  },
  {
    id: 3,
    title: "Pregunta frecuente 3",
    image: image3,
    text:'Este centro de animales me encanta'
  },
];

function Cards_preguntas() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards_preguntas.map(({ title, image, url, id, text}) => (
          <div className="col-md-4" key={id}>
            <Card_preguntas imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Cards_preguntas;
