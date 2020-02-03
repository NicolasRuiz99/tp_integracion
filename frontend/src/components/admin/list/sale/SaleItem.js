import React, { Fragment,useEffect,useState } from "react";
//import product1 from "./../../../assets/product1.jpg";
import {Link} from 'react-router-dom';
import './../../../../css/default.css';
import {capitalize} from './../../utils/adminFunctions';
import moment from 'moment';

const SaleItem = ({item}) => {

    const [link,setLink] = useState ('');
    const [estado,setEstado] = useState ('');
    const [clase,setClase] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');

    useEffect (()=> {
        setLink (`/admin-page/sale-detail/${item.id}`);
        switch (item.state) {
            case 'success':
                setEstado ('exitosa')
                setClase ('badge badge-success')
                break;
            case 'pending': 
                setEstado ('en proceso')
                setClase ('badge badge-info')
                break;
            case 'pending-pay': 
                setEstado ('pendiente de pago')
                setClase ('badge badge-warning')
                break;
            case 'cancelled': 
                setEstado ('cancelada')
                setClase ('badge badge-danger')
                break;
        }
    } ,[]);

 

    return (
        <Fragment>
            <tr>
                {/* <td><Link to={link}><img src={product1} title={capitalize(item.name)} className="img-fluid" /></Link></td> */}
                <td style={{textAlign:'center'}}>{item.id}</td>
                <td style={{textAlign:'center'}}>{date}</td>
                <td style={{textAlign:'center'}}>$ {item.price}</td>
                <td style={{textAlign:'center'}}><span className={clase} style={{color:"white"}}>{estado}</span></td>
                <td style={{textAlign:'center'}}>
                    <Link to={link} className="btn btn-outlined btn-sm" >Ver</Link>
                </td>
            </tr>
        </Fragment>    
    );
};

export default SaleItem;