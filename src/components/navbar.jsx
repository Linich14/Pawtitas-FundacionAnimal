import React, { useState } from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import "boxicons";
import PerroLogo from "../assets/perrologoV1.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <NavContainer>
        <header className="navscroll">
          <nav className="nav">
            <a href="#info">Informaciones</a>
            <Link to="/Adopcion">
              Adopcion
            </Link>
            <a href="#Ayuda">Ayuda</a>
            <Link to="/">
            <Link to="/Preguntas">
              Preguntas
            </Link>
              <img src={PerroLogo} alt="Logo de la fundacion" />
            </Link>
            <Link to="/Galeria">
              Galeria
            </Link>
            <a href="#Donar">Donar</a>
            <a href="#Comentario">Comentario</a>
          </nav>
          <div className="UserRL">
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
          </div>
          <div className="PruebaMenu">
            <box-icon
              className="iconuser"
              name="user-circle"
              size="md"
              color="#00fff2"
              type="solid"
              animation="tada-hover"
              onClick={toggleMenu}
            ></box-icon>
            {isMenuOpen && (
              <UserMenu>
                <ul>
                  <li><Link to='/user'>Mi Perfil</Link></li>
                  <li><Link to="/">Cerrar Sesión</Link></li>
                </ul>
              </UserMenu>
            )}
          </div>
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
  }
  header nav {
    padding: 0 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      padding-inline: 1rem;
      color: #f2e3c9;
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
  .PruebaMenu{
    display: block;/* display Block para que apracesca y none para que no se vea*/
  }
`;

const UserMenu = styled.div`
  position: absolute;
  top: 80px; /* Ajusta la posición vertical según tus necesidades */
  right: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
  }
;`