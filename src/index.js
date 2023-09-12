import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import user from './pages/user'; 
import UserProfile from './pages/UserProfile'; 
import Login from './pages/subpages/Login';
import Galeria from './pages/galeria';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile {...user} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Galeria" element={<Galeria />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


