const CARACTERES ="abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZ.,{}´`*-!?¿%&$#¡<>[]^~¨+/|¬@:;=";
//Funciones de ayuda
const hayLetra = (cad) => {
    for(let i=0; i < cad.length; i++){
        if (CARACTERES.indexOf(cad.charAt(i),0)!=-1){
           return true;
        }
    }
    return false;
}
const distintos = (x,y) => x !== y;
const patronEmail = (e) => !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(e));
const obligatorio = (valor) => valor == null || valor.length == 0 || /^\s+$/.test(valor);
const isNombre = (valor) => !(/^([a-z ñáéíóú]{3,15})$/i.test(valor));
const isDni = (dni) => {
    if (dni.length != 8) {
        return true;
    }
    if (hayLetra(dni)){
        return true;
    }
    return false;
 }
const isTel = (tel) => {
    if ( tel.length != 9 && tel.length != 10 && tel.length != 12 && tel.length != 11){
        return true;
    }
    if (hayLetra(tel)){
        return true;
    }
    return false;
}
//Validaciones 
const validarEmail = (mail1, mail2) => {
    const errors = {}
    if (obligatorio(mail1) || obligatorio(mail2)){
        errors.obligatorio = "Todos los campos son obligatorios";
    }
    else if (distintos(mail1, mail2)){
        errors.diferente = "Ambos emails deben coincidir";
    }
    //Si el segundo mail no tiene un formato válido, está obligado a coincidir con el primero de todas formas
    else if ( patronEmail(mail1) ) {
        errors.formato = "El email debe tener un formato válido";
    }
    return errors;
};

const validarPsw = (psw1, psw2) => {
    const errors = {};
    if (obligatorio(psw2) || obligatorio(psw2)) {
        errors.obligatorio = "Todos los campos son obligatorios";
    }
    else if (distintos(psw1, psw2)) {
        errors.diferente = "Ambas contraseñas deben coincidir";
    }
    return errors;
}

const validarCustomer = (name, surname, tel, dni) => {
    name = name.toLowerCase();
    surname = surname.toLowerCase();
    tel = tel.toString();
    console.log("tel:", tel,"dni:", dni, "name:", name);
    const errors = {};
    if (obligatorio(dni)) {
        errors.dni = false;
    }else if (isDni(dni)) {
        errors.dni = "El dni debe ser válido (8 carácteres máximo, sin letras)";
    }
    if (obligatorio(tel)) {
        errors.tel = false;
    }else if (isTel(tel)){
        errors.tel = "El número telefónico debe ser válido";
    }
    if (obligatorio(name)) {
        errors.name = false;
    }else if (isNombre(name)){
        errors.name = "El nombre debe ser válido (15 carácteres máximo y 3 mínimo, sin números)";
    }
    if (obligatorio(surname)) {
        errors.surname = false;
    }else if (isNombre(surname)){        
        errors.surname = "El apellido debe ser válido (15 carácteres máximo y 3 mínimo, sin números)";
    }
    return errors;
}


export {validarEmail, validarPsw, validarCustomer};