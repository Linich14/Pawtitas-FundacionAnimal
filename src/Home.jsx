import React from 'react';
import './Home.css';
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <body>
          <ul className="navbar">
            <li><a href="">Pagina 1</a></li>
            <li><a href="">Pagina 2</a></li>
            <li><a href="">Pagina 3</a></li>
            <li><a href="">Pagina 4</a></li>
            <li><a href="">Pagina 5</a></li>
          </ul>

          <div id="section1" className="section">
            <div id="fondo"></div>

            <div className="texto1">
              <h1>Fundacion Pawtitas</h1>

              <section className="sec1">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis sit soluta laudantium vero iusto possimus tempora suscipit laboriosam atque ea, cum eum facere eligendi earum sed obcaecati dolore, temporibus excepturi esse. Consectetur quod aperiam, magni delectus nam dolorum animi, hic sit architecto doloremque repudiandae enim dolore. Repellat, est.
                  <br />
                  <br />
                  Voluptas minus impedit dolore ad culpa nisi sunt expedita odit, vel voluptatem aperiam minima ipsam atque sed harum ea voluptatibus? Veritatis, odio laborum impedit rem recusandae perferendis repellendus temporibus quidem molestiae. Quod odit quasi saepe ipsum accusantium illo? Accusantium aut natus alias quo unde, eius deleniti incidunt. Dignissimos voluptas ex commodi.
                </h5>
              </section>

              <Link to="/user">Ir a la página de usuario</Link> {/* Enlace a la página de usuario */}
            </div>
          </div>



        </body>
      </div>
      <Footer />
    </div>
  );
}

export default Home;