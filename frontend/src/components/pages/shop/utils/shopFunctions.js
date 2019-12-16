import axios from 'axios';

const getProducts = () => {
    return axios
    .get("product/listall")
    .then(res => {
        return res.data.results
    })
    .catch(err => {throw err})
}

export {getProducts};