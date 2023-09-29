import React from 'react';
import './Home.css';

import NavBar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import Carousel from './components/react-slick';



import Bryan_z from './assets/Bryan_z.png'
import Jorge_s from './assets/Jorge_s.png'
import Sebastían_m from './assets/Sebastían_m.png'
import Ignacio_b from './assets/Ignacio_b.png'
import Agustín_m from './assets/Agustín_m.png'
import icnon1 from "./assets/icon1.png"
import icnon2 from "./assets/icon2.png"






function Home() {
  return (
    <div className="App">
      <NavBar />
          <div>
             
          <section id="seccion1hm" class="seccion" >
         
        <div className="fondo img1">
          
        </div>

        <h2>Fundacion Pawtitas</h2>

        <div className="cont">
            <div className="texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam praesentium architecto earum excepturi nemo omnis rerum, ipsa dolorum soluta quibusdam cupiditate aliquid enim dignissimos officiis. Cumque dolores quidem enim? Dolor fuga nesciunt aperiam praesentium nihil animi autem reprehenderit. Nisi et quae harum aut eum voluptate illo amet aperiam eveniet! Ipsum fugiat aperiam molestiae officiis sapiente perspiciatis ducimus explicabo soluta? Magnam molestiae suscipit itaque in fugit temporibus hic dolor voluptatum, quibusdam nam. Excepturi laboriosam quibusdam odit? Est, mollitia voluptatum vitae quos debitis a maiores cumque molestiae quis in eligendi, nemo aperiam exercitationem rem placeat repellendus at. Mollitia optio temporibus earum veniam.

            </div>
    
            <div className="carrusel">

            <Carousel/>
    
            </div>
        </div>



    </section>




    <section id="seccion2hm" class="seccion">
     
        <h2>Como Ayudar </h2>


        <div className="opciones">

            <div className="donar">
                <h3>Donando</h3>
                <img src= {icnon1} alt=""/>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, deleniti.</h4>

            </div >

            <div className= "ayudar">
                <h3>Adoptando</h3>

                <img src={icnon2} alt=""/>
                <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium.</h4>

            </div>

        </div>
            
    </section>




    <section id="seccion3hm" class="seccion">

        



        <h1>Nuestro equipo</h1>

        <div class="cardhmshm">

            <div class="cardhm">
                <div class="textos"> 
                    <img src={Bryan_z} className='imgc' alt=""/>
                    <p>Bryan Zapata</p>
                </div>
            </div>    
            
            
            <div class="cardhm">
                <div class="textos">
                    <img src={Jorge_s} className='imgc' alt=""/>
                    <p>Jorge Soto</p>
                </div>
            </div>   
    
            <div class="cardhm">
                <div class="textos">
                    <img src={Sebastían_m} className='imgc' alt=""/>
                    <p>Sebastián Muñoz</p>
                </div>
            </div>   
    
            <div class="cardhm">
                <div class="textos">
                    <img src={Ignacio_b} className='imgc' alt=""/>
                    <p>Ignacio Bustos</p>
                </div>
            </div>
    
            <div class="cardhm">
                <div class="textos">
                    <img src={Agustín_m} className='imgc' alt=""/>
                    <p>Agustín Monsalve</p>
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
