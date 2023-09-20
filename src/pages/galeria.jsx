import React from 'react'
import NavBar from '../components/navbar'
import '../components/css/Galeria.css'
import Footer from '../components/Footer' 

import Cards from "../components/Cards";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


export default function Galeria() {
  return (
    <>
    <div className='container galeriabackground col-md-10 mx-auto col-lg-12'>
    <NavBar ></NavBar>

    <div className='flex caja_invisible '></div>

    <div className="App d-flex justify-content-center align-items-center h-100" >
      <Cards />
    </div>

    
    </div>
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
        
    <Footer></Footer>
    </>
  )
}
 