function Validar(rut,nombre,apellidos,email,contraseña){
    let error = {}
    const validarrut =  /^[0-9]+-[0-9kK]{1}$/;
    const validarcontraseña =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    const validaremail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(rut === ""){
        error.rut = "El rut esta Vacio..."
    }
    else if(!validarrut.test(rut)){
        error.rut = "El rut ingresado no es valido..."
    }else{
        error.rut = ""
    }

    if(nombre === ""){
        error.nombre = "El Nombre esta Vacio..."
    }
    else{
        error.nombre = ""
    }

    if(apellidos === ""){
        error.apellidos = "Los Apellidos estan Vacios..."
        }
    else{
        error.apellidos = ""
    }



    if(email === ""){
        error.email = "El Email esta Vacio..."
    }
    else if(!validaremail.test(email)){
        error.email = "El Email ingresado no es valido..."
    }else{
        error.email = ""
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