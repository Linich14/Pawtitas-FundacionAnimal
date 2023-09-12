import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Home';
import user from './pages/user'; 
import UserProfile from './pages/UserProfile'; 
import Login from './pages/subpages/Login';
import Register from './pages/subpages/Register';
import Galeria from './pages/galeria';



// ...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile {...user} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


