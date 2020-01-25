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

const deleteCustomer = id => {
    return axios
    .post("/user/delete", {
        id
    })
    .then(res => {console.log(res.data); return res.data})
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

const getUserWishlist = user_id => {
    return axios
    .post("/wishlist/get",{
        id_user: user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const getWishlistItem = ({user_id,product_id}) => {
    return axios
    .post("/wishlist/item",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data.data
    
    })
    .catch(err => {throw err})
}

const addWishlistItem = ({user_id,product_id}) => {
    return axios
    .post("/wishlist/add",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data
    
    
    })
    .catch(err => {throw err})
}

const deleteWishlistItem = ({user_id,product_id}) => {
    return axios
    .post("/wishlist/delete",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data
    
    })
    .catch(err => {throw err})
}

const getUserPurchaseItem = ({user_id,product_id}) => {
    return axios
    .post("/purchase/item",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data.data
    
    })
    .catch(err => {throw err})
}

const addReviewItem = ({user_id,prod_id,stars,title,commentary}) => {
    return axios
    .post("/review/add",{
        id_user: user_id,
        id_prod: prod_id,
        stars,
        title,
        commentary
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err})
}

const getPurchaseList = ({user_id}) => {
    return axios
    .post("/purchase/list",{
        id_user: user_id,
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const modPurchase = ({id,price,date,state,id_user,id_coupon}) => {
    return axios
    .post("/purchase/mod",{
        id,
        price,
        date,
        state,
        id_user,
        id_coupon
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err})
}


const getPurchaseInfo = (id) => {
    return axios
    .post("/purchase/getInfo",{
        id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const listPurchaseItems = (id) => {
    return axios
    .post("/purchase/listItems",{
        id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const setPurchaseState = (id,state) => {
    return axios
    .post("/purchase/setState",{
        id,
        state
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err})
}

const listCartItems = (user_id) => {
    return axios
    .post("/cart/listItems",{
        user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const getCartInfo = (user_id) => {
    return axios
    .post("/cart/getInfo",{
        user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const deleteCartItem = (id_color_size,purch_id) => {
    return axios
    .post("/cart/delete",{
        id_color_size,
        id_purchase: purch_id
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err})
}

const addCartItem = (id_color_size,purch_id,stock) => {
    return axios
    .post("/cart/add",{
        id_color_size,
        id_purchase: purch_id,
        stock
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err})
}

const getCoupon = id => {
    return axios
    .post("/coupon/get",{
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const useCoupon = id => {
    return axios
    .post("/coupon/use",{
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const addShipping = ({id,address,zip,name,surname,dni,province}) => {
    return axios
    .post("/shipping/add",{
        id,
        address,
        zip,
        name,
        surname,
        dni,
        province
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const getUserReservationList = user_id => {
    return axios
    .post("/reservation/list",{
        id_user: user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err})
}

const modReservation = ({id,date,stock,id_user,id_color_size,state}) => {
    return axios
    .post("/reservation/mod",{
        id,
        date,
        stock,
        id_user,
        id_color_size,
        state,
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const cancelReservation = id => {
    return axios
    .post("/reservation/cancel",{
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err})
}

const getReservation = id => {
    return axios
    .post("/reservation/get",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err})
}


const addReservation = ({stock,id_user,id_color_size}) => {
    return axios
    .post("/reservation/add",{
        stock,
        id_user,
        id_color_size
    })
    .then(res => {return res.data.result})
    .catch(err => {throw err})
}

const getReservationItem = (id_user,id_color_size) => {
    return axios
    .post("/reservation/item",{
        id_user,
        id_color_size
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err})
}

const payMP = (list,id,coupon) => {
    return axios
    .post("/mercadopago",{
        list,
        id,
        coupon
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err})
}

export {
    login, 
    register,
    getEMails,
    deleteCustomer,
    getCustomerInfo,
    addCustomerInfo,
    modCustomerInfo,
    modUserInfo,
    getUserWishlist,
    getWishlistItem,
    addWishlistItem,
    deleteWishlistItem,
    getUserPurchaseItem,
    addReviewItem,
    getPurchaseList,
    getPurchaseInfo,
    listPurchaseItems,
    listCartItems,
    getCartInfo,
    deleteCartItem,
    addCartItem,
    getCoupon,
    useCoupon,
    addShipping,
    getUserReservationList,
    modReservation,
    getReservation,
    addReservation,
    getReservationItem,
    cancelReservation,
    payMP,
    setPurchaseState,
    modPurchase
};