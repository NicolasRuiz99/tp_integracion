import axios from 'axios';
import emailjs from 'emailjs-com';

const getReservations = async() => {
    return axios
    .get("/reservation/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err.response.data})
}

const getSells = async() => {
    return axios
    .get("/purchase/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err.response.data})
}

const getReviews = async() => {
    return axios
    .get("/review/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err.response.data})
}

const getCoupons = async() => {
    return axios
    .get("/coupon/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err.response.data})
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
    .catch(err => {throw err.response.data})
}

const addCoupon = ({pc, cad_date}) => {
    return axios
    .post("/coupon/add",{
        pc,
        cad_date
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const getChats = () => {
    return axios
    .get("/chat/listall")
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const setActiveProduct = (id,active) => {
    return axios
    .post("/product/setActive",{
        id,
        active
    })
    .then(res => {console.log(res.data);return res.data})
    .catch(err => {throw err.response.data})
}

const getTypes = async() => {
    return axios
    .get("/type/listall")
    .then(res => {
        return res.data.data
    })
    .catch(err => {throw err.response.data})
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
    .then(res => {console.log(res.data);return res.data.id})
    .catch(err => {throw err.response.data})
}


const addColor_Size = ({color,size,stock,prod_id}) => {
    return axios
    .post("/color_size/add",{
        color,
        size,
        stock,
        prod_id
    })
    .then(res => {console.log(res.data);return res.data})
    .catch(err => {throw err.response.data})
}


const modColor_Size = ({id,color,size,stock,prod_id}) => {
    return axios
    .post("/color_size/mod",{
        id,
        color,
        size,
        stock,
        prod_id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const modProduct = ({id,name,dsc,material,genre,brand,type,discount,price}) => {
    return axios
    .post("/product/mod",{
        id,
        name,
        dsc,
        material,
        genre,
        brand,
        type,
        discount,
        price
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const sendTrackCodeEMail = async (user_email,purch_id,track_code) => {
    emailjs.init('user_pFJ31TIc6yCAoC7qDXriN');
    const templateParams = {
        user_email,
        purch_id,
        track_code
    };
     
    emailjs.send('gmail', 'pruebamsj', templateParams)
        .then((response) => {
           return ('SUCCESS!', response.status, response.text);
        })
        .catch ((error) => {
           return ('FAILED...', error);
        });
}

const sendPurchaseEMail = async (user_email,purch_id,state) => {
    emailjs.init('user_pFJ31TIc6yCAoC7qDXriN');
    const templateParams = {
        user_email,
        purch_id,
        state
    };
     
    emailjs.send('gmail', 'purchasemsj', templateParams)
        .then((response) => {
            return ('SUCCESS!', response.status, response.text);
        })
        .catch ((error) => {
            return ('FAILED...', error);
        });
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
    addColor_Size,
    modColor_Size,
    modProduct,
    sendTrackCodeEMail,
    sendPurchaseEMail
};