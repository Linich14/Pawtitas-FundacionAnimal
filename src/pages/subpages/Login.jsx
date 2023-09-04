import React from 'react'
import NavBar from '../../components/navbar'
import '../../components/css/Login.css'


function Login() {
    return (
    <>
    
    <div className='container loginbackground col-md-10 mx-auto col-lg-12'>
        <NavBar ></NavBar>
        <div className='flex caja_invisible '></div>
        <div className="" >
            <form className="p-4 p-md-5  formbackground" >
                <h2>¡Bienvenido a Pawtitas!</h2>
                <div className="form-floating mb-3">
                    <label for="floatingInput"><i>Rut:</i></label>
                    <input  placeholder="12.345.678-9"  class="form-control"  />  
                </div>
                <div className="form-floating mb-3">
                    <label for="floatingPassword"><i>Contraseña</i></label>
                    <input   placeholder="Contraseña..."  class="form-control" type="password"  />
                </div>
                <hr className="my-4"/>
                <button className="w-100 btn btn-lg btn-danger" type="submit" >Ingresar</button>
            </form>      
        </div>

    </div>
        
    </>
    );
  }
  
  export default Login;