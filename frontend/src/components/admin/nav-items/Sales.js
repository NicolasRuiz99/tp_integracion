import React, { useState, useEffect, Fragment } from 'react'
import SaleList from './../list/sale/SaleList';
import Error from '../../messages/Error';
import Spinner from 'react-bootstrap/Spinner';
import {getSells} from '../utils/adminFunctions';

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
            console.log(res);
            res = res.filter(item => item.state !== 'cart')
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
                 return (sale.id.toString().includes(search));
             }));
        }else{
        setCopyList(list);
          }     
    },[search]);

    return (
        <Fragment>
        {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'fixed'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
            ) : ((error) ? 
                <Error texto="ha ocurrido un error" /> : <SaleList copyList={copyList} setSearch={setSearch}/>)}
        </Fragment>
    )
}