import React from 'react'
import styled from 'styled-components';
import logoPerro from '../imgs/perrologoV1.png'
import  'boxicons'

function Navbar() {
  return (
    <>
      <NavContainer>
        <header>
          <nav className='nav'>
            <ul>
              <li><a href="#1">Informaciones</a></li>
              <li><a href="#2">Adoptar</a></li>
              <li><a href="#3">Ayuda</a></li>
              <li><a href="#INDEX"><img src={logoPerro} alt="Logo de la fundacion" /></a></li>
              <li><a href="#3">Galeria</a></li>
              <li><a href="#4">Donar</a></li>
              <li><a href="#4">Testimonios</a></li>
            </ul>
          </nav>

          <div className='user'>
            <a href="#Iniciosecion"><box-icon name='user-circle' size='md' color='#F2E3C9' type='solid' animation='tada-hover' ></box-icon></a>
          </div>
        </header>

      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  :root{
    --rojo-principal:#EF4B4B;
    --blanco-crema: #F2E3C9;
  }
  *{
    padding:0px;
    margin:0px;
    background-color:#EF4B4B; 
  }

  header{
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px 0 20px 0;
  }

  a,span{
    color:#F2E3C9;
  }
  .nav {
    padding:0 200px;
  }
  .nav ul{
    list-style: none;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .nav ul li{
    padding-inline:20px;
  }
  .nav ul li a{
    text-decoration:none;
  }

  .nav ul li a:hover{
    text-decoration:underline;
  }


  .nav ul li a img{
    max-width:80px;
    border-radius:50%;
  }
  .nav ul li a img:hover{
    background-color:#F2E3C9;
  }
`