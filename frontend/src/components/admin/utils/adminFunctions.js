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
        used
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const addCoupon = ({pc, cad_date}) => {
    return axios
    .post("/coupon/add",{
        pc,
        cad_date
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const getChats = () => {
    return axios
    .get("/chat/listall")
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const setActiveProduct = (id,active) => {
    return axios
    .post("/product/setActive",{
        id,
        active
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const getTypes = async() => {
    return axios
    .get("/type/listall")
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err})
}

const addProduct = ({name,dsc,material,genre,brand,type,discount,price}) => {
    return axios
    .post("/product/add",{
        name,
        dsc,
        material,
        genre,
        brand,
        type,
        discount,
        price
    })
    .then(res => {console.log(res);return res.data.id})
    .catch(err => {throw err})
}


const addColor_Size = ({color,size,stock,prod_id}) => {
    return axios
    .post("/color_size/add",{
        color,
        size,
        stock,
        prod_id
    })
    .then(res => {console.log(res);return res.data})
    .catch(err => {console.log(err);throw err})
}

export {
    getReservations,
    capitalize,
    getSells,
    getReviews,
    getCoupons,
    modCoupon,
    addCoupon,
    getChats,
    getTypes,
    setActiveProduct,
    addProduct,
    addColor_Size
};