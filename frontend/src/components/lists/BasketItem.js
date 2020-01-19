import React, { Fragment,useEffect,useState } from "react";
import img1 from "./../../assets/detailsquare.jpg";
import {Link} from 'react-router-dom';
import './../../css/default.css';

const BasketItem = ({item}) => {

    const [link,setLink] = useState ('');
    const descuento = (item.discount*item.price/100);

    useEffect (()=> {
        setLink (`/shop-detail/${item.prod_id}`);
    } ,[]);

    return (
        <Fragment>
            <tr>
                <td><Link to={link}><img src={img1} alt="zapatos" className="img-fluid" /></Link></td>
                <td><Link to={link}>{item.name} color {item.color} talle {item.size}</Link></td>
                <td>{item.stock}</td>
                <td>${item.price}</td>
                <td>${descuento}</td>
                <td>${item.price - descuento}</td>
                <td><Link to="#"><i className="fa fa-trash-o"></i></Link></td>
            </tr>
        </Fragment>    
    );
};

export default BasketItem;