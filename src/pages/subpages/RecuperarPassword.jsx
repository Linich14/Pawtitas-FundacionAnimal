import React from 'react'
import NavBar from '../../components/navbar'
import '../../components/css/RecuperarPassword.css'

function RecuperarPassword() {
  return (
    <div className='RecuperarPassword'>
    <div className='espacionavbar'>
        <NavBar/>
    </div>
        <div className='contenidorecuperar'>
        <div className="RecuperarPasswordBackground" >
            <form className="p-4 p-md-5 " >
                <h3 className='textocentradoPassword'>Ingrese su Correo para recuperar contraseña...</h3>
                <hr className="my-2"/>
                <fieldset className='recuperarformulario'>
                <div>
                        <label htmlFor="email">Email:</label>
                        <input placeholder="usuario@hotmail.com" type="email" id="email" required/>
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