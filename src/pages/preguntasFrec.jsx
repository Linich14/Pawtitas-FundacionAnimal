// exportamos los elementos o archivos para la pagina como su css y otros elementos ya hechos
import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/preguntasFrec.css'
import Footer from '../components/Footer' 
import 'bootstrap/dist/css/bootstrap.min.css'



import Acordion from '../components/Acordion_preguntas'
import Cardspreguntas from '../components/CardsPreguntas'//importamos el elemento que contiene
// las tarjetas para esta pagina

//importamos elementos directamente de react 
import Card from 'react-bootstrap/Card'; //tarjetas
// necesarias para la seccion de "sobre nosotros"
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


//------------------------------------------------------------------------------------------------------
function Preguntas() {
//------------------------------------------------------------------------------------------------------
    
  return (
    <>
    <main className='preguntasFrecbackground'>
    <div className='cardPreguntasFrec'> {/* nombre para poder maniporarlo desde el css su apariencia */}
    <div className='container col-md-10 mx-auto col-lg-12'> {/* parametros para la pagina */}
    <NavBar ></NavBar> {/* parte de encabezado de cada pagina */}
    <div className='flex caja_invisible '></div>

{/* aqui comienza la seccion de card */}
    <div className="App d-flex justify-content-center align-items-center h-100"> 
      <Cardspreguntas />
    </div>
    </div>
    </div>
{/* aqui termina la seccion de card */}

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
                Somos una organizacion sin fines de lucro que nacio por la necesidad de darle una solucion al problema
                de animales sin hogar.
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
                En este centro de ayudas estamos principalmente destinados a tratar con animales domesticos tradicionales
                tales como perros y gatos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mx-auto mb-3">
          <Card border="secondary">
            <Card.Header>Acerca de nosotros</Card.Header>
            <Card.Body>
              <Card.Title>¿Como es que logramos mantenernos en nuestra labor?</Card.Title>
              <Card.Text>
                Al ser una fundación sin fines de lucro, nuestro principal sustento para cuidar de los animales son 
                las donaciones que nos hace la comunidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
  

{/* -------------------------------------------------------------------------------------------------------- */}
    <Footer></Footer> {/* pie/final de la pagina */}
{/* -------------------------------------------------------------------------------------------------------- */}
    </main>
    </>

  )
}

export default Preguntas ;

