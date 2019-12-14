import axios from 'axios';

const login = user => {
    return axios
    .post("user/login", {
        e_mail: user.email,
        psw: user.password
    })
    .then(res => {console.log(res.user_id)})
    .catch(err => console.log(err))
}

const register = user => {
    return axios
    .post("user/register", {
        e_mail: user.email,
        psw: user.contraseña,
        id_role: 2
    })
    .then(res => {console.log(res.user_id)})
    .catch(err => console.log(err))
}


export {login, register};