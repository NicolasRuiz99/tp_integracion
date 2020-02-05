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

const getCoupons = async() => {
    return axios
    .get("/coupon/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const capitalize = (cadena) => {
    return (cadena.charAt(0).toUpperCase() + cadena.slice(1));
}


const modCoupon = ({id,pc,cad_date,used}) => {
    return axios
    .post("/coupon/mod",{
        id,
        pc,
        cad_date,
        used,
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

export {
    getReservations,
    capitalize,
    getSells,
    getReviews,
    getCoupons,
    modCoupon
};