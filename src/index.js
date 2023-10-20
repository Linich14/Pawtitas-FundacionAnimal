import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Home';
 
import UserProfile from './pages/UserProfile'; 
import Login from './pages/subpages/Login';
import Register from './pages/subpages/Register';
import Postular from './pages/postular'

import Galeria from './pages/galeria';
import FAQ from './pages/preguntasFrec';
import Adopcion from './pages/adopcion'
import RecuperarPassword from './pages/subpages/RecuperarPassword';
import Donar from './pages/Donar'
import Donar_Fundacion from './pages/Donar_Fundacion'
import Adopform from './pages/form_adop'
import FormularioAyuda from './pages/form_ayuda'
import { Autentificador } from './components/Autenticacion';
import RutaProtegida from './components/ProteccionRutas';

// ...

/*

<Route path="/Galeria" element={ <RutaProtegida>    <Galeria />    </RutaProtegida>    } />
es un ejemplo de ruta protegida para que un no-usuario no pueda acceder
deben añadir el <RutaProtegida> <AquivalapaginaSegura> </RutaProtegida>  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

*/


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render (
    <BrowserRouter>
    <Autentificador>
      <Routes>

      <Route path="/" element={<Home />} />
        
        <Route path="/Perfil" element={ <RutaProtegida><UserProfile /> </RutaProtegida>  } />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/Galeria" element={<Galeria /> } />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/RecuperarPassword' element={<RecuperarPassword/>}/>
        <Route path='/Preguntas' element={<FAQ/>}/>
        <Route path='/NuestrosAnimales' element={<Adopcion/>}/>
        <Route path='/Donar' element={<Donar/>}/>
        <Route path='/Ayuda' element={<Postular/>}/>
        <Route path='/Form_adop' element={<Adopform/>}/>
        <Route path='/Form_ayuda' element={<FormularioAyuda/>}/>
        <Route path='/Donar_Fundacion' element={<Donar_Fundacion/>}/>

      </Routes>
      </Autentificador>
    </BrowserRouter>
  );




