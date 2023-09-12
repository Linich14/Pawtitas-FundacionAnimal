import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/Galeria.css'
import fondo1 from '../assets/fondo1.png'
import Footer from '../components/Footer' 

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


export default function Galeria  () {
  return (
    <>
     <div className='container galeriabackground col-md-10 mx-auto col-lg-12'>
        <NavBar ></NavBar>
     <div className='flex caja_invisible '></div>

        <CardGroup>
      <Card>
        <Card.Img className="img-fluid" variant="top" src={fondo1} />
        <Card.Body>     
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Texto ...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className="img-fluid" variant="top" src={fondo1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Texto ...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className="img-fluid" variant="top" src={fondo1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Texto ...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    
    </div>
        <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button className="btn-danger" >1</Button> <Button className="btn-danger">2</Button> <Button className="btn-danger">3</Button>{' '}
        <Button className="btn-danger">4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button className="btn-danger">5</Button> <Button className="btn-danger">6</Button> <Button className="btn-danger">7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button className="btn-danger">8</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <Footer></Footer>
    </>
  )
}
