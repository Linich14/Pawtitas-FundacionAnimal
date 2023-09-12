import React from 'react';
import './Home.css';
import React from 'react';
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import { Link } from 'react-router-dom';
import ImageCarousel from './components/ImageCarousel';

function Home() {
  return (
    <div className="App">
      <NavBar />
          <div>
            

          <ul className="navbar">
            <li><a href="/">Pagina 1</a></li>
            <li><a href="/">Pagina 2</a></li>
            <li><a href="/">Pagina 3</a></li>
            <li><a href="/">Pagina 4</a></li>
            <li><a href="/">Pagina 5</a></li>
          </ul>
          <section id="seccion1" class="seccion">

        <h2>Fundacion Pawtitas</h2>

        <div class="cont">
            <div class="texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium architecto earum excepturi nemo omnis rerum, ipsa dolorum soluta quibusdam cupiditate aliquid enim dignissimos officiis. Cumque dolores quidem enim? Dolor fuga nesciunt aperiam praesentium nihil animi autem reprehenderit. Nisi et quae harum aut eum voluptate illo amet aperiam eveniet! Ipsum fugiat aperiam molestiae officiis sapiente perspiciatis ducimus explicabo soluta? Magnam molestiae suscipit itaque in fugit temporibus hic dolor voluptatum, quibusdam nam. Excepturi laboriosam quibusdam odit? Est, mollitia voluptatum vitae quos debitis a maiores cumque molestiae quis in eligendi, nemo aperiam exercitationem rem placeat repellendus at. Mollitia optio temporibus earum veniam.

            </div>
    
            <div class="carrusel">

              <ImageCarousel/>

    
            </div>
        </div>



    </section>




    <section id="seccion2" class="seccion">
        <h2>Como Ayudar </h2>


        <div class="opciones">

            <div class="donar">
                <h3>Donando</h3>
                <img src="./assets/icon _dollar_.png" alt=""/>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, deleniti.</h4>

            </div >

            <div class= "ayudar">
                <h3>Adoptando</h3>
                <img src="./assets/icon _heart_.png" alt=""/>
                <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium.</h4>

            </div>

        </div>
            
    </section>




    <section id="seccion3" class="seccion">


        <h1>nuestro equipo</h1>


        <div class="cards">

            <div class="card">
                <div class="textos"> 
                    <img src="./assets/perrologo3.png" alt=""/>
                    <p>text</p>
                </div>
            </div>    
            
            
            <div class="card">
                <div class="textos">
                    <img src="./assets/perrologo3.png" alt=""/>
                    <p>text</p>
                </div>
            </div>   
    
            <div class="card">
                <div class="textos">
                    <img src="./assets/perrologo3.png" alt=""/>
                    <p>text</p>
                </div>
            </div>   
    
            <div class="card">
                <div class="textos">
                    <img src="./assets/perrologo3.png" alt=""/>
                    <p>text</p>
                </div>
            </div>
    
            <div class="card">
                <div class="textos">
                    <img src="./assets/perrologo3.png" alt=""/>
                    <p>text</p>
                </div>
            </div>   
    
            <div class="card">
                <div class="textos">
                    <img src="./assets/perrologo3.png" alt="" />
                    <p>text</p>
                </div>
            </div>  
        </div>




    
        
       
    </section>

    
    </div>
    <Footer />

    </div>


    
  );
}

export default Home;
