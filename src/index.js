import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import './index.css';
import Home from './Home';
import Login from './pages/subpages/Login'
import Galeria from './pages/galeria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
    </Routes>
  </BrowserRouter>
);


