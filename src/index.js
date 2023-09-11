import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import user from './user'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={<UserProfile {...user} />} 
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
