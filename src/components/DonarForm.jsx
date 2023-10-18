import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {collection, addDoc} from "firebase/firestore";
import { db } from '../firebase';
import { format } from 'date-fns';
import './css/donar_fund.css'
class DonarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: '',
      Email: '',
      Cantidad: 0,
    
    };
  }
  
  
  
  

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  };

    




  Cantidadbn_Df = (Cantidad) => {

    this.setState({ Cantidad });
  };

  Continuar = (e) => {
    e.preventDefault();
    const { Nombre, Email, Cantidad } = this.state;
  
    if (Cantidad !== 0) {
      alert('¡Gracias por tu donación!');
    }
    if (Cantidad < 1000) {
      alert('El monto mínimo son $1000');
    } else {
      
      const datos = collection(db, "Donaciones");
      addDoc(datos, {
        Nombre,
        Email,
        Cantidad,
      });
  
      console.log('Nombre:', Nombre);
      console.log('Correo Electrónico:', Email);
      console.log('Cantidad:', Cantidad);
    }
  };
  

  render() {
    return (
      <div >
        <h2>Transforma vidas con tu generosidad
</h2> 
<p className='parrafoDnfn'>Con tu apoyo, rescatamos y cuidamos a animales en situaciones críticas.</p>

          <div className='donaciones_fn'>
            <button id='cantidad' type="button" onClick={() => this.Cantidadbn_Df(10000 )}> $10.000 </button>
            <button id='cantidad' type="button" onClick={() => this.Cantidadbn_Df(20000 )}> $20.000</button>
            <button  id='cantidad' type="button" onClick={() => this.Cantidadbn_Df(30000 )}> $30.000 </button>
            <div>
              <input
                type="number"
                id="Cantidad-personalizado"
                name="Cantidad"
                value={this.state.Cantidad}
                onChange={this.handleInputChange}
              />
            </div>

          </div>
          <br />

        <form>
          <div>
            <label >Nombre:</label>
            <input
              type="text"
              id="Nombre"
              name="Nombre"
              value={this.state.Nombre}
              onChange={this.handleInputChange}
              

            />
          </div>
          <div>
            <label >Correo Electrónico:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={this.state.Email}
              onChange={this.handleInputChange}
              
            />
          </div>
 

          <div className="botones_DF">
          <Link to="/Donar">
                    <button type="submit" id='atras'>Atrás</button>
                  </Link>
                  <button id='continuar_DF' onClick={this.Continuar}>Continuar</button>

          </div>

        </form>
      </div>
    );
  }
}

export default DonarForm;
