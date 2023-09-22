import React, { useState } from 'react'
import '../../components/css/Register.css'
import NavBar from '../../components/navbar'


function Register() {
    const [Rut, setRut] = useState('')
    const [Nombre, setNombre] = useState('')
    const [Email, setEmail] = useState('')
    const [Apellidos, setApellidos] = useState('')
    const [Contraseña, setContraseña ] = useState('')
    const [ContraseñaRepite, getContraseña ] = useState('')
    function handleSubmit(event){
        if(Contraseña!=ContraseñaRepite){
            console.log("Error")
        }
        event.preventDefault();
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
                    <label for="floatingInput"><i>Rut:</i></label>
                    <input  placeholder="Ej: 12.345.678-9"  type='' required
                    onChange={e=>setRut(e.target.value)}/>
                    </div>
                    <div>
                        <label for="text">Nombre:</label>
                        <input placeholder="Juan" type="text"  required
                        onChange={e=>setNombre(e.target.value)}/>
                    </div>
                    <div>
                        <label for="text">Apellidos:</label>
                        <input placeholder="Perez Rosales"type="text"  required
                        onChange={e=>setApellidos(e.target.value)}/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input placeholder="usuario@hotmail.com" type="email" id="email" required
                        onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label for="floatingPassword"><i>Contraseña:</i></label>
                        <input   placeholder="Contraseña..."  class="" type="password"  required 
                        onChange={e=>setContraseña(e.target.value)}/>
                    </div> 
                    <div>
                        <label for="floatingPassword"><i>Repita Contraseña:</i></label>
                        <input   placeholder=""  class="" type="password" required 
                        onChange={e=>getContraseña(e.target.value)}/>
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