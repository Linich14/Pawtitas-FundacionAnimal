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

import { addDoc, collection, getDoc, getDocs } from '@firebase/firestore'

// import { uploadFile } from '../components/FuncionesPaginaGaleria'
// import { uploadFile } from '../firebase'
import { useState } from 'react'

//-------------------------------------------------------------------------------------------------
import Cards from "../components/Cards";//componente que contiene la estructura para las tarjetas
// elementos para los botones o grupo de botones al final de la pagina
import { useEffect } from 'react'


const Card = ({ txtVal, fileURL }) => (
  <div className="tarjetasparagaleria">
    <h1>{txtVal}</h1>
    <img src={fileURL} alt="Imagen de la galería" />
  </div>
);




function Galeria() {
// ------------------------------------------------------------------------------------------------
//cosas para subir imagenes a la db
  const [txt,setTxT] = useState('') //usada para subir texto
  const [file,setFile] = useState('') // para la imagen
  const [data,setData] = useState([]) //para llamar a la bd y mostrar

  const handleSubmit = (e) => { //funcion para subir los datos a la bd
    console.log(e.target.files[0])
    const imgs = ref(storage, 'ImagenesGaleria/' + v4()) //dictamos la ruta donde queremos que se suba la foto
    uploadBytes(imgs,e.target.files[0]).then(data=>{// la subimo con esta funcion
      console.log(data,"imgs")
      getDownloadURL(data.ref).then(val=>{//con esto conseguimos el url de la imagen subida
        setFile(val)//aqui se almacena
      })
    })

  }
// configuracion para el boton del formulario de subir a galeria
  const handleClick = async () =>{ //aqui es para el boton de subir a la bd
    const valRef = collection(db,'Galeria')//la coleccion a la que se debe subir 
    await addDoc(valRef,{txtVal:txt,fileURL:file})//con esto enlazamos la imagen en storage y el texto en firebase 
    alert("¡Datos guados de manera exitosa!") //avisamos que los datos han sido subidos 
  }

  const getData = async ()=>{//con esto conseguimos la info de la bd
    const valRef = collection(db,'Galeria')//firebase       AQUI CONSEGUIMOS LOS DATOS
    const dataDB = await getDocs(valRef)//storage
    const allData = dataDB.docs.map(val=>({...val.data(),id:val.id}))//hacemos el mapeo y seleccionamos
    //lo que queremos ver y acceder
    setData(allData)
    console.log(dataDB)
  }


  useEffect(()=>{// aqui es como llamamos a los datos para que puedan verse mediante el useEffect
    getData()
  })

//-------------------------------------------------------------------------------------------------
  return (
    <>
      <NavBar ></NavBar>{/* parte de encabezado de cada pagina */}
      {/* el main es contenido principal */}
      <main className='galeriabackground'> 
      <div className='cardgaleria'>{/* nombre para poder maniporarlo desde el css su apariencia */}
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
            <input className='estilo-input' onChange={(e) => setTxT(e.target.value)} placeholder='Agregar texto' /><br />
            <input className="styled-file-input" type='file' onChange={(e) => handleSubmit(e)} /><br />
            <button className="styled-button" onClick={handleClick}>Subir a galería</button>
          </div>
          {/* Mapeo de datos en componentes de tarjeta y contenedor de tarjetas */}
          <div className="card-container-perritos-automatico">
            {data.map((value, index) => (
              <Card key={index} txtVal={value.txtVal} fileURL={value.fileURL} />
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