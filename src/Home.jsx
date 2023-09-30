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
             
          <section id="seccion1hm" class="seccionhm" >
         
        <div className="fondohm img1hm">
          
        </div>

        <h2>Fundacion Pawtitas</h2>

        <div className="cont">
            <div className="texto">

            Patitas es una fundación sin fines de lucro que tiene como objetivo principal ayudar a los animales que se encuentran en situación de calle.
Esta fundación tiene origen en agosto del 2023 al plantear la problemática de que es lo que pasa con aquellos animales que llevan condiciones
de vida deplorables y que la mayoría no tienen que comer. Esto se vuelve más grave aún al saber que en una encuesta realizada en el año 2021
señala que más del 70% de la población animal vive sin tener un dueño. Esto podría no ser un problema para los animales que viven en su hábitat natural, sin embargo para los animales domésticos como los perros y los gatos, puede poner en riesgo su salud e incluso la de los humanos, debido a que estos animales sin tener otra opción, buscan comida en en lugares insalubres, esto conlleva a que puedan enfermarse y posteriormente pueden llegar a contagiarnos a nosotros.


            </div>
    
            <div className="carrusel">

            <Carousel/>
    
            </div>
        </div>



    </section>




    <section id="seccion2hm" class="seccionhm">
     
        <h2>Como Ayudar </h2>


        <div className="opciones">

            <div className="donar">
                <h3>Donando</h3>
                <img src= {icnon1} alt=""/>
                <h4>Puedes Donar hacia la fundacion en el apartado de donar</h4>

            </div >

            <div className= "ayudar">
                <h3>Adoptando</h3>

                <img src={icnon2} alt=""/>
                <h4>Hay muchos animales que esperan con ansias un dueño. Adopta!!</h4>

            </div>

        </div>
            
    </section>




    <section id="seccion3hm" class="seccionhm">

        



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
