import React, { useState, useEffect, Fragment } from 'react'
import ProductList from './list/product/ProductList';
import {getProducts} from './../pages/shop/utils/shopFunctions';
import Error from './../messages/Error';


export default function Products() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);

    useEffect(() => {
        getProducts()
        .then(res => {
            console.log(res);
            setList(res);
            setCopyList(res);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, []);
 

    return (
        <Fragment>
        {(error) ? <Error texto="ha ocurrido un error" /> : <ProductList copyList={copyList} />}
        
        </Fragment>
    )
}
