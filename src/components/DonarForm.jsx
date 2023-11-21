import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {collection, addDoc} from "@firebase/firestore";
import { db } from '../firebase';
import { v4 } from "uuid";
import './css/donar_fund.css'
class DonarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const {  Cantidad } = this.state;
    const cantidadfin = parseInt(Cantidad);

    if (cantidadfin !== 0) {
      alert('¡Gracias por tu donación!');
    }
    if (cantidadfin < 1000) {
      alert('El monto mínimo son $1000');
    } else {
      const uniqueId = v4(); // Generate a unique UUID
      const datos = collection(db, 'Donaciones');
      addDoc(datos, {
        Id: uniqueId,
        Cantidad: Number(cantidadfin),
      });
    }
  };

  

  render() {
    return (
      <div >
        <h2>Transforma vidas con tu generosidad
</h2> 
<p className='parrafoDnfn'>Con tu apoyo, rescatamos y cuidamos a animales en situaciones críticas.</p>

          <div className='donaciones_fn'>
            <button id='cantidad' type="button" onClick={() => this.Cantidadbn_Df(10000)}> $10.000 </button>
            <button id='cantidad' type="button" onClick={() => this.Cantidadbn_Df(20000 )}> $20.000</button>
            <button  id='cantidad' type="button" onClick={() => this.Cantidadbn_Df(30000 )}> $30.000 </button>
            <div>
            <input
              type="number"
              id="Cantidad-personalizado"
              name="Cantidad"
              value={this.state.Cantidad}
              onChange={this.handleInputChange}
              step="10000"
            />
            </div>

          </div>
          <br />

        <form>


 

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
