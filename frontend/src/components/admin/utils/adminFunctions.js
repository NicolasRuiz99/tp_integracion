import axios from 'axios';

const getReservations = async() => {
    return axios
    .get("/reservation/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const getSells = async() => {
    return axios
    .get("/purchase/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const getReviews = async() => {
    return axios
    .get("/review/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const capitalize = (cadena) => {
    return (cadena.charAt(0).toUpperCase() + cadena.slice(1));
}


export {
    getReservations,
    capitalize,
    getSells,
    getReviews
};