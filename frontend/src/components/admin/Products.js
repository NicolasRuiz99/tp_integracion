import React, { useState, useEffect, Fragment } from 'react'
import ProductList from './list/product/ProductList';
import {getProducts} from './../pages/shop/utils/shopFunctions';
import Error from './../messages/Error';


export default function Products() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');

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
 
    //UseEffect de busqueda
    useEffect( () => {
        if(search !== '') {
            setCopyList(list.filter(product => {
                return (product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()));
            }));
       }else{
            setCopyList(list);
        }
        //setCurrentPage(1);       
    },[search]);

    return (
        <Fragment>
        {(error) ? <Error texto="ha ocurrido un error" /> : <ProductList copyList={copyList} setSearch={setSearch} />}
        
        </Fragment>
    )
}
