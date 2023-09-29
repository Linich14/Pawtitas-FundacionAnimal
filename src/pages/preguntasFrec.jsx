import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/Galeria.css'
import Footer from '../components/Footer' 
import 'bootstrap/dist/css/bootstrap.min.css'


import Acordion from '../components/Acordion_preguntas'
import Cards_preguntas from '../components/Cards_preguntas';

function Preguntas() {
  return (
    <>
    <div className='container galeriabackground col-md-10 mx-auto col-lg-12'>
    <NavBar ></NavBar>
    <div className='flex caja_invisible '></div>

{/* aqui comienza la seccion de card */}
    <div className="App d-flex justify-content-center align-items-center h-100">
      <Cards_preguntas />
    </div>
{/* aqui termina la seccion de card */}

    </div>
{/* -------------------------------------------------------------------------------------------------------- */}
{/*                                            funcion de acordeon                                           */}

    
    <Acordion></Acordion>

    <Footer></Footer>
    </>

  )
}

export default Preguntas ;

