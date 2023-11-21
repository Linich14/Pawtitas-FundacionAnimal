import React, {useState} from "react";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import FondoBackGround from "../assets/fondito.webp";

import AnimalList from "../components/AnimalList";


function Adopcion() {
  const [terminoDeBusqueda, setterminoDeBusqueda] = useState(""); // Estado para el término de búsqueda
  const handleSearchChange = (e) => {
    setterminoDeBusqueda(e.target.value);
  };


  return (
    <>
      <AdopcionCss>
        <NavBar></NavBar>
        <main className="containerAdop">
          <form className="buscador">
          <input
              type="search"
              name="myInput"
              placeholder="Buscar"
              size="30"
              spellCheck='true'
              required
              value={terminoDeBusqueda}
              onChange={handleSearchChange}
            ></input>

          </form>
          <AnimalList terminoDeBusqueda={terminoDeBusqueda} />

        </main> 
        <Footer></Footer>
      </AdopcionCss>
    </>
  );
}

export default Adopcion;

const AdopcionCss = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url(${FondoBackGround});
  background-repeat: repeat;
  background-position: fixed;
  .containerAdop {
    text-align: center;
    margin: auto;
    margin-top: 7.8;
    max-width: 1100px;
  }

  .buscador {
    display: flex;
    justify-content: end;
    input {
      border-radius: 1rem;
      border: 1px solid #164b60;
      padding: 0.3rem;
      padding-left: 1rem;
      outline: None;
      color: #164b60;
      margin-top: 10rem;
    }
  }
`;

