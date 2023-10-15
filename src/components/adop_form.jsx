import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {collection, addDoc} from "firebase/firestore";
import { db } from '../firebase';

class AdoptionForm extends Component {
  
  
  constructor(props) {
    super(props);
    // Inicialización del estado del componente con valores predeterminados
    this.state = {
      animal_datos: '',
      Animal_Edad: '',
      Animal_estado_salud: '',
      Animal_Nombre: '',        
      Animal_Raza: '',
      Animal_sexo: '',
      Animal_tipo: '',
      Animal_Imagen: '',



    };
  }

  // Método para manejar cambios en los campos de entrada
  actualizar = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // Método para manejar el envío del formulario
  manejoenvio = (e) => {
    e.preventDefault();//evita que la pagina se actualice 
    // Registro de los datos del formulario en la consola

    
    const datos = collection(db,"Animales");
    addDoc(datos,this.state)
    console.log('Datos del formulario:', this.state);


    // Restablecimiento de los campos del formulario a sus valores predeterminados
    this.setState({


      animal_datos: '',
      Animal_Edad: '',
      Animal_estado_salud: '',
      Animal_Nombre: '',        
      Animal_Raza: '',
      Animal_sexo: '',
      Animal_tipo: '',
      Animal_Nombre: '',
      Animal_Imagen: '',

    });
  }

  render() {
    return (
      <section className="seccion_formulario">
        <div className="cont_formularioadop">
          <h2>Formulario de Adopción</h2>

          <form onSubmit={this.manejoenvio}>
            <div>
            <label>Edad:</label>

              <input
                type="text"
                name="Animal_Edad"
                value={this.state.Animal_Edad}
                onChange={this.actualizar}
                required
              />
            <br />



            <label>Estado de salud:</label>  
              <input
                type="text"
                name="Animal_estado_salud"
                value={this.state.Animal_estado_salud}
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
            value={this.state.Animal_Imagen}
            onChange={this.actualizar}
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
                name="Animal_sexo"
                value={this.state.Animal_sexo}
                onChange={this.actualizar}
              >
                <option value="Perro">Macho</option>
                <option value="Gato">Hembra</option>

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
                name="Animal_tipo"
                value={this.state.Animal_tipo}
                onChange={this.actualizar}
              >
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <br />
            <div>
              <label>Datos de Animal</label>

              <textarea
                name="animal_datos"
                value={this.state.animal_datos}
                onChange={this.actualizar}
              />
            </div>
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

export default AdoptionForm;
