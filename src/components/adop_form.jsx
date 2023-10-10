import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdoptionForm extends Component {
  constructor(props) {
    super(props);
    // Inicialización del estado del componente con valores predeterminados
    this.state = {
      name: '',
      email: '',
      tipomascota: 'Perro',
      message: '',
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
    console.log('Datos del formulario:', this.state);

    // Restablecimiento de los campos del formulario a sus valores predeterminados
    this.setState({
      name: '',        // Restablece el campo de nombre a una cadena vacía
      email: '',       // Restablece el campo de correo electrónico a una cadena vacía
      tipomascota: 'Perro', // Restablece el campo de tipo de mascota a 'Perro'
      message: '',     // Restablece el campo de mensaje adicional a una cadena vacía

    });
  }

  render() {
    return (
      <section className="seccion_formulario">
        <div className="cont_formulario">
          <h2>Formulario de Adopción</h2>
          <br />
          <br />
          <form onSubmit={this.manejoenvio}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.actualizar}
                required
              />
            </div>
            <br />
            <br />
            <div>
              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.actualizar}
                required
              />
            </div>
            <br />
            <br />
            <div>
              <label>Tipo de Mascota:</label>
              <select
                name="tipomascota"
                value={this.state.tipomascota}
                onChange={this.actualizar}
              >
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <br />
            <br />
            <div>
              <label>Mensaje Adicional:</label>
              <textarea
                name="message"
                value={this.state.message}
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
