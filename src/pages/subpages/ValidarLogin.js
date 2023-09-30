function Validar(rut,contraseña){
    let error = {}
    const validarrut =  /^[0-9]+-[0-9kK]{1}$/;
    const validarcontraseña =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    

    if(rut === ""){
        error.rut = "El rut esta Vacio..."
    }
    else if(!validarrut.test(rut)){
        error.rut = "El rut ingresado no es valido..."
    }else{
        error.rut = ""
    }

    if(contraseña === ""){
        error.contraseña = "No ha ingresado contraseña..."
    }
    else if(!validarcontraseña.test(contraseña)){
        error.contraseña = "Contraseña Incorrecta"
    }else{
        error.contraseña = ""
    }

    return error;
}

export default Validar