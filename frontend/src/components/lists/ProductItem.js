import React, { Fragment,useEffect,useState } from "react";
import product1 from "./../../assets/product1.jpg";
import {Link} from 'react-router-dom';
import './../../css/default.css';

const ProductItem = ({item}) => {

    const [link,setLink] = useState ('');

    useEffect (()=> setLink (`/shop-detail/${item.id}`) ,[]);

    return (
        <Fragment>
        <div className="col-lg-4 col-md-6" style={{'padding-right': '30px'}}>
            <div className="product">
            <div className="image"><Link to={link}><img src={product1} alt="" className="img-fluid image1"/></Link></div>
                <div className="text">
                    <h3 className="h5"><Link to={link}>{item.name}</Link></h3>
                    <p className="price"> {(item.discount !== 0)?<del> ${item.price} </del> : null} ${item.price-((item.discount*item.price)/100)}</p> 
                </div>
            </div>
            <div className="ribbon-holder">            
            {(item.discount !== 0)? <div className="ribbon sale">-{item.discount}% OFF</div>: null}
            </div>  
        </div>
        </Fragment>    
    );
};

export default ProductItem;