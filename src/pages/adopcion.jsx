import React, {useState} from "react";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import FondoBackGround from "../assets/fondito.png";
import TarjetaPerro from "../components/tarjetaPerro";
import ReactPaginate from "react-paginate";
import Perro2 from "../assets/perro2.jpg";
import Perro3 from "../assets/perro3.jpg";
import Perro4 from "../assets/perro4.jpg";
import Perro5 from "../assets/perro5.jpg";

const dataPerros = [
  {
    id: 1,
    imgPerro: Perro2,
    Contenido:
      'Hola Me llamo Jamaica y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'Jamaica',
    Genero:'Masculino',
    Edad:'3 Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 2,
    imgPerro: Perro3,
    Contenido:
      'Hola Me llamo SEMILLA y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'SEMILLA',
    Genero:'Femenino',
    Edad:'100 Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 3,
    imgPerro: Perro5,
    Contenido:
      'Hola Me llamo OCTOPUS y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'OCTOPUS',
    Genero:'Masculino',
    Edad:'0 Años se murio',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 4,
    imgPerro: Perro4,
    Contenido:
      'Hola Me llamo YOYO y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'YOYO',
    Genero:'Masculino',
    Edad:'30años Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 5,
    imgPerro: Perro2,
    Contenido:
      'Hola Me llamo PATO y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'PATO',
    Genero:'Masculino',
    Edad:'-5 Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 6,
    imgPerro: Perro3,
    Contenido:
      'Hola Me llamo NEGRITA y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'NEGRITA',
    Genero:'Femenino',
    Edad:'3 meses',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 7,
    imgPerro: Perro5,
    Contenido:
      'Hola Me llamo COPITO y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'COPITO',
    Genero:'Masculino',
    Edad:'1 Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 8,
    imgPerro: Perro4,
    Contenido:
      'Hola Me llamo CANELA y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'CANELA',
    Genero:'Femenino',
    Edad:'99 Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
];


function Adopcion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const perrosPorPagina = 2;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // Reiniciar la página a la primera cuando se realiza una nueva búsqueda
  };

  const filteredPerros = dataPerros.filter((perro) =>
    perro.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perro.Genero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perro.Edad.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const startIndex = currentPage * perrosPorPagina;
  const endIndex = startIndex + perrosPorPagina;
  const perrosEnPagina = filteredPerros.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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
              spellcheck='true'
              required
              value={searchTerm}
              onChange={handleSearchChange}
            ></input>
          </form>
          {perrosEnPagina.map((perro) => (
            <TarjetaPerro key={perro.id} perro={perro} />
          ))}
          
          <PaginationCss
            previousLabel ={<box-icon name='first-page' animation='fade-left-hover' color='#164b60' ></box-icon>}
            nextLabel={<box-icon name='last-page' animation='fade-right-hover' color='#164b60' ></box-icon>}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(dataPerros.length / perrosPorPagina)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />  
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