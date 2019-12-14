import axios from 'axios';

const login = user => {
    return axios
    .post("user/login", {
        e_mail: user.mail,
        psw: user.pass
    })
    .then(res => {return res.data})
    .catch(err => console.log(err))
}

const register = user => {
    return axios
    .post("user/register", {
        e_mail: user.email,
        psw: user.contraseña,
        id_role: 2
    })
    .then(res => {return res.data})
    .catch(err => console.log(err))
}

const getEMails = () => {
    return axios
    .get("user/list_emails")
    .then(res => {return res.data.results})
    .catch(err => console.log(err))
}

export {login, register,getEMails};