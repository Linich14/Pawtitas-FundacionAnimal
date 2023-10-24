import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "@firebase/firestore";
import { db } from '../firebase';
import { Subirimg } from '../components/Funciones_Formayuda'; // Importa la función Subirimg

class AdoptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Animal_Datos: '',
      Animal_Edad: '',
      Animal_Estado_Salud: '',
      Animal_Nombre: '',
      Animal_Raza: '',
      Animal_Sexo: '',
      Animal_Tipo: '',
      Animal_Imagen: null, 
    };
  }   

  actualizar = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  manejoenvio = (e) => {
    e.preventDefault();//evita que la pagina se actualice 
    // Registro de los datos del formulario en la consola

    
     const datos = collection(db,"Animales");
    addDoc(datos,this.state) 
    console.log('Datos del formulario:', this.state);

    // actualiza los datos a como estaban antes.
    this.setState({
      Animal_Datos: '', 
      Animal_Edad: '',
      unidad:'',
      Animal_Estado_Salud: '',
      Animal_Nombre: '',
      Animal_Raza: '',
      Animal_Sexo: '',
      Animal_Tipo: '',
      Animal_Imagen: null, 
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
              <input
                type="text"
                name="Animal_Estado_Salud"
                value={this.state.Animal_Estado_Salud}
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
