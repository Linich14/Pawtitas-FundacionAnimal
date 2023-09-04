import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import "boxicons";
import PerroLogo from "../assets/perrologoV1.png";

function navbar() {
  return (
    <>
      <NavContainer>
        <header className="navscroll">
          <nav className="nav">
            <a href="#info">Informaciones</a>
            <a href="#Adoptar">Adoptar</a>
            <a href="#Ayuda">Ayuda</a>
            <Link to="/">
              <img src={PerroLogo} alt="Logo de la fundacion" />
            </Link>
            <a href="#Galeria">Galeria</a>
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
        </header>
      </NavContainer>
    </>
  );
}

export default navbar;

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
`;
