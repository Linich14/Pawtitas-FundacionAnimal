import React, { useState } from 'react'
import NavBar from '../../components/navbar'
import '../../components/css/Login.css'
import {Link , useNavigate} from 'react-router-dom'
import Validar from './ValidarLogin'
import { UserAuth } from '../../components/Autenticacion'



//Funcion para el Frontend del Login
function Login() {

    //creamos variables con useState para tener una funcion que actualice sus valores
    const [Email, setEmail] = useState('') 
    const [Contraseña, setContraseña ] = useState('')
    const [errors, setErrors] = useState({})
    const { IniciarSesion } = UserAuth();
    //Funcion que maneja el evento Submit una ves pulsado el boton login
    const ManejoSubmit = async (event) => {
        event.preventDefault(); // para que no reciba campos vacios
        setErrors(Validar(Email,Contraseña)); //Mandamos los valores a la funcion validadora de datos
        if(errors.email === "" && errors.contraseña === ""){
                await IniciarSesion(Email, Contraseña)
                

            
            
        }
        
        

    }

    return (
        <div className='Login'>
        <div className='espacionavbar'>
            <NavBar/>
        </div>
        <div className='contenidologin'>
        <div className="Loginbackground" >
            <form className="p-4 p-md-5 " onSubmit={ManejoSubmit} >
                <h2 className='textocentradologin'>¡Bienvenido a Pawtitas!</h2>
                <fieldset className='loginformulario'>
                    <div className='mb-3'>
                        <label htmlFor="floatingInput"><i>Email:</i></label>
                        <input  placeholder="Ej: usuario@pawtitas.cl"  className="" onChange={e =>setEmail(e.target.value)} type='email' name="email" />
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div>
                        <label htmlFor="floatingPassword"><i>Contraseña:</i></label>
                        <input   placeholder="Contraseña..."  className="" onChange={e =>setContraseña(e.target.value)} type="password" name='contraseña' />
                        {errors.contraseña && <span className='text-danger'>{errors.contraseña} </span>}
                    </div> 

                </fieldset>
                <p>¿Aun no eres un Compañero?... <Link to='/Register'>Registrate</Link></p>
                <p>¿Olvidaste tu Contraseña?... <Link to='/RecuperarPassword'>Recuperar Contraseña</Link></p>
                <hr className="my-4"/>
                <button className="w-100 btn btn-lg btn-danger" type="submit" >Ingresar</button>
            </form>      
        </div>
        </div>
    </div>
    );
  }
  
  export default Login;