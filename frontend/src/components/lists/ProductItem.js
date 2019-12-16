import React, { Fragment } from "react";
import product1 from "./../../assets/product1.jpg";
import {Link} from 'react-router-dom';
import './../../css/default.css';

const ProductItem = ({item}) => {
    return (
        <Fragment>
        <div className="col-lg-4 col-md-6">
            <div className="product">
            <div className="image"><Link to="/shop-detail"><img src={product1} alt="" className="img-fluid image1"/></Link></div>
                <div className="text">
                    <h3 className="h5"><Link to="/shop-detail">{item.name}</Link></h3>
                    <p className="price"> {(item.discount != 0)?<del> ${item.price} </del> : null} ${item.price-((item.discount*item.price)/100)}</p> 
                </div>
            </div>
            <div className="ribbon-holder"></div>   
            <div className="ribbon sale">LIQUIDACION</div>
            <div className="ribbon new">NUEVA</div>
        </div>
        </Fragment>    
    );
};

export default ProductItem;