import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Home';
import user from './pages/user'; 
import UserProfile from './pages/UserProfile'; 
import Login from './pages/subpages/Login';
import Register from './pages/subpages/Register';
import Galeria from './pages/galeria';
import FAQ from './pages/preguntasFrec';
import Adopcion from './pages/adopcion'
import RecuperarPassword from './pages/subpages/RecuperarPassword';
import Donar from './pages/Donar'
import Postular from './pages/postular'
// ...




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile {...user} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/RecuperarPassword' element={<RecuperarPassword/>}/>
        <Route path='/Preguntas' element={<FAQ/>}/>
        <Route path='/NuestrosAnimales' element={<Adopcion/>}/>
        <Route path='/Donar' element={<Donar/>}/>
        <Route path='/Ayuda' element={<Postular/>}/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


