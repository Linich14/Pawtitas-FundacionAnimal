import React, {useState} from "react";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import FondoBackGround from "../assets/fondito.png";
import ReactPaginate from "react-paginate";
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
              onChange={handleSearchChange} // Agregar un controlador para el cambio
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

const PaginationCss = styled(ReactPaginate)`
  display:flex;
  justify-content:center;
  align-items:center;
  list-style:none;
  color:#164b60;
  
  a{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-inline:0.4rem;
    max-width:3.1rem;
    min-width:3rem;
    max-height:3.1rem;
    min-height:3rem;
    border:1px solid #164b60;
    border-radius:0.5rem;
    background-color:#F2F3F4;
  }
  .active a{
    color:#f2e3c9;
    background-color:#164b60;
  }

`
          {/* <PaginationCss
            previousLabel ={<box-icon name='first-page' animation='fade-left-hover' color='#164b60' ></box-icon>}
            nextLabel={<box-icon name='last-page' animation='fade-right-hover' color='#164b60' ></box-icon>}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(dataPerros.length / perrosPorPagina)} //indica el numero de paginas que tendra
            marginPagesDisplayed={1}//Indica la cantidad de paginas que se muestran al inicio y final
            pageRangeDisplayed={1}//Indica cuantas paginas se muestran desde la que ya esta seleccionada
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />   */}