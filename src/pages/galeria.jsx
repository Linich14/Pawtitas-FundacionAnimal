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
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useEffect } from 'react'




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
    <div className='galeriabackground'>{/* nombre para poder maniporarlo desde el css su apariencia */}
    <div className='container col-md-10 mx-auto col-lg-12'>{/* parametros para la pagina */}
   
    <NavBar ></NavBar>{/* parte de encabezado de cada pagina */}
 
    <div className='flex caja_invisible '></div> {/* para darle espacio al contenido con el NarVar */}

    <div className="App d-flex justify-content-center align-items-center h-100" >
      <Cards /> {/* hacemos uso de las tarjetas */}
    </div>
    </div>
    </div>


{/* aqui ira el epacio para subir una archivo y crear una opinion */}

    <div className='galeriabackground'>
    <div className='container col-md-10 mx-auto col-lg-12'>

    <div>
        <h1>¿Quieres ver a tu mascota a ésta galeria?</h1>
        <input onChange={(e) => setTxT(e.target.value)} placeholder='Agregar texto'/><br/>
        <input type='file' onChange={(e) => handleSubmit(e)}/><br/>
        <button onClick={handleClick}>Subir a galeria</button>


        {//en esta seccion se muentran los datos subidos
        // se hace el mapeo
          data.map(value=> <div> 
              <h1>{value.txtVal}</h1> {/* se llama al texto subido */}
              <img src={value.fileURL} height='200px' width='200px'/>  {/* se llama a la imagen */}
          </div>)
        }
    </div>

    </div>
    </div>
{/* termino de espacio para dar opinion */}


{/* aqui creamos el grupo de botones */}
    <div className="mis-botones-grupo-css d-flex justify-content-center align-items-center">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
          <Button>4</Button>
        </ButtonGroup>

        <ButtonGroup className="me-2" aria-label="Second group">
          <Button>5</Button> <Button>6</Button> <Button>7</Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Third group">
          <Button>8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
        
    <Footer></Footer> {/* pie/final de la pagina */}
    </>
  )
}
 
export default Galeria