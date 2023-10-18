

import React, { Component } from 'react'; 
import '../components/css/donar_fund.css';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import postimg1 from '../assets/postimg1.webp';
import postimg2 from '../assets/postimg2.webp';
import Donarfund from '../components/DonarForm';

function Donar_fund(){
  
  return(
    <div className="App">
    <NavBar />
    <div className="donar_fund">
     
        <div className="Donar_fund_cont">

            
     
            <Donarfund />
             
              

         


          


   

        </div>
          




          


          
      </div>

      <Footer />
    </div>
  );
}

export default Donar_fund

