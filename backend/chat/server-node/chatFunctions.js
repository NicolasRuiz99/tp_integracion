const axios = require ('axios');

const listAllMsg = async(id) => {
    let res = await axios.post("http://localhost:5000/chat/listallmsg",{
        id
    });
    return res.data.data;
}

const addMsg = async(msg,id_user,id_chat) => {
    let res = await axios.post("http://localhost:5000/message/add",{
        msg,
        id_user,
        id_chat
    });
    return res.data.data;
}

module.exports = {
    listAllMsg,
    addMsg
}