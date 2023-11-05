import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "@firebase/firestore";
import { db, serverTimestamp } from '../firebase';
import { UserAuth } from "../components/Autenticacion";
import { auth } from '../firebase'; // Asegúrate de importar 'auth' desde tu archivo de configuración de Firebase
import { v4 } from "uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const timestamp = serverTimestamp();

class AdoptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Animal_Datos: '',
      Animal_Edad: '',
      unidad:'',
      Animal_Estado_Salud: '',
      Animal_Nombre: '',
      Animal_Raza: '',
      Animal_Sexo: '',
      Animal_Tipo: '',
      Animal_Imagen: 'null',
      Animal_Ingreso: timestamp,
      datos_usuario: '',
    };
  }   
//funcion que se encarga de obtener los daos del usuario logeado
  Autenticación() {
    // Escucha los cambios en el estado de autenticación
    auth.onAuthStateChanged((user) => {
      this.Autenticación();
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

  subirImagen = async (e) => {
    const file = e.target.files[0];//toma el primer archivo seleccionado por el usuario
    const storage = getStorage(); // Obtener una referencia al almacenamiento de Firebase
    const storageRef = ref(storage, 'Animal_Image/'+ v4() + '/' + file.name); // Crear una referencia al archivo en Firebase Storage
  
    try {
      // Subir el archivo al almacenamiento de Firebase
      const snapshot = await uploadBytes(storageRef, file);
  
      // Obtener la URL de descarga del archivo
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      // Actualiza el estado del componente con la URL de la imagen
      this.setState({
        Animal_Imagen: downloadURL,
      });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  
  actualizar = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  
  manejoenvio = (e) => {
    e.preventDefault(); // Evita que la página se actualice
    
    // Concatena la edad y la unidad en una sola cadena
    const edadConUnidad = `${this.state.Animal_Edad} ${this.state.unidad}`;
  
    // Actualiza el estado con la edad concatenada

    // Copia el estado actual a una nueva variable para no modificar el estado original
    const datosFormulario = { ...this.state,
                              Animal_Edad: edadConUnidad,
                              
                            };


  
    const datos = collection(db, "Animales");
    addDoc(datos, datosFormulario);
    console.log('Datos del formulario:', this.state);
  
    // Restaura los datos a como estaban antes.
    this.setState({
      Animal_Datos: '',
      Animal_Edad: '',
      unidad: '',
      Animal_Estado_Salud: '',
      Animal_Nombre: '',
      Animal_Raza: '',
      Animal_Sexo: '',
      Animal_Tipo: '',
      Animal_Imagen: null,
      datos_usuario: '',

    });
  }
  

  render() {
    return (
      <section className="seccion_formulario">
        <div className="cont_formularioadop">
          <h2>Formulario de Adopción</h2>

          <form onSubmit={this.manejoenvio}> {/*cuando se envia el formulario se ejecuta la funcion*/ }
            <div>
              <label>Edad:</label>
              <input
                min="0"
                type="number"
                name="Animal_Edad"
                value={this.state.Animal_Edad}
                onChange={this.actualizar}
                required
              />

            <select
            name="unidad"
            value={this.state.unidad}
            onChange={this.actualizar}
          > 
          <option value="">...</option>
            <option value="meses">meses</option>
            <option value="años">años</option>
          </select>
              <br />

              <label>Estado de salud:</label>
              <select

                name="Animal_Estado_Salud"
                value={this.state.Animal_Estado_Salud}
                onChange={this.actualizar}
                required
              >

              <option value="">...</option>
                <option value="Muy mal">Muy mal</option>
                <option value="Mal">Mal</option>
                <option value="Estable">Estable</option>
                <option value="Bien">Bien</option>
                
              </select>
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

              <label>Nombre:</label>
              <input
                type="text"
                name="Animal_Nombre"
                value={this.state.Animal_Nombre}
                onChange={this.actualizar}
                required
              />
            </div>
            <br />

            <div>
              <label>sexo:</label>
              <select
                name="Animal_Sexo"
                value={this.state.Animal_Sexo}
                onChange={this.actualizar}
                required
              >
                <option value="">...</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </div>

            <div>
              <label>Raza:</label>
              <input
                type="text"
                name="Animal_Raza"
                value={this.state.Animal_Raza}
                onChange={this.actualizar}
                required
              />
            </div>

            <div>
              <label>Tipo de Mascota:</label>
              <select
                name="Animal_Tipo"
                value={this.state.Animal_Tipo}
                onChange={this.actualizar}
              >
                <option value="">...</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <br />
            <div>
              <label>Datos de Animal</label>
              <textarea
                name="Animal_Datos"
                value={this.state.Animal_Datos}
                onChange={this.actualizar}
              />
            </div>
            <button id='enviar' type="submit">Enviar Solicitud</button>

            <Link to="/ayuda">
              <button type="button" id='atras'>Atrás</button>
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default AdoptionForm;
