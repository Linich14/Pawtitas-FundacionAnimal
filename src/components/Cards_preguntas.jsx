//elementos que utilizaremos e importamos
import React from "react";
import Card_preguntas from "./Card_preguntas";
//imagenes que utilizaremos 
import image1 from "../assets/gato1.webp";
import image2 from '../assets/postimg1.webp'
import image3 from '../assets/perro6.webp'

const cards_preguntas = [ // asignamos y creamos las tarjetas dandoles los atributos
  {
    id: 1,
    title: "¿Es posible adoptar gatos?",
    image: image1, //las imagenes que importamos antes
    text:'¡Por supuesto!, es posible adotar y dar en adopción gatos.'
  },
  {
    id: 2,
    title: "¿Es posible adoptar Perritos?",
    image: image2,
    text:'¡Por supuesto!, es posible adotar y dar en adopción a perros.'
  },
  {
    id: 3,
    title: "¿Que animales se pueden adoptar?",
    image: image3,
    text:'En este centro de ayuda solo trabajamos a animales de compañia tradicionales como perros y gatos.'
  },
];

function Cards_preguntas() { //aqui utilizamos lo que creamos arriba
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards_preguntas.map(({ title, image, url, id, text}) => ( // le damos tambien los parametros
          <div className="col-md-4" key={id}>
            <Card_preguntas imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Cards_preguntas; //exportamos
