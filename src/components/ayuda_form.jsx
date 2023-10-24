import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {collection, addDoc} from "@firebase/firestore";
import { db } from '../firebase';

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
            value={this.state.Animal_Imagen}
            onChange={this.actualizar}
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