import React, { Component } from 'react';
import './css/adop_form.css'

class AdoptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      petType: 'Perro',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Datos del formulario:', this.state);
  
    this.setState({
      name: '',
      email: '',
      petType: 'Perro',
      message: '',
    });
  }

  render() {
    return (
        <div className="seccionadop">
                  <div className='formadopcont'>
        <h2>Formulario de Adopción</h2>
        <br />
          <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <br />
          <div>
            <label>Tipo de Mascota:</label>
            <select
              name="petType"
              value={this.state.petType}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Enviar Solicitud</button>
        </form>
      </div>
        </div>





    );
  }
}

export default AdoptionForm;
