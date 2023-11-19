import React, { useState } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import "boxicons";
import PerroLogo from "../assets/perrologoV1.png";
import Dwayne from "../assets/dwayne.jpg";
import { UserAuth } from "./Autenticacion";

function Navbar() {
  const { user, CerrarSesion} = UserAuth();

  const [isLoggedIn, setLoggedIn] = useState(false);//setLoggeIn se usa para cambiar el estado
  //Funcion para Iniciar sesion
  const manejoIniciarSesion = () => {
    setLoggedIn(true);
  };
  //Funcion para Cerrar sesion
  const manejoCerrarSesion = async () => {
    setLoggedIn(false);
    CerrarSesion(); //aqui llame al cerrar sesion que esta en el navbar
  };


  //Estado para controlar el menu de usuario si esta abierto o cerrado
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  //Funcion para alternar el estado del menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);//cambia el valor de isMenuOpen (abierto/cerrado)
  };

  return (
    <>
      <NavContainer>
        <header className="navscroll">
          <nav className="nav">
            <Link to="/NuestrosAnimales">
              Adoptar
            </Link>

            <Link to="/Ayuda">
              Ayuda
            </Link>

            <Link to="/Preguntas">
              Preguntas
            </Link>

            <Link to="/">
              <img src={PerroLogo} alt="Logo de la fundacion" />
            </Link>

            <Link to="/Galeria">
              Galeria
            </Link>

            <Link to="/Donar">
              Donar
            </Link>

          <div className="UserRL" onClick={toggleMenu}>
            { user && 
              // Usuario Logeado
              <>
                <img
                  src={Dwayne}
                  alt="Imagen de Usuario"
                />
                {isMenuOpen && (
                  <UserMenu>
                    <ul>
                      <li><Link to='/Perfil' className="buttonColor">Mi Perfil</Link></li>
                      <li onClick={manejoCerrarSesion}>
                         <button>Cerrar Sesión</button></li>
                    </ul>
                  </UserMenu>
                )}
              </>
            }
            {
              !user &&
              // Usuario sin logear
              <Link to="/Login">
                <box-icon
                  className="iconuser"
                  name="user-circle"
                  size="md"
                  color="#F2E3C9"
                  type="solid"
                  animation="tada-hover"
                ></box-icon>
              </Link>
            }
          </div>

          </nav>
        </header>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  header {
    position:fixed;
    top:0;
    left:0;
    right:0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 0 1.2rem 0;
    background-color: #ef4b4b;
    z-index: 10; 
  }
  header nav {
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      text-decoration: none;
      padding-inline: 1rem;
      color: #f2e3c9;
      max-width:100px;
      min-width:99px;
      display:flex;
      align-items:center;
      justify-content:center;
      img {
        width: 80px;
        border-radius: 50%;
      }
      img:hover {
        background-color: #f2e3c9;
      }
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .UserRL{
    max-width:100px;
    min-width:99px;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
      border-radius:50%;
      max-width:60px;
      max-height:60px;

      min-width:59px;
      min-height:59px;
    }
  }

`;

const UserMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 175px;
  background-color: white;
  border-radius: 4px;
  .buttonColor{
    color:black;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style:none;
    padding: 10px;
    cursor: pointer;
    a{
      color:black;
    }
    button{
      border:none;
      color:black;
    }
  }
;`