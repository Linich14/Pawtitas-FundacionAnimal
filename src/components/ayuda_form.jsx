import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {collection, addDoc} from "@firebase/firestore";
import { db } from '../firebase';
import { auth } from '../firebase'; // Asegúrate de importar 'auth' desde tu archivo de configuración de Firebase
import { v4 } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

class AyudaForm extends Component {
  
  
  constructor(props) {
    super(props);
    // Inicialización del estado del componente con valores predeterminados
    this.state = {

      Ubicacion: '',
     
      estadoanimal: '',
      tipomascota: '',

      Animal_Imagen: '',



    };
  }

  // Método para manejar cambios en los campos de entrada
  actualizar = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }



//funcion que se encarga de obtener los daos del usuario logeado
  Autenticación() {
    // Escucha los cambios en el estado de autenticación
    auth.onAuthStateChanged((user) => {
      if (user) {//si el usuario está autenticado se crean tres constantes que contienen sus datos
        const userEmail = user.email;//email
        const userName = user.displayName;//nombre
        const userId = user.uid;//id



        // Actualiza el estado del componente con la información del usuario
        this.setState({
          datos_usuario: {
            email: userEmail,
            name: userName,
            id: userId,
          },
        });
      } else {
        // El usuario no está autenticado
        console.log("Usuario no autenticado");
      }
    });
  }






//funcion para subir imagenes a la base de datos
  subirImagen = async (e) => {//esta funcion toma un parametro, que va a ser la imagen
    const file = e.target.files[0];//toma el primer archivo seleccionado por el usuario
    const storage = getStorage(); // Obtiene una referencia al almacenamiento de Firebase
    const storageRef = ref(storage, 'Animal_Image/'+ v4() + '/' + file.name); // se crea una referencia al archivo en Firebase Storage
  
    try {
      // se sube el archivo al almacenamiento de Firebase
      const snapshot = await uploadBytes(storageRef, file);
  
      // se obtiene la URL de descarga del archivo
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      // Actualiza el estado del componente con la URL de la imagen
      this.setState({
        Animal_Imagen: downloadURL,
      });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  // Método para manejar el envío del formulario
  manejoenvio = (e) => {
    e.preventDefault();//evita que la pagina se actualice 
    // Registro de los datos del formulario en la consola

    
     const datos = collection(db,"Animales");
    addDoc(datos,this.state) 
    console.log('Datos del formulario:', this.state);


    // Restablecimiento de los campos del formulario a sus valores predeterminados
    this.setState({



      Ubicacion: '',
      
      estadoanimal: '',
      tipomascota: '',
      Animal_Imagen: null,

    });
  }

  render() {
    return (
      <section className="seccion_formulario">
        <div className="cont_formularioadop">
          <h2>Formulario de Ayuda</h2>

          <form onSubmit={this.manejoenvio}>
            <div>

            <br />






          

            <label>Ubicacion:</label>  
              <input
                type="text"
                name="Ubicacion"
                value={this.state.Ubicacion}
                onChange={this.actualizar}
                required
              />

            <br />

            <label htmlFor="imagen">Subir Imagen:</label>
              <input
                type="file"
                id="imagen"
                name="Animal_Imagen"
                accept="image/*"
                onChange={this.subirImagen}                
                required
              />
            <br />

            </div>
            <br />


            <div>
            <label>Tipo de mascota:</label>
              <select
                name="tipomascota"
                value={this.state.tipomascota}
                onChange={this.actualizar}
                required
              > 
                <option value="">...</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>

              </select>


            </div>


            <div>
              <label>Estado de mascota:</label>

              <input
                type="text"
                name="estadoanimal"
                value={this.state.estadoanimal}
                onChange={this.actualizar}
                required
              />

            </div>


            
            


            <br />


            <button id='enviar' type="submit">Enviar Solicitud</button>
            
            <Link to="/ayuda">
              <button type="submit" id='atras'>Atrás</button>
            </Link>      
          </form>
        </div>
      </section>
    );
  }
}

export default AyudaForm;