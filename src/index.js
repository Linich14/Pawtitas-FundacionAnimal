import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Home';
import user from './pages/user'; 
import UserProfile from './pages/UserProfile'; 
import Login from './pages/subpages/Login';
import Register from './pages/subpages/Register';
import Galeria from './pages/galeria';
import Preguntas from './pages/preguntasFrec';

import 'animate.css/animate.min.css'



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
        <Route path='/Preguntas' element={<Preguntas/>}/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


