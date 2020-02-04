import React, { useState, useEffect, Fragment } from 'react'
import CustomerList from './../list/customer/CustomerList';
import {getCustomers} from './../../pages/customer/utils/CustomerFunctions';
import Error from './../../messages/Error';
import Spinner from 'react-bootstrap/Spinner';

export default function Customers() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        getCustomers()
        .then(res => {
            console.log(res);
            res = res.filter(item => item.id_role !== 1 );
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
            setCopyList(list.filter(customer => {
                return (customer.name.toLowerCase().includes(search.toLowerCase()) || customer.surname.toLowerCase().includes(search.toLowerCase()));
            }));
       }else{
            setCopyList(list);
        }
        //setCurrentPage(1);       
    },[search]);

    return (
        <Fragment>
            {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'fixed'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status"  />
                </div> 
            ) : ((error) ? 
                <Error texto="ha ocurrido un error" /> : <CustomerList copyList={copyList} setSearch={setSearch} />)}
        </Fragment>
    )
}
