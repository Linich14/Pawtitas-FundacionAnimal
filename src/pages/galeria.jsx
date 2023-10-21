// exportamos los elementos o archivos para la pagina como su css y otros elementos ya hechos
import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/Galeria.css'
import Footer from '../components/Footer' 

// ------------------------------------------------------------------------------------------------
//cosas para subir imagenes a la db
import { uploadFile } from '../components/FuncionesPaginaGaleria'
// import { uploadFile } from '../firebase'
import { useState } from 'react'

//-------------------------------------------------------------------------------------------------
import Cards from "../components/Cards";//componente que contiene la estructura para las tarjetas
// elementos para los botones o grupo de botones al final de la pagina
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';




function Galeria() {
// ------------------------------------------------------------------------------------------------
//cosas para subir imagenes a la db
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile(file);
  }

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

    <form onSubmit={handleSubmit}>
      <input type="file" className='' id='' onChange={(e) => setFile(e.target.files[0])} /> 
      <button> Subir </button>
    </form>


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