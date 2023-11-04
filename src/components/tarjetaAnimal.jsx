import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import "boxicons";
import { db, serverTimestamp } from '../firebase';
import { doc, getDoc,  collection, addDoc } from '@firebase/firestore';
import { UserAuth } from "./Autenticacion";


const AnimalCard = ({ animalId }) => {
  const [animalData, setAnimalData] = useState(null);

  const { user} = UserAuth();
  
  const enviarSolicitudAdopcion = async () => {
    // Verificar que el usuario este conectado
    if (!user) {
      return null;
    }
    
    const timestamp = serverTimestamp();

    //datos a enviar a firebase
    const enviarSolicitud = {
      usuarioEmail: user.email,
      usuarioID: user.uid,
      animalNombre: animalData.Animal_Nombre,
      animalId: animalId,
      fechaSolicitud: timestamp,
    };
    
    try {
      // registrar la solicitud en firebase
      const docRef = await  addDoc(collection(db,'SolicitudesAdopcion'), enviarSolicitud);
        alert("Solicitud enviada con exito \nNumero de solicitud; " + docRef.id);
    } catch (error){
      console.log("error");
    }
  };
  

  // Funcion que controla la ventana modal. libreria react-modal

  //Ventana de informacion
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //Ventana de solicitud adopcion
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };
  

  useEffect(() => {
    // Obtener datos del animal desde Firebase
    const animalDocRef = doc(db, 'Animales', animalId);

    getDoc(animalDocRef).then((doc) => {  
      if (doc.exists()) {
        const animalData = doc.data();
        
        // Convierte el Timestamp a una fecha legible
        const fechaDeIngreso = animalData.Animal_Ingreso.toDate(); // Supongamos que Animal_Ingreso es un campo con Timestamp
    
        setAnimalData({
          ...animalData,
          Animal_Ingreso: fechaDeIngreso.toLocaleDateString(), // Aquí asignamos la fecha legible
        });
      } else {
        console.log("No se encontraron datos para el animal con ID: " + animalId);
      }
    });
  }, [animalId]);

  if (!animalData) {
    return <div>Cargando...</div>;
  }

  return (
    <TarjetaContainer>
      <div className='tarjetaAnimales'>
        <div className='ImgAnimales'>
            <img src={animalData.Animal_Imagen} alt={`imagen de ${animalData.Animal_Nombre}`}/>
        </div>
        <div className='containerInfoAnimales'>
            <div className='infoAnimales'>
                <p>{animalData.Animal_Datos}</p>
            </div>
            <div className='botones'>
                <button className='buttonMasInfo' onClick={openModal}>
                    Mas Informacion
                </button>
                <button className='buttonAdoptar' onClick={user ? openModal2 : undefined}>
                    {user && 
                     "Solicitar Adopcion"}
                    {!user && "Inicie Sesion para Adoptar"}
                </button>
                <button className='contador'>
                    Ingreso  {animalData.Animal_Ingreso}
                </button>
            </div>
        </div>
        <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className='containerModal'>
            <div className='headerModal'>
              <div className='NombrePerro'>
                <p>{animalData.Animal_Nombre}</p>
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
              <table>
                <tr>
                  <th>Genero</th>
                  <th>{animalData.Animal_Sexo}</th>
                </tr>
                <tr>
                  <th>Edad</th>
                  <th>{animalData.Animal_Edad}</th>
                </tr>
                <tr>
                  <th>Salud</th>
                  <th>{animalData.Animal_Estado_Salud}</th>
                </tr>
                <tr>
                  <th>Especie Animal</th>
                  <th>{animalData.Animal_Tipo}</th>
                </tr>
              </table>
            </div>
          </div>
        </CustomModal>
    
        <CustomModal isOpen={modalIsOpen2} onRequestClose={closeModal2} >
          <div className='containerModal'>
            <div>
              <p className="infoSoli">Para poder solicitar la Adopcion de {animalData.Animal_Nombre} deveras saber que pasarar por un proceso de selecion, una vez terminado este proceso, se contactara con la persona selecionada a travez del correo electronico.</p>
            </div>
            <div className="botones">
              <button onClick={closeModal2}>Cancelar Solicitud</button>
              <button onClick={enviarSolicitudAdopcion}>Enviar Solicitud</button>
            </div>
          </div>
        </CustomModal>

      </div>
    </TarjetaContainer>
  );
};

export default AnimalCard;

const TarjetaContainer = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .tarjetaAnimales {
    color:black;
    display: flex;
    justify-content: center;
    max-width: 1100px;
    max-height: 300px;
    margin: 2rem 0;
  }

  .ImgAnimales{
    img {
      border-radius: 4rem 0 4rem 4rem;
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }

  .containerInfoAnimales {
    margin-left: 1rem;
    .infoAnimales {
      max-height: 190px;
      max-width:785px;
      min-height: 190px;
      min-width:785px;
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
        transition: background-color 0.3s ease-in, border 0.3s ease-in;
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
        transition: background-color 0.2s ease-in, border 0.2s ease-in;
      }
      button:hover {
        background-color: #ef4b4b;
        border: 1px solid #ef4b4b;
      }
    }
  .infoSoli{
    max-width:520px;
  }
`;
