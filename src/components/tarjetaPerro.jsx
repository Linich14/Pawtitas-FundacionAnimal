
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import "boxicons";

{/*El parametro perros, es la forma en la que solicitamos la 
  informacion del prop (esta en el  arrayList dataPerros)

  BORRAR ESTA PARTE PARA PRESENTAR
*/}
function TarjetaPerro({ perros }) {
  //Funcion que simula el login
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleAdoptar = () => {
    if (isLoggedIn) { //Logead true
      alert("su petición está siendo revisada");
    } else { //No logeado False
      alert("Debes iniciar sesión para adoptar.");
    }
  }

  // Funcion que controla la ventana modal. libreria react-modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  



  return (
    <TarjetaContainer>
      <div className='tarjetaPerros'>
        <div className='ImgDog'>
            <img src={perros.imgPerro} alt={`imagen de ${perros.nombre}`}/>
        </div>
        <div className='containerInfoPerros'>
            <div className='infoPerros'>
                <p>{perros.Contenido}</p>
            </div>
            <div className='botones'>
                <button className='buttonMasInfo' onClick={openModal}>
                    Mas Informacion
                </button>
                <button className='buttonAdoptar' onClick={handleAdoptar}>
                    {isLoggedIn ? "Solicitar Adopcion" : "Inicie Session para Adoptar"}
                </button>
                <button className='contador'>
                    1d:12h:14m:06s
                </button>
            </div>
        </div>
        {/*Explicacion codigo de libreria react-modal
            isOpen.... indica que al abrirce el modal, este muestre la informacion
            onRequestClose indica como llamar al onClick para cerrar el modal. 
            BORRAR ESTA PARTE PARA PRESENTAR
        */}
        <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className='containerModal'>
            <div className='headerModal'>
              <div className='NombrePerro'>
                <p>{perros.Nombre}</p>
              </div>
              <div className='iconX'>
              <box-icon
                onClick={closeModal}
                size="md"
                type="solid"
                name="x-circle"
                animation="spin-hover"
                color="#ef4b4b"
              ></box-icon>
              </div>
            </div>
            <div className='InfoExtra'> 
              <p>{perros.ContenidoExtra}</p>
              <table>
                <tr>
                  <th>Genero</th>
                  <th>{perros.Genero}</th>
                </tr>
                <tr>
                  <th>Edad</th>
                  <th>{perros.Edad}</th>
                </tr>
                <tr>
                  <th>Nose</th>
                  <th>{perros.AlgunDato}</th>
                </tr>
                <tr>
                  <th>Salud</th>
                  <th>{perros.Salud}</th>
                </tr>
              </table>
            </div>
          </div>
        </CustomModal>
      </div>
    </TarjetaContainer>
  );
}

export default TarjetaPerro;

const TarjetaContainer = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .tarjetaPerros {
    color:black;
    display: flex;
    justify-content: center;
    max-width: 1100px;
    max-height: 300px;
    margin: 2rem 0;
  }

  .ImgDog {
    img {
      border-radius: 4rem 0 4rem 4rem;
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }

  .containerInfoPerros {
    margin-left: 1rem;
    .infoPerros {
      max-height: 190px;
      min-height: 190px;
      margin-bottom: 1rem;
      border: 1px inset #164b60;
      padding: 1rem;
      border-radius: 1rem;
      background-color: #ecf4f3;
    }
    .botones {
      padding: 0.5rem 0;
      display: flex;
      justify-content: space-between;
      button {
        padding: 1rem;
        width: 230px;
        background-color: #164b60;
        color: #f2e3c9;
        border: 1px solid #164b60;
        border-radius: 1rem 0 1rem 0;
        transition: background-color 0.6s ease-in, border 0.6s ease-in;
      }
      button:hover {
        background-color: #ef4b4b;
        border: 1px solid #ef4b4b;
      }
    }
  }
`;

const CustomModal = styled(Modal)`
  color:black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  .containerModal {
    max-width: 800px;
    background-color: #ecf4f3;
    border-radius: 1rem;
    padding: 1rem;
  }
  .headerModal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .InfoExtra {
    text-align: left;
    p {
      padding: 1rem;
    }
    table {
      border-collapse: separate;
      border-spacing: 1rem 0.3rem;
    }
  }
`;

