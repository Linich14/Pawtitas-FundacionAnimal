import React, { useState } from 'react'
import '../../components/css/Register.css'
import NavBar from '../../components/navbar'
import Validar from './ValidarRegistro'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const [Rut, setRut] = useState('')
    const [Nombre, setNombre] = useState('')
    const [Email, setEmail] = useState('')
    const [Apellidos, setApellidos] = useState('')
    const [Contraseña, setContraseña ] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validar(Rut,Nombre,Apellidos,Email,Contraseña));
        if(errors.rut === "" && errors.email === "" && errors.contraseña === ""){
            navigate('/login')
            axios.post('http://localhost:8081/Register', {
                rut: Rut,
                nombre: Nombre,
                apellidos: Apellidos,
                email: Email,
                contraseña: Contraseña
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='parent'>
        <div className='espacionavbar'>
            <NavBar/>
        </div>
        <div className='contenidoregister'>
        <div className="Registerbackground" >
            
            <form className="form-group p-md-5 " onSubmit={handleSubmit} >
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