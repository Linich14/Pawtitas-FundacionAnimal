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
    Genero:'Macho',
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
    Genero:'Hembra',
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
    Genero:'Macho',
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
    Genero:'Macho',
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
    Genero:'Macho',
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
    Genero:'Hembra',
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
    Genero:'Macho',
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
    Genero:'Hembra',
    Edad:'99 Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
  {
    id: 9,
    imgPerro: Perro2,
    Contenido:
      'Hola Me llamo MALUCO y espero ser adoptado, te cuento un poco sobre mi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit obcaecati errorconsectetur, iure quae porro! Recusandae, earum',
    ContenidoExtra:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odidoloribus fuga, voluptatibus accusantium blanditiis ipsum quia magni mollitia facilis odio asperiores fugit',
    Nombre:'Maluco',
    Genero:'binario',
    Edad:'infinitos Años',
    AlgunDato:'Algun Dato',
    Salud:'Poner toda la informacion necesaria y que se deba saber del anima para no tener probleamas, vacunas, operacioens, si esta esterilizado o no, etc',
  },
];


function Adopcion() {
  // Guarda lo que el usuario escribe
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  // Estado que rastrea la pagina que se esta mostrando
  const [paginaActual, setPaginaActual] = useState(0);

  const perrosPorPagina = 2;

  // Funcion que rastrea lo que el usuario escribe y lo actualiza
  const manejoCambioBusqueda = (event) => {
    setTerminoBusqueda(event.target.value);
    setPaginaActual(0); // Reiniciar la página
  };

  // funcion que crea un array con los parametros de busqueda
  const filtroDePerros = dataPerros.filter((perro) =>
    perro.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
    perro.Genero.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
    perro.Edad.toLowerCase().includes(terminoBusqueda.toLowerCase()),
  );

  // Calcula el índice de inicio a mostrar en la página actual. "react-paginate"
  const startIndex = paginaActual * perrosPorPagina;
  // Calcula el índice final a mostrar en la página actual.
  const endIndex = startIndex + perrosPorPagina;
  // Toma solo en cuenta el array creado con filterredPerros
  const perrosEnPagina = filtroDePerros.slice(startIndex, endIndex);

  // Funcion que maneja el cambio de pagina
  const handlePageChange = ({ selected }) => {
    // Actualiza el estado paginaActual con el numero seleccionado 
    setPaginaActual(selected);
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
              value={terminoBusqueda}
              onChange={manejoCambioBusqueda}
            ></input>

          </form>
          
          {perrosEnPagina.map((perro) => (        
            <TarjetaPerro key={perro.id} perros={perro} />
          ))}
          {/* 
                .map es una funcion de js que ayuda a mapear un areglo en este caso mapea solo la cantidad de perrosEnPagina

                key={perro.id} key es de react y sirve para renderizar elementos unicos en este caso ID
                perros={perro} perros, es el parametro que le dimos a la TarjetaPerro con el que solicitamos el prop/info

                RESUMEN: revisa cuantos perros en pagina hay segun el filtroDePerros (Sin filtro renderiza normal) y para cada 
                perro mostrado crea su  TarjetaPerro
            */}
          
          <PaginationCss
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