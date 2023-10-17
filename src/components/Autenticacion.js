import { createContext, useContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword,  signInWithEmailAndPassword,  signOut,  onAuthStateChanged,sendPasswordResetEmail} from '@firebase/auth';
import { auth,db } from '../firebase';
import {  doc, setDoc, getDoc } from "@firebase/firestore";
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
    const IniciarSesion = async (email, password) => {
      try {
        // Inicia sesión con la función de Firebase
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "Usuarios", userCredential.user.uid);
        const userDoc = await getDoc(userRef);
    
        if (userDoc.exists()) {
          // Obtiene los datos del usuario desde la base de datos
          const userData = userDoc.data();
    
          // Almacena los datos del usuario en el estado
          setUsuario({
            uid: userCredential.user.uid,
            email: userData.email,
            nombre: userData.Nombre,
            apellidos: userData.Apellidos,
            rut: userData.Rut,
            imagen: userData.Imagen
            // ...otros datos que quieras almacenar
          });
    
          alert("Bienvenido.");
          navigate('/');
        } else {
          // El documento del usuario no existe en la base de datos
          console.error("Error: No se encontraron datos del usuario en la base de datos.");
        }
      } catch (error) {
        alert("Correo o contraseña Incorrecta...")
      }
    };

   /*Funcion que maneja cerrar sesion de usuario */
  const CerrarSesion = () => {
     //cierra sesion con la funcion de firebase pasandole el auth
      return signOut(auth)
  }

  //me falta comentar esta
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // El usuario está autenticado, puedes acceder a currentUser para obtener los datos del usuario
        setUsuario(currentUser);
      } else {
        // No hay usuario autenticado
        setUsuario(null);
      }
    });
  
    return () => {
      // Asegúrate de desuscribirte cuando el componente se desmonte
      unsubscribe();
    };
  }, []);
  
  /*Funcion que maneja el reset de contraseña de usuario */
const ReiniciarContraseña = (email)=>{

    
    sendPasswordResetEmail(auth,email).then((result)=>{
        alert("Revisa tu Bandeja de Entrada en el Correo asociado")
    }).catch((err)=>{
        alert("Ha ocurrido un error")
    })
}


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