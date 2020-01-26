import React,{Fragment} from "react";
import {withRouter} from 'react-router-dom';
//Ésta lista tiene el boton close
import ProductItemCostumer from "./ProductItemCostumer";
import ProductItem from "./ProductItem";

import './../../css/default.css';

const ProductList = ({list, isEditable, handleModalOpen}) => {
    return (
        <Fragment>
            {(isEditable != null) ? (
                <div className="row products" style={{'padding-left': '32px'}}>
                {list.map(item => (
                        <ProductItemCostumer 
                            key = {item.id}
                            item = {item}
                            handleModalOpen={handleModalOpen}
                        />
                    ))}
            </div>
            ) : (
                <div className="row products products-big" style={{'padding-left': '32px'}}>
                {list.map(item => (
                        <ProductItem 
                            key = {item.id}
                            item = {item}
                        />
                ))}
            </div>
            )}
            
        </Fragment>
    );
};

export default withRouter(ProductList);