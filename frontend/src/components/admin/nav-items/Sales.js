import React, { useState, useEffect, Fragment } from 'react'
import SaleList from './../list/sale/SaleList';
import Error from '../../messages/Error';
import {getSells} from '../utils/adminFunctions';
import LoadingDark from '../../messages/LoadingDark';

export default function Sales() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        getSells()
        .then(res => {
            setList(res);
            setCopyList(res);
            setLoading(false);
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
             setCopyList(list.filter(sale => {
                 return (sale.id.toString().includes(search) || sale.price.toString().includes(search));
             }));
        }else{
        setCopyList(list);
          }     
    },[search]);

    return (
        <Fragment>
        {(loading) ? (
                <LoadingDark/>
            ) : ((error) ? 
                <Error texto="ha ocurrido un error" /> : <SaleList copyList={copyList} setSearch={setSearch} list={list} />)}
        </Fragment>
    )
}