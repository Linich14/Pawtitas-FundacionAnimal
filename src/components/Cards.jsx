import React from "react";
import Card from "./Card";
 
import image1 from "../assets/perro6.webp";
import image2 from '../assets/perro7.webp'
import image3 from '../assets/gato1.webp'
 
const cards = [
  {
    id: 1,
    title: "¡Este centro es fantastico!",
    image: image1,
    text:'Amo a mi nueva mascota, estan esponjosita y linda.'
  },
  {
    id: 2,
    title: "Gracias a Pawtitas ahora es parte de la familia",
    image: image2,
    text:'Gracias a este maravilloso centro de ayuda y rescate ahora esta linda cachorrita alegra nuestras vidas todos los dias.'
  },
  {
    id: 3,
    title: "Estoy muy emocionada",
    image: image3,
    text:'Gracias a pawtitas y a su comunidad ahora esta linda gatita puede tener la vida que merece junto a nosotros.'
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
