import React from 'react';
import Formulario from '../components/adop_form.jsx';





import { BrowserRouter } from 'react-router-dom';






function Home() {
  return (

    <BrowserRouter>
    <div className="App">

        <Formulario/>

        <div className="atrsadop"> 
        <Link to="/">
            <button type="submit" id='atras'>Atrás</button>
          </Link>
        </div>

    </div>
    
    </BrowserRouter>



    
  );
}

export default Home;
