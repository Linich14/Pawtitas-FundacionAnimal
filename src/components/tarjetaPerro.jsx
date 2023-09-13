
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import "boxicons";


function TarjetaPerro({ perro }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleAdoptar = () => {
      if (isLoggedIn) {
        alert("¡Gracias por adoptar!");
      } else {
        alert("Debes iniciar sesión para adoptar.");
      }
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
    



    return (
      <TarjetaContainer>
        <div className='tarjeta'>
          <div className='ImgDog'>
              <img src={perro.imgPerro} alt={`imagen de ${perro.nombre}`}/>
          </div>
          <div className='containerInfo'>
              <div className='info'>
                  <p>{perro.Contenido}</p>
              </div>
              <div className='botones'>
                  <button className='buttonMasInfo' onClick={openModal}>
                      Mas Informacion
                  </button>
                  <button className='buttonAdoptar' onClick={handleAdoptar}>
                      {isLoggedIn ? "Adoptar" : "Inicie Session para Adoptar"}
                  </button>
                  <button className='contador'>
                      1d:12h:14m:06s
                  </button>
              </div>
          </div>

          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className='containerModal'>
              <div className='headerModal'>
                <div className='NombrePerro'>
                  <p>{perro.Nombre}</p>
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
                <p>{perro.ContenidoExtra}</p>
                <table>
                  <tr>
                    <th>Genero</th>
                    <th>{perro.Genero}</th>
                  </tr>
                  <tr>
                    <th>Edad</th>
                    <th>{perro.Edad}</th>
                  </tr>
                  <tr>
                    <th>Nose</th>
                    <th>{perro.AlgunDato}</th>
                  </tr>
                  <tr>
                    <th>Salud</th>
                    <th>{perro.Salud}</th>
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

  .tarjeta {
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

  .containerInfo {
    margin-left: 1rem;
    .info {
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

