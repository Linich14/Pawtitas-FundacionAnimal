import { createContext, useContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword,  signInWithEmailAndPassword,  signOut,  onAuthStateChanged,} from '@firebase/auth';
import { auth,db } from '../firebase';
import {  doc, setDoc } from "@firebase/firestore";
import {useNavigate} from 'react-router-dom'
const AutentificadorUsuario = createContext();

export const Autentificador = ({ children }) => {
  const [user, setUsuario] = useState({});
  const navigate = useNavigate(); //Iniciamos una instancia de UseNavigate para redireccionar a otra pagina

  /*Funcion que maneja la creacion de usuario */
  const crearUsuario = (email, password,Nombre,Apellidos,Rut) => {
    //Crea un usuario con la funcion de firebase pasandole el auth y las variables
    createUserWithEmailAndPassword(auth, email, password).then(
        async (result) => {
          let imagen = "Vacia" //creamos un espacio para guardar un link a la imagen  de perfil vacia
          const ref = doc(db, "Usuarios", result.user.uid)//Creamos un nuevo elemento en la bd con id de ID.Usuario de firebase
          const docRef = await setDoc(ref, { Rut,Nombre, Apellidos,email,imagen }) //añadimos las demas propiedades 
          alert("Registrado Exitosamente... Redirigiendo al Perfil.")
          
        })
  };

    /*Funcion que maneja la inicio de usuario */
   const IniciarSesion = (email, password) =>  {
    //inicia sesion con la funcion de firebase pasandole el auth y las variables
    signInWithEmailAndPassword(auth, email, password)
    alert("Has Iniciado Sesion.")
    navigate('/Perfil') //Una ves hecho el login nos redirige al home
    
    
    
   }

   /*Funcion que maneja cerrar sesion de usuario */
  const CerrarSesion = () => {
     //cierra sesion con la funcion de firebase pasandole el auth
      return signOut(auth)
  }

  //me falta comentar esta
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsuario(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  /*
  Retorna un < > que puede recibir parametros de manejo de sesion , para asi confirmar el estado del usuario
  e iniciar sesion o cerrar sesion
  */
  return (
    <AutentificadorUsuario.Provider value={{ crearUsuario, user, CerrarSesion, IniciarSesion }}>
      {children}
    </AutentificadorUsuario.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AutentificadorUsuario);
};