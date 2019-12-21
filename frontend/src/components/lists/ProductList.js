import React,{Fragment} from "react";
import {withRouter} from 'react-router-dom';
import ProductItem from "./ProductItem";

import './../../css/default.css';

const ProductList = ({list}) => {
    
    return (
        <Fragment>
            <div className="row products products-big" style={{'padding-left': '32px'}}>
                {list.map(item => (
                        <ProductItem 
                            key = {item.id}
                            item = {item}
                        />
                ))}
            </div>
        </Fragment>
    );
};

export default withRouter(ProductList);