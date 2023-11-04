import { createContext, useContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword,  signInWithEmailAndPassword,  signOut,  onAuthStateChanged,sendPasswordResetEmail} from '@firebase/auth';
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
          let permisos = 0
          const ref = doc(db, "Usuarios", result.user.uid)//Creamos un nuevo elemento en la bd con id de ID.Usuario de firebase
          const docRef = await setDoc(ref, { Rut,Nombre, Apellidos,email,imagen,permisos }) //anadimos las demas propiedades 
          alert("Registrado Exitosamente... Redirigiendo al Perfil.")
          
          
        })
  };
    /*Funcion que maneja la inicio de usuario */
   const IniciarSesion = (email, password) =>  {
    //inicia sesion con la funcion de firebase pasandole el auth y las variables
      signInWithEmailAndPassword(auth, email, password)
      .then(
        async(result)=>{
            alert("Bienvenido: ", email)
            navigate('/')
        }
        
      ).catch(
        (err)=>{
          alert("Correo o Contraseña Incorrecta")
        }
      )
    
   }
   /*Funcion que maneja cerrar sesion de usuario */
  const CerrarSesion = () => {
     //cierra sesion con la funcion de firebase pasandole el auth
      return signOut(auth)
  }
  const ReiniciarContraseña = (email)=>{
    sendPasswordResetEmail(auth,email).then((result)=>{
        alert("Revisa tu Bandeja de Entrada en el Correo asociado")
    }).catch((err)=>{
        alert("Ha ocurrido un error")
    })
}
  //Cuando se asigna el usuario con el use state al usuario
  // Cleanup function que  unsubscribe cuando el componente se desmonta
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
    <AutentificadorUsuario.Provider value={{ crearUsuario, user, CerrarSesion, IniciarSesion, ReiniciarContraseña }}>
      {children}
    </AutentificadorUsuario.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AutentificadorUsuario);
};