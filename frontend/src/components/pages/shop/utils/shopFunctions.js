import axios from 'axios';

const getProducts = () => {
    return axios
    .get("/product/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const getProductInfo = (id) => {
    return axios
    .post("/product/get",{
        id
    })
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const getProductColor_size = (id) => {
    return axios
    .post("/product/getColor_size",{
        id
    })
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const getProductReview = (id) => {
    return axios
    .post("/product/getReview",{
        id
    })
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

export {getProducts,getProductInfo,getProductColor_size,getProductReview};