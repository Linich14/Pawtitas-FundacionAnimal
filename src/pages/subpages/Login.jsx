import React, { useState } from 'react'
import NavBar from '../../components/navbar'
import '../../components/css/Login.css'
import {Link , useNavigate} from 'react-router-dom'
import Validar from './ValidarLogin'

function Login() {
    const navigate = useNavigate();
    const [Rut, setRut] = useState('')
    const [Contraseña, setContraseña ] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validar(Rut,Contraseña));
        navigate('/')

    }

    return (
        <div className='Login'>
        <div className='espacionavbar'>
            <NavBar/>
        </div>
        <div className='contenidologin'>
        <div className="Loginbackground" >
            <form className="p-4 p-md-5 " onSubmit={handleSubmit} >
                <h2 className='textocentradologin'>¡Bienvenido a Pawtitas!</h2>
                <fieldset className='loginformulario'>
                    <div className='mb-3'>
                        <label htmlFor="floatingInput"><i>Rut:</i></label>
                        <input  placeholder="Ej: 12345678-k"  className="" onChange={e =>setRut(e.target.value)}  name="rut" />
                        {errors.rut && <span className='text-danger'>{errors.rut} </span>}
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