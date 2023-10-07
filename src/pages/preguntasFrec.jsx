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



function Preguntas() {
  return (
    <>
    <div className='preguntasFrecbackground'> {/* nombre para poder maniporarlo desde el css su apariencia */}
    <div className='container col-md-10 mx-auto col-lg-12'> {/* parametros para la pagina */}
    <NavBar ></NavBar> {/* parte de encabezado de cada pagina */}
    <div className='flex caja_invisible '></div>

{/* aqui comienza la seccion de card */}
    <div className="App d-flex justify-content-center align-items-center h-100"> 
      <Cards_preguntas />
    </div>
{/* aqui termina la seccion de card */}

    </div>
    </div>
{/* -------------------------------------------------------------------------------------------------------- */}
{/*                                            funcion de acordeon                                           */}
    
    <Acordion></Acordion>

{/* -------------------------------------------------------------------------------------------------------- */}
    <Container> {/* se usa este elemento con fines esteticos metiendolos en un contenedor */}

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
                Este es un breve texto el que estara destinado a la explicacion sobre nosotros.
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
                Este es un breve texto el que estara destinado a la explicacion sobre nosotros.
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
              <Card.Title>¿A que nos dedicamos ?</Card.Title>
              <Card.Text>
                Este es un breve texto el que estara destinado a la explicacion sobre nosotros.
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
                Este es un breve texto el que estara destinado a la explicacion sobre nosotros.
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

    </>

  )
}

export default Preguntas ;

