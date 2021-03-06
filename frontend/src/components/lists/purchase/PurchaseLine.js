import React, { Fragment,useEffect,useState } from "react";
import img1 from "./../../../assets/detailsquare.jpg";
import {Link} from 'react-router-dom';
import './../../../css/default.css';

const PurchaseLine = ({item}) => {

    const [link,setLink] = useState ('');

    useEffect (()=> {
        setLink (`/shop-detail/${item.prod_id}`);
        
    } ,[]);

    return (
        <Fragment>
            <tr>
                <td><Link to={link}><img src={img1} alt="billetera" className="img-fluid"/></Link></td>
                <td><Link to={link}>{item.name} color {item.color} talle {item.size}</Link></td>
                <td>{item.stock}</td>
                <td>${item.price}</td>
                <td>${item.price*item.stock}</td>
            </tr>
        </Fragment>    
    );
};

export default PurchaseLine;