import React, { Fragment,useEffect,useState } from "react";
import img1 from "./../../assets/detailsquare.jpg";
import {Link} from 'react-router-dom';
import './../../css/default.css';
import moment from 'moment';

const PurchaseLine = ({item}) => {

    const [link,setLink] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');
    

    useEffect (()=> {
        setLink (`/shop-detail/${item.prod_id}`);
        
    } ,[]);

    return (
        <Fragment>
            <tr>
                <td><Link to={link}><img src={img1} alt="billetera" className="img-fluid"/></Link></td>
                <td><Link to={link}>{item.name} color {item.color}</Link></td>
                <td>{item.stock}</td>
                <td>${item.purch_price}</td>
                <td>${item.purch_price*item.stock}</td>
            </tr>
        </Fragment>    
    );
};

export default PurchaseLine;