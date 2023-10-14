import React, { useState } from 'react'
import '../../components/css/Register.css'
import NavBar from '../../components/navbar'
import Validar from './ValidarRegistro'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../components/Autenticacion';
//Funcion para el Frontend del Registro
function Register() {
    const navigate = useNavigate(); //Iniciamos una instancia de UseNavigate para redireccionar a otra pagina

    //creamos variables con useState para tener una funcion que actualice sus valores
    const [Rut, setRut] = useState('')
    const [Nombre, setNombre] = useState('')
    const [Email, setEmail] = useState('')
    const [Apellidos, setApellidos] = useState('')
    const [Contraseña, setContraseña ] = useState('')
    const [errors, setErrors] = useState({})
    const { crearUsuario } = UserAuth();
      
    
    //Funcion que maneja el evento Submit una ves pulsado el boton registro
    const ManejoSubmit = async (event) => {
        event.preventDefault(); // para que no reciba campos vacios
        setErrors(Validar(Rut,Nombre,Apellidos,Email,Contraseña)); //Mandamos los valores a la funcion validadora de datos
        if(errors.rut === "" && errors.email === "" && errors.contraseña === ""){
            // Si no encuentra errores...
            //Intenta crear un usuario ...
                await crearUsuario(Email,Contraseña,Nombre,Apellidos,Rut)
                navigate('/Perfil')
            }
            
    }




  return (
    <div className='parent'>
        <div className='espacionavbar'>
            <NavBar/>
        </div>
        <div className='contenidoregister'>
        <div className="Registerbackground" >
            
            <form className="form-group p-md-5 " onSubmit={ManejoSubmit} >
            <h2 className='textocentradoregistro'>Registro en Pawtitas</h2>
                <fieldset className='registerformulario'> 
                    <div className=''>
                    <label htmlFor="floatingInput"><i>Rut:</i></label>
                    <input  placeholder="Ej: 12345678-k"  type='' 
                    onChange={e=>setRut(e.target.value)}/>
                    {errors.rut && <span className='text-danger'>{errors.rut} </span>}
                    </div>
                    <div>
                        <label htmlFor="text">Nombre:</label>
                        <input placeholder="Juan" type="text"  
                        onChange={e=>setNombre(e.target.value)}/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre} </span>}
                    </div>
                    <div>
                        <label htmlFor="text">Apellidos:</label>
                        <input placeholder="Perez Rosales" type="text"  
                        onChange={e=>setApellidos(e.target.value)}/>
                        {errors.apellidos && <span className='text-danger'>{errors.apellidos} </span>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input placeholder="usuario@hotmail.com" type="email" id="email"
                        onChange={e=>setEmail(e.target.value)}/>
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div>
                        <label htmlFor="floatingPassword"><i>Contraseña:</i></label>
                        <input   placeholder="Contraseña..."  className="" type="password"  
                        onChange={e=>setContraseña(e.target.value)}/>
                        {errors.contraseña && <span className='text-danger'>{errors.contraseña} </span>}
                    </div> 
                </fieldset>
                <hr className="my-4"/>
                <button className="w-100 btn btn-lg btn-danger" type="submit" >¡Registrarse!</button>
            </form>      
        </div>
        
        </div>
    </div>
  )
}

export default Register