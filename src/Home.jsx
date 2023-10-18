import React from 'react';
import './Home.css';
import DatosDonacion from './components/datos_donaciones'
import NavBar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import Carousel from './components/react-flicking';
import Bryan_z from './assets/Bryan_z.webp'
import Jorge_s from './assets/Jorge_s.webp'
import Sebastían_m from './assets/Sebastían_m.webp'
import Ignacio_b from './assets/Ignacio_b.webp'
import Agustín_m from './assets/Agustín_m.webp'
import icnon1 from "./assets/icon1.svg"
import icnon2 from "./assets/icon2.svg"
import separador from "./assets/separador.png"





function Home() {

    
  return (
    <div className="App">
      <NavBar />
          <div>
             
          <section id="seccion1hm" className="seccionhm" >
         
        <div className="fondohm img1hm">
          
        </div>

        
        <h2 className='titulo_sec1hm'>Fundacion Pawtitas</h2>
        
        <div className="cont_sec1hm">
        
            <div className="texto_sec1hm">
                <p>  Patitas es una fundación sin fines de lucro que tiene como objetivo principal ayudar a los animales que se encuentran en situación de calle.
            Esta fundación tiene origen en agosto del 2023 al plantear la problemática de que es lo que pasa con aquellos animales que llevan condiciones
            de vida deplorables y que la mayoría no tienen que comer.  Esto se vuelve más grave aún al saber que en una encuesta realizada en el año 2021
            señala que más del 70% de la población animal vive sin tener un dueño. Esto podría no ser un problema para los animales que viven en su hábitat natural, sin embargo para los animales domésticos como los perros y los gatos, puede poner en riesgo su salud e incluso la de los humanos, debido a que estos animales sin tener otra opción, buscan comida en en lugares insalubres, esto conlleva a que puedan enfermarse y posteriormente pueden llegar a contagiarnos a nosotros.
</p>

 

            </div>
    
            <div className="carrusel">
            <h1 id='titulo_carrusel'>Animales rescatados</h1>
            <br />
                <Carousel/>
    
            </div>
        </div>



    </section>




    <section id="seccion2hm" className="seccionhm">
     
        <h2 className='titulo_sec2hm'>Como Ayudar </h2>
        <p className='parrafo_sc4hm'>        
</p>

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
    <div className="separador"><img src={separador} alt="" /></div>

    <section  id="seccion3hm" className="seccionhm">
                <div className="textosc3hm">
                <h2 >Nuestras donaciones</h2>
                <p className='parrafosc3hm'>Tu donación permite que sigamos rescatando y rehabilitando a animales heridos y abandonados.
</p>
                </div>
                <div className="Donaciones_hm">
                <DatosDonacion />

                </div>



    </section>






    <section id="seccion4hm" className="seccionhm">

        <div className="fondohm2">
        <h2>Nuestro equipo</h2>
        <p id='parrafo_sc4hm'>Contamos con un personal capacitado y dedicado que trabaja incansablemente para brindar cuidado y amor a los animales en situación de vulnerabilidad. Nuestra pasión es proporcionar un refugio seguro, atención médica y el cariño que merecen. Juntos, estamos construyendo un mundo más compasivo para nuestros amigos peludos</p>


<div className="cardhmshm">

    <div className="cardhm">
        <div className="textos"> 
            <img src={Bryan_z} className='imgc' alt=""/>
            <p>Bryan Zapata</p>
        </div>
    </div>    
    
    
    <div className="cardhm">
        <div className="textos">
            <img src={Jorge_s} className='imgc' alt=""/>
            <p>Jorge Soto</p>
        </div>
    </div>   

    <div className="cardhm">
        <div className="textos">
            <img src={Sebastían_m} className='imgc' alt=""/>
            <p>Sebastián Muñoz</p>
        </div>
    </div>   

    <div className="cardhm">
        <div className="textos">
            <img src={Ignacio_b} className='imgc' alt=""/>
            <p>Ignacio Bustos</p>
        </div>
    </div>

    <div className="cardhm">
        <div className="textos">
            <img src={Agustín_m} className='imgc' alt=""/>
            <p>Agustín Monsalve</p>
        </div>
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
