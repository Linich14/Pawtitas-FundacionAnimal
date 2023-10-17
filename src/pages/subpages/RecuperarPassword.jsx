import React ,{useState}from 'react'
import NavBar from '../../components/navbar'
import '../../components/css/RecuperarPassword.css'
import { UserAuth } from '../../components/Autenticacion'
import Validar from './ValidarLogin'

function RecuperarPassword() {
  //creamos variables y sus funciones que la actualizaran
  const [Email, setEmail] = useState('') 
  const [errors, setErrors] = useState({})//{} para que reciba mas de un parametro errors{error1,error2}
  const { ReiniciarContraseña } = UserAuth(); //llamamos una instancia de reiniciarcontraseña desde UserAuth
  const ManejoSubmit = async (event) => {
    event.preventDefault(); // para que no reciba campos vacios
    setErrors(Validar(Email)); //Mandamos los valores a la funcion validadora de datos
    if(errors.email === ""){
          //si no hay errores...
            await ReiniciarContraseña(Email)
            
    }
    
}
  return (
    <div className='RecuperarPassword'>
    <div className='espacionavbar'>
        <NavBar/>
    </div>
        <div className='contenidorecuperar'>
        <div className="RecuperarPasswordBackground" >
            <form className="p-4 p-md-5 " onSubmit={ManejoSubmit} >
                <h3 className='textocentradoPassword'>Ingrese su Correo para recuperar contraseña...</h3>
                <hr className="my-2"/>
                <fieldset className='recuperarformulario'>
                <div>
                        <label htmlFor="floatingInput"><i>Email:</i></label>
                        <input  placeholder="Ej: usuario@pawtitas.cl"  className="" onChange={e =>setEmail(e.target.value)} type='email' name="email" />
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                </div>

                </fieldset>
                
                <hr className="my-2"/>
                <button className="w-100 btn btn-lg btn-danger" type="submit" >Enviar Solicitud</button>
            </form>      
        </div>
        </div>
    </div>
  )
}

export default RecuperarPassword