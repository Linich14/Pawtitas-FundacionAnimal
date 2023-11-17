// exportamos los elementos o archivos para la pagina como su css y otros elementos ya hechos
import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/preguntasFrec.css'
import Footer from '../components/Footer' 
import 'bootstrap/dist/css/bootstrap.min.css'



import Acordion from '../components/Acordion_preguntas'
import Cards_preguntas from '../components/Cards_preguntas'//importamos el elemento que contiene
// las tarjetas para esta pagina

//importamos elementos directamente de react 
import Card from 'react-bootstrap/Card'; //tarjetas
// necesarias para la seccion de "sobre nosotros"
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

//------------------------------------------------------------------------------------------

//cosas para subir imagenes a la db
import {uploadBytes,ref,getDownloadURL } from '@firebase/storage'
import { storage } from '../firebase'
import { db } from '../firebase'
import { v4 } from "uuid";

import { addDoc, collection, getDocs } from '@firebase/firestore'

// import { uploadFile } from '../components/FuncionesPaginaGaleria'
// import { uploadFile } from '../firebase'
import { useState } from 'react'

//-------------------------------------------------------------------------------------------------
import { useEffect } from 'react'


const Card_preg = ({ txtVal, fileURL }) => (
  <div className="tarjetasparaPreg">
    <h1>{txtVal}</h1>
    <img src={fileURL} alt="Imagen de la galería" />
  </div>
);






//------------------------------------------------------------------------------------------------------
function Preguntas() {
  // // ------------------------------------------------------------------------------------------------
  //cosas para subir imagenes a la db
  const [txt,setTxT] = useState('') //usada para subir texto
  const [file,setFile] = useState('') // para la imagen
  const [data,setData] = useState([]) //para llamar a la bd y mostrar

  const handleSubmit = (e) => { //funcion para subir los datos a la bd
    const imgs = ref(storage, 'ImagenesPreguntasFrec/' + v4()) //dictamos la ruta donde queremos que se suba la foto
    uploadBytes(imgs,e.target.files[0]).then(data=>{// la subimo con esta funcion
      getDownloadURL(data.ref).then(val=>{//con esto conseguimos el url de la imagen subida
        setFile(val)//aqui se almacena
      })
    })

  }
  // configuracion para el boton del formulario de subir a galeria
  const handleClick = async () =>{ //aqui es para el boton de subir a la bd
    const valRef = collection(db,'PreguntasFrec')//la coleccion a la que se debe subir 
    await addDoc(valRef,{txtVal:txt,fileURL:file})//con esto enlazamos la imagen en storage y el texto en firebase 
    alert("¡Datos guados de manera exitosa!") //avisamos que los datos han sido subidos 
  }

  const getData = async ()=>{//con esto conseguimos la info de la bd
    const valRef = collection(db,'PreguntasFrec')//firebase       AQUI CONSEGUIMOS LOS DATOS
    const dataDB = await getDocs(valRef)//storage
    const allData = dataDB.docs.map(val=>({...val.data(),id:val.id}))//hacemos el mapeo y seleccionamos
    //lo que queremos ver y acceder
    setData(allData)
  }


  useEffect(()=>{// aqui es como llamamos a los datos para que puedan verse mediante el useEffect
    getData()
  })

    
  return (
    <>
    <main className='preguntasFrecbackground'>
    <div className='cardPreguntasFrec'> {/* nombre para poder maniporarlo desde el css su apariencia */}
    <div className='container col-md-10 mx-auto col-lg-12'> {/* parametros para la pagina */}
    <NavBar ></NavBar> {/* parte de encabezado de cada pagina */}
    <div className='flex caja_invisible '></div>

{/* aqui comienza la seccion de card */}
    <div className="App d-flex justify-content-center align-items-center h-100"> 
      <Cards_preguntas />
    </div>
    </div>
    </div>
{/* aqui termina la seccion de card */}










{/* ----------------------------------------------------------------------------------------------------------- */}

{/* aqui ira el epacio para subir una archivo y crear una pregunta */}
    <div className='container-ver-tu-mascota-preguntas-frec'>
      <div className='container col-md-10 mx-auto col-lg-12'>
        <div>
          <h1>¿Quieres hacer una pregunta sobre tu mascota?</h1>
          <div className='contenedor_preguntas_frec'>
            <input className='estilo-input' onChange={(e) => setTxT(e.target.value)} placeholder='Agrega tu pregunta' /><br />
            <input className="styled-file-input" type='file' onChange={(e) => handleSubmit(e)} /><br />
            <button className="styled-button" onClick={handleClick}>Enviar</button>
          </div>
          {/* Mapeo de datos en componentes de tarjeta y contenedor de tarjetas */}
          <div className="card-container-perritos-automatico">
            {data.map((value, index) => (
              <Card_preg key={index} txtVal={value.txtVal} fileURL={value.fileURL} />
            ))}
          </div>
        </div>
      </div>
    </div>

{/* termino de espacio para hacer una pregunta */}











{/* -------------------------------------------------------------------------------------------------------- */}
{/*                                            funcion de acordeon                                           */}
    
    <Acordion></Acordion>

{/* -------------------------------------------------------------------------------------------------------- */}
    <Container > {/* se usa este elemento con fines esteticos metiendolos en un contenedor */}

      <div>
        <h1 style={{ color: 'black' }}>¿Quieres saber sobre nosotros?</h1>
        <p style={{ color: 'black' }}>Aqui es donde te puedes informar.</p>
      </div>
      <Row>
        <Col md={6} className="mx-auto mb-3">
          <Card border="primary">
            <Card.Header>Acerca de nosotros</Card.Header>
            <Card.Body>
              <Card.Title>¿A que nos dedicamos ?</Card.Title>
              <Card.Text>
                Nuestra principal mision es ayudar a todos aquellos animales que no cuenten con un hogar, aliviando 
                sus vidas y teniendo un mejor futuro para ellos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mx-auto mb-3">
          <Card border="secondary">
            <Card.Header>Acerca de nosotros</Card.Header>
            <Card.Body>
              <Card.Title>¿Quienes somos ?</Card.Title>
              <Card.Text>
                Somos una organizacion sin fines de lucro que nacio por la necesidad de darle una solucion a el problema
                de animales sin familia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mx-auto mb-3">
          <Card border="primary">
            <Card.Header>Acerca de nosotros</Card.Header>
            <Card.Body>
              <Card.Title>¿Que clase de Animales tratamos ?</Card.Title>
              <Card.Text>
                En este centro de ayudas estamos principalmente destinados a tratar con nimales domesticos tradicionales
                tales como perros y gatos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mx-auto mb-3">
          <Card border="secondary">
            <Card.Header>Acerca de nosotros</Card.Header>
            <Card.Body>
              <Card.Title>¿Como es que logramos mantenernos en nestra lavor?</Card.Title>
              <Card.Text>
                Al ser una fundación sin fines de lucro, nuestro principal sustento para cuidar de los animales son 
                las donaciones que nos hace la comunidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  

{/* -------------------------------------------------------------------------------------------------------- */}
    <Footer></Footer> {/* pie/final de la pagina */}
{/* -------------------------------------------------------------------------------------------------------- */}
    </main>
    </>

  )
}

export default Preguntas ;

