import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function CustomerItem({item}) {
    const [link,setLink] = useState ('');

    useEffect(() => {
        setLink (`/admin-page/customer-detail/${item.id}`);
    }, []);

    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'center'}}>{(item.e_mail) === null ? (
                <span className='badge badge-dark' style={{color:"white"}}>Sin datos</span>) : item.e_mail}</td>
            <td style={{textAlign:'center'}}>{(item.psw === null) ? (
                <span className='badge badge-dark' style={{color:"white"}}>Sin datos</span>) : item.psw}</td>
            <td style={{textAlign:'center'}}>
                <Link to={link} className="btn btn-outlined btn-sm" >Ver</Link>
            </td>
            </tr>
        </Fragment>
    )
}
