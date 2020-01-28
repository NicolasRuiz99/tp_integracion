import axios from 'axios';

const getProducts = async() => {
    return axios
    .get("/product/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const getProductInfo = async(id) => {
    return axios
    .post("/product/get",{
        id
    })
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const getProductColor_size = async(id) => {
    return axios
    .post("/product/getColor_size",{
        id
    })
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const getProductReview = async(id) => {
    return axios
    .post("/product/getReview",{
        id
    })
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const getTopSellers = async() => {
    return axios
    .get("/product/topsellers")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const listProvinces = async() => {
    return axios
    .get("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => {
        return res.data.provincias
    })
    .catch(err => {throw err})
}

const listRecomendedProducts = (type,id) => {
    return axios
    .post("/product/getRecomended",{
        type,
        id
    })
    .then(res => {
        return res.data.data;
    })
    .catch(err => {throw err})
}

const listNewProducts = () => {
    return axios
    .get("/product/listNew",)
    .then(res => {
        return res.data.data;
    })
    .catch(err => {throw err})
}

const listHighRatedProducts = () => {
    return axios
    .get("/product/listHighRated",)
    .then(res => {
        return res.data.data;
    })
    .catch(err => {throw err})
}



export {
    getProducts,
    getProductInfo,
    getProductColor_size,
    getProductReview,
    getTopSellers,
    listProvinces,
    listRecomendedProducts,
    listNewProducts,
    listHighRatedProducts

};