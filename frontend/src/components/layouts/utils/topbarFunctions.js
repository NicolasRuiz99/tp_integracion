import axios from 'axios';

const getUnreadMessages = id => {
    return axios
    .post("/chat/getUnreadMsg",{
        id
    })
    .then(res => {console.log(res.data);return res.data.data
    })
    .catch(err => {throw err.response.data})
}

export {getUnreadMessages};