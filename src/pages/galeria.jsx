// exportamos los elementos o archivos para la pagina como su css y otros elementos ya hechos
import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/Galeria.css'
import Footer from '../components/Footer' 
 
// ------------------------------------------------------------------------------------------------
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
import Cards from "../components/Cards";//componente que contiene la estructura para las tarjetas
import { useEffect } from 'react'


const Card = ({ txtVal, fileURL, txtVal2}) => (
  <div className="tarjetasparagaleria">
    <h1>{txtVal}</h1>
    <img src={fileURL} alt="Imagen de la galería" />
    <p>{txtVal2}</p>
  </div>
);




function Galeria() {
// ------------------------------------------------------------------------------------------------
//cosas para subir imagenes a la db
  const [txt,setTxT] = useState('') //usada para subir texto
  const [txt2,setTxT2] = useState('') //usada para subir texto 2
  const [file,setFile] = useState('') // para la imagen
  const [data,setData] = useState([]) //para llamar a la bd y mostrar

  const handleSubmit = (e) => { //funcion para subir los datos a la bd
    const imgs = ref(storage, 'ImagenesGaleria/' + v4()) //dictamos la ruta donde queremos que se suba la foto
    uploadBytes(imgs,e.target.files[0]).then(data=>{// la subimo con esta funcion
      getDownloadURL(data.ref).then(val=>{//con esto conseguimos el url de la imagen subida
        setFile(val)//aqui se almacena
      })
    })

  }
// configuracion para el boton del formulario de subir a galeria
  const handleClick = () =>{ //aqui es para el boton de subir a la bd
    const valRef = collection(db,'Galeria')//la coleccion a la que se debe subir 
    addDoc(valRef,{txtVal:txt,txtVal2:txt2,fileURL:file})//con esto enlazamos la imagen en storage y el texto en firebase 
    // se agrego txtVal2:txt2
    alert("¡Datos guados de manera exitosa!") //avisamos que los datos han sido subidos 
  }

  const getData = async ()=>{//con esto conseguimos la info de la bd
    const valRef = collection(db,'Galeria')//firebase       AQUI CONSEGUIMOS LOS DATOS
    const dataDB = await getDocs(valRef)//storage
    const allData = dataDB.docs.map(val=>({...val.data(),id:val.id}))//hacemos el mapeo y seleccionamos
    //lo que queremos ver y acceder
    setData(allData)
  }

  useEffect(()=>{// aqui es como llamamos a los datos para que puedan verse mediante el useEffect
    getData()
  }, [])// con el [], evitamos que se ejecute indefinidamente la funcion async.

//-------------------------------------------------------------------------------------------------
  return (
    <>
      <NavBar ></NavBar>{/* parte de encabezado de cada pagina */}
      {/* el main es contenido principal */}
      <main className='galeriabackground'> 
      <div className='cardgaleria'>{/* nombre para poder manipurarlo desde el css su apariencia */}
        <div className='container col-md-10 mx-auto col-lg-12'>{/* parametros para la pagina */}
          <div className="App d-flex justify-content-center align-items-center h-100" >
            <Cards /> {/* hacemos uso de las tarjetas */}
          </div>
        </div>
      </div>


{/* aqui ira el epacio para subir una archivo y crear una opinion */}

    <div className='container-ver-tu-mascota-galeria'>
      <div className='container col-md-10 mx-auto col-lg-12'>
        <div>
          <h1>¿Quieres ver a tu mascota en esta galería?</h1>
          <div className='contenedor de preguntas'>
            <input className='estilo-input' onChange={(e) => setTxT(e.target.value)} placeholder='Agregar titulo' /><br />
            <input className='estilo-input' onChange={(e) => setTxT2(e.target.value)} placeholder='Añada un breve comentario' /><br />
            <input className="styled-file-input" type='file' onChange={(e) => handleSubmit(e)} /><br />
            <button className="styled-button" onClick={handleClick}>Subir a galería</button>
          </div>
          {/* Mapeo de datos en componentes de tarjeta y contenedor de tarjetas */}
          <div className="card-container-perritos-automatico">
            {data.map((value, index) => (
              <Card key={index} txtVal={value.txtVal} txtVal2={value.txtVal2} fileURL={value.fileURL} />
            ))}
          </div>
        </div>
      </div>
    </div>

{/* termino de espacio para dar opinion */}
      </main>
      <Footer></Footer> {/* pie/final de la pagina */}
    </>
  )
}
 
export default Galeria