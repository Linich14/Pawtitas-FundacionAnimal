import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from './Autenticacion';

/*
La funcion de este codigo es proteger las subrutas(children), ya que 
si un no-usuario intenta acceder lo redirige al home/index
*/

const RutaProtegida = ({ children }) => {
  const { user } = UserAuth();
    
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default RutaProtegida;