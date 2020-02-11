import axios from 'axios';

const getProducts = async() => {
    return axios
    .get("/product/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

const getProductsAdmin = async() => {
    return axios
    .get("/product/listallAdmin")
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
    .get("/product/listNew")
    .then(res => {
        return res.data.data;
    })
    .catch(err => {throw err})
}

const listHighRatedProducts = () => {
    return axios
    .get("/product/listHighRated")
    .then(res => {
        return res.data.data;
    })
    .catch(err => {throw err})
}

const getImage = (name) => {
    name = encodeURI (name);
    let link = `https://pixabay.com/api/?key=15066963-0c8a54b7403825fa339127ab5&q=${name}&lang=es&per_page=3&category=fashion`;
    return axios
    .get(link)
    .then(res => {
        res = JSON.parse (res.request.response)
        return res.hits[0].webformatURL;
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
    listHighRatedProducts,
    getImage,
    getProductsAdmin
};