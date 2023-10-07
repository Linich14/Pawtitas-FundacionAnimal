
/*
Funcion de Javascript que recibe los datos del componente de React Asociado al Login
que valida que el rut este en formato 1111111-1 o 1111111-k y la contraseña tenga
 minusculas,1 mayuscula minimo y un componente de digito, devuelve errores vacios si no encuentra
problemas o errores asociados si los encuntra para mostrarlos en el frontend

*/

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