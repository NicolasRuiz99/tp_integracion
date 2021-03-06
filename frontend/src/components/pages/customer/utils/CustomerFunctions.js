import axios from 'axios';

const login = user => {
    return axios
    .post("/user/login", {
        e_mail: user.mail,
        psw: user.pass
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const login2 = id => {
    return axios
    .post("/user/loginExt", {
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const register = user => {
    return axios
    .post("/user/register", {
        e_mail: user.email,
        psw: user.contraseña,
        id_role: 2
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const register2 = (id,e_mail) => {
    return axios
    .post("/user/registerExt", {
        id,
        e_mail
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const getEMails = () => {
    return axios
    .get("/user/list_emails")
    .then(res => {return res.data.results})
    .catch(err => {throw err.response.data})
}

const getCustomerInfo = id => {
    return axios
    .post("/user/getCustomer",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}

const getUserInfo = id => {
    return axios
    .post("/user/get",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}

const userGetInfo = id => {
    return axios
    .post("/user/getInfo",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}


const deleteCustomer = id => {
    return axios
    .post("/user/delete", {
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
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
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
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
    .catch(err => {throw err.response.data})
}

const modUserInfo = ({id,e_mail,psw}) => {
    return axios
    .post("/user/mod",{
        id,
        e_mail,
        psw
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const getUserWishlist = user_id => {
    return axios
    .post("/wishlist/get",{
        id_user: user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const getWishlistItem = ({user_id,product_id}) => {
    return axios
    .post("/wishlist/item",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data.data
    
    })
    .catch(err => {throw err.response.data})
}

const addWishlistItem = ({user_id,product_id}) => {
    return axios
    .post("/wishlist/add",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data
    
    
    })
    .catch(err => {throw err.response.data})
}

const deleteWishlistItem = ({user_id,product_id}) => {
    return axios
    .post("/wishlist/delete",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data
    
    })
    .catch(err => {throw err.response.data})
}

const getUserPurchaseItem = ({user_id,product_id}) => {
    return axios
    .post("/purchase/item",{
        id_user: user_id,
        id_prod: product_id
    })
    .then(res => {return res.data.data
    
    })
    .catch(err => {throw err.response.data})
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
    .catch(err => {throw err.response.data})
}

const getReview = id => {
    return axios
    .post("/review/get",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}


const modReview = ({stars,title,commentary,id_product,id_user,id}) => {
    return axios
    .post("/review/mod",{
        stars,
        title,
        commentary,
        id_product,
        id_user,
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const deleteReview = id => {
    return axios
    .post("/review/delete", {
        id
    })
    .then(res => { return res.data})
    .catch(err => {throw err.response.data})
}

const listUserReviews = (id) => {
    return axios
    .post("/review/list",{
        id_user: id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const getPurchaseList = ({user_id}) => {
    return axios
    .post("/purchase/list",{
        id_user: user_id,
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const modPurchase = ({id,price,state,id_user,id_coupon}) => {
    return axios
    .post("/purchase/mod",{
        id,
        price,
        state,
        id_user,
        id_coupon
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err.response.data})
}


const getPurchaseInfo = (id) => {
    return axios
    .post("/purchase/getInfo",{
        id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const listPurchaseItems = (id) => {
    return axios
    .post("/purchase/listItems",{
        id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const setPurchaseState = (id,state) => {
    return axios
    .post("/purchase/setState",{
        id,
        state
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err.response.data})
}

const listCartItems = (user_id) => {
    return axios
    .post("/cart/listItems",{
        user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const getCartInfo = (user_id) => {
    return axios
    .post("/cart/getInfo",{
        user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
}

const deleteCartItem = (id_color_size,purch_id) => {
    return axios
    .post("/cart/delete",{
        id_color_size,
        id_purchase: purch_id
    })
    .then(res => {return res.data
    })
    .catch(err => {throw err.response.data})
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
    .catch(err => {throw err.response.data})
}

const getCoupon = id => {
    return axios
    .post("/coupon/get",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}

const useCoupon = id => {
    return axios
    .post("/coupon/use",{
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
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
    .catch(err => {throw err.response.data})
}

const setShippingTrackCode = (id,track_code) => {
    return axios
    .post("/shipping/setTrackCode",{
        id,
        track_code
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const getUserReservationList = user_id => {
    return axios
    .post("/reservation/list",{
        id_user: user_id
    })
    .then(res => {return res.data.data
    })
    .catch(err => {throw err.response.data})
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
    .catch(err => {throw err.response.data})
}

const cancelReservation = id => {
    return axios
    .post("/reservation/cancel",{
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const getReservation = id => {
    return axios
    .post("/reservation/get",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}


const addReservation = ({stock,id_user,id_color_size}) => {
    return axios
    .post("/reservation/add",{
        stock,
        id_user,
        id_color_size
    })
    .then(res => {return res.data.result})
    .catch(err => {throw err.response.data})
}

const getReservationItem = (id_user,id_color_size) => {
    return axios
    .post("/reservation/item",{
        id_user,
        id_color_size
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}

const payMP = (list,id,coupon,cart) => {
    return axios
    .post("/mercadopago",{
        list,
        id,
        coupon,
        cart
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}

const readAllChatMessages = (id,id_user) => {
    return axios
    .post("/chat/readall",{
        id,
        id_user
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

const getChat = (id) => {
    return axios
    .post("/chat/get",{
        id
    })
    .then(res => {return res.data.data})
    .catch(err => {throw err.response.data})
}

const getCustomers = async() => {
    return axios
    .get("/user/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err.response.data})
}



export {
    login, 
    login2,
    register,
    register2,
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
    modPurchase,
    getUserInfo,
    listUserReviews,
    deleteReview,
    getReview,
    modReview,
    getCustomers,
    setShippingTrackCode,
    userGetInfo,
    readAllChatMessages,
    getChat
};