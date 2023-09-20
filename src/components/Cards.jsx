import React from "react";
import Card from "./Card";

import image1 from "../assets/img3.png";
import image2 from '../assets/fondo1.png'
import image3 from '../assets/fondo3.png'

const cards = [
  {
    id: 1,
    title: "Opinion 1",
    image: image1,
    text:'Amo a mi nueva mascota'
  },
  {
    id: 2,
    title: "Opinion 2",
    image: image2,
    text:'las opiniones son muy importantes para todos.'
  },
  {
    id: 3,
    title: "Opinion 3",
    image: image3,
    text:'Este centro de animales me encanta'
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text}) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Cards;
