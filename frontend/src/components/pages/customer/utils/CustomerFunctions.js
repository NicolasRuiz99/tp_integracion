import axios from 'axios';

const login = user => {
    return axios
    .post("/user/login", {
        e_mail: user.mail,
        psw: user.pass
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const register = user => {
    return axios
    .post("/user/register", {
        e_mail: user.email,
        psw: user.contraseña,
        id_role: 2
    })
    .then(res => {console.log(res.data); return res.data})
    .catch(err => {throw err})
}

const getEMails = () => {
    return axios
    .get("/user/list_emails")
    .then(res => {return res.data.results})
    .catch(err => {throw err})
}

const getCustomerInfo = id => {
    return axios
    .post("/user/getCustomer",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err})
}

const addCustomerInfo = ({dni,name,surname,genre,c_size,shoe_size,phone_no,id_user}) => {
    return axios
    .post("/customer/add",{
        dni,
        name,
        surname,
        genre,
        c_size,
        shoe_size,
        phone_no,
        id_user
    })
    .then(res => {return res.data.results})
    .catch(err => {throw err})
}

const modCustomerInfo = ({id,dni,name,surname,genre,c_size,shoe_size,phone_no}) => {
    return axios
    .post("/customer/mod",{
        id,
        dni,
        name,
        surname,
        genre,
        c_size,
        shoe_size,
        phone_no
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const modUserInfo = ({id,e_mail,psw}) => {
    return axios
    .post("/user/mod",{
        id,
        e_mail,
        psw
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

export {login, register,getEMails,getCustomerInfo,addCustomerInfo,modCustomerInfo,modUserInfo};