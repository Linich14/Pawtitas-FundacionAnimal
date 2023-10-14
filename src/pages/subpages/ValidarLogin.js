
/*
Funcion de Javascript que recibe los datos del componente de React Asociado al Login
que valida que el rut este en formato 1111111-1 o 1111111-k y la contraseña tenga
 minusculas,1 mayuscula minimo y un componente de digito, devuelve errores vacios si no encuentra
problemas o errores asociados si los encuntra para mostrarlos en el frontend

*/

function Validar(email,contraseña){
    let error = {}

    const validarcontraseña =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    const validaremail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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