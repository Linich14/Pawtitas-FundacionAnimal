import React from 'react';
import Formulario from '../components/adop_form.jsx';





import { BrowserRouter } from 'react-router-dom';






function Home() {
  return (

    <BrowserRouter>
    <div className="App">

        <Formulario/>



    </div>
    
    </BrowserRouter>



    
  );
}

export default Home;
