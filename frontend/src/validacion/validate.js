const LETRAS = "abcdefghyjklmnñopqrstuvwxyzABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ";
const SIMBOLOS = ".°',_{}´`*-!?¿%&$#¡<>[]^~¨+/|¬@:;=";
const NUMEROS = "0123456789";
//Funciones de ayuda
const hayLetra = (cad) => {
    for(let i=0; i < cad.length; i++){
        if (LETRAS.indexOf(cad.charAt(i),0)!=-1 || SIMBOLOS.indexOf(cad.charAt(i),0)!=-1 ){
           return true;
        }
    }
    return false;
}
const hayLetra2 = (cad) => {
    for(let i=0; i < cad.length; i++){
        if (LETRAS.indexOf(cad.charAt(i),0)!=-1){
           return true;
        }
    }
    return false;
}
const hayNumero = (cad) => {
    for(let i=0; i < cad.length; i++){
        if (NUMEROS.indexOf(cad.charAt(i),0)!=-1){
           return true;
        }
    }
    return false;
}
const haySimbolo = (cad) => {
    for(let i=0; i < cad.length; i++){
        if (SIMBOLOS.indexOf(cad.charAt(i),0)!=-1){
           return true;
        }
    }
    return false;
}
const distintos = (x,y) => x !== y;
const patronEmail = (e) => !(/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(e));
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
const isPsw = (psw) => !(/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/.test(psw));
const isZip = (zip) => !(/^\d{4}$/.test(zip));

//Validaciones del customer
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
    else if (isPsw(psw1) || psw1.length < 8) {
        errors.incorrect = "La contraseña debe tener al menos 8 dígitos y estar compuesta por un número y una letra mayúscula";
    }
    else if (distintos(psw1, psw2)) {
        errors.diferente = "Ambas contraseñas deben coincidir";
    }
    return errors;
}

const validarCustomer = (name, surname, tel, dni) => {
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

//Validacion del login
const validarLogin = (mail, psw) => {
    const errors = {};
    if (obligatorio(mail) || obligatorio(psw)){
        errors.obligatorio = "Todos los campos son obligatorios";
    }
    return errors;
}

//Validacion del carro
const validarCarrito = (name, surname, address, dni, zip, province) => {
    name = name.toLowerCase();
    surname = surname.toLowerCase();
    const errors = {};
    if (obligatorio(name) || obligatorio(surname) || obligatorio(zip) || obligatorio(address) || obligatorio(dni) || obligatorio(province) ) {
        errors.obligatorio = "Todos los campos son obligatorios";
    }
    else if (!hayNumero(address) || !hayLetra2(address)|| haySimbolo(address) ) {
        errors.address = "Domicilio inválido";
    }
    else if (isNombre(name)){
        errors.name = "El nombre debe ser válido (15 carácteres máximo y 3 mínimo, sin números)";
    }
    else if (isNombre(surname)){        
        errors.surname = "El apellido debe ser válido (15 carácteres máximo y 3 mínimo, sin números)";
    }
    else if (isDni(dni)) {
        errors.dni = "El dni debe ser válido (8 carácteres máximo, sin letras)";
    }
    else if (isZip(zip)) {
        errors.zip = "El código postal debe estar compuesto por 4 dígitos, sin letras";
    }
    
    return errors;
}

export {validarEmail, validarPsw, validarCustomer, validarLogin, validarCarrito};



