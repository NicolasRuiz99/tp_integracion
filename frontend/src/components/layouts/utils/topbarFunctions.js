import axios from 'axios';

const getUnreadMessages = id => {
    return axios
    .post("/chat/getUnreadMsg",{
        id
    })
    .then(res => {return res.data})
    .catch(err => {throw err.response.data})
}

export {getUnreadMessages};