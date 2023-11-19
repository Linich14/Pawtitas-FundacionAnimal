import React from 'react'
import styled from 'styled-components'
import 'boxicons';

function Footer() {
  return (
    <>
        <FooterContainer>
          <footer>
            <div className='info'>
              <div className='contacto'>
                <h3>Contacto</h3>
                <ul>
                  <li><a href="/"><box-icon name='envelope' color='#F2E3C9'animation='tada-hover' ></box-icon>correo@ejemplo.cl</a></li>
                  <li><a href="/"><box-icon name='location-plus' color='#F2E3C9' type='solid' animation='tada-hover' ></box-icon>Ubicacion Random</a></li>
                </ul>
              </div>
              <div className='otros'>
                <h3>Otros apartados</h3>
                <ul>
                  <li><a href="/">Donaciones</a></li>
                  <li><a href="/">Adopta</a></li>
                  <li><a href="/">Preguntas Frecuentes</a></li>
                </ul>                
              </div>
            </div>
            <div className='copyright'>
              <p>© Universidad Catolica de Temuco</p>
            </div>
          </footer>
        </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  *{
    margin:0px;
    padding:0px;
    color:#F2E3C9;
  }
  footer{
    background-color:#EF4B4B;
    color:#F2E3C9;
    padding:20px 0;
  }


  .info{
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:20px;
  }

  .info div{
    padding-inline:10%;
  }

  .info div h3{
    text-decoration:underline;
  }

  .info div ul{
    list-style: none;
  }

  .info div ul li a{
    display:flex;
    align-items:center;
    text-decoration:none;
  }

  .copyright{
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:10px;
  }

  .info div ul a:hover{
    text-decoration:underline;
  }

  
`