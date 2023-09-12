import React from 'react'
import NavBar from '../../components/navbar'
import '../../components/css/Login.css'
import Register from './Register'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='Login'>
        <div className='espacionavbar'>
            <NavBar/>
        </div>
        <div className='contenidologin'>
        <div className="Loginbackground" >
            <form className="p-4 p-md-5 " >
                <h2 className='textocentradologin'>¡Bienvenido a Pawtitas!</h2>
                <fieldset>
                    <div className='mb-3'>
                    <label for="floatingInput"><i>Rut:</i></label>
                    <input  placeholder="Ej: 12.345.678-9"  class=""  required/>
                    </div>
                    <div>
                        <label for="floatingPassword"><i>Contraseña:</i></label>
                        <input   placeholder="Contraseña..."  class="" type="password"  required />
                    </div> 

                </fieldset>
                <p>¿Aun no eres un Compañero?... <Link to='/Register'>Registrate</Link></p>
                <hr className="my-4"/>
                <button className="w-100 btn btn-lg btn-danger" type="submit" >Ingresar</button>
            </form>      
        </div>
        </div>
    </div>
    );
  }
  
  export default Login;