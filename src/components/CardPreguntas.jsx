//elementos que utilizaremos e importamos
import React from "react";
import PropTypes from "prop-types";

// importamos los estilos
import "../components/css/cardspreguntas.css";

function Cardpreguntas({ imageSource, title, text, url }) { //agregamos los parametros que son lo que iremos
  //modificando en cada caso
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp"> {/* centramos las tajetas */}
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light"> {/* estos son los elementos que se modificaran */}
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text ? text: "Texto de ejemplo para la imagen"} {/* en caso de que no haya texto este ira por defecto */}
          
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          {/* Go to {title} */}
        </a>
      </div>
    </div>
  );
}
 
Cardpreguntas.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Cardpreguntas;
