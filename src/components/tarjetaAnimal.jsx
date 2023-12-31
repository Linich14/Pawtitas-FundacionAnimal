import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import "boxicons";
import { db, serverTimestamp } from '../firebase';
import { doc, getDoc,setDoc,  collection, addDoc  } from '@firebase/firestore';
import { UserAuth } from "./Autenticacion";


const AnimalCard = ({ animalId }) => {
  const [animalData, setAnimalData] = useState(null);

  const { user} = UserAuth();
  
  const enviarSolicitudAdopcion = async () => {
    // Verificar que el usuario esté conectado
    if (!user) {
      return null;
    }
  
    const timestamp = serverTimestamp();
  
    // Datos a enviar a Firebase a la coleccion de cada animal
    const enviarSolicitud = {
      usuarioEmail: user.email,
      usuarioID: user.uid,
      animalNombre: animalData.Animal_Nombre,
      animalId: animalId,
      fechaSolicitud: timestamp,
      animalImagen: animalData.Animal_Imagen,
    };
  
    //datos a enviar a la tabla que crea la solicitud, este se crea con el id del animal
    const enviarDatosAnimal = {
      animalId: animalId,
      animalNombre: animalData.Animal_Nombre,
    };
  
    try {
      const solicitudDocRef = doc(collection(db, 'SolicitudesAdopcion'), animalId);

      //Toma los datos actuales para poder comparar mas adelante
      const solicitudDocSnapshot = await getDoc(solicitudDocRef);
      
      if (solicitudDocSnapshot.exists()) {
        // Si el documento ya existe, solo crear la subcolección
        const subcoleccionRef = collection(solicitudDocRef, 'solicitudesDelAnimal');
        await addDoc(subcoleccionRef, enviarSolicitud);
      } else {
        // Si el documento no existe, crearlo y la subcolección
        await setDoc(solicitudDocRef, enviarDatosAnimal);
        const subcoleccionRef = collection(solicitudDocRef, 'solicitudesDelAnimal');
        await addDoc(subcoleccionRef, enviarSolicitud);
      }
  
      alert("Solicitud enviada con éxito");
    } catch (error) {
      console.error("Error al enviar la solicitud", error);
    }
    closeModal2();
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
        const fechaDeIngreso = animalData.Animal_Ingreso.toDate();
    
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
              <p className="infoSoli">Apenas confirmes el envio de solicitud para: {animalData.Animal_Nombre}. Tu solicitud pasara por los Administradores para decidir si eres un postulante adecuado para este animal.</p>
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
