import React, { Fragment,useEffect,useState } from "react";
import img1 from "./../../../../assets/detailsquare.jpg";
import {Link} from 'react-router-dom';
import './../../../../css/default.css';
import {capitalize} from './../../utils/adminFunctions';

const PurchaseLine = ({item}) => {

    const [link,setLink] = useState ('');

    useEffect (()=> {
        setLink (`/admin-page/product-detail/${item.prod_id}`);
    } ,[]);

    return (
        <Fragment>
            <tr>
                <td style={{textAlign:'center'}}><Link to={link}><img src={img1} alt="billetera" className="img-fluid"/></Link></td>
                <td style={{textAlign:'center'}}><Link to={link}>{capitalize(item.name)} color {item.color} talle {item.size}</Link></td>
                <td style={{textAlign:'center'}}>{item.stock}</td>
                <td style={{textAlign:'center'}}>${item.price}</td>
                <td style={{textAlign:'center'}}>${item.price*item.stock}</td>
            </tr>
        </Fragment>    
    );
};

export default PurchaseLine;