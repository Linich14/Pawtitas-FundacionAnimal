import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Pag inicio ejemplo</h1>
      <Link to="/user">Profile</Link>
    </div>
  );
}

export default Home;
